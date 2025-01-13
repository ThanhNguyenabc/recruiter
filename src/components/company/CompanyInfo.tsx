"use client";

import React, { useRef } from "react";
import Flex from "../_common/flex";
import {
  Company1Img,
  Company2Img,
  Company3Img,
  Company4Img,
  Company5Img,
  Company6Img,
} from "@/assets/images";
import Image from "next/image";
import { motion } from "framer-motion";
import Text from "../_common/text";

const CompanyImages = [
  Company1Img,
  Company2Img,
  Company3Img,
  Company4Img,
  Company5Img,
  Company6Img,
];

const ImageItem = ({ url }: { url: string }) => {
  return (
    <Image
      width={150}
      height={40}
      draggable={false}
      className="w-auto h-10"
      src={url}
      alt=""
    />
  );
};

const CompanyInfo = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Flex className="w-full flex-col gap-4 md:flex-row md:gap-8">
      <Text className="heading-3 leading-6">Companies Trust Us</Text>
      <Flex ref={ref} className="w-full h-10 gap-8 overflow-hidden">
        <motion.div
          className="flex gap-10 flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {CompanyImages.map((item) => {
            return <ImageItem key={item} url={item} />;
          })}
          {CompanyImages.map((item) => {
            return <ImageItem key={item} url={item} />;
          })}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default CompanyInfo;
