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
      "Create and personalize your own dashboards to display real-time data and insights that matter most to your business.",
  },
  {
    ic: IcHealth,
    title: "HEALTHTECH",
    description:
      "Easily integrate with popular tools like Slack, Google Drive, Salesforce, and more to streamline your workflow.",
  },
  {
    ic: IcCyber,
    title: "CYBERSECURITY",
    description:
      "Access detailed analytics and generate comprehensive reports to track your performance and business growth.",
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
CategoryItem.displayName = 'CategoryItem';


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
