import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import { featuredProjects } from "@/data/projects";
import Image from "next/image";
import CaseStudySection from "@/components/sections/CaseStudySection";
import { CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";

type ProjectMetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};
type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({
  params,
}: ProjectMetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const project = featuredProjects.find((project) => project.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Vilizar Denichin`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Vilizar Denichin`,
      description: project.description,
    },
  };
}
export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.id,
  }));
}
export const dynamicParams = false;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = featuredProjects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="pt-32">
      <p className="font-mono-custom text-sm text-[color:var(--accent)]">
        Case Study
      </p>

      <h1 className="mt-4 text-5xl text-[color:var(--text-heading)]">
        {project.title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
        {project.description}
      </p>
      <div className="mt-12 overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1280}
          height={720}
          className="w-full object-cover"
          priority
        />
      </div>

      <CaseStudySection title="Overview" className="mt-20">
        {project.caseStudy.overview}
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        {project.caseStudy.challenge}
      </CaseStudySection>
      <CaseStudySection title="Architecture">
        {project.caseStudy.architecture}
      </CaseStudySection>
      <CaseStudySection title="Testing">
        {project.caseStudy.testing}
      </CaseStudySection>
      <CaseStudySection title="Features">
        <ul className="space-y-2">
          {project.caseStudy.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle2
                size={24}
                className="mt-1 shrink-0 text-[color:var(--accent)]"
              />

              {feature}
            </li>
          ))}
        </ul>
      </CaseStudySection>
      <CaseStudySection title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.caseStudy.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </CaseStudySection>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[var(--radius-sm)] bg-[color:var(--accent)] px-6 py-3 font-medium text-black transition hover:opacity-90"
        >
          Live Demo ↗
        </a>

        <a
          href={project.links.source}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[var(--radius-sm)] border border-[color:var(--border)] px-6 py-3 text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)]"
        >
          View Source
        </a>
      </div>
    </Section>
  );
}
