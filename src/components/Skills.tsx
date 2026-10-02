import { Fragment } from "react";
import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Toolbox — grouped tools in big type, nothing more. */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="toolbox" title="What I use" />

        <ul className="border-b border-line">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} y={20}>
              <li className="grid items-baseline gap-3 border-t border-line py-7 sm:grid-cols-12 sm:py-8">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:col-span-3">
                  {group.title}
                </h3>
                <p className="font-display text-xl font-medium leading-[1.45] sm:col-span-9 sm:text-[1.7rem]">
                  {group.items.map((item, j) => (
                    <Fragment key={item}>
                      <span className="cursor-default transition-colors duration-300 hover:text-accent">
                        {item}
                      </span>
                      {j < group.items.length - 1 && <span className="text-accent/50"> · </span>}
                    </Fragment>
                  ))}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
