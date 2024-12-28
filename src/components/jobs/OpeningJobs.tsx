import React from "react";
import Hero from "../_common/hero";
import Flex from "../_common/flex";
import Text from "../_common/text";
import JobList from "./JobList";

const OpeningJobs = () => {
  return (
    <Hero className="">
      <Flex className="flex-col gap-4 items-center">
        <Text type="h2" className="heading-2">
          CURRENT JOBS OPENING
        </Text>
        <Text className="text-xl-semibold text-secondary">
          Explore our available positions and find the perfect role for you.{" "}
        </Text>
      </Flex>
      <JobList />
    </Hero>
  );
};

export default OpeningJobs;
