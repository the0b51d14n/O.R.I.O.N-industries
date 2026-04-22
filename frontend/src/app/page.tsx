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

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      animId = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(loop);

    const hoverEls = document.querySelectorAll<HTMLElement>("a,button,.domain-card,.value-card,.project-card,.shop-cat");
    const onEnter = () => { ring.style.width = "56px"; ring.style.height = "56px"; ring.style.borderColor = "rgba(255,255,255,0.5)"; };
    const onLeave = () => { ring.style.width = "36px"; ring.style.height = "36px"; ring.style.borderColor = "rgba(255,255,255,0.35)"; };
    hoverEls.forEach((el) => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.07 });
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      hoverEls.forEach((el) => { el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave); });
      obs.disconnect();
    };
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