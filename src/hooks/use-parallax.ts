import { useEffect, useRef } from "react";

/**
 * Applies a translateY parallax to a target element based on its position
 * relative to the viewport. Uses a single rAF loop and a passive scroll
 * listener for smoothness.
 *
 * speed = 0.4 means the element moves at 40% of scroll velocity.
 * Positive = moves up slower than scroll (background feel).
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  speed = 0.4,
  options?: { scale?: boolean },
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let frame = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Distance from viewport center to element center (px)
      const elCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;
      const delta = elCenter - viewportCenter;

      // Only animate when remotely near viewport for perf
      if (rect.bottom < -200 || rect.top > viewportH + 200) {
        ticking = false;
        return;
      }

      const translateY = -delta * speed;
      let transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;

      if (options?.scale) {
        // Subtle scale based on proximity to center (1.0 -> 1.08)
        const proximity = 1 - Math.min(Math.abs(delta) / viewportH, 1);
        const scale = 1 + proximity * 0.08;
        transform += ` scale(${scale.toFixed(3)})`;
      }

      el.style.transform = transform;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed, options?.scale]);

  return ref;
}
