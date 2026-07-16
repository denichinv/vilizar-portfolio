"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";

const skillGroups = [
  {
    title: "Core Frontend",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Quality & Testing",
    skills: [
      "Vitest",
      "Jest",
      "Playwright",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "GitHub Actions", "REST APIs", "Vite"],
  },
];

const interests = ["⚽ Football", "🏋️ Gym", "🥾 Hiking", "✈️ Travel"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants: Variants = {
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

const skillsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <Section id="about" className="py-24 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={itemVariants}>
          <Image
            src="/images/about/about-pic-dark.webp"
            alt="Portrait of Vilizar Denichin"
            width={220}
            height={220}
            className="mx-auto rounded-full border border-[color:var(--border)] object-cover shadow-[var(--shadow-card)]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mt-8 font-mono-custom text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
            About
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">Hi, I&apos;m Vilizar 👋</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 space-y-6 text-left text-lg leading-8 text-[color:var(--text-muted)]"
        >
          <p>
            I&apos;m a self-taught Front-End Developer originally from{" "}
            <span className="font-medium text-[color:var(--text-heading)]">
              Bulgaria
            </span>
            , now based in{" "}
            <span className="font-medium text-[color:var(--text-heading)]">
              Dunstable, UK
            </span>
            .
          </p>

          <p>
            I started learning to code out of curiosity. What began as online
            courses and small personal projects gradually became something I
            wanted to pursue professionally.
          </p>

          <p>
            Since then, I&apos;ve focused on React, TypeScript and Next.js,
            building projects that helped me understand not only how to make
            interfaces work, but how to structure them clearly, test them and
            keep the code maintainable as the project grows.
          </p>

          <p>
            What motivates me most is understanding <em>why</em> a solution
            works, improving the way I think about software, and continuing to
            grow toward my first role as part of a real development team.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-sm font-medium text-[color:var(--text-heading)]">
            Tools and technologies I work with
          </p>

          <motion.div
            variants={skillsVariants}
            className="mt-5 grid gap-4 md:grid-cols-3"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-left shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-medium text-[color:var(--text-heading)]">
                  {group.title}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-sm font-medium text-[color:var(--text-heading)]">
            Outside of development
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
