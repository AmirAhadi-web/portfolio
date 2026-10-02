import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** small eyebrow label, e.g. "about" */
  label: string;
  /** short display title ending in an accent period */
  title: ReactNode;
};

/** Minimal section header — one label, one word, one accent dot. */
export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <Reveal>
        <div className="border-b border-line pb-3.5">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-8 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
          <span className="text-accent">.</span>
        </h2>
      </Reveal>
    </div>
  );
}
