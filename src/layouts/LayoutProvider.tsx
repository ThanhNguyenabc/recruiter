"use client";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";
import MaintenanceLayout from "./MaintenanceLayout";
import { ToastProvider } from "@/components/_common/toast/Toast";

// Set to true to put the site into maintenance mode.
// Revert to false when the site is back online.
const MAINTENANCE_MODE = true;

const Layouts = {
  default: MainLayout,
};

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  if (MAINTENANCE_MODE) {
    return (
      <MaintenanceLayout>
        <ToastProvider>{children}</ToastProvider>
      </MaintenanceLayout>
    );
  }

  const Layout =
    Layouts[pathName as keyof typeof Layouts] || Layouts["default"];
  return <Layout>{<ToastProvider>{children}</ToastProvider>}</Layout>;
};

export default LayoutProvider;
