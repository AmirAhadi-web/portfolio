import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

/** Colophon — one quiet hairline row to close the page. */
export default function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-8 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted sm:flex-row sm:items-center sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </span>
        
        <button
          onClick={() => onNavigate("home")}
          className="link-sweep inline-flex items-center gap-1.5 hover:text-ink"
        >
          back to the top
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
