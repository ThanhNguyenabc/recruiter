"use client";

import React, { useState } from "react";
import Flex from "../_common/flex";
import JobItem from "./JobItem";
import { Chip, cn } from "@nextui-org/react";

const OpeningJobData = [
  {
    jobTitle: "Customer Service Analyst",
    jobType: "Part-Time",
    companyLogo: "/images/mc-donal.png",
    location: "New York",
    salary: "$700",
  },
  {
    jobTitle: "Customer Service Analyst",
    jobType: "Part-Time",
    companyLogo: "/images/mc-donal.png",
    location: "New York",
    salary: "$700",
  },
  {
    jobTitle: "Customer Service Analyst",
    jobType: "Part-Time",
    companyLogo: "/images/mc-donal.png",
    location: "New York",
    salary: "$700",
  },
  {
    jobTitle: "Customer Service Analyst",
    jobType: "Part-Time",
    companyLogo: "/images/mc-donal.png",
    location: "New York",
    salary: "$700",
  },
];

const JobTabs = ["All jobs", "Fintech", "Healthcare", "Cybersecurity"];

const JobList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Flex className="my-8 md:my-10 gap-2 flex-wrap">
        {JobTabs.map((item, index) => (
          <Chip
            key={item}
            variant="bordered"
            className={cn(
              " border-black border-1 cursor-pointer",
              tabIndex == index && " bg-black text-white"
            )}
            onClick={() => setTabIndex(index)}
            classNames={{ content: "text-md-bold" }}
          >
            {item}
          </Chip>
        ))}
      </Flex>
      <Flex className=" grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-8">
        {OpeningJobData.map((item, index) => {
          return <JobItem key={`${item.jobTitle}-${index}`} {...item} />;
        })}
      </Flex>
    </>
  );
};

export default JobList;
