import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { profile } from "../data/portfolio";
import { cn } from "../utils/cn";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (id: string) => void;
};

/**
 * Fixed top bar — wordmark, theme toggle, hamburger. Nothing else.
 */
export default function Navbar({ theme, onToggleTheme, menuOpen, onToggleMenu, onNavigate }: NavbarProps) {
  // Adds a blurred backdrop once the page is scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled && !menuOpen ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        {/* Wordmark */}
        <button
          onClick={() => onNavigate("home")}
          aria-label="Back to top"
          className="font-display text-lg font-semibold tracking-tight outline-none transition-colors hover:text-accent"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </button>

        {/* Theme toggle + hamburger */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="group grid h-10 w-10 place-items-center rounded-full border border-line transition-all duration-300 hover:border-ink/40 hover:text-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12" />
            )}
          </button>

          {/* Hamburger — morphs into a close icon */}
          <button
            onClick={onToggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="group flex h-10 items-center gap-3 rounded-full border border-line pl-4 pr-4 transition-all duration-300 hover:border-ink/40"
          >
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted group-hover:text-ink sm:block">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute right-0 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "top-1/2 w-5 -translate-y-1/2 rotate-45" : "top-[3.5px] w-5 group-hover:w-3"
                )}
              />
              <span
                className={cn(
                  "absolute right-0 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-[3.5px] w-3 group-hover:w-5"
                )}
              />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
