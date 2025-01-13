import { HomeBanner } from "@/assets/images";
import React from "react";
import Flex from "../_common/flex";
import Hero from "../_common/hero";
import CompanyInfo from "../company/CompanyInfo";
import JobCategories from "../jobs/JobCategory";
import TestimonialSection from "../testmonials/TestimonialSection";
import HomeActions from "./HomeActions";
import Text from "@/components/_common/text";
import Image from "next/image";
import LatestBlog from "../blog/LatestBlog";

const HomePage = () => {
  return (
    <>
      <Hero className="gap-12 md:gap-10">
        <Flex className="w-full flex-col lg:flex-row gap-4 md:gap-8 items-center">
          <Flex className="flex-col flex-1 gap-4 md:gap-10 xl:p-0">
            <Text
              type="h1"
              className="heading-2 whitespace-pre-line md:heading-1"
            >
              {`JOBS FOR REAL PEOPLE\n—NOT ROBOTS`}
            </Text>
            <HomeActions />
          </Flex>
          <Flex className="justify-center md:justify-end">
            <Image
              priority
              alt="banner-image"
              src={HomeBanner}
              width={500}
              height={500}
              className=" object-contain"
            />
          </Flex>
        </Flex>
        <CompanyInfo />
      </Hero>
      <JobCategories />
      <TestimonialSection />
      <LatestBlog />
    </>
  );
};

export default HomePage;
