import { Chip } from "@nextui-org/react";
import React from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import Text from "../_common/text";
import Button from "../_common/button";
import { Job } from "@/models/job";
import { AppRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";

const JobItem = (job: Job) => {
  const { JobTitle, JobType, CompanyLogo, Location, Salary, Slug } = job;
  const router = useRouter();
  const gotoJobDetail = () => {
    router.push(AppRoutes.JOB_DETAIL.replace(":slug", Slug));
  };
  return (
    <Flex className="flex-col gap-4 p-4 md:p-8 w-full bg-white rounded-[20px] border border-[#DBD7CA]">
      <Flex className=" justify-between">
        {CompanyLogo && (
          <Image
            width={64}
            quality={100}
            height={64}
            alt="company-logo"
            src={CompanyLogo}
          />
        )}
        <Chip
          className=" bg-success h-6 rounded-md text-primary"
          classNames={{
            content: " text-md-bold",
          }}
        >
          {JobType}
        </Chip>
      </Flex>
      <Text className="text-success heading-3">{JobTitle?.toUpperCase()}</Text>
      <Flex className="flex-col gap-2 md:h-[53px] md:gap-[50px] md:flex-row">
        <Flex className="gap-2">
          <Text className="text-secondary  text-lg-medium">Location:</Text>
          <Text className=" font-extrabold"> {Location}</Text>
        </Flex>
        <Flex className="gap-2">
          <Text className="text-secondary  text-lg-medium">Salary:</Text>
          <Text className=" font-extrabold">{Salary}</Text>
        </Flex>
      </Flex>

      <Button
        className="w-fit md:h-12"
        variant="bordered"
        onPress={gotoJobDetail}
      >
        Learn More
      </Button>
    </Flex>
  );
};

export default JobItem;
