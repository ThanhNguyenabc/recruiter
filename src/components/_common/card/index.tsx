import React, { PropsWithChildren } from "react";
import Flex from "../flex";
import { cn } from "@nextui-org/react";

const Card = ({
  className,
  children,
  ...other
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Flex
      className={cn("flex-col rounded-[20px] p-6  border border-black", className)}
      {...other}
    >
      {children}
    </Flex>
  );
};

export default Card;
