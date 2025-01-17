import React from "react";
import Hero from "../_common/hero";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Card from "../_common/card";
import { IcLinkedin } from "@/assets/icons";

const CLIENT_INFO = [
  {
    title: "83%",
    subTitle: "prefer a clear hiring timeline.",
  },

  {
    title: "42",
    subTitle: "days to hire.",
  },
  {
    title: "76%",
    subTitle: "value diversity in companies.",
  },
];

export const TestimonialsData = [
  {
    comment: `“Shaun is a standout recruiter. From our first chat, he took a human-first approach, quickly identifying the perfect role and guiding me through every step. His dedication and support are unmatched. I highly recommend him!”`,
    name: "Katy DeWolfe Teresczenko",
    jobTitle: "Sales Director",
  },
  {
    comment: `“Shaun is an exceptional recruiter. Over a year after our first conversation, he remembered my career goals and reached out with the perfect role. His communication and focus on my needs were outstanding. Highly recommend him!”`,
    name: "Tony Mancuso",
    jobTitle: "Sales Director",
  },
  {
    comment: `Shaun took the time to understand my career goals, skills, and preferences, ensuring a seamless match with potential opportunities. His ability to create relationships on both sides of the recruitment process was above and beyond. He is trusting, collaborative and valuable, and I am grateful for this next career chapter through his partnership!`,
    name: "Theresa Snyder",
    jobTitle: "Strategic Accounts Director",
  },
];
const ClientInfo = (info: { title: string; subTitle: string }) => {
  return (
    <Flex className="flex-col text-success gap-2 flex-1 text-center">
      <Text className="heading-2">{info.title}</Text>
      <Text className="text-lg-semibold">{info.subTitle}</Text>
    </Flex>
  );
};

const JobBanner = () => {
  return (
    <Hero bgClassName="bg-success" className="gap-10 md:gap-20">
      <Flex className="w-full justify-between flex-col gap-12 md:flex-row lg:gap-14">
        <Text
          type="h1"
          className="heading-2 whitespace-pre-line flex-1 md:heading-1 text-white"
        >
          {`FIND YOUR \nNEXT ROLE`}
        </Text>
        <Flex className="flex-1 flex-col bg-primary rounded-[20px] p-8 gap-8 justify-between md:flex-row">
          {CLIENT_INFO.map((item) => (
            <ClientInfo key={item.title} {...item} />
          ))}
        </Flex>
      </Flex>
      <Flex className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {TestimonialsData.map((item) => {
          return (
            <Card
              key={item.name}
              className="border-white text-white gap-1 lg:h-[380px]"
            >
              <Text className=" flex-1">{item.comment}</Text>

              <Text className="heading-4">{item.name.toUpperCase()}</Text>
              <Text className="text-md-medium">{item.jobTitle}</Text>
              <IcLinkedin className=" text-white" />
            </Card>
          );
        })}
      </Flex>
    </Hero>
  );
};

export default JobBanner;
