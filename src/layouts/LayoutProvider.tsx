"use client";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";
import { ToastProvider } from "@/components/_common/toast/Toast";

const Layouts = {
  default: MainLayout,
};

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  const Layout =
    Layouts[pathName as keyof typeof Layouts] || Layouts["default"];
  return <Layout>{<ToastProvider>{children}</ToastProvider>}</Layout>;
};

export default LayoutProvider;
