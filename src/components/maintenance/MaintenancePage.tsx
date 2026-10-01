"use client";

import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";

import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Button from "@/components/_common/button";
import { useToast } from "@/components/_common/toast/Toast";
import useFetch from "@/hooks/useFetch";
import { EMAIL, PHONE, SUCCESS_MESSAGE } from "@/utils/constants";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits" }),
  inquiry: z
    .string()
    .trim()
    .min(10, { message: "Inquiry must be at least 10 characters" }),
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
