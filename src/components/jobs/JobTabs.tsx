"use client";

import React, { useState } from "react";
import Flex from "../_common/flex";
import { Chip, cn } from "@nextui-org/react";

const JobTabs = ({
  types,
  onCLickItem,
}: {
  types: string[];
  onCLickItem?: (type: string) => void;
}) => {
  const TABS = Array.from(new Set(["All jobs", ...types]));

  const [tabIndex, setTabIndex] = useState(0);

  const pressItem = (index: number) => () => {
    setTabIndex(index);
    onCLickItem?.(TABS[index]);
  };

  return (
    <Flex className="my-8 md:my-10 gap-2 flex-wrap">
      {TABS.map((item, index) => (
        <Chip
          key={item}
          variant="bordered"
          className={cn(
            " border-black border-1 cursor-pointer",
            tabIndex == index && " bg-black text-white"
          )}
          onClick={pressItem(index)}
          classNames={{ content: "text-md-bold" }}
        >
          {item}
        </Chip>
      ))}
    </Flex>
  );
};

export default React.memo(JobTabs);
