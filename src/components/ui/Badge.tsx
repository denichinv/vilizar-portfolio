type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-1 text-sm text-[color:var(--text-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-heading)]">
      {children}
    </span>
  );
}
