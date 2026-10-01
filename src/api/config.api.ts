import AxiosClient from "./axios-client";
import { DefaultSEOTag } from "@/utils/constants";

export const getSEOTag = async (page?: string) => {
  const response = await AxiosClient.get(
    `/meta-tags?filters[page][$eq]=${page}&pagination[page]=1&pagination[pageSize]=1`
  );
  const { data } = response.data || {};
  const seo = data?.[0] || DefaultSEOTag;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    icons: {
      icon: { url: seo.favicon || DefaultSEOTag.favicon },
    },
    openGraph: {
      images: seo.thumbnail,
      title: seo.title,
      description: seo.description,
    },
  };
};
