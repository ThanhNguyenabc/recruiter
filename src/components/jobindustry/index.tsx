import React from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { Cyber, Fintech, Healthtech } from "@/assets/images";
import Image from "next/image";
import Hero from "../_common/hero";

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
    <Hero
      hasBackground
      bgClassName="bg-neutral-100"
      className="flex-col w-full gap-10 items-center"
    >
      <Text type="h3" className="heading-md md:heading-lg">
        Job I Tend To Work On
      </Text>
      <Text className="self-center text-neutral-600 lg:max-w-screen-md">
        {`So, here we are. I’m ArKham, and yeah, I’ve been doing this recruiting thing long enough to know what real talent looks like—and where to find it. Whether you’re looking for your next role or the perfect person to fill one, I’ve got you covered. Nice to meet you, by the way. And yeah, I’m not as good looking as the guy in the picture above me.  I would love to work with him though.`}
      </Text>

      <Flex className="gap-4 w-full flex-col md:flex-row justify-evenly">
        {Images?.map((item) => (
          <Flex key={item.title} className="flex-col gap-4 items-center">
            <Image alt={item.image} src={item.image} width={200} height={200} />
            <Text className=" font-semibold">{item.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Hero>
  );
};

export default JobsIndustry;
