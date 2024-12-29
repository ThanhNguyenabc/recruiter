"use client";

import Button from "@/components/_common/button";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import React from "react";

const ClientBanner = () => {
  const scrollToFAQ = () => {
    document.getElementById("faq-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Hero className="gap-8 lg:flex-row">
      <Flex className="flex-1 flex-col">
        <Text type="h1" className="heading-1 whitespace-pre-line">
          {`THE ARKHAM APPROACH—\nTOLD BY OUR CLIENTS`}
        </Text>
        <Text className="text-xl-semibold mt-6">
          We don’t sugarcoat anything. Learn how we work and see what our
          clients have to say.
        </Text>

        <Flex className="gap-4 mt-10 mb-20">
          <Link href={AppRoutes.CONTACT}>
            <Button color="primary">Contact us</Button>
          </Link>
          <Button variant="bordered" onClick={scrollToFAQ}>
            Most asked questions
          </Button>
        </Flex>
        <Text type="h3" className="heading-3">
          COMPANIES COUNT ON US
        </Text>
      </Flex>
      <Flex className="w-full flex-1 h-[500px] lg:h-[759px] bg-black rounded-2xl"></Flex>
    </Hero>
  );
};

export default ClientBanner;
