import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Image from "next/image";
import Flex from "../_common/flex";

const TestimonialSection = () => {
  return (
    <Hero className="gap-10">
      <Text className=" text-success font-semibold text-[40px] leading-[48px] text-center">
        {`“Arktham Talent made the process enjoyable and fun which makes it a unique but a productive experience. They bring the 'people-person' touch on top of the technical chops that separates the 'ok' from the 'phenomenal'. They are a pleasure to work with and would be a valuable asset for any company or candidate.”`}
      </Text>
      <Flex className="flex-col gap-2 items-center">
        <Image width={64} height={64} src={"/images/logo-company.png"} alt="" />
        <Text className=" text-xl-semibold">Medtech Saas Company</Text>
        <Text className="heading-3">Sarah F</Text>
        <Text className=" text-secondary text-xl-semibold">
          Chief Growth Officer
        </Text>
      </Flex>
    </Hero>
  );
};

export default TestimonialSection;
