import React from "react";
import Flex from "../_common/flex";
import Text from "../_common/text";
import { getAllBlogs } from "@/api/blog.api";
import BlogItem from "./BlogItem";

type Props = {
  excludeSlug?: string;
};

const OtherArticle = async ({ excludeSlug }: Props) => {
  const all = await getAllBlogs(20);
  const filtered = all.filter((b) => b.slug !== excludeSlug).slice(0, 4);
  if (filtered.length === 0) return null;

  return (
    <Flex className="w-full flex-col gap-10 mt-20 pt-12 border-t border-gray-100">
      <Flex className="flex-col gap-2">
        <Text type="h3" className="heading-3">
          Check out other articles
        </Text>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
      </Flex>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {filtered.map((blog) => (
          <BlogItem
            key={blog.id}
            {...blog}
            className="h-full hover:-translate-y-1 transition-transform duration-300"
          />
        ))}
      </div>
    </Flex>
  );
};

export default OtherArticle;
