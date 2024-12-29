"use client";

import React, { useState } from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { IcCircle, IcPlus } from "@/assets/icons";
import { motion } from "framer-motion";
import { cn } from "@nextui-org/react";
type Question = {
  question: string;
  answer: string;
};

const QuestionItem = (question: Question) => {
  const [showDesc, setShowDesc] = useState(false);
  const onShowDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <Flex className="w-full flex-col py-6 gap-6 border-b-1 border-black">
      <Flex className="w-full justify-between items-center">
        <Text
          className={cn(
            "heading-4",
            showDesc ? "text-[#007DFC]" : "text-black"
          )}
        >
          {question.question.toUpperCase()}
        </Text>
        <button onClick={onShowDesc} className="p-2">
          {showDesc ? <IcCircle /> : <IcPlus />}
        </button>
      </Flex>
      {showDesc && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ ease: "linear", duration: 1.2 }}
        >
          <Text className="text-lg-medium">{question.answer}</Text>
        </motion.div>
      )}
    </Flex>
  );
};

export default React.memo(QuestionItem);
