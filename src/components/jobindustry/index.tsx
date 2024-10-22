import React from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { Cyber, Fintech, Healthtech } from "@/assets/images";
import Image from "next/image";

const Images = [
  {
    title: "Fintech",
    image: Fintech,
  },
  {
    title: "Healthtech",
    image: Healthtech,
  },
  { title: "Cybersecurity", image: Cyber },
];

const JobsIndustry = () => {
  return (
    <Flex className="flex-col w-full gap-10 items-center">
      <Text type="h3" className="heading-md">
        Jobs I Tend To Work on
      </Text>
      <Flex className="gap-4 w-full justify-evenly">
        {Images?.map((item) => (
          <Flex key={item.title} className="flex-col gap-4 items-center">
            <Image alt={item.image} src={item.image} width={200} height={200} />
            <Text className=" font-semibold">{item.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default JobsIndustry;
