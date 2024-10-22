"use client";
import { BannerImg } from "@/assets/images";
import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Testimonials from "@/components/testmonials";
import JobsIndustry from "@/components/jobindustry";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/contact/contact-form";

const Desc = [
  "Be yourself. We’ll find you a role that fits",
  "We connect you with jobs that value who you are",
  "No filters, just jobs that fit the real you.",
];
export default function Home() {
  const router = useRouter();
  return (
    <Flex className="flex-col gap-10 md:gap-24">
      <Flex className="flex-col md:flex-row gap-6">
        <Flex className="flex-col gap-4 justify-end">
          <Text type="h1" className="heading-lg">
            Jobs for Real People, Not Robots
          </Text>
          {Desc.map((text, index) => (
            <Text key={text} className="text-lg font-medium">{`${
              index + 1
            }. ${text}`}</Text>
          ))}
          <Flex className="gap-5">
            <Button
              color="primary"
              size="lg"
              onClick={() => router.push("/jobs")}
            >
              Job Listings
            </Button>
            <Button
              color="primary"
              size="lg"
              onClick={() => router.push("/clients")}
            >
              Clients
            </Button>
          </Flex>
        </Flex>
        <Flex className="flex-col">
          <Image alt="banner-image" src={BannerImg} width={600} height={600} />
        </Flex>
      </Flex>
      {/* <Testimonials /> */}
      <JobsIndustry />
      <ContactForm>
        <Text className="heading-md text-center">
          Need My Help? Please fill in the form.
        </Text>
      </ContactForm>
    </Flex>
  );
}
