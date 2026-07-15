"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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

export default function Projects() {
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

      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        {featuredProjects.map((project, index) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard {...project} priority={index < 2} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
