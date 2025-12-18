export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-white/50">
        <span className="h-px w-10 bg-white/15" />
        <span>{kicker}</span>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>
      ) : null}
    </div>
  );
}
