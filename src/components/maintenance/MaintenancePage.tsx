"use client";

import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import { ChangeEvent } from "react";

import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Button from "@/components/_common/button";
import { useToast } from "@/components/_common/toast/Toast";
import useFetch from "@/hooks/useFetch";
import { EMAIL, PHONE, SUCCESS_MESSAGE } from "@/utils/constants";

// US phone regex: (555) 123-4567 or 555-123-4567 or +1 555 123 4567 etc.
const US_PHONE_REGEX = /^\(\d{3}\) \d{3}-\d{4}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(US_PHONE_REGEX, {
    message: "Enter a valid phone number: (555) 123-4567",
  }),
  inquiry: z.string().trim(),
});

const MaintenancePage = () => {
  const { data, isLoading, fetchData } = useFetch(
    "/api/maintenance-contact",
    "POST",
  );
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (data && !isLoading) {
      showToast({ message: SUCCESS_MESSAGE, type: "success" });
      reset();
    }
  }, [data, isLoading, showToast, reset]);

  const onSubmit = async (values: FieldValues) => {
    await fetchData({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.inquiry,
      },
    });
  };

  const getError = (field: string) => {
    if (!errors[field]) return { isInvalid: false, errorMessage: "" };
    return {
      isInvalid: true,
      errorMessage: (errors[field]?.message as string) ?? "",
    };
  };

  // Formats digits as (555) 123-4567 on every keystroke
  const formatUSPhone = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setValue("phone", formatted, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <Flex className="flex-col items-center gap-10 w-full max-w-xl">
      {/* Logo */}
      <Image
        src="/images/logo.png"
        alt="Arkham Talent"
        width={180}
        height={48}
        priority
        className="object-contain"
      />

      {/* Headline & message */}
      <Flex className="flex-col gap-4 text-center">
        <Text type="h1" className="heading-2">
          We&apos;ll Be Back Soon
        </Text>
        <Text className="text-lg-medium text-secondary whitespace-pre-line leading-8">
          {`We're making some behind-the-scenes updates to bring you a better experience.\nOur website is temporarily offline, but our recruiting operations haven't slowed down.\n\nFor inquiries, please leave your contact and inquiry below.`}
        </Text>
      </Flex>

      {/* Contact info strip */}
      <Flex className="flex-row flex-wrap justify-center gap-6 text-sm font-medium">
        <a href={`mailto:${EMAIL}`} className="hover:underline">
          {EMAIL}
        </a>
        <span className="text-gray-300">|</span>
        <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hover:underline">
          {PHONE}
        </a>
      </Flex>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <Input
          {...register("name")}
          {...getError("name")}
          placeholder="Your name"
          label="Name"
          labelPlacement="outside"
        />

        <Flex className="flex-col gap-6 md:flex-row">
          <Input
            {...register("email")}
            {...getError("email")}
            placeholder="your@email.com"
            label="Email"
            labelPlacement="outside"
          />
          <Input
            {...register("phone")}
            {...getError("phone")}
            placeholder="(555) 000-0000"
            label="Phone"
            labelPlacement="outside"
            value={watch("phone") ?? ""}
            onChange={formatUSPhone}
          />
        </Flex>

        <Input
          {...register("inquiry")}
          {...getError("inquiry")}
          placeholder="Tell us how we can help…"
          label="Inquiry"
          labelPlacement="outside"
        />

        <Button
          type="submit"
          color="primary"
          className="w-fit self-center"
          isLoading={isLoading}
        >
          Send Message
        </Button>
      </form>
    </Flex>
  );
};

export default MaintenancePage;
