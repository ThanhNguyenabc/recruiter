import { Blog } from "@/models/blog";
import AxiosClient from "./axios-client";

export const getAllBlogs = async (num: number = 100): Promise<Blog[]> => {
  try {
    const blogs = await AxiosClient.get(
      `/ar-kham-blogs?pagination[pageSize]=${num}&populate[thumbnail][fields][0]=formats`
    );
    console.log("api call");
    console.log(blogs.data?.data);

    return blogs.data?.data?.map((item: Record<string, any>) => ({
      ...item,
      thumbnail: item?.thumbnail
        ? `${process.env.BE_URL}${item?.thumbnail?.formats?.medium?.url}`
        : "",
    }));
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
