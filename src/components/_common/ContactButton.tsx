"use client";
import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/utils/routes";

const ContactButton = () => {
  const router = useRouter();
  const gotoContactPage = () => {
    router.push(AppRoutes.CONTACT);
  };
  return (
    <Button color="primary" onPress={gotoContactPage}>
      Contact us
    </Button>
  );
};

export default ContactButton;
