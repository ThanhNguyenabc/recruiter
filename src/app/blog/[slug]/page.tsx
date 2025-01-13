import { getBlogBySlug } from "@/api/blog.api";
import BlogDetail from "@/components/blog/BlogDetail";
import React from "react";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  if (!slug) return <>Not Found</>;
  const blog = await getBlogBySlug(slug);

  return <BlogDetail blog={blog} />;
};

export default Page;
