import { cn } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const Container = ({
  className,
  children,
  ...other
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={cn(
        "px-4 md:px-8 lg:px-10 container mx-auto max-w-screen-xl",
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Container;
