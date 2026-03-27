import { Blog } from "@/models/blog";
import AxiosClient from "./axios-client";

type BlogResponse = Blog & {
  thumbnail: {
    formats: {
      medium?: {
        url?: string;
      };
    };
  };
};
export const getAllBlogs = async (num: number = 100): Promise<Blog[]> => {
  try {
    const response = await AxiosClient.get(
      `/ar-kham-blogs?pagination[pageSize]=${num}&populate[thumbnail][fields][0]=formats`,
    );

    const blogsRepsonse = response.data?.data as BlogResponse[];
    blogsRepsonse.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

    return blogsRepsonse.map((item) => {
      return {
        ...item,
        thumbnail: `${process.env.BE_URL}${item?.thumbnail?.formats?.medium?.url}`,
      };
    });
  } catch {
    return [];
  }
};

export const getBlogBySlug = async (slug: string) => {
  const response = await AxiosClient.get(
    `/ar-kham-blogs?filters[slug][$eq]=${slug}`,
  );
  const blog = response.data?.["data"]?.[0] as Blog;
  if (blog) {
    if (blog.media_link && !blog.media_link.startsWith("http")) {
      blog.media_link = `${process.env.BE_URL}${blog.media_link.startsWith("/") ? "" : "/"}${blog.media_link}`;
    }
    if (blog.pdf_link && !blog.pdf_link.startsWith("http")) {
      blog.pdf_link = `${process.env.BE_URL}${blog.pdf_link.startsWith("/") ? "" : "/"}${blog.pdf_link}`;
    }
  }
  return blog;
};
