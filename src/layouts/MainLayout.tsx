import Container from "@/components/_common/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <Header />
      <Container className="min-h-screen justify-between my-10">{children}</Container>
      <Footer />
    </NextUIProvider>
  );
};

export default MainLayout;
