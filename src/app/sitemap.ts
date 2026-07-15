import type { MetadataRoute } from "next";

import { featuredProjects } from "@/data/projects";

const baseUrl = "https://vilizar.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
