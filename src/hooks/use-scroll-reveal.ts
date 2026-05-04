import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` class when the element enters the viewport.
 * Pair with the `.reveal` class defined in styles.css.
 *
 * Options:
 *  - threshold: IntersectionObserver threshold (default 0.15)
 *  - once: stop observing after first reveal (default true)
 *  - rootMargin: viewport margin (default "0px 0px -10% 0px")
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(options?: {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const threshold = options?.threshold ?? 0.15;
    const once = options?.once ?? true;
    const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once, options?.rootMargin]);

  return ref;
}

/**
 * Auto-applies reveal animations to all elements matching `.reveal` inside
 * the document. Call once at app root. Re-scans on route changes via the
 * `pathname` arg (any changing key works).
 *
 * Supports stagger via `data-stagger="120"` on a parent — direct children
 * with `.reveal` will receive incremental `transition-delay`.
 */
export function useGlobalScrollReveal(pathname?: string) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Apply stagger delays to children inside [data-stagger]
    const staggerRoots = document.querySelectorAll<HTMLElement>("[data-stagger]");
    staggerRoots.forEach((root) => {
      const step = Number(root.dataset.stagger) || 100;
      const children = root.querySelectorAll<HTMLElement>(":scope > .reveal, :scope > * > .reveal, :scope .stagger-item");
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * step}ms`;
      });
    });

    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    if (prefersReduced) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => {
      if (!t.classList.contains("is-visible")) observer.observe(t);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
