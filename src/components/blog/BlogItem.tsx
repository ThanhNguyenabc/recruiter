import React from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import Text from "../_common/text";
import { cn } from "@nextui-org/react";

type Props = {
  title: string;
  desc: string;
  image: string;
  date: string;
  className?: string;
  hideDesc?: boolean;
};

const BlogItem = ({ title, desc, date, image, className }: Props) => {
  return (
    <Flex className={cn("flex-col p-4 bg-white rounded-lg gap-3", className)}>
      <Image
        width={200}
        height={200}
        src={image}
        alt=""
        className=" w-full rounded-lg"
      />
      <Flex className="flex-col gap-2">
        <Text type="h3" className="heading-3">
          {title}
        </Text>

        <Text type="p" className="text-lg-medium">
          {desc}
        </Text>

        <Text className="text-md-semibold text-secondary">{date}</Text>
      </Flex>
    </Flex>
  );
};

const NoDescription = ({ title, date, image, className }: Props) => {
  return (
    <Flex
      className={cn(
        "flex-col lg:flex-row p-4 bg-white rounded-lg gap-3",
        className
      )}
    >
      <Image
        width={200}
        height={200}
        src={image}
        alt=""
        className="w-full rounded-lg lg:w-[250px] lg:aspect-square object-cover"
      />
      <Flex className="flex-col gap-2 justify-between">
        <Text type="h3" className="text-lg-bold">
          {title}
        </Text>

        <Text className="text-md-semibold text-secondary">{date}</Text>
      </Flex>
    </Flex>
  );
};

BlogItem.NoDescription = NoDescription;

export default BlogItem;
