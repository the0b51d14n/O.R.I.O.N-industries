"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import DomainsSection from "@/components/home/DomainsSection";
import StatsSection from "@/components/home/StatsSection";
import ProjectsTeaser from "@/components/home/ProjectsTeaser";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Force scroll to top on every mount / refresh
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Custom cursor
  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      animId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(loop);

    const onEnter = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "rgba(255,255,255,0.5)";
    };
    const onLeave = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(255,255,255,0.35)";
    };

    const interactives = document.querySelectorAll<HTMLElement>("a, button");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Scroll reveal — also triggers elements already in viewport on load
  useEffect(() => {
    // Small delay to let the scroll-to-top settle before observing
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".rv");

      // Reset all first so re-reveals work correctly on refresh
      els.forEach(el => el.classList.remove("in"));

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach(el => obs.observe(el));

      return () => obs.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />

      <HeroSection />
      <DomainsSection />
      <StatsSection />
      <ProjectsTeaser />
      <FeaturedProducts />
      <NewsletterSection />
    </>
  );
}