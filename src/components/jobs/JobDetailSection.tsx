import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import { cn } from "@nextui-org/react";
import React, { HTMLAttributes } from "react";

const JobDetailSection = ({
  title,
  children,
  className,
  ...other
}: { title: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Flex {...other} className={cn("w-full flex-col gap-4", className)}>
      <Text type="h3" className="heading-3 text-black">
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default JobDetailSection;
