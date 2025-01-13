"use client";

import React from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import Text from "../_common/text";
import { cn } from "@nextui-org/react";
import { formatDate } from "@/utils/DateUtils";
import { Blog } from "@/models/blog";
import { DefaultBlogImage } from "@/assets/images";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
} & Blog;

const BlogItem = ({
  title,
  short_description = "",
  createdAt,
  thumbnail,
  slug,
  className,
}: Props) => {
  const router = useRouter();
  return (
    <Flex
      onClick={() => router.push(`/blog/${slug}`)}
      className={cn(
        "flex-col p-4 bg-white cursor-pointer rounded-lg gap-3",
        className
      )}
    >
      <Image
        width={200}
        height={200}
        draggable={false}
        src={thumbnail || DefaultBlogImage}
        alt=""
        className=" w-full rounded-lg"
      />
      <Flex className="flex-col gap-2">
        <Text type="h3" className="heading-3">
          {title}
        </Text>

        <Text type="p" className="text-lg-medium">
          {short_description}
        </Text>

        <Text className="text-md-semibold text-secondary">
          {formatDate(createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

const NoDescription = ({
  title,
  createdAt,
  thumbnail,
  className,
  slug,
}: Props) => {
  const router = useRouter();

  return (
    <Flex
      onClick={() => router.push(`/blog/${slug}`)}
      className={cn(
        "flex-col lg:flex-row p-4 cursor-pointer bg-white rounded-lg gap-3",
        className
      )}
    >
      <Image
        width={200}
        height={200}
        draggable={false}
        src={thumbnail || DefaultBlogImage}
        alt=""
        className="w-full rounded-lg lg:w-[250px] lg:aspect-square object-cover"
      />
      <Flex className="flex-col gap-2 justify-between">
        <Text type="h3" className="text-lg-bold">
          {title}
        </Text>

        <Text className="text-md-semibold text-secondary">
          {formatDate(createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

BlogItem.NoDescription = NoDescription;

export default BlogItem;
