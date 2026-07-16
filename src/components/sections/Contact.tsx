"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, CalendarDays, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Section from "@/components/layout/Section";
import { contact } from "@/data/contact";

const containerVariants: Variants = {
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
      staggerChildren: 0.16,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const linksVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card)] md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div variants={itemVariants}>
            <p className="font-mono-custom text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Contact
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
              Let&apos;s build something worth showing.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
              If you&apos;re hiring for a front-end role, working on a product,
              or just want to talk React, TypeScript and clean UI, I&apos;d be
              happy to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                <Mail size={16} aria-hidden="true" />
                Email me
              </a>

              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[color:var(--border)] px-5 py-3 text-sm font-medium text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <CalendarDays size={16} aria-hidden="true" />
                Book a 15-minute call
              </a>
            </div>
          </motion.div>

          <motion.div variants={linksVariants} className="space-y-4">
            <motion.a
              variants={itemVariants}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] p-4 transition hover:border-[color:var(--accent)]"
            >
              <span className="flex items-center gap-3 text-sm text-[color:var(--text-muted)]">
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </span>

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="text-[color:var(--text-heading)]"
              />
            </motion.a>

            <motion.a
              variants={itemVariants}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] p-4 transition hover:border-[color:var(--accent)]"
            >
              <span className="flex items-center gap-3 text-sm text-[color:var(--text-muted)]">
                <FaLinkedin size={18} aria-hidden="true" />
                LinkedIn
              </span>

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="text-[color:var(--text-heading)]"
              />
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] p-4 text-sm text-[color:var(--text-muted)]"
            >
              <MapPin size={18} aria-hidden="true" />
              {contact.location}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
