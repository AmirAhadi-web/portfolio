import { useCallback, useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navLinks } from "./data/portfolio";

type Theme = "dark" | "light";

/**
 * Root component — owns global state (theme, overlay menu, scroll-spy)
 * and composes every section. The hero anchors the landing view; all
 * other sections are reached through the fullscreen overlay menu.
 */
export default function App() {
  // ------------------------------ Theme ------------------------------
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("portfolio-theme") as Theme) || "dark";
  });

  // Reflect the theme on <html> and persist the choice
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // --------------------------- Overlay menu ---------------------------
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // --------------------------- Scroll state ---------------------------
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  // Thin reading-progress bar along the very top of the viewport
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: marks whichever section currently occupies the viewport middle
  useEffect(() => {
    const ids = ["home", ...navLinks.map((link) => link.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // --------------------------- Navigation -----------------------------
  /** Smooth-scroll to a section; closes the overlay first when needed. */
  const handleNavigate = useCallback(
    (id: string) => {
      const wasOpen = menuOpen;
      setMenuOpen(false);
      const el = document.getElementById(id);
      if (!el) return;
      // Small delay lets the overlay finish its exit fade before scrolling
      window.setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        wasOpen ? 280 : 0
      );
    },
    [menuOpen]
  );

  return (
    <div className="relative min-h-screen bg-bg font-sans text-ink selection:bg-accent selection:text-accent-ink">
      {/* Ambient background — page rails, dot grid + slowly drifting accent glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-dots" />
        {/* vertical hairline rails framing the content column */}
        <div className="absolute inset-y-0 hidden border-l border-line/70 lg:block" style={{ left: "max(1.25rem, calc(50% - 36rem))" }} />
        <div className="absolute inset-y-0 hidden border-l border-line/70 lg:block" style={{ left: "calc(100% - max(1.25rem, calc(50% - 36rem)))" }} />
        <div className="absolute -top-40 right-[-12%] h-[36rem] w-[36rem] animate-drift rounded-full bg-glow blur-[120px]" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-glow blur-[120px]" />
      </div>

      {/* Film-grain overlay */}
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.05]" />

      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />

      <Cursor />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
        onNavigate={handleNavigate}
      />

      <MenuOverlay
        open={menuOpen}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onClose={() => setMenuOpen(false)}
      />

      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
