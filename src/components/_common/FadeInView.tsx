"use client";
import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import Flex from "./flex";
import { cn } from "@nextui-org/react";

const FadeInAnimtion = {
  initial: {
    y: 20,
    opacity: 0,
  },
  whileInView: { y: 0, opacity: 1 },
  viewport: {
    once: true,
    amount: 0.1,
  },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
  },
};

const FadeInView = ({
  children,
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div {...FadeInAnimtion}>
      <Flex
        className={cn(
          "w-full flex-col justify-center items-center py-10 md:py-20",
          className
        )}
        {...other}
      >
        {children}
      </Flex>
    </motion.div>
  );
};

export default FadeInView;
