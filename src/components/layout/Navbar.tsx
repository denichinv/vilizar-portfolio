export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--bg-navbar)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8"
      >
        <a
          href="/"
          className="font-mono-custom text-sm font-semibold tracking-[-0.04em] text-[color:var(--text-heading)]"
        >
          V. Denichin
        </a>

        <div className="flex items-center gap-6 text-sm text-[color:var(--text-muted)]">
          <a
            href="#work"
            className="transition hover:text-[color:var(--text-heading)]"
          >
            Work
          </a>
          <a
            href="#about"
            className="transition hover:text-[color:var(--text-heading)]"
          >
            About
          </a>
          <a
            href="mailto:denichinv@gmail.com"
            className="transition hover:text-[color:var(--text-heading)]"
          >
            Contact
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius-sm)] border border-[color:var(--border)] px-3 py-2 text-[color:var(--text-heading)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
