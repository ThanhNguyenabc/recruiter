"use client";

import Button from "@/components/_common/button";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import CompanyInfo from "@/components/company/CompanyInfo";
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ClientBanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play();
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const scrollToFAQ = () => {
    document.getElementById("faq-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
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
          <Button variant="bordered" onPress={scrollToFAQ}>
            Most asked questions
          </Button>
        </Flex>

        <CompanyInfo />
      </Flex>
      <Flex className="w-full flex-1 h-[500px] lg:h-[759px] bg-neutral-200 rounded-2xl">
        <video
          ref={videoRef}
          controls
          width={"100%"}
          src="/client-video.mp4"
          className=" w-full h-full aspect-square"
        />
      </Flex>
    </Hero>
  );
};

export default ClientBanner;
