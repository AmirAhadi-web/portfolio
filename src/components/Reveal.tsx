import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* useInView — fires (once) when an element scrolls into the viewport */
/* ------------------------------------------------------------------ */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // reveal only once
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/* Reveal — fade + rise wrapper for scroll-triggered entrances        */
/* ------------------------------------------------------------------ */
type RevealProps = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  /** vertical offset (px) before the element reveals */
  y?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        inView ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
