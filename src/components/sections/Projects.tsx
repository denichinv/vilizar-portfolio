"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";

import Section from "@/components/layout/Section";
import ProjectCard from "@/components/sections/ProjectCard";
import { featuredProjects } from "@/data/projects";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const desktopMediaQuery = "(min-width: 768px)";

function subscribeToDesktopLayout(onChange: () => void) {
  const mediaQuery = window.matchMedia(desktopMediaQuery);
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
}

function getDesktopLayoutSnapshot() {
  return window.matchMedia(desktopMediaQuery).matches;
}

function getServerLayoutSnapshot() {
  return false;
}

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopLayout,
    getDesktopLayoutSnapshot,
    getServerLayoutSnapshot,
  );
  const visibleProjects = isDesktop ? 2 : 1;
  const lastIndex = Math.max(featuredProjects.length - visibleProjects, 0);
  const currentIndex = Math.min(activeIndex, lastIndex);

  const scrollToProject = (index: number) => {
    const carousel = carouselRef.current;
    const target = carousel?.children.item(index) as HTMLElement | null;
    const firstProject = carousel?.children.item(0) as HTMLElement | null;

    if (!carousel || !target || !firstProject) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    carousel.scrollTo({
      left: target.offsetLeft - firstProject.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActiveIndex(index);
  };

  const syncActiveProject = () => {
    const carousel = carouselRef.current;
    const firstProject = carousel?.children.item(0) as HTMLElement | null;

    if (!carousel || !firstProject) return;

    const projectStep = firstProject.offsetWidth + 32;
    const nextIndex = Math.min(
      Math.max(Math.round(carousel.scrollLeft / projectStep), 0),
      lastIndex,
    );

    setActiveIndex(nextIndex);
  };

  return (
    <Section id="work" className="py-24 md:py-32">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl">Selected Work</h2>

        <p className="mt-4 max-w-2xl text-lg text-[color:var(--text-muted)]">
          A selection of projects showcasing modern front-end development,
          testing and real-world problem solving.
        </p>
      </motion.div>

      <div className="relative mt-12">
        <button
          type="button"
          aria-label="Show previous project"
          disabled={currentIndex === 0}
          onClick={() => scrollToProject(currentIndex - 1)}
          className="absolute top-1/2 left-0 z-10 flex size-11 -translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-heading)] shadow-[var(--shadow-card)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-30 md:-translate-x-1/2 lg:-translate-x-[calc(100%+1rem)]"
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <motion.div
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          onScroll={syncActiveProject}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${featuredProjects.length}`}
              variants={cardVariants}
              className="h-auto min-w-0 shrink-0 basis-full snap-start md:basis-[calc((100%-2rem)/2)]"
            >
              <ProjectCard {...project} priority={index < 2} />
            </motion.div>
          ))}
        </motion.div>

        <button
          type="button"
          aria-label="Show next project"
          disabled={currentIndex === lastIndex}
          onClick={() => scrollToProject(currentIndex + 1)}
          className="absolute top-1/2 right-0 z-10 flex size-11 translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-heading)] shadow-[var(--shadow-card)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-30 md:translate-x-1/2 lg:translate-x-[calc(100%+1rem)]"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </Section>
  );
}
