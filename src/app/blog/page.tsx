import { getSEOTag } from "@/api/config.api";
import BlogPage from "@/components/blog/BlogPage";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 100;

export async function generateMetadata(): Promise<Metadata> {
  return getSEOTag("blogs");
}

const Page = () => {
  return <BlogPage />;
};

export default Page;
