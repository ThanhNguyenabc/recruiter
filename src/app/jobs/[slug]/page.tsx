"use client";

import { JobBanner } from "@/assets/images";
import Button from "@/components/_common/button";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import { Job } from "@/components/jobs/JobListItem";
import { EMAIL, FAKEDATA, Socials } from "@/utils/constants";
import { cn } from "@nextui-org/react";
import HTMLReactParser from "html-react-parser/lib/index";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const JobDetailPage = () => {
  const params = useParams();

  const slug = params["slug"] || "";

  const [jobData, setJobData] = useState<Job | null>(null);

  const [showSubmitForm, setShowSubmitForm] = useState(false);

  useEffect(() => {
    if (slug) {
      setJobData(FAKEDATA.filter((item) => item.slug === slug)?.[0]);
    }
  }, [slug]);

  const onShowSubmitForm = () => setShowSubmitForm(!showSubmitForm);

  return (
    <Hero className="flex flex-col items-start">
      <Flex className="flex-col gap-6 md:flex-row md:gap-10">
        <Flex className="flex-1 md:h-[500px]">
          <Image alt="banner" src={JobBanner} width={500} height={500} />
        </Flex>
        <Flex className="flex-1 flex-col  gap-6 w-full md:min-w-[500px]">
          <Text className="heading-md">{jobData?.title}</Text>
          <Text className=" text-xl">Salary: {jobData?.salary}</Text>
          <Text className=" text-xl">Location: {jobData?.location}</Text>
          <Button
            color="primary"
            className="md:max-w-[200px]"
            onClick={onShowSubmitForm}
          >
            Apply for job
          </Button>
          <Flex
            className={cn(
              `transition-all duration-300 w-full h-0 overflow-hidden`,
              showSubmitForm && " h-fit p-2"
            )}
          >
            <ContactForm type={1} />
          </Flex>
          <Flex className="flex-col relative"></Flex>
        </Flex>
      </Flex>
      <Text className="text-lg font-semibold my-6 text-primary md:text-xl">
        About this job
      </Text>

      <Flex className="flex flex-col">
        {HTMLReactParser(jobData?.long_desc || "")}
      </Flex>

      <Text type="p" className="mt-10 md:mt-20 whitespace-pre-line font-medium">
        {`If you’re thinking about applying get in touch with Arkham on `}
        <Link href={Socials[0].link} className="text-primary">
          LinkedIn
        </Link>
        {" or email "}
        <Link href={`mailto:${EMAIL}`} className=" underline text-primary">
          {EMAIL}
        </Link>
        {`\nOr you can apply on this site. If you don’t have an up to date CV send your old one or show me your LinkedIn profile. You can apply without an attachment.`}
      </Text>
    </Hero>
  );
};

export default JobDetailPage;
