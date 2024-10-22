import { cn } from "@nextui-org/react";
import React from "react";

type FlexProps = {
  className?: string;
  children: React.ReactNode | React.ReactElement;
};

const Flex = ({ children, className }: FlexProps) => {
  return <div className={cn("flex", className)}>{children}</div>;
};

export default Flex;
