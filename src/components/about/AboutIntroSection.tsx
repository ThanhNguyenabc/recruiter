import React from "react";
import Hero from "../_common/hero";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Image from "next/image";
import { AboutBannerImg } from "@/assets/images";

const AboutIntroSection = () => {
  return (
    <Hero
      bgClassName="bg-white"
      className=" flex-col gap-4 md:flex-row md:gap-10 lg:py-0 "
    >
      <Flex className="flex-1 flex-col lg:p-10">
        <Text type="h3" className="text-success whitespace-pre-line heading-2">
          {`ISN’T JUST TO FILL \nPOSITION—`}
        </Text>
        <Text type="h3" className="heading-2">
          IT’S TO CONNECT PEOPLE WITH ROLES WHERE THEY CAN BE THEMSELVES
        </Text>
        <Text className="text-secondary text-lg-medium whitespace-pre-line mt-4 md:mt-6">
          {`We get that life is messy and not everyone fits into the corporate
        mold. That’s why we focus on personality and culture fit, not just
        experience and skills.\n\nIf you’re tired of the same old recruiting B.S., you’re in the right place. Just show up as you are, and we’ll find the right spot for you.`}
        </Text>
      </Flex>
      <Flex className="flex-1 h-full w-full xl:h-[696px] xl:w-[584px]">
        <Image
          width={584}
          height={696}
          src={AboutBannerImg}
          quality={90}
          alt=""
          className="w-full xl:h-[696px] xl:w-[584px] aspect-[584/696]"
        />
      </Flex>
    </Hero>
  );
};

export default AboutIntroSection;
