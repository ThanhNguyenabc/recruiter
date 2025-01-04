"use client";

import React, {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  useEffect,
} from "react";
import Text from "../_common/text";
import Flex from "../_common/flex";
import Button from "../_common/button";
import TextArea from "../_common/TextArea";
import TextInput from "../_common/TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { formatPhoneNUmber, getError } from "@/utils/strings";
import useFetch from "@/hooks/useFetch";
import { SUCCESS_MESSAGE } from "@/utils/constants";
import { useToast } from "../_common/toast/Toast";

const FormSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Your name is at least 3 characters",
  }),
  email: z.string().email("This is not a valid email."),
  phone: z.string().min(7, {
    message: "Phone number is at least 7 numbers",
  }),
  message: z.string().default(""),
});

const JobApplyForm = forwardRef<
  HTMLFormElement,
  HTMLAttributes<HTMLFormElement>
>((props, ref) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors = {} } = {},
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const { data, isLoading, fetchData } = useFetch("/api/job-contact", "POST");
  const { showToast } = useToast();

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
      ...data,
    };
    await fetchData({
      data: requestData,
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
    <form
      onSubmit={handleSubmit(submitForm)}
      ref={ref}
      className="flex w-full flex-col gap-8 p-8 md:gap-10 md:p-10 rounded-2xl bg-white text-black"
      {...props}
    >
      <Text type="h3" className="heading-3">
        APPLY FOR JOB OPPORTUNITY
      </Text>
      <TextInput
        {...register("name")}
        {...getError("name", errors)}
        type="text"
        placeholder="Enter your name"
        label="Name"
      />
      <Flex className="flex-col md:flex-row w-full gap-8">
        <TextInput
          {...register("email")}
          {...getError("email", errors)}
          type="email"
          placeholder="yourname@example.com"
          label="Your email"
        />
        <TextInput
          {...register("phone")}
          {...getError("phone", errors)}
          type="text"
          placeholder="Phone number"
          label="Phone number"
          value={getValues("phone")}
          onChange={formatPhone}
        />
      </Flex>

      <TextArea
        label="Message"
        placeholder="Tell us why you're the best fit for this role"
      />
      <Button
        color="primary"
        isFitWidth
        type="submit"
        className="self-center"
        isLoading={isLoading}
      >
        Submit
      </Button>
    </form>
  );
});

JobApplyForm.displayName = "JobApplyForm";

export default JobApplyForm;
