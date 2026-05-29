"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms: Record<string, string> = {
      up: "translateY(50px)",
      down: "translateY(-50px)",
      left: "translateX(-60px)",
      right: "translateX(60px)",
      scale: "scale(0.9)",
    };

    el.style.opacity = "0";
    el.style.transform = transforms[direction];
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translate(0) scale(1)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
