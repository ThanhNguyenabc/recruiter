import React from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";

const TestimonialData = [
  {
    content: "",
    cover: "",
  },
];
const Testimonials = () => {
  return (
    <Flex className="flex-col gap-5">
      <Text type="h3" className="heading-md">
        Testimonials
      </Text>
      {TestimonialData.map((item, index) => (
        <Flex key={index}>
          <Text>{item.cover}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Testimonials;
