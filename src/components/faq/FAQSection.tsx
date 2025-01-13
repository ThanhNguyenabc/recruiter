import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import QuestionItem from "./QuestionItem";
import Flex from "../_common/flex";
import { FAQQuestions } from "@/utils/constants";

const FAQSection = () => {
  return (
    <Hero className="gap-8 md:gap-10" id="faq-section">
      <Text type="h2" className="heading-2">
        MOST ASK QUESTIONS
      </Text>
      <Flex className="w-full flex-col">
        {FAQQuestions.map((item) => (
          <QuestionItem key={item.question} {...item} />
        ))}
      </Flex>
    </Hero>
  );
};

export default FAQSection;
