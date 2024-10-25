"use client";
import React, { useEffect, useRef, useState } from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { Star } from "@/assets/icons";
import { cn } from "@nextui-org/react";
import Hero from "../_common/hero";

const TestimonialData = [
  {
    title: "Hired Head of Sales1",
    content:
      "Just wanted to say a quick thank you for your Random.org service. I was trying to demonstrate regression to the mean to my students and didn't have access to a statistical analysis program. So I jumped on the internet and had my numbers within a couple of minutes! Thanks!",
    reviewer: "—Bronwyn Clark",
  },
  {
    title: "Hired Head of Sales2",
    content:
      "Just wanted to say a quick thank you for your Random.org service. I was trying to demonstrate regression to the mean to my students and didn't have access to a statistical analysis program. So I jumped on the internet and had my numbers within a couple of minutes! Thanks!",
    reviewer: "—Bronwyn Clark",
  },
  {
    title: "Hired Head of Sales3",
    content:
      "Just wanted to say a quick thank you for your Random.org service. I was trying to demonstrate regression to the mean to my students and didn't have access to a statistical analysis program. So I jumped on the internet and had my numbers within a couple of minutes! Thanks!",
    reviewer: "—Bronwyn Clark",
  },
  {
    title: "Hired Head of Sales4",
    content:
      "Just wanted to say a quick thank you for your Random.org service. I was trying to demonstrate regression to the mean to my students and didn't have access to a statistical analysis program. So I jumped on the internet and had my numbers within a couple of minutes! Thanks!",
    reviewer: "—Bronwyn Clark",
  },
];
const padding = 16;

const Testimonials = () => {
  const [curIndex, setCurIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const scrollToPage = (index: number) => {
    setCurIndex(index);
    if (ref.current) {
      const childWidth = ref.current.firstElementChild?.clientWidth ?? 0;
      ref.current.scrollTo({
        top: 0,
        left: index * childWidth + padding * index,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const id = setInterval(() => {
      const newIndex =
        curIndex == TestimonialData.length - 1 ? 0 : curIndex + 1;
      scrollToPage(newIndex);
    }, 2000);
    return () => {
      console.log("clear");
      clearInterval(id);
    };
  }, [curIndex]);

  return (
    <Hero className="flex-col gap-10 items-center">
      <Text type="h3" className="heading-md md:heading-lg">
        A Word From Our Clients
      </Text>
      <Flex
        ref={ref}
        className={`gap-4 w-full md:w-[640px] px-4 overflow-hidden scroll-smooth`}
      >
        {TestimonialData.map((item, index) => (
          <Flex
            key={index}
            className={`flex-col gap-4 min-w-full md:min-w-[608px] md:gap-6 bg-neutral-100 p-6 rounded-2xl`}
          >
            <Flex className="gap-4">
              {Array(5)
                .fill(0)
                .map((item, index) => (
                  <Star
                    key={index}
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                ))}
            </Flex>

            <Text
              type="h3"
              className="text-primary font-semibold text-lg md:text-2xl"
            >
              {item.title}
            </Text>
            <Text>{item.content}</Text>
            <Text className="font-semibold">{item.reviewer}</Text>
          </Flex>
        ))}
      </Flex>

      <Flex className="gap-4">
        {Array(TestimonialData.length)
          .fill(0)
          .map((item, index) => (
            <div
              key={`dot-${index}`}
              className={cn(
                "w-4 h-4 bg-neutral-300 rounded-full cursor-pointer",
                curIndex == index && " bg-primary"
              )}
              onClick={() => {
                scrollToPage(index);
              }}
            />
          ))}
      </Flex>
    </Hero>
  );
};

export default Testimonials;
