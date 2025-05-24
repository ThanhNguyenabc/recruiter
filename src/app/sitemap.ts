import { AppRoutes } from "@/utils/routes";
import type { MetadataRoute } from "next";

const ExcludeRoutes = new Map<string, boolean>();
ExcludeRoutes.set("/job/:slug", true);

const routes = Object.values(AppRoutes).filter(
  (item) => !ExcludeRoutes.has(item)
);

const Domains = [
  "https://arkhamtalent.org",
  "https://arkhamtalent.com",
  "https://arkhamtalent.info",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMapRoutes = Domains.flatMap((url) => {
    return routes.map((route) => ({
      url: route == "/" ? url : `${url}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "/" ? 1 : 0.7,
    }));
  });
  return siteMapRoutes;
}
