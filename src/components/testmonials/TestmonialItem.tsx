import React from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { Star } from "@/assets/icons";

export type Testmonial = {
  content: string;
  name: string;
  role: string;
  star: number;
};

const TestmonialItem = ({ content, name, role, star }: Testmonial) => {
  return (
    <Flex className="flex-col gap-6 md:gap-8 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <Flex className="gap-2">
        {Array.from({ length: star }).map((_, i) => {
          return (
            <Star key={i} width={24} height={24} className="text-primary" />
          );
        })}
      </Flex>
      <Text>{content}</Text>
      <Flex className="gap-4">
        <Text className="text-lg-bold text-success">{name}</Text>
        <Text className=" text-lg-medium text-secondary">{role}</Text>
      </Flex>
    </Flex>
  );
};

export default TestmonialItem;
