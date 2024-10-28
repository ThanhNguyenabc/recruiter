"use client";
import { ChevronRight, Money } from "@/assets/icons";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Button from "../_common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type Job = {
  title: string;
  slug: string;
  short_desc: string;
  long_desc: string;
  location: string;
  salary: string;
  company: string;
  company_logo: string;
};

const JobListItem = (job: Job) => {
  const router = useRouter();

  const onJobClick = (slug: string) => {
    router.push(`/jobs/${slug}`);
  };
  return (
    <Flex className="flex-col gap-6 p-6 md:p-8  rounded-2xl border-neutral-300 border-2 text-base text-neutral-600 hover:border-primary">
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
      <Text>{job.short_desc}</Text>
      <Button
        size="lg"
        className="max-w-fit font-semibold text-white self-end"
        color="primary"
        onClick={() => onJobClick(job.slug)}
      >
        Learn more
        <ChevronRight width={16} height={16} className=" text-white" />
      </Button>
    </Flex>
  );
};

export default JobListItem;
