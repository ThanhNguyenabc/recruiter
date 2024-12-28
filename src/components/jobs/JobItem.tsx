import { Chip } from "@nextui-org/react";
import React from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import Text from "../_common/text";
import Button from "../_common/button";

export type Job = {
  jobTitle: string;
  jobType: string;
  companyLogo: string;
  location: string;
  salary: string;
};

const JobItem = (job: Job) => {
  return (
    <Flex className="flex-col gap-4 p-4 md:p-8 w-full bg-white rounded-[20px] border border-[#DBD7CA]">
      <Flex className=" justify-between">
        <Image
          width={64}
          quality={100}
          height={64}
          alt="company-logo"
          src={job.companyLogo}
        />
        <Chip
          className=" bg-success h-6 rounded-md text-primary"
          classNames={{
            content: " text-md-bold",
          }}
        >
          {job.jobType}
        </Chip>
      </Flex>
      <Text className="text-success heading-3">
        {job.jobTitle.toUpperCase()}
      </Text>
      <Flex className="flex-col gap-2 md:h-[53px] md:gap-[50px] md:flex-row">
        <Flex className="gap-2">
          <Text className="text-secondary  text-lg-medium">Location:</Text>
          <Text className=" font-extrabold"> {job.location}</Text>
        </Flex>
        <Flex className="gap-2">
          <Text className="text-secondary  text-lg-medium">Salary:</Text>
          <Text className=" font-extrabold">{job.salary}</Text>
        </Flex>
      </Flex>
      <Button className="w-fit md:h-12" variant="bordered">
        Learn More
      </Button>
    </Flex>
  );
};

export default JobItem;
