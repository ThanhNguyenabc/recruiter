import React from "react";
import Flex from "../_common/flex";
import BlogItem from "./BlogItem";
import Hero from "../_common/hero";
import Text from "../_common/text";
import { DefaultBlogImage } from "@/assets/images";
const BlogData = [
  {
    id: "blog-1",
    title:
      "Sales Influencer Who Teaches How to Hit Quota Forgets to Hit His Own",
    desc: `  Josh Kemp, an enterprise sales account executive at the innovative
            dog-grooming tech startup Fido.ai, has reportedly forgotten to hit his
            own quota while busy teaching others how to do so.`,
    date: "July 13, 2024",
    image: DefaultBlogImage,
  },
  {
    id: "blog-2",

    title:
      "Sales Influencer Who Teaches How to Hit Quota Forgets to Hit His Own",
    desc: `Josh Kemp, an enterprise sales account executive at the innovative
            dog-grooming tech startup Fido.ai, has reportedly forgotten to hit his
            own quota while busy teaching others how to do so.`,
    date: "July 13, 2024",
    image: DefaultBlogImage,
  },
  {
    id: "blog-3",

    title:
      "Sales Influencer Who Teaches How to Hit Quota Forgets to Hit His Own",
    desc: `  Josh Kemp, an enterprise sales account executive at the innovative
            dog-grooming tech startup Fido.ai, has reportedly forgotten to hit his
            own quota while busy teaching others how to do so.`,
    date: "July 13, 2024",
    image: DefaultBlogImage,
  },
];

const LatestBlog = () => {
  return (
    <Hero className="gap-12 md:gap-16">
      <Text type="h2" className="heading-2">
        LATEST BLOGS
      </Text>
      <Flex className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {BlogData.map((item, index) => {
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
    </Hero>
  );
};

export default LatestBlog;
