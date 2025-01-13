import BlogPage from "@/components/blog/BlogPage";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 100;

const Page = () => {
  return <BlogPage />;
};

export default Page;
