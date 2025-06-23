"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Button from "../_common/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertStringToCurrency, formatPhoneNUmber } from "@/utils/strings";
import { FieldValues, useForm } from "react-hook-form";
import useFetch from "@/hooks/useFetch";
import { useToast } from "../_common/toast/Toast";
import { SUCCESS_MESSAGE } from "@/utils/constants";
const users = [
  {
    id: "client",
    text: "Client",
  },
  {
    id: "candidate",
    text: "Candidate",
  },
];

const ClientFormSchema = z.object({
  jobTitle: z.string().trim().min(5, {
    message: "Job Title is at least 5 characters",
  }),
  company: z.string().trim().min(8, {
    message: "Company is at least 10 characters",
  }),
  roleHiring: z.string().trim().min(5, {
    message: "Role Hiring is at least 5 characters",
  }),
  salary: z.string().min(2, {
    message: "Salary is at least 2 numbers",
  }),
});

const CandidateSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Your name is at least 3 characters",
  }),
  location: z.string().trim().min(5, {
    message: "Company is at least 5 charactesr",
  }),
  roleSeeking: z.string().trim().min(5, {
    message: "Role Hiring is at least 5  characters",
  }),
  salary: z.string().min(2, {
    message: "Salary is at least 2 numbers",
  }),
  phone: z.string().min(7, {
    message: "Phone number is at least 7 numbers",
  }),
  email: z.string().email("This is not a valid email."),
  resume: z.any().refine((files) => files?.length == 1, "File is required."),
});
const MAXIMUM_UPLOAD_SIZE = 10 * 1024 * 1024; // 10 MB

const ContactForm = ({
  children,
  type = 0,
}: PropsWithChildren & { type?: number }) => {
  const [userType, setUserType] = useState(type);
  const { data, isLoading, fetchData } = useFetch("/api/submit-form", "POST");
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors = {} } = {},
  } = useForm({
    resolver: zodResolver(userType == 0 ? ClientFormSchema : CandidateSchema),
  });

  useEffect(() => {
    if (data && !isLoading) {
      showToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
    }
  }, [data, isLoading, showToast]);

  const submitForm = async (data: FieldValues) => {
    const requestData: { [key: string]: unknown } = {
      contactType: users[userType].id,
      ...data,
    };

    const uploadFile = new FormData();
    uploadFile.append("file", data.resume[0]);

    const fileResponse = await fetch("/api/upload-file", {
      method: "POST",
      body: uploadFile,
    }).then((res) => res.json());

    await fetchData({
      data: { ...requestData, resume_link: fileResponse?.[0]?.url || "" },
    });
  };

  const getError = (field: string) => {
    if (!errors[field])
      return {
        isInvalid: false,
        errorMessage: "",
      };
    return {
      isInvalid: true,
      errorMessage: (errors[field]?.["message"] as string) || "",
    };
  };

  const formatSalary = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = convertStringToCurrency(event.target.value);
    setValue("salary", newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const formatPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = formatPhoneNUmber(event.target.value);
    setValue("phone", newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <Flex className="flex-col w-full items-center gap-10 max-w-screen-sm self-center">
      {children}

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex w-full flex-col gap-8"
      >
        <Select
          label="Who are you ?"
          required
          defaultSelectedKeys={userType.toString()}
          onSelectionChange={(key) => {
            if (key.currentKey !== userType.toString())
              setUserType(Number(key.currentKey));
          }}
        >
          {users.map((item, index) => (
            <SelectItem key={index}>{item.text}</SelectItem>
          ))}
        </Select>
        {users[userType]?.id == "client" ? (
          <>
            <Input
              {...register("jobTitle")}
              {...getError("jobTitle")}
              placeholder="Job title"
            />

            <Input
              {...register("company")}
              {...getError("company")}
              placeholder="Company"
            />
            <Input
              {...register("roleHiring")}
              {...getError("roleHiring")}
              placeholder="Role Your're hiring for"
            />
          </>
        ) : (
          <>
            <Input
              {...register("name")}
              {...getError("name")}
              placeholder="Name"
            />

            <Flex className="flex-col gap-8 md:flex-row">
              <Input
                {...register("email")}
                {...getError("email")}
                placeholder="Email"
              />
              <Input
                {...register("phone")}
                {...getError("phone")}
                placeholder="Phone number"
                value={getValues("phone")}
                onChange={formatPhone}
              />
            </Flex>
            <Flex className="flex-col gap-8 md:flex-row">
              <Input
                {...register("location")}
                {...getError("location")}
                placeholder="Location"
              />
              <Input
                {...register("roleSeeking")}
                {...getError("roleSeeking")}
                placeholder="Role you’re seeking"
              />
            </Flex>
          </>
        )}
        <Input
          {...register("salary")}
          {...getError("salary")}
          endContent={<span className="font-semibold">$</span>}
          placeholder="Salary"
          value={getValues("salary")}
          onChange={formatSalary}
        />

        {users[userType]?.id == "candidate" && (
          <Flex className="flex-row gap-4 items-center">
            <Text className="flex-1">Your resume:</Text>
            <Input
              {...register("resume")}
              {...getError("resume")}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  const fileSize = files[0].size;

                  if (fileSize > MAXIMUM_UPLOAD_SIZE) {
                    console.log("File size exceeds 10 MB");
                    setError("resume", {
                      type: "manual",
                      message: "File size should be less than 10 MB.",
                    });
                    return;
                  }
                  clearErrors("resume");
                }
              }}
              className="flex-1"
              placeholder="Resume"
              type="file"
              accept=".doc,.pdf,.docx"
            />
          </Flex>
        )}

        <Button
          responsive
          type="submit"
          color="primary"
          className=" w-fit"
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
