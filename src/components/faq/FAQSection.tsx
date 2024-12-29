import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import QuestionItem from "./QuestionItem";
import Flex from "../_common/flex";

const Questions = [
  {
    question: "What is Arkham Talent?",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
  {
    question: "What positions do we fill?",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
  {
    question: "What is Arkham Talent?",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
  {
    question: "What is your candidate search process??",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
];

const FAQSection = () => {
  return (
    <Hero className="gap-8 md:gap-10" id="faq-section">
      <Text type="h2" className="heading-2">
        MOST ASK QUESTIONS
      </Text>
      <Flex className="w-full flex-col">
        {Questions.map((item) => (
          <QuestionItem key={item.question} {...item} />
        ))}
      </Flex>
    </Hero>
  );
};

export default FAQSection;
