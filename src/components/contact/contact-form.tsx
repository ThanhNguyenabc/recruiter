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
// @ts-nocheck

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

const ContactForm = ({
  children,
  type = 0,
}: PropsWithChildren & { type?: number }) => {
  const [userType, setUserType] = useState(type);
  const { data, isLoading, fetchData } = useFetch("/api/submit-form", "POST");
  const [message, setShowMessage] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors = {} } = {},
  } = useForm({
    resolver: zodResolver(userType == 0 ? ClientFormSchema : CandidateSchema),
  });

  useEffect(() => {
    if (data && !isLoading) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [data, isLoading]);
  const submitForm = async (data: FieldValues) => {
    console.log(data);
    const requestData: { [key: string]: unknown } = {
      contactType: users[userType].id,
      ...data,
    };
    await fetchData({
      data: requestData,
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

      {message && (
        <Flex className=" font-semibold text-lg text-green-600">
          We have received your data. Thanks for submitting
        </Flex>
      )}

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex w-full flex-col gap-8"
      >
        <Select
          label="Who are you ?"
          required
          defaultSelectedKeys={userType.toString()}
          onSelectionChange={(key) => {
            setUserType(Number(key.currentKey));
          }}
        >
          {users.map((item, index) => (
            <SelectItem key={index}>{item.text}</SelectItem>
          ))}
        </Select>
        {users[userType].id == "client" ? (
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

        {users[userType].id == "candidate" && (
          <Flex className="flex-row gap-4 items-center">
            <Text className="flex-1">Your resume:</Text>
            <Input
              {...register("resume")}
              {...getError("resume")}
              className="flex-1"
              placeholder="Resume"
              type="file"
              accept=".doc,.pdf,.docx"
            />
          </Flex>
        )}

        <Button responsive type="submit" color="primary" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
