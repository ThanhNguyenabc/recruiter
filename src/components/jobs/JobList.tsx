import React from "react";
import Flex from "../_common/flex";
import JobItem from "./JobItem";
import JobTabs from "./JobTabs";
import { Job } from "@/models/job";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  if (!jobs) return <></>;

  return (
    <>
      <JobTabs />
      <Flex className=" grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-8">
        {jobs.map((item, index) => {
          return <JobItem key={`${item.JobTitle}-${index}`} {...item} />;
        })}
      </Flex>
    </>
  );
};

export default JobList;
