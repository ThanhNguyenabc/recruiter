"use client";
import React, { FC, memo, SVGProps } from "react";
import Text from "../_common/text";
import Hero from "../_common/hero";
import Flex from "../_common/flex";
import Button from "../_common/button";
import { IcCyber, IcFintech, IcHealth } from "@/assets/icons";
import { AppRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";

type Category = {
  ic: FC<SVGProps<SVGElement>>;
  title: string;
  description: string;
};
const Categories: Category[] = [
  {
    ic: IcFintech,
    title: "FINTECH",
    description:
      "Fintech moves fast—and so do we. We place candidates who get the tech, the regs, and the pressure that comes with shaking up financial systems.",
  },
  {
    ic: IcHealth,
    title: "HEALTHTECH",
    description:
      "We help Healthtech companies scale by finding mission-driven talent who can navigate complex regulations, innovate under pressure, and build products that actually improve lives.",
  },
  {
    ic: IcCyber,
    title: "CYBERSECURITY",
    description:
      "From threat hunters to compliance pros, we connect cybersecurity teams with sharp, no-BS candidates who understand the stakes and know how to protect what matters.",
  },
];

const CategoryItem = memo(({ title, description, ic: Icon }: Category) => {
  return (
    <Flex className="flex-col border border-black rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
      <Icon className="mb-[30px]" />
      <Text type="h3" className="heading-3 mb-4">
        {title}
      </Text>
      <Text type="p" className="heading-h3 text-secondary">
        {description}
      </Text>
    </Flex>
  );
});

const JobCategories = () => {
  const router = useRouter();
  const jobPage = () => router.push(AppRoutes.JOBS);
  return (
    <Hero className="gap-12 md:gap-16">
      <Flex className="w-full gap-10 flex-col justify-between items-center md:flex-row">
        <Text className="heading-2 md:max-w-[500px] lg:max-w-fit">
          INDUSTRIES WE WORK WITH
        </Text>
        <Button
          variant="solid"
          color="primary"
          className=" hidden md:flex"
          onPress={jobPage}
        >
          Job Listings
        </Button>
      </Flex>
      <Flex className=" gap-4 flex-col md:flex-row">
        {Categories.map((item) => (
          <CategoryItem key={item.title} {...item} />
        ))}
      </Flex>
      <Button
        variant="solid"
        color="primary"
        className="w-full md:hidden"
        onPress={jobPage}
      >
        Job Listings
      </Button>
    </Hero>
  );
};

export default memo(JobCategories);
