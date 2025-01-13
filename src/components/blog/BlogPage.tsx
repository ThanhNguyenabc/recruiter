import { getAllBlogs } from "@/api/blog.api";
import React from "react";
import BlogItem from "./BlogItem";
import Flex from "../_common/flex";
import Hero from "../_common/hero";

const BlogPage = async () => {
  const blogs = await getAllBlogs(100);
  return (
    <>
      <Hero>
        <Flex className="flex-col gap-8">
          {blogs?.map((item) => (
            <BlogItem
              key={item.id}
              {...item}
              className=" sm:flex-row md:max-w-[800px]"
            />
          ))}
        </Flex>
      </Hero>
    </>
  );
};

export default BlogPage;
