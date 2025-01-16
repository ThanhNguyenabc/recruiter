import Button from "@/components/_common/button";
import Card from "@/components/_common/card";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import React from "react";

const HOW_WORKS = [
  {
    title: "Wider Talent Pool",
    subTitle:
      "Who cares about culture fit or qualifications? A recruiter will send anyone who sort of fits the bill. Close enough, right?",
  },
  {
    title: "Industry Expertise",
    subTitle:
      "Why waste time reviewing resumes and interviewing candidates? Just let a recruiter throw someone at you and hope they can spell the job title.",
  },
  {
    title: "Saves Time",
    subTitle:
      "We handle the time-consuming tasks like sourcing, screening, and interviews, allowing your internal team to focus on what matters most to your business.",
  },
  {
    title: "Better Hires",
    subTitle:
      "We thoroughly vet candidates, ensuring they meet both skill and cultural fit requirements, reducing the likelihood of a bad hire and its associated costs.",
  },
  {
    title: "Market Insights",
    subTitle:
      "We provide up-to-date data on compensation trends, industry standards, and talent availability, helping your company stay competitive in attracting and retaining top talent.",
  },
  {
    title: "Cost-Effective",
    subTitle:
      "While there’s a cost, we help reduce turnover, minimize hiring delays, and ensure better hiring decisions, ultimately saving money and improving team performance.",
  },
];
const HowShouldWork = () => {
  return (
    <Hero bgClassName="bg-success" className="gap-4 md:gap-10 lg:gap-20">
      <Text type="h2" className="heading-2 text-white text-center">
        WHY YOU DEFINITELY SHOULD WORK WITH A{" "}
        <span className="text-primary">ARKHAM TALENT</span>?
      </Text>
      <Flex className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {HOW_WORKS.map((item) => (
          <Card key={item.title} className="flex-col gap-4 bg-white">
            <Text type="h3" className="heading-3">
              {item.title.toUpperCase()}
            </Text>
            <Text className="text-secondary text-lg-medium">
              {item.subTitle}
            </Text>
          </Card>
        ))}
      </Flex>

      <Flex className="flex-col gap-4 items-center self-center  text-center lg:max-w-[586px]">
        <Text className="text-lg-medium text-grey">
          {`Don't take the gamble with a wrong hire. We take the guesswork out of
          recruiting and finding ready candidates to make an impact.`}
        </Text>
        <Link href={AppRoutes.CONTACT}>
          <Button color="primary">Contact us</Button>
        </Link>
      </Flex>
    </Hero>
  );
};

export default HowShouldWork;
