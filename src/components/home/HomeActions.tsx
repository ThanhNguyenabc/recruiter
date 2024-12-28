"use client";
import React from "react";
import Flex from "../_common/flex";
import Button from "../_common/button";
import { useRouter } from "next/navigation";

const HomeActions = () => {
  const router = useRouter();
  return (
    <Flex className="gap-5 flex-col sm:flex-row">
      <Button
        color="primary"
        responsive
        className=" min-w-40"
        onClick={() => router.push("/jobs")}
      >
        Explore job openings
      </Button>
      <Button
        responsive
        variant="bordered"
        className=" min-w-40"
        onClick={() => router.push("/clients")}
      >
        Find your next hire
      </Button>
    </Flex>
  );
};

export default HomeActions;
