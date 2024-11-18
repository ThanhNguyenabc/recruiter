"use client";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";
import CommingSoonLayout from "./CommingSoonLayout";

const Layouts = {
  default: MainLayout,
  "/comming-soon": CommingSoonLayout,
};

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  const Layout =
    Layouts[pathName as keyof typeof Layouts] || Layouts["default"];
  return <Layout>{children}</Layout>;
};

export default LayoutProvider;
