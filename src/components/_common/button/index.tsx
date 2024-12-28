import { ButtonProps, cn, Button as NButton } from "@nextui-org/react";
import React from "react";

interface Props extends ButtonProps {
  responsive?: boolean;
}

const Button = ({
  className,
  children,
  responsive = true,
  ...other
}: Props) => {
  return (
    <NButton
      {...other}
      className={cn(
        "text-lg-bold",
        responsive && " px-6 h-12 md:h-14 lg:text-lg",
        other.variant === "bordered" && " border-black",
        className
      )}
    >
      {children}
    </NButton>
  );
};

export default Button;
