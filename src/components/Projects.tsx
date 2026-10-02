import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Work — a clean two-column grid. Every project shows its screenshot
 * permanently, above its title, so nothing is hidden behind a hover.
 */
export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="selected work" title="Projects" />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90} y={24}>
              <article className="group">
                {/* Screenshot — always visible, above each project */}
                <div className="relative overflow-hidden rounded-2xl border border-line bg-card">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[0.65rem] tracking-widest backdrop-blur-md">
                    {project.index}
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  {/* Clickable project title linked to GitHub repo */}
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 hover:text-accent">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
                </div>

                <p className="mt-2 text-sm text-muted">{project.blurb}</p>
                <p className="mt-1.5 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {project.stack}
                </p>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    Live
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Everything else */}
        <Reveal y={16}>
          <a
            href="https://github.com/AmirAhadi-web"
            target="_blank"
            rel="noreferrer"
            className="group mt-14 flex items-center justify-between gap-6 border-t border-line pt-6"
          >
            <span className="font-display font-medium text-muted transition-colors duration-300 group-hover:text-accent">
              More on GitHub
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}