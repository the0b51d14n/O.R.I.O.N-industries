"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*/<>[]{}|^~";

interface DecryptTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  tag?: ElementType;
}

export default function DecryptText({
  text,
  delay = 0,
  duration = 3500,
  className,
  style,
  tag: Tag = "span",
}: DecryptTextProps) {
  const elRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const chars = text.split("");
    const len = chars.length;

    const runDecrypt = () => {
      // Annuler toute animation précédente
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      // Ordre de résolution aléatoire
      const resolveOrder = chars.map((_, i) => i).sort(() => Math.random() - 0.5);
      const resolvedAt = new Array<number>(len);
      resolveOrder.forEach((charIdx, orderIdx) => {
        resolvedAt[charIdx] = 0.15 + (orderIdx / len) * 0.85;
      });

      let startTs: number | null = null;

      timeoutRef.current = setTimeout(() => {
        const animate = (ts: number) => {
          if (startTs === null) startTs = ts;
          const progress = Math.min((ts - startTs) / duration, 1);

          el.textContent = chars
            .map((char, i) => {
              if (char === " ") return " ";
              if (progress >= resolvedAt[i]) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            el.textContent = text;
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      }, delay);
    };

    // Initialiser avec des espaces
    el.textContent = chars.map(() => " ").join("");

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runDecrypt();
        } else {
          // Reset quand l'élément quitte l'écran → se rejouera à la prochaine apparition
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          el.textContent = chars.map(() => " ").join("");
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay, duration]);

  return (
    <Tag
      ref={elRef}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", ...style }}
      aria-label={text}
    >
      {text.split("").map(() => " ").join("")}
    </Tag>
  );
}