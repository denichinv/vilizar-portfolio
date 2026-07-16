import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { contact } from "@/data/contact";

export default function Footer() {
  const iconLinkStyle =
    "text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--accent)]";

  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-6 px-6 py-8 md:items-center md:px-8">
        <address className="not-italic">
          <p className="font-medium text-[color:var(--text-heading)]">
            {contact.name}
          </p>

          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            {contact.role}
          </p>
        </address>

        <div className="flex items-center gap-5">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLinkStyle}
          >
            <FaGithub size={20} />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLinkStyle}
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className={iconLinkStyle}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
