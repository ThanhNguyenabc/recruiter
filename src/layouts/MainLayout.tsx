import Flex from "@/components/_common/flex";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <Header />
      <Flex className="min-h-screen flex-col justify-between mb-10 w-full">
        {children}
      </Flex>
      <Footer />
    </NextUIProvider>
  );
};

export default MainLayout;
