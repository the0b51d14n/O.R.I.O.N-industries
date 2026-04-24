"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*/<>[]{}|^~";

interface DecryptTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  tag?: string;
}

export default function DecryptText({
  text,
  delay = 0,
  duration = 3500,
  className,
  style,
  tag: _tag = "span",
}: DecryptTextProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Remplace le wrapper span par le bon tag dans le DOM
    const tag = _tag;
    const el = document.createElement(tag);
    el.setAttribute("aria-label", text);
    el.style.fontVariantNumeric = "tabular-nums";
    if (className) el.className = className;
    if (style) Object.assign(el.style, style);
    wrap.replaceWith(el);

    const chars = text.split("");
    const len = chars.length;

    const runDecrypt = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const resolvedAt = new Array<number>(len);
      chars
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .forEach((charIdx, orderIdx) => {
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

    const reset = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.textContent = chars.map(() => " ").join("");
    };

    el.textContent = chars.map(() => " ").join("");

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runDecrypt();
        else reset();
      },
      { threshold: 0.1 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Remettre le span placeholder pour le prochain montage
      el.replaceWith(wrap);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={wrapRef}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", ...style }}
      aria-label={text}
    />
  );
}