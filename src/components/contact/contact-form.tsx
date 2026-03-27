"use client";

import React, {
  ChangeEvent,
  PropsWithChildren,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Button from "../_common/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatPhoneNUmber } from "@/utils/strings";
import { FieldValues, useForm } from "react-hook-form";
import useFetch from "@/hooks/useFetch";
import { useToast } from "../_common/toast/Toast";
import { SUCCESS_MESSAGE } from "@/utils/constants";

const CONTACT_TYPES = [
  { id: "client", label: "Client" },
  { id: "candidate", label: "Candidate" },
] as const;

type ContactType = (typeof CONTACT_TYPES)[number]["id"];

const CommonFields = {
  fullName: z
    .string()
    .trim()
    .min(3, {
      message: "Full name must be at least 3 characters",
    })
    .refine((username) => {
      if (!/^[a-zA-Z0-9._]{3,}$/.test(username)) return true;
      return false;
    }, "Please enter a realistic name (e.g., John Doe)"),

  phone: z.string().min(7, {
    message: "Phone number must be at least 7 digits",
  }),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .refine(
      (val) => {
        const localPart = val.split("@")[0];
        return !/^[A-Z]{3,}/.test(localPart) && !/(.)\1\1\1/.test(localPart);
      },
      {
        message: "please use a normal address",
      },
    ),
};

const ClientFormSchema = z.object({
  ...CommonFields,
  company: z.string().trim().min(2, {
    message: "Company name is required",
  }),
});

const CandidateSchema = z.object({
  ...CommonFields,
  resume: z
    .any()
    .refine((files) => files?.length === 1, "Resume file is required."),
});

const MAXIMUM_UPLOAD_SIZE = 10 * 1024 * 1024; // 10 MB

const ContactForm = ({
  children,
  type = 0,
}: PropsWithChildren & { type?: number }) => {
  const [activeType, setActiveType] = useState<ContactType>(
    CONTACT_TYPES[type]?.id || "client",
  );
  const { data, isLoading, fetchData, error } = useFetch(
    "/api/submit-form",
    "POST",
  );
  const { showToast } = useToast();

  const currentSchema = useMemo(
    () => (activeType === "client" ? ClientFormSchema : CandidateSchema),
    [activeType],
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(currentSchema),
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    if (data && !isLoading && !error) {
      showToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
      reset();
    }
    if (error && !isLoading) {
      showToast({
        message: error,
        type: "error",
      });
    }
  }, [data, isLoading, showToast, reset, error]);

  const handleFormSubmit = async (formData: FieldValues) => {
    try {
      const payload: Record<string, any> = {
        contactType: activeType,
        ...formData,
        name: formData.fullName, // Map back to name for backend compatibility
      };

      if (activeType === "candidate" && formData.resume?.[0]) {
        const fileData = new FormData();
        fileData.append("file", formData.resume[0]);

        const uploadResponse = await fetch("/api/upload-file", {
          method: "POST",
          body: fileData,
        }).then((res) => res.json());

        payload.resume_link = uploadResponse?.[0]?.url || "";
      }

      await fetchData({ data: payload });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const getFieldState = (fieldName: string) => {
    const error = errors[fieldName];
    return {
      isInvalid: !!error,
      errorMessage: error?.message as string,
    };
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNUmber(event.target.value);
    setValue("phone", formatted, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <Flex className="flex-col w-full items-center gap-10 max-w-screen-sm self-center">
      {children}

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-full flex-col gap-8"
      >
        <Select
          placeholder="I am a..."
          selectedKeys={[activeType]}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0] as ContactType;
            if (selected) setActiveType(selected);
          }}
        >
          {CONTACT_TYPES.map((typeOption) => (
            <SelectItem key={typeOption.id} value={typeOption.id}>
              {typeOption.label}
            </SelectItem>
          ))}
        </Select>

        {activeType === "client" && (
          <Input
            {...register("company")}
            {...getFieldState("company")}
            placeholder="Enter your company name"
          />
        )}

        <Input
          {...register("fullName")}
          {...getFieldState("fullName")}
          placeholder="Enter your full name"
        />

        <Flex className="flex-col gap-8 md:flex-row">
          <Input
            {...register("email")}
            {...getFieldState("email")}
            placeholder="example@domain.com"
          />
          <Input
            {...register("phone")}
            {...getFieldState("phone")}
            placeholder="Your phone number"
            value={phoneValue || ""}
            onChange={handlePhoneChange}
          />
        </Flex>

        {activeType === "candidate" && (
          <Flex className="flex-col gap-2">
            <Text className="text-sm font-medium">
              Upload Resume (PDF/DOC):
            </Text>
            <Input
              {...register("resume")}
              {...getFieldState("resume")}
              type="file"
              accept=".doc,.pdf,.docx"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (file.size > MAXIMUM_UPLOAD_SIZE) {
                    setError("resume", {
                      type: "manual",
                      message: "File size must be less than 10MB",
                    });
                  } else {
                    clearErrors("resume");
                  }
                }
              }}
            />
          </Flex>
        )}
        <Button
          responsive
          type="submit"
          color="primary"
          className="w-full md:w-fit px-12"
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
