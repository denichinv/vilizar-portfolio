import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import { featuredProjects } from "@/data/featuredProjects";
import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
    </Section>
  );
}
