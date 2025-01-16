import { Blog } from "@/models/blog";
import AxiosClient from "./axios-client";

export const getAllBlogs = async (num: number = 100): Promise<Blog[]> => {
  try {
    const blogs = await AxiosClient.get(
      `/ar-kham-blogs?pagination[pageSize]=${num}`
    );
    return blogs.data?.data;
  } catch {
    return [];
  }
};

export const getBlogBySlug = async (slug: string) => {
  const response = await AxiosClient.get(
    `/ar-kham-blogs?filters[slug][$eq]=${slug}`
  );
  return response.data?.["data"]?.[0] || null;
};
