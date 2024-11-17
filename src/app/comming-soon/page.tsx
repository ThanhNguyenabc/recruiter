"use client";
import { LogoImg } from "@/assets/images";
import Button from "@/components/_common/button";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import Image from "next/image";
import React from "react";

import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@nextui-org/react";
const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const CommingSoonPage = () => {
  const contactUs = () => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  };
  return (
    <>
      <Hero
        hasBackground
        bgClassName=" bg-[#181010]"
        className={cn(
          "min-h-screen flex flex-col gap-2 text-white",
          grotesque.className
        )}
      >
        <Image src={LogoImg} width={800} height={800} alt="" />
        <Text className="text-[40px] lg:text-[150px] font-semibold">
          Launching Soon!
        </Text>
        <Text
          type="p"
          className="text-[30px] text-white text-6xl lg:max-w-[1000px] text-center"
        >
          BUT! We’re open for business so if you’re a candidate or employer,
          click the button below and fill out the form
        </Text>
        <Button
          variant="solid"
          color="primary"
          onClick={contactUs}
          className=" w-[250px] h-[64px] font-semibold  md:min-w-[450px] md:min-h-[100px] mt-6 "
        >
          <span className="text-xl md:text-3xl">CONTACT US</span>
        </Button>
      </Hero>
      <Hero>
        <ContactForm />
      </Hero>
    </>
  );
};

export default CommingSoonPage;
