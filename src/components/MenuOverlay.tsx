import { useEffect } from "react";
import { navLinks, profile, socials } from "../data/portfolio";
import { cn } from "../utils/cn";

type MenuOverlayProps = {
  open: boolean;
  activeSection: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
};

/**
 * Full-screen menu — five links, one email, nothing else.
 * Staggered over a frosted backdrop.
 */
export default function MenuOverlay({ open, activeSection, onNavigate, onClose }: MenuOverlayProps) {
  // Close on Escape for accessibility
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div aria-hidden={!open} className={cn("fixed inset-0 z-40", !open && "pointer-events-none")}>
      {/* Frosted backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-bg/90 backdrop-blur-xl transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel content */}
      <div
        className={cn(
          "relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24 transition-all duration-500 sm:px-10 lg:px-16",
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <nav
          aria-label="Main menu"
          className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-6"
        >
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  "group flex items-baseline gap-5 border-b border-line py-4 text-left transition-all duration-500 sm:gap-7 sm:py-5",
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: open ? `${120 + i * 65}ms` : "0ms" }}
              >
                <span className={cn("font-mono text-xs", isActive ? "text-accent" : "text-muted")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-4xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent sm:text-6xl",
                    isActive && "text-accent"
                  )}
                >
                  {link.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer strip — email + socials */}
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-8 gap-y-4 pt-4">
          <a
            href={`mailto:${profile.email}`}
            tabIndex={open ? 0 : -1}
            className="link-sweep font-display font-medium hover:text-accent"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.id === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
                className="link-sweep font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
