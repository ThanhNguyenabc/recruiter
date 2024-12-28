"use client";

import React, { useRef } from "react";
import Flex from "../_common/flex";
import {
  CompanyIntroImg,
  Company1Img,
  Company2Img,
  Company3Img,
  Company4Img,
  Company5Img,
  Company6Img,
} from "@/assets/images";
import Image from "next/image";
import { motion } from "framer-motion";

const CompanyImages = [
  Company1Img,
  Company2Img,
  Company3Img,
  Company4Img,
  Company5Img,
  Company6Img,
];

const ImageItem = ({ index, url }: { index: number; url: string }) => {
  // useEffect(() => {
  //   animation.set({
  //     x: 0,
  //   });
  //   animation.start({});
  //   return () => animation.stop();
  // });
  return (
    <motion.div
      initial={{}}
      animate={{
        x: -200 * (index + 1),
      }}
      transition={{
        ease: "linear",

        duration: 4 * (index + 1),
        repeatDelay: 1,
      }}
    >
      <Image
        width={150}
        height={40}
        draggable={false}
        className="w-auto h-full"
        src={url}
        alt=""
      />
    </motion.div>
  );
};

const CompanyInfo = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Flex className="w-full flex-col gap-4 md:flex-row md:gap-8">
      <Image width={210} height={46} src={CompanyIntroImg} alt="" />
      <Flex ref={ref} className="w-full h-10 gap-4 overflow-hidden">
        {CompanyImages.map((item, index) => {
          return <ImageItem key={item} url={item} index={index} />;
        })}
      </Flex>
    </Flex>
  );
};

export default CompanyInfo;
