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
    title: "Perfect Matches Are Overrated",
    subTitle:
      "Who cares about culture fit or qualifications? A recruiter will send anyone who sort of fits the bill. Close enough, right?",
  },
  {
    title: "Stress-Free Hiring",
    subTitle:
      "Why waste time reviewing resumes and interviewing candidates? Just let a recruiter throw someone at you and hope they can spell the job title.",
  },
  {
    title: "Hiring the Wrong Person Is Half the Fun",
    subTitle:
      "Skills, experience—who needs them? If they show up, that’s a win. If not, blame the recruiter!",
  },
  {
    title: "Paying for Convenience",
    subTitle:
      "Who cares about culture fit or qualifications? A recruiter will send anyone who sort of fits the bill. Close enough, right?",
  },
  {
    title: "Who Cares About Your Reputation?",
    subTitle:
      "Your company's image? Let a recruiter send over someone who hasn't even Googled you. It’s not like it matters anyway.",
  },
  {
    title: "Regret Is Just Part of the Journey",
    subTitle:
      "Hiring mistakes? That’s why you have a recruiter—to give you someone to blame when it all goes wrong.",
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
          Want to outsource your hiring process to a recruitment agency and
          experience the thrill of uncertainty? Contact us now to get started!
        </Text>
        <Link href={AppRoutes.CONTACT}>
          <Button color="primary">Contact us</Button>
        </Link>
      </Flex>
    </Hero>
  );
};

export default HowShouldWork;
