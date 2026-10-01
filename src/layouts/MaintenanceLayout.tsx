import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const MaintenanceLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <div className="min-h-screen w-full flex items-center justify-center bg-grey px-4 py-12">
        {children}
      </div>
      <Footer />
    </NextUIProvider>
  );
};

export default MaintenanceLayout;
