"use client";

import React, { useMemo, useState } from "react";
import Flex from "../_common/flex";
import JobItem from "./JobItem";
import JobTabs from "./JobTabs";
import { Job } from "@/models/job";

const JobList = ({ jobs: allJob }: { jobs: Job[] }) => {
  const [jobs, setJobs] = useState(allJob);

  const JobTypes = useMemo(() => allJob?.map((item) => item.JobType), [allJob]);

  const chooseJobType = (type: string) =>
    type === "All jobs"
      ? setJobs(allJob)
      : setJobs(allJob.filter((item) => item.JobType === type));

  if (!jobs) return <></>;

  return (
    <>
      <JobTabs types={JobTypes} onCLickItem={chooseJobType} />

      <Flex className=" grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-8">
        {jobs.map((item, index) => {
          return <JobItem key={`${item.JobTitle}-${index}`} {...item} />;
        })}
      </Flex>
    </>
  );
};

export default JobList;
