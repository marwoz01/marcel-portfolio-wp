import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsCarousel({ projects }: { projects: any[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 16;
    const amount = cardWidth + gap;

    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          onClick={() => scrollByCards("prev")}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80 hover:bg-white/10"
          type="button"
        >
          Prev
        </button>
        <button
          onClick={() => scrollByCards("next")}
          className="rounded-full border border-white/15 bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-black hover:bg-white/90"
          type="button"
        >
          Next
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {projects.map((p) => (
          <div
            key={p.title}
            data-card
            className={`
  snap-start shrink-0
  w-[90%]
  sm:w-[75%]
  md:w-[calc((100%-1rem)/2)]
  lg:w-[calc((100%-2rem)/3)]
`}
          >
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
