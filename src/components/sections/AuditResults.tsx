type AuditResultsProps = {
  source: string;
  date: string;
  reportUrl: string;
  metrics: { value: string; label: string }[];
};

export default function AuditResults({
  source,
  date,
  reportUrl,
  metrics,
}: AuditResultsProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-card)]">
      <dl className="grid sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-b border-[color:var(--border)] p-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
          >
            <dd className="font-mono-custom text-4xl font-bold text-[color:var(--accent)]">
              {metric.value}
            </dd>
            <dt className="mt-2 text-sm text-[color:var(--text-muted)]">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-4 border-t border-[color:var(--border)] p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          <span className="text-[color:var(--text-heading)]">{source}</span>
          <span aria-hidden="true"> · </span>
          <span>{date}</span>
        </p>

        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-sm font-medium text-[color:var(--text-heading)] transition hover:text-[color:var(--accent)]"
        >
          View audit report <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
