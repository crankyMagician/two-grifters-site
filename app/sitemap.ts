import type { MetadataRoute } from "next";
import { absoluteUrl, episodePath, getEpisodes } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const episodes = getEpisodes();
  const newest = episodes[0]?.published;
  return [
    {
      url: absoluteUrl("/"),
      lastModified: newest,
      priority: 1,
    },
    ...episodes.map((episode) => ({
      url: absoluteUrl(episodePath(episode)),
      lastModified: episode.published,
      priority: 0.8,
    })),
  ];
}
