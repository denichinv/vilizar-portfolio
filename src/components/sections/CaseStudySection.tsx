type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function CaseStudySection({
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section className={`mt-16 ${className}`}>
      <h2 className="text-3xl text-[color:var(--text-heading)]">{title}</h2>

      <div className="mt-6 max-w-3xl leading-8 text-[color:var(--text-muted)]">
        {children}
      </div>
    </section>
  );
}
