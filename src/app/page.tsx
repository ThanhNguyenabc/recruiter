"use client";
import { HomeBanner } from "@/assets/images";
import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import JobsIndustry from "@/components/jobindustry";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/contact/contact-form";
import Hero from "@/components/_common/hero";
import Testimonials from "@/components/testmonials";

const Desc = [
  "Be yourself. We’ll find you a role that fits",
  "We connect you with jobs that value who you are",
  "No filters, just jobs that fit the real you.",
];
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero className="flex-col lg:flex-row gap-4">
        <Flex className="flex-col flex-1 gap-4 md:p-8 lg:p-14 justify-end md:gap-10">
          <Text
            type="h1"
            className="heading-lg whitespace-pre-line md:heading-xl"
          >
            {`Jobs for Real People\nNot Robots`}
          </Text>
          <Flex className="flex-col gap-4">
            {Desc.map((text, index) => (
              <Text key={text} className="text-lg font-medium">{`${
                index + 1
              }. ${text}`}</Text>
            ))}
          </Flex>

          <Flex className="gap-5">
            <Button
              color="primary"
              size="lg"
              variant="solid"
              className="text-white font-semibold"
              onClick={() => router.push("/jobs")}
            >
              Job Listings
            </Button>
            <Button
              color="primary"
              size="lg"
              className="text-white font-semibold"
              onClick={() => router.push("/clients")}
            >
              Clients
            </Button>
          </Flex>
        </Flex>
        <Flex className="flex-1 justify-center md:justify-end">
          <Image alt="banner-image" src={HomeBanner} width={700} height={500} />
        </Flex>
      </Hero>
      <JobsIndustry />
      <Testimonials />

      <Hero>
        <ContactForm>
          <Text className="heading-md md:heading-lg text-center">
            Need My Help? Please fill in the form.
          </Text>
        </ContactForm>
      </Hero>
    </>
  );
}
