"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animationMap: Record<string, string> = {
      up: "fade-in-up 0.7s ease-out forwards",
      left: "slide-in-left 0.7s ease-out forwards",
      right: "slide-in-right 0.7s ease-out forwards",
      scale: "scale-in 0.7s ease-out forwards",
    };

    el.style.opacity = "0";
    el.style.animationPlayState = "paused";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.animation = animationMap[direction];
            el.style.animationDelay = `${delay}ms`;
            el.style.animationPlayState = "running";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
