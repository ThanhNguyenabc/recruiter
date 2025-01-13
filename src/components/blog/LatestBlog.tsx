"use client";

import React, { useEffect, useState } from "react";
import Flex from "../_common/flex";
import BlogItem from "./BlogItem";
import Hero from "../_common/hero";
import Text from "../_common/text";
import { Blog } from "@/models/blog";

const fetchBlog = () =>
  fetch("/api/blog?limit=3")
    .then((res) => res.json())
    .then((res) => res.data);

const BlogList = () => {
  const [blogs, setData] = useState([]);
  useEffect(() => {
    fetchBlog().then((res) => setData(res));
  }, []);

  return (
    <Flex className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
      {blogs?.map((item: Blog, index: number) => {
        if (index == 0)
          return (
            <BlogItem
              key={item.id}
              {...item}
              className={`sm:col-span-2 md:row-span-2 lg:col-span-1`}
            />
          );

        return <BlogItem.NoDescription key={item.id} {...item} />;
      })}
    </Flex>
  );
};

const LatestBlog = () => {
  return (
    <Hero className="gap-12 items-start md:gap-16">
      <Text type="h2" className="heading-2">
        LATEST BLOGS
      </Text>
      <BlogList />
    </Hero>
  );
};

export default LatestBlog;
