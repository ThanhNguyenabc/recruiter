import React, { PropsWithChildren } from "react";
import Container from "../container";
import { cn } from "@nextui-org/react";
import FadeInView from "../FadeInView";

const Hero = ({
  hasBackground = false,
  bgClassName,
  ...otherProps
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  hasBackground?: boolean;
  bgClassName?: string;
}) => {
  const cmp = (
    <Container>
      <FadeInView {...otherProps} />
    </Container>
  );

  if (hasBackground || bgClassName) {
    return <div className={cn("w-full", bgClassName)}>{cmp}</div>;
  }

  return cmp;
};

export default Hero;
