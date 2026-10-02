import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** About — one short paragraph. That's the whole story. */
export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="about" title="A bit about me" />
        <Reveal>
          <p className="max-w-2xl text-xl leading-[1.6] sm:text-2xl sm:leading-[1.55]">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
