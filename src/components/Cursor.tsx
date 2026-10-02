import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

/**
 * Custom cursor — a small accent dot locked to the pointer plus a
 * trailing ring that eases toward it. The ring expands over any
 * interactive element. Rendered only on fine-pointer devices.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Skip entirely on touch / coarse-pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const pointer = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    // Expand the ring whenever an interactive element is hovered
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, input, textarea, select, label, [data-cursor]"));
    };

    // rAF loop: dot follows instantly, ring lerps behind it
    const loop = () => {
      ring.x += (pointer.x - ring.x) * 0.16;
      ring.y += (pointer.y - ring.y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={cn(
          "fixed left-0 top-0 rounded-full border border-ink/25 transition-[width,height,background-color,border-color] duration-300",
          hovering ? "h-14 w-14 border-accent/70 bg-accent/10" : "h-9 w-9"
        )}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className={cn(
          "fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-200",
          hovering && "opacity-0"
        )}
      />
    </div>
  );
}
