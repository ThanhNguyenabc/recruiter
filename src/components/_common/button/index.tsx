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
        responsive && " h-12 md:h-14 lg:text-lg lg:h-16",
        other["color"] === "primary" && " text-white font-semibold",
        className
      )}
    >
      {children}
    </NButton>
  );
};

export default Button;
