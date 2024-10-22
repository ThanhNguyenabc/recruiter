import React, { PropsWithChildren } from "react";
import Flex from "../flex";

const Hero = ({
  children,
  className,
  ...other
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Flex className={className} {...other}>
      {children}
    </Flex>
  );
};

export default Hero;
