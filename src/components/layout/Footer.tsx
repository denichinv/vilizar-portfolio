import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function Footer() {
  const iconLinkStyle =
    "text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--accent)]";
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <address className="not-italic">
          <p className="font-medium text-[color:var(--text-heading)]">
            Vilizar Denichin
          </p>

          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            Front-End Developer
          </p>

          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            Dunstable, UK
          </p>
        </address>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/denichinv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLinkStyle}
          >
            <FaGithub size={20} />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLinkStyle}
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:YOUR_EMAIL"
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
