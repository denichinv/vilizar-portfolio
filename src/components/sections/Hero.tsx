"use client";
import Section from "@/components/layout/Section";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="hero-background absolute inset-0 -z-20" />

      <div className="hero-grid absolute inset-0 -z-10" />

      <motion.div
        className="max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]"
        >
          Front-End Developer
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl tracking-[-0.03em] text-[color:var(--text-heading)] md:text-7xl"
        >
          Building interfaces that work.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-lg leading-8"
        >
          Front-End Developer · React · TypeScript · Next.js
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--accent)] px-6 text-sm font-medium text-black transition-opacity duration-200 hover:opacity-90"
          >
            View Work
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[color:var(--border)] px-6 text-sm font-medium text-[color:var(--text-heading)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
