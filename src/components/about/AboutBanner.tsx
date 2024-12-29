import React from "react";
import Flex from "../_common/flex";
import Hero from "../_common/hero";
import Text from "../_common/text";
import { Chip } from "@nextui-org/react";

const BannerChips = [
  "No fake smiles",
  "No forced professionalism",
  "No masks",
  "No pretending",
];

const AboutBanner = () => {
  return (
    <Hero className="gap-8 md:gap-10 lg:max-w-screen-md mx-auto">
      <Text
        type="h1"
        className="heading-2 whitespace-pre-line md:heading-1 text-center"
      >
        {`WE’RE NOT YOUR \nTYPICAL RECRUITING \nAGENCY. `}
      </Text>
      <Text className="text-xl-semibold text-center lg:max-w-screen-sm">
        At ARKHAM Ventures, we embrace quirks, flaws, and everything in between
        because that’s what makes us human.
      </Text>
      <Flex className="gap-4 flex-wrap">
        {BannerChips.map((item) => (
          <Chip
            key={item}
            className="border-black border bg-grey  py-3"
            classNames={{
              content: " text-md-bold",
            }}
          >
            {item}
          </Chip>
        ))}
      </Flex>
    </Hero>
  );
};

export default AboutBanner;
