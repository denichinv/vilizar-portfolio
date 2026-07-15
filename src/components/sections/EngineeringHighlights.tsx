import ProjectHighlightCard from "./ProjectHighlightCard";
import { featuredProjects } from "@/data/projects";
import Section from "../layout/Section";

export default function EngineeringHighlights() {
  return (
    <Section id="work" className="py-24 md:py-32">
      <h2 className="text-4xl md:text-5xl">Selected Work</h2>

      <p className="mt-4 max-w-2xl text-lg text-[color:var(--text-muted)]">
        A selection of projects showcasing modern front-end development, testing
        and real-world problem solving.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectHighlightCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
