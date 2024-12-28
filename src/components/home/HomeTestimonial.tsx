import React from "react";
import Hero from "../_common/hero";
import { TestimonialData } from "@/utils/constants";
import TestmonialItem from "../testmonials/TestmonialItem";
import Text from "../_common/text";
import Flex from "../_common/flex";
import Image from "next/image";
import { TestimonialImg } from "@/assets/images";
const Data = [TestimonialData[0], TestimonialData[1]];

const HomeTestimonial = () => {
  return (
    <Hero className="gap-12 md:gap-16">
      <Text type="h2" className="heading-2">
        TRUSTED BY 1,500+ HAPPY CLIENTS
      </Text>

      <Flex className="flex-col lg:flex-row gap-4 md:gap-6">
        <Flex key={"image"} className="min-w-[330px]">
          <Image
            width={300}
            height={300}
            className=" w-full h-full"
            src={TestimonialImg}
            alt="testimonial"
          />
        </Flex>
        {Data.map((item) => (
          <TestmonialItem key={`${item.name}-${item.role}`} {...item} />
        ))}
      </Flex>
    </Hero>
  );
};

export default HomeTestimonial;
