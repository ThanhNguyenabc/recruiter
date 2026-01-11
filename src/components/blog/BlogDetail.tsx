import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Flex from "../_common/flex";
import HTMLReactParser from "html-react-parser/lib/index";
import { Blog } from "@/models/blog";

const BlogDetail = ({ blog }: { blog: Blog }) => {
  if (!blog) return <></>;

  return (
    <Hero>
      <Flex className="mb-10">
        <Text type="h1" className="heading-2 text-center">
          {blog.title}
        </Text>
      </Flex>

      {blog.pdf_link ? (
        <iframe src={blog.pdf_link} width={"100%"} height={"800px"} />
      ) : (
        <Flex className="flex-col prose ">
          {HTMLReactParser(blog.content || "")}
        </Flex>
      )}
    </Hero>
  );
};

export default BlogDetail;
