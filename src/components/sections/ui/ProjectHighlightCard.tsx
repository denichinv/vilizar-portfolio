import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
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
  const linkStyle =
    "text-[color:var(--text-heading)] transition hover:text-[color:var(--accent)]";

  const primaryLinkStyle =
    "rounded-[var(--radius-sm)] bg-[color:var(--accent)] px-10 py-2 text-sm font-medium text-black transition hover:opacity-90";

  return (
    <article className="group overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-card)] transition duration-200 hover:border-[color:var(--accent)] hover:shadow-[var(--shadow-glow)]">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />

      <div className="p-6">
        <header className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-[color:var(--text-heading)]">
            {title}
          </h3>

          <div className="text-right">
            <p className="font-mono-custom text-3xl font-bold text-[color:var(--text-heading)]">
              {value}
            </p>

            <p className="mt-1 text-sm text-[color:var(--text-muted)]">
              {label}
            </p>
          </div>
        </header>

        <p className="mt-4 text-sm leading-7">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--text-muted)] bg-[color:var(--bg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-heading)] "
            >
              {badge}
            </li>
          ))}
        </ul>

        <footer className="mt-6 flex flex-wrap items-center  gap-4 text-sm font-medium ">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryLinkStyle}
          >
            Live Demo ↗
          </a>

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
            className={`${linkStyle} flex items-center gap-1.5`}
          >
            <SiGithub size={24} aria-hidden="true" />
          </a>

          <Link href={`/projects/${caseStudy}`} className={linkStyle}>
            Case Study →
          </Link>
        </footer>
      </div>
    </article>
  );
}
