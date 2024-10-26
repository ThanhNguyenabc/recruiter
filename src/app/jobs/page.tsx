import { ChevronRight, Money } from "@/assets/icons";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Job = {
  title: string;
  desc: string;
  location: string;
  salary: string;
  company: string;
  company_logo: string;
};

const FAKEDATA: Job[] = [
  {
    title: "Customer Service Analyst",
    desc: "Job Description The opportunityThis role is accountable for providing quality, phone based customer service to callers. Requires advanced knowledge of products and processes to res...",

    salary: "700$",
    company: "Manulife",
    location: "NewYork, USA",
    company_logo:
      "https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=manulife&empname=Manulife&v=024",
  },
  {
    title: "Customer Service Analyst",
    desc: "Job Description The opportunityThis role is accountable for providing quality, phone based customer service to callers. Requires advanced knowledge of products and processes to res...",
    company: "Manulife",

    salary: "700$",

    location: "NewYork, USA",
    company_logo:
      "https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=manulife&empname=Manulife&v=024",
  },
  {
    title: "Customer Service Analyst",
    desc: "Job Description The opportunityThis role is accountable for providing quality, phone based customer service to callers. Requires advanced knowledge of products and processes to res...",
    company: "Manulife",

    salary: "700$",

    location: "NewYork, USA",
    company_logo:
      "https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=manulife&empname=Manulife&v=024",
  },
  {
    title: "Customer Service Analyst",
    desc: "Job Description The opportunityThis role is accountable for providing quality, phone based customer service to callers. Requires advanced knowledge of products and processes to res...",
    company: "Manulife",

    salary: "700$",

    location: "NewYork, USA",
    company_logo:
      "https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=manulife&empname=Manulife&v=024",
  },
  {
    title: "Customer Service Analyst",
    desc: "Job Description The opportunityThis role is accountable for providing quality, phone based customer service to callers. Requires advanced knowledge of products and processes to res...",
    company: "Manulife",

    salary: "700$",

    location: "NewYork, USA",
    company_logo:
      "https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=manulife&empname=Manulife&v=024",
  },
];

const JobItem = (job: Job) => {
  return (
    <Flex className="flex-col gap-6 p-8 pt-10 border rounded-2xl border-neutral-300 text-base text-neutral-600">
      <Flex className="flex-col gap-4">
        <Image
          src={job.company_logo}
          width={80}
          height={80}
          alt="company-logo"
        />
        <Text className=" font-semibold text-black md:text-lg">
          {job.title}
        </Text>
      </Flex>
      <Text>{`Location: ${job.location}`}</Text>
      <Flex className="gap-4 items-center">
        <Money width={30} height={30} />
        <Text>{job.salary}</Text>
      </Flex>
      <Text>{job.desc}</Text>
      <Button
        size="lg"
        className=" max-w-fit font-semibold text-white self-end"
        color="primary"
      >
        Learn more
        <ChevronRight width={16} height={16} className=" text-white" />
      </Button>
    </Flex>
  );
};

const JobsPage = () => {
  return (
    <>
      <Hero className="flex-col gap-10">
        <Flex className="flex-col gap-6 items-center">
          <Text type="h1" className="heading-md">
            Find Your Next Role—No B.S.
          </Text>
          <Text className="text-lg text-neutral-600">
            Check out our latest job listings. No fluff, no corporate
            jargon—just real opportunities for real people.
          </Text>
        </Flex>
        <Text type="h1" className="heading-md md:heading-lg mt-10">
          Jobs Listing
        </Text>
        <Flex className="flex-col gap-6 lg:max-w-screen-sm">
          {FAKEDATA.map((item) => (
            <JobItem key={item.title} {...item} />
          ))}
        </Flex>
      </Hero>
      <Hero>
        <ContactForm>
          <Text className="heading-md md:heading-lg text-center">
            Need My Help? Please fill in the form.
          </Text>
        </ContactForm>
      </Hero>
    </>
  );
};

export default JobsPage;
