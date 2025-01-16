"use client";
import Button from "@/components/_common/button";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import HTMLReactParseer from "html-react-parser";
import JobDetailSection from "@/components/jobs/JobDetailSection";
import JobApplyForm from "@/components/jobs/JobApplyForm";
import { cn, Progress } from "@nextui-org/react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Job } from "@/models/job";

const JobDetailTemplate = () => {
  const params = useParams();
  const { slug } = params;
  const formRef = useRef<HTMLFormElement>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const {
    CompanyLogo,
    JobTitle,
    CompanyName,
    JobType,
    Location,
    Salary,
    JobDescription,
  } = job || {};

  const Information = [
    { title: "Type:", value: JobTitle },
    { title: "Salary:", value: `${Salary}$` },
    { title: "Location:", value: Location },
    {
      title: "Working Arrangement:",
      value: JobType,
    },
  ];
  useEffect(() => {
    if (slug) {
      axios
        .post("/api/job", { slug })
        .then((res) => {
          setJob(res.data?.["data"]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching job details:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  const gotToForm = useCallback(() => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);

  if (loading) {
    return <Progress isIndeterminate />;
  }

  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <>
      <Hero className="border-b border-b-secondary ">
        <Flex className="gap-2 items-center">
          <Image
            src={CompanyLogo || "/images/mc-donal.png"}
            width={48}
            height={48}
            alt="company-logo"
          />
          <Text className="text-lg-bold">{CompanyName}</Text>
        </Flex>
        <Text type="h1" className="heading-2 text-center md:heading-1 mt-10">
          {JobTitle?.toUpperCase()}
        </Text>

        <Flex className=" flex-wrap justify-center gap-8 mt-6 mb-10 md:gap-10">
          {Information.map((item) => (
            <Flex key={item.title} className="gap-2">
              <Text className="text-secondary text-lg-medium">
                {item.title}
              </Text>
              <Text className="text-lg-bold">{item.value}</Text>
            </Flex>
          ))}
        </Flex>
        <Button className="w-fit" color="primary" onPress={gotToForm}>
          Apply now!
        </Button>
      </Hero>
      <Hero className="gap-10 text-secondary  lg:max-w-[800px] mx-auto">
        <Flex
          className={cn(
            "flex-col p-0 prose  prose-headings:heading-3 prose-headings:uppercase max-w-full"
          )}
        >
          {HTMLReactParseer(JobDescription || "")}
        </Flex>

        <JobDetailSection title="WORKING ARRANGEMENT">
          <Text className="text-lg-medium">{JobType}</Text>
        </JobDetailSection>
        <JobDetailSection title="APPLY VIA E-MAIL">
          <Text className="text-lg-medium">
            {"If you’re thinking about applying get in touch with Arkham on"}
            <Link href={""} className="text-lg-bold">
              LinkedIn
            </Link>
            or email
            <Link href={""} className="text-lg-bold">
              shaun@arkhamtalent.com
            </Link>
          </Text>
        </JobDetailSection>
        <JobApplyForm ref={formRef} />
      </Hero>
    </>
  );
};

export default JobDetailTemplate;
