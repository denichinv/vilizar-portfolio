import Image from "next/image";
import Link from "next/link";

import type { FeaturedProject } from "@/data/featuredProjects";

export default function ProjectHighlightCard({
  title,
  description,

  value,
  label,

  badges,

  image: { src, alt },

  links: { live, source, caseStudy },
}: FeaturedProject) {
  return (
    <article>
      <Image src={src} alt={alt} width={1280} height={720} />

      <div>
        <header>
          <h3>{title}</h3>

          <div>
            <p>{value}</p>
            <p>{label}</p>
          </div>
        </header>

        <p>{description}</p>

        <ul>
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>

        <footer>
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>

          <a href={source} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>

          <Link href={`/projects/${caseStudy}`}>Read Case Study →</Link>
        </footer>
      </div>
    </article>
  );
}
