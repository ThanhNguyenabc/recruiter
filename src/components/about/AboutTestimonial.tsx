import React from "react";
import Hero from "../_common/hero";
import CompanyInfo from "../company/CompanyInfo";
import Text from "../_common/text";
import Flex from "../_common/flex";
import { TestimonialData } from "@/utils/constants";
import TestmonialItem from "../testmonials/TestmonialItem";

const AboutTestimonial = () => {
  return (
    <Hero className="gap-12 md:gap-16">
      <Text type="h2" className="whitespace-pre-line heading-2 text-center">
        {`ACTUALLY GIVES A S***\nTHE CHUCK NORIS OR RECRUITMENT`}
      </Text>
      <Flex className=" flex-col md:flex-row gap-8">
        {TestimonialData.map((item) => (
          <TestmonialItem key={`${item.name}-${item.role}`} {...item} />
        ))}
      </Flex>
      <CompanyInfo />
    </Hero>
  );
};

export default AboutTestimonial;
