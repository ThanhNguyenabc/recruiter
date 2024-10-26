"use client";
import { HomeBanner } from "@/assets/images";
import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import Image from "next/image";
import JobsIndustry from "@/components/jobindustry";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/contact/contact-form";
import Hero from "@/components/_common/hero";
import Testimonials from "@/components/testmonials";
import Button from "@/components/_common/button";

const Desc = ["No filters, just jobs that fit the real you."];
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero className="flex-col lg:flex-row gap-4">
        <Flex className="flex-col flex-1 gap-4 md:p-8 lg:p-14 justify-end md:gap-8">
          <Text
            type="h1"
            className="heading-lg whitespace-pre-line md:heading-xl"
          >
            {`Jobs for Real People\nNot Robots`}
          </Text>
          <Flex className="flex-col gap-4">
            {Desc.map((text) => (
              <Text
                key={text}
                className="text-lg font-medium"
              >{`${text}`}</Text>
            ))}
          </Flex>

          <Flex className="gap-5">
            <Button
              color="primary"
              responsive
              className=" min-w-40"
              onClick={() => router.push("/jobs")}
            >
              Job Listings
            </Button>
            <Button
              color="primary"
              responsive
              className=" min-w-40"
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
