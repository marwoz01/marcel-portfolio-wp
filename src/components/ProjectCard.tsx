type ProjectAccess = "public" | "demo-only" | "private";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  demo?: string;
  github?: string;
  image?: string;
  tagline?: string;
  access?: ProjectAccess;
};

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.06]">
      {/* IMAGE */}
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-white/40">
            Add project screenshot
          </div>
        )}
      </div>

      {/* HEADER */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium">{p.title}</h3>
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/50">
          Project
        </span>
      </div>

      {/* TAGLINE */}
      {p.tagline && <p className="mt-2 text-sm text-white/70">{p.tagline}</p>}

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.desc}</p>

      {/* STACK */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="mt-5 flex flex-col gap-2 text-xs">
        <div className="flex flex-wrap gap-3">
          {p.demo && (
            <a
              className="rounded-full border border-white/15 bg-white px-4 py-2 uppercase tracking-[0.18em] text-black hover:bg-white/90"
              href={p.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}

          {p.github && (
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 uppercase tracking-[0.18em] text-white/80 hover:bg-white/10"
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>

        {!p.github && p.access === "private" && (
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Source code private
          </span>
        )}
      </div>
    </article>
  );
}
