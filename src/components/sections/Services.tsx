"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { servicePackages } from "@/data/services";
import Section from "@/components/layout/Section";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <Section id="services" className="py-24 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <p className="font-mono-custom text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Website Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">Need a website?</h2>

          <p className="mt-6 text-lg leading-8 text-[color:var(--text-muted)]">
            I build responsive, accessible websites for individuals and small
            businesses. Choose a starting package or contact me for a tailored
            quote.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {servicePackages.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className={`relative flex h-full flex-col rounded-2xl border bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card)] ${
                service.featured
                  ? "border-[color:var(--accent)]"
                  : "border-[color:var(--border)]"
              }`}
            >
              {service.featured ? (
                <p className="absolute right-5 top-5 rounded-full bg-[color:var(--accent-dim)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]">
                  Most popular
                </p>
              ) : null}

              <h3 className="max-w-[75%] text-2xl">{service.title}</h3>

              <p className="mt-6">
                <span className="text-sm text-[color:var(--text-muted)]">
                  From
                </span>

                <span className="ml-2 font-mono-custom text-4xl font-bold text-[color:var(--text-heading)]">
                  {service.price}
                </span>
              </p>

              <p className="mt-5 min-h-20 leading-7 text-[color:var(--text-muted)]">
                {service.description}
              </p>

              <ul className="mb-8 mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[color:var(--accent)]"
                    />

                    <span className="text-sm leading-6">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[color:var(--border)] px-5 text-sm font-medium text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Discuss this package
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 border-l-2 border-[color:var(--accent)] pl-5"
        >
          <p className="max-w-4xl leading-7 text-[color:var(--text-muted)]">
            Introductory pricing is available for a limited number of projects
            while I expand my client portfolio. Final pricing depends on the
            content, functionality and delivery timeline.
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-[color:var(--text-muted)]">
            Domain registration, hosting subscriptions, paid services,
            copywriting and professional photography are not included unless
            agreed separately.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
