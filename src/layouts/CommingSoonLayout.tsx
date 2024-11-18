import Flex from "@/components/_common/flex";
import Footer from "@/components/footer";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const CommingSoonLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <Flex className="min-h-screen flex-col justify-between mb-10 w-full">
        {children}
      </Flex>
      <Footer />
    </NextUIProvider>
  );
};

export default CommingSoonLayout;
