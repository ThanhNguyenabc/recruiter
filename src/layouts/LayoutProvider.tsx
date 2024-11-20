"use client";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import NoHeaderLayout from "./NoHeaderLayout";

const Layouts = {
  default: NoHeaderLayout,
};

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  const Layout =
    Layouts[pathName as keyof typeof Layouts] || Layouts["default"];
  return <Layout>{children}</Layout>;
};

export default LayoutProvider;
