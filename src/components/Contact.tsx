import { Phone } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* ------------------------------------------------------------------ */
/* Contact — direct contact info only                                */
/* ------------------------------------------------------------------ */
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="contact" title="Contact With Me" />

        <div className="max-w-2xl">
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="link-sweep inline-block break-all font-display text-xl font-medium hover:text-accent sm:text-2xl"
            >
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={70}>
            <a
              href={profile.phoneHref}
              className="mt-5 inline-flex items-center gap-2.5 font-mono text-sm tracking-wide text-muted transition-colors hover:text-ink"
            >
              <Phone className="h-4 w-4 text-accent" />
              {profile.phone}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-7">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.id === "instagram" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="link-sweep inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}