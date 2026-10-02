import { education, experience, type TimelineItem } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* One flat list per group — hairlines, roles, periods */
function EntryList({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="border-b border-line pb-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          {heading}
        </h3>
      </Reveal>
      <ul>
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} y={18}>
            <li className="group border-b border-line py-5 transition-[padding] duration-300 hover:pl-3 sm:py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h4 className="font-display text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h4>
                <span className="shrink-0 font-mono text-xs text-muted">{item.period}</span>
              </div>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                {item.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/** Path — work and school, one line each. */
export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="the path" title="Where I've been" />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-14">
          <EntryList heading="Work" items={experience} />
          <EntryList heading="College" items={education} />
        </div>
      </div>
    </section>
  );
}
