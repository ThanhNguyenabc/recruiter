import React, { PropsWithChildren } from "react";
import Flex from "../flex";
import Container from "../container";
import { cn } from "@nextui-org/react";

const Hero = ({
  children,
  className,
  hasBackground = false,
  bgClassName,
  ...other
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  hasBackground?: boolean;
  bgClassName?: string;
}) => {
  const cmp = (
    <Container>
      <Flex
        className={cn("w-full justify-center items-center py-10 md:py-20", className)}
        {...other}
      >
        {children}
      </Flex>
    </Container>
  );

  if (hasBackground) {
    return <div className={cn("w-full", bgClassName)}>{cmp}</div>;
  }

  return cmp;
};

export default Hero;
