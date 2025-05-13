import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cali.institute";

  const routes = [
    "/",
    "#about",
    "#programs",
    "#team",
    "/publications",
    "/training",
    "/mentorship",
    "/leadership",
    "/advocacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

export const dynamic = "force-static";
export const revalidate = false;
