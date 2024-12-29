import { HomeBanner } from "@/assets/images";
import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Image from "next/image";
import Hero from "@/components/_common/hero";
import JobCategories from "@/components/jobs/JobCategory";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import CompanyInfo from "@/components/company/CompanyInfo";
import LatestBlog from "@/components/blog/LatestBlog";
import HomeActions from "@/components/home/HomeActions";

export default function HomePage() {
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
              alt="banner-image"
              src={HomeBanner}
              width={400}
              height={500}
            />
          </Flex>
        </Flex>
        <CompanyInfo />
      </Hero>

      <JobCategories />
      <HomeTestimonial />
      <LatestBlog />
    </>
  );
}
