import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

/**
 * Hero — the name, one sentence, two links, one photo. Nothing else.
 */
export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open To Work
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[3.4rem] font-semibold leading-[0.98] tracking-tight [font-size:clamp(3.4rem,9vw,7.5rem)]">
              Amir Mohammad Ahadi
              <span className="mt-2 block text-[0.42em] font-medium text-muted">
                front-end developer<span className="text-accent">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-7 max-w-sm text-lg leading-relaxed text-muted">{profile.intro}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <button
                onClick={() => onNavigate("projects")}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-accent-ink transition-all duration-300 hover:shadow-[0_12px_40px_-10px] hover:shadow-accent/50 hover:brightness-105 active:scale-95"
              >
                View Projects
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="link-sweep inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted hover:text-ink"
              >
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Portrait — full color; tilts, lifts and glows on hover */}
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <Reveal delay={320} y={32}>
            <div className="group relative w-56 rounded-[1.75rem] border border-line bg-card p-2 transition-all duration-500 hover:-rotate-1 hover:scale-[1.02] hover:border-accent/50 sm:w-64 lg:w-80">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full bg-glow opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <img
                src="/images/portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Ghost outline type — clipped by the section edge */}
      <span
        aria-hidden
        className="text-ghost pointer-events-none absolute -bottom-7 right-0 hidden select-none font-display text-[8rem] font-bold leading-none tracking-tight xl:text-[10rem] lg:block"
      >
        Ahadi
      </span>

      {/* Blueprint details — plus markers + Berlin coordinates */}
      <span aria-hidden className="absolute left-6 top-24 select-none font-mono text-sm text-muted/50 sm:left-10">
        *
      </span>
      <span aria-hidden className="absolute bottom-28 left-[12%] hidden select-none font-mono text-sm text-muted/50 md:block">
        *
      </span>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden>
      </div>
    </section>
  );
}
