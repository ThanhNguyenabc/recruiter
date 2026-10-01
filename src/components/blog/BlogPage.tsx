import { getAllBlogs } from "@/api/blog.api";
import React from "react";
import BlogItem from "./BlogItem";
import Flex from "../_common/flex";
import Hero from "../_common/hero";
import Text from "../_common/text";

const BlogPage = async () => {
  const blogs = await getAllBlogs(100);

  return (
    <Hero>
      <Flex className="flex-col gap-4 md:gap-6 items-center">
        <Text type="h2" className="heading-2">
          ARKHAM TALENT Blog: GTM Hiring Trends
        </Text>
        <Text className="text-xl-semibold text-secondary">
          Stay updated with recent news, insights, and playbooks.
        </Text>
      </Flex>
      <Flex className="flex-col gap-8 mt-10">
        {blogs?.map((item) => (
          <BlogItem
            key={item.id}
            {...item}
            className=" sm:flex-row md:max-w-[800px]"
          />
        ))}
      </Flex>
    </Hero>
  );
};

export default BlogPage;
