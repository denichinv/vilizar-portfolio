"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/contact";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--bg-navbar)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8"
      >
        <a
          href="/"
          onClick={closeMenu}
          className="font-mono-custom text-sm font-semibold tracking-[-0.04em] text-[color:var(--text-heading)]"
        >
          V. Denichin
        </a>

        <div className="hidden items-center gap-6 text-sm text-[color:var(--text-muted)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[color:var(--text-heading)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius-sm)] border border-[color:var(--border)] px-3 py-2 text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Book a Call
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[color:var(--border)] text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[color:var(--border)] bg-[color:var(--bg-navbar)] px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[color:var(--text-muted)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-[var(--radius-sm)] px-3 py-3 transition hover:bg-[color:var(--surface)] hover:text-[color:var(--text-heading)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://calendly.com/vilizar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-[var(--radius-sm)] border border-[color:var(--accent)] px-3 py-3 text-center font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent)] hover:text-black"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
