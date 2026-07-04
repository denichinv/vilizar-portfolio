import ProjectHighlightCard from "./ui/ProjectHighlightCard";
import { featuredProjects } from "@/data/Projects";
import Section from "../layout/Section";

export default function EngineeringHighlights() {
  return (
    <Section id="work" className="py-24 md:py-32 ">
      <h2>Selected Work</h2>

      <p>
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
