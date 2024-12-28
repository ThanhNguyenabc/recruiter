import Flex from "@/components/_common/flex";
import Footer from "@/components/footer";
import CTAFooter from "@/components/footer/CTAFooter";
import Header from "@/components/header";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <Header />
      <Flex className="flex-col justify-between mt-[70px] mb-10 w-full">
        {children}
      </Flex>
      <CTAFooter />
      <Footer />
    </NextUIProvider>
  );
};

export default MainLayout;
