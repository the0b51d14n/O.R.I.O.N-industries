"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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

  const domains = [
    { n: "01", name: "Informatique", desc: "Développement logiciel, systèmes embarqués, intelligence artificielle locale et architectures haute performance.", tag: "Software & Systems" },
    { n: "02", name: "Électronique", desc: "Conception de circuits, prototypage PCB, intégration hardware-software et systèmes de contrôle sur mesure.", tag: "Hardware Design" },
    { n: "03", name: "Ingénierie", desc: "Solutions techniques complexes, modélisation, simulation et optimisation de systèmes industriels et numériques.", tag: "Engineering" },
    { n: "04", name: "Domotique", desc: "Automatisation résidentielle et professionnelle, interfaces de contrôle intelligentes et systèmes adaptatifs.", tag: "Smart Building" },
    { n: "05", name: "IoT", desc: "Réseaux de capteurs, protocoles de communication, collecte et analyse de données en temps réel.", tag: "Connected Devices" },
    { n: "06", name: "Sciences", desc: "Recherche appliquée, expérimentation, modélisation scientifique et transfert technologique.", tag: "R&D" },
  ];

  const values = [
    { idx: "01", title: "Souveraineté technologique", desc: "Nous concevons des solutions qui restent sous le contrôle total de l'utilisateur. Pas de dépendance cloud imposée, pas de boîte noire." },
    { idx: "02", title: "Excellence technique", desc: "Chaque projet est abordé avec rigueur et précision. Nous refusons la médiocrité et visons des standards d'ingénierie irréprochables." },
    { idx: "03", title: "Innovation continue", desc: "La technologie évolue. Nous aussi. Veille permanente, prototypage rapide et intégration des dernières avancées dans chaque solution." },
    { idx: "04", title: "Transparence totale", desc: "Nos systèmes sont documentés, auditables et explicables. Vous savez toujours ce que fait la technologie que vous utilisez." },
  ];

  const projects = [
    { tag: "Projet phare", title: "ORION AI System", desc: "Couche cognitive locale — IA autonome, commande vocale, contrôle OS natif, mémoire contextuelle. L'assistant système du futur.", status: "En développement", link: "/projects/orion-ai" },
    { tag: "Domotique", title: "ORION Home", desc: "Écosystème domotique unifié. Supervision des appareils, scénarios intelligents, perception humaine — sans cloud, sans compromis.", status: "Planifié", link: "/projects/orion-home" },
    { tag: "IoT Platform", title: "ORION Fabric", desc: "Infrastructure IoT souveraine. Réseau de capteurs, protocoles natifs, tableau de bord temps réel et alertes intelligentes.", status: "Planifié", link: "/projects/orion-fabric" },
  ];

  const stats = [
    { v: "6+", l: "Domaines d'expertise" },
    { v: "100%", l: "Local-first" },
    { v: "∞", l: "Évolutivité" },
    { v: "V1", l: "En développement actif" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600&family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --ink: #09090b; --ink2: #141418; --ink3: #1c1c22;
          --wire: #2a2a32; --dim: #52525e; --mid: #8a8a96;
          --pale: #c8c8d2; --bright: #e8e8ef; --white: #f6f6fa; --pure: #ffffff;
          --lh: rgba(255,255,255,0.055); --lh2: rgba(255,255,255,0.1); --lh3: rgba(255,255,255,0.18);
        }
        html { scroll-behavior: smooth; }
        body { background: var(--ink); color: var(--pale); font-family: 'Outfit', sans-serif; font-weight: 300; font-size: 16px; line-height: 1.65; overflow-x: hidden; cursor: none; }
        #cur { position: fixed; width: 8px; height: 8px; background: var(--pure); border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%,-50%); mix-blend-mode: difference; }
        #cur-ring { position: fixed; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.35); border-radius: 50%; pointer-events: none; z-index: 9998; transform: translate(-50%,-50%); transition: width 0.25s, height 0.25s, border-color 0.25s; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 800; display: flex; align-items: center; justify-content: space-between; padding: 0 56px; height: 72px; border-bottom: 1px solid var(--lh); background: rgba(9,9,11,0.82); backdrop-filter: blur(28px) saturate(180%); }
        .n-logo { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.3em; color: var(--white); text-transform: uppercase; display: flex; align-items: center; gap: 14px; text-decoration: none; }
        .n-logo::before { content: ''; width: 28px; height: 28px; border: 1px solid var(--lh3); border-radius: 50%; flex-shrink: 0; background: radial-gradient(circle at 35% 35%, var(--lh2), transparent); }
        .n-nav { display: flex; gap: 36px; }
        .n-nav a { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.18em; color: var(--dim); text-decoration: none; text-transform: uppercase; transition: color 0.2s; position: relative; }
        .n-nav a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--white); transition: width 0.3s; }
        .n-nav a:hover { color: var(--white); }
        .n-nav a:hover::after { width: 100%; }
        .n-pill { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; color: var(--mid); text-transform: uppercase; border: 1px solid var(--lh2); padding: 8px 18px; border-radius: 999px; display: flex; align-items: center; gap: 8px; text-decoration: none; transition: border-color 0.2s, color 0.2s; }
        .n-pill:hover { border-color: var(--lh3); color: var(--white); }
        .n-pulse { width: 5px; height: 5px; border-radius: 50%; background: var(--white); animation: pulse 2.8s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.15} }
        .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 140px 56px 100px; position: relative; overflow: hidden; }
        .hero-lines { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .hero-lines svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hero-left { position: relative; z-index: 2; max-width: 600px; }
        .h-tag { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.35em; color: var(--dim); text-transform: uppercase; margin-bottom: 32px; display: flex; align-items: center; gap: 16px; opacity: 0; animation: fadein 0.8s 0.1s forwards; }
        .h-tag::before { content: ''; width: 40px; height: 1px; background: var(--wire); }
        .h-wordmark { font-family: 'Bebas Neue', sans-serif; font-size: clamp(72px,9vw,124px); letter-spacing: 0.06em; color: var(--pure); line-height: 0.95; margin-bottom: 12px; opacity: 0; animation: fadein 0.8s 0.2s forwards; }
        .h-sub { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.55em; color: var(--dim); text-transform: uppercase; margin-bottom: 44px; opacity: 0; animation: fadein 0.8s 0.3s forwards; }
        .h-desc { font-size: 18px; font-weight: 200; line-height: 1.85; color: var(--mid); max-width: 460px; margin-bottom: 52px; opacity: 0; animation: fadein 0.8s 0.4s forwards; }
        .h-desc strong { color: var(--bright); font-weight: 400; }
        .h-actions { display: flex; gap: 14px; align-items: center; opacity: 0; animation: fadein 0.8s 0.5s forwards; }
        .btn-a { display: inline-flex; align-items: center; gap: 12px; padding: 16px 38px; background: var(--white); color: var(--ink); font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; border: none; cursor: none; transition: background 0.2s, transform 0.15s; border-radius: 2px; }
        .btn-a:hover { background: var(--pure); transform: translateY(-1px); }
        .btn-b { display: inline-flex; align-items: center; gap: 12px; padding: 15px 38px; background: transparent; color: var(--pale); font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; border: 1px solid var(--lh3); cursor: none; transition: border-color 0.2s, color 0.2s, transform 0.15s; border-radius: 2px; }
        .btn-b:hover { border-color: var(--pale); color: var(--white); transform: translateY(-1px); }
        .hero-right { position: relative; z-index: 2; display: flex; justify-content: center; align-items: center; height: 520px; }
        .orb-wrap { position: relative; width: 380px; height: 380px; }
        .orb-core { position: absolute; inset: 50%; transform: translate(-50%,-50%); width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle at 38% 38%, #404048, #141418); border: 1px solid var(--lh3); display: flex; align-items: center; justify-content: center; z-index: 3; }
        .orb-core-inner { font-family: 'Bebas Neue', sans-serif; font-size: 14px; letter-spacing: 0.1em; color: var(--bright); display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; }
        .orb-core-sub { font-family: 'Space Mono', monospace; font-size: 7px; letter-spacing: 0.3em; color: var(--dim); }
        .ring { position: absolute; inset: 50%; transform-origin: center; border: 1px solid var(--lh2); border-radius: 50%; }
        .ring-1 { width: 180px; height: 180px; margin: -90px 0 0 -90px; animation: spin 22s linear infinite; }
        .ring-2 { width: 260px; height: 260px; margin: -130px 0 0 -130px; animation: spin 40s linear infinite reverse; }
        .ring-3 { width: 350px; height: 350px; margin: -175px 0 0 -175px; border-style: dashed; animation: spin 60s linear infinite; opacity: 0.5; }
        .ring-dot { position: absolute; width: 5px; height: 5px; border-radius: 50%; background: var(--pale); top: 0; left: 50%; margin-left: -2.5px; margin-top: -2.5px; }
        .ring-dot-sm { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: var(--wire); top: 0; left: 50%; margin-left: -1.5px; margin-top: -1.5px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadein { to { opacity: 1; } }
        .h-stats { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--lh); margin-top: 64px; opacity: 0; animation: fadein 0.8s 0.6s forwards; }
        .h-stat { padding: 36px 40px; border-right: 1px solid var(--lh); }
        .h-stat:last-child { border-right: none; }
        .h-stat-v { font-family: 'Bebas Neue', sans-serif; font-size: 48px; letter-spacing: 0.04em; color: var(--white); line-height: 1; margin-bottom: 6px; }
        .h-stat-l { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.22em; color: var(--dim); text-transform: uppercase; }
        .s { padding: 140px 56px; }
        .s-inner { max-width: 1200px; margin: 0 auto; }
        .s-eyebrow { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.35em; color: var(--dim); text-transform: uppercase; display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
        .s-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--wire); }
        .s-title { font-size: clamp(34px,4vw,52px); font-weight: 200; letter-spacing: -0.02em; color: var(--white); line-height: 1.1; margin-bottom: 72px; }
        .s-title strong { font-weight: 500; }
        .domains { background: var(--ink2); }
        .domain-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--lh); }
        .domain-card { background: var(--ink2); padding: 52px 44px; position: relative; overflow: hidden; transition: background 0.35s; }
        .domain-card:hover { background: var(--ink3); }
        .domain-card::after { content: attr(data-n); position: absolute; bottom: 20px; right: 28px; font-family: 'Bebas Neue', sans-serif; font-size: 88px; color: var(--lh); line-height: 1; transition: color 0.35s; pointer-events: none; }
        .domain-card:hover::after { color: var(--lh2); }
        .domain-tag { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.3em; color: var(--dim); text-transform: uppercase; margin-bottom: 20px; }
        .domain-name { font-size: 22px; font-weight: 400; color: var(--white); margin-bottom: 16px; }
        .domain-desc { font-size: 14px; font-weight: 200; color: var(--mid); line-height: 1.8; }
        .domain-bar { position: absolute; bottom: 0; left: 0; height: 1px; width: 0; background: var(--bright); transition: width 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
        .domain-card:hover .domain-bar { width: 100%; }
        .values { background: var(--ink); }
        .values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--lh); }
        .value-card { background: var(--ink); padding: 52px 48px; position: relative; transition: background 0.3s; }
        .value-card:hover { background: rgba(255,255,255,0.018); }
        .value-accent { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: transparent; transition: background 0.4s; }
        .value-card:hover .value-accent { background: var(--bright); }
        .value-idx { font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 0.2em; color: var(--wire); margin-bottom: 24px; }
        .value-title { font-size: 20px; font-weight: 400; color: var(--white); margin-bottom: 16px; line-height: 1.35; }
        .value-desc { font-size: 14px; font-weight: 200; color: var(--mid); line-height: 1.8; }
        .projects { background: var(--ink2); }
        .project-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--lh); }
        .project-card { background: var(--ink2); padding: 52px 44px; display: flex; flex-direction: column; gap: 16px; transition: background 0.3s; position: relative; }
        .project-card:hover { background: var(--ink3); }
        .project-tag { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.3em; color: var(--dim); text-transform: uppercase; }
        .project-title { font-size: 22px; font-weight: 400; color: var(--white); line-height: 1.2; }
        .project-desc { font-size: 14px; font-weight: 200; color: var(--mid); line-height: 1.8; flex: 1; }
        .project-status { display: inline-flex; align-items: center; gap: 8px; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim); }
        .project-status.active { color: var(--bright); }
        .project-status.active::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--white); animation: pulse 2s infinite; }
        .project-link { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s; }
        .project-link:hover { color: var(--white); }
        .project-link::after { content: '→'; }
        .project-bar { position: absolute; bottom: 0; left: 0; height: 1px; width: 0; background: var(--bright); transition: width 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
        .project-card:hover .project-bar { width: 100%; }
        .manifesto { background: var(--ink); padding: 180px 56px; text-align: center; position: relative; overflow: hidden; }
        .manifesto::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.025), transparent); }
        .manifesto-q { position: relative; z-index: 1; font-size: clamp(22px,2.8vw,36px); font-weight: 200; line-height: 1.65; color: var(--white); max-width: 900px; margin: 0 auto 36px; letter-spacing: -0.01em; }
        .manifesto-q em { font-style: normal; color: var(--mid); }
        .manifesto-attr { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.3em; color: var(--wire); text-transform: uppercase; position: relative; z-index: 1; }
        .shop-cta { background: var(--ink2); }
        .shop-cta-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; padding: 140px 0; }
        .shop-left h2 { font-size: clamp(34px,4vw,52px); font-weight: 200; color: var(--white); line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em; }
        .shop-left h2 strong { font-weight: 500; }
        .shop-left p { font-size: 17px; font-weight: 200; color: var(--mid); line-height: 1.9; margin-bottom: 48px; }
        .shop-right { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--lh); }
        .shop-cat { background: var(--ink2); padding: 36px 32px; transition: background 0.3s; position: relative; overflow: hidden; }
        .shop-cat:hover { background: var(--ink3); }
        .shop-cat-bar { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: transparent; transition: background 0.3s; }
        .shop-cat:hover .shop-cat-bar { background: var(--pale); }
        .shop-cat-n { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; color: var(--wire); margin-bottom: 12px; }
        .shop-cat-name { font-size: 16px; font-weight: 400; color: var(--white); margin-bottom: 8px; }
        .shop-cat-desc { font-size: 13px; font-weight: 200; color: var(--dim); line-height: 1.6; }
        .newsletter { background: var(--ink); padding: 120px 56px; }
        .newsletter-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 80px; border: 1px solid var(--lh); padding: 72px 80px; }
        .newsletter-left h3 { font-size: 32px; font-weight: 200; color: var(--white); margin-bottom: 12px; letter-spacing: -0.02em; }
        .newsletter-left h3 strong { font-weight: 500; }
        .newsletter-left p { font-size: 15px; font-weight: 200; color: var(--mid); }
        .newsletter-form { display: flex; gap: 0; flex: 1; max-width: 440px; }
        .newsletter-input { flex: 1; background: rgba(255,255,255,0.034); border: none; border-bottom: 1px solid var(--lh2); color: var(--pale); padding: 16px 0; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 300; outline: none; transition: border-color 0.2s; }
        .newsletter-input:focus { border-bottom-color: var(--pale); }
        .newsletter-input::placeholder { color: var(--dim); }
        footer { background: var(--ink); border-top: 1px solid var(--lh); padding: 40px 56px; display: flex; align-items: center; justify-content: space-between; }
        .f-logo { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.3em; color: var(--mid); text-transform: uppercase; }
        .f-copy { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.12em; color: var(--wire); }
        .f-links { display: flex; gap: 28px; }
        .f-links a { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim); text-decoration: none; transition: color 0.2s; }
        .f-links a:hover { color: var(--white); }
        .rv { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .rv.in { opacity: 1; transform: none; }
        .rv-d1 { transition-delay: 0.1s; } .rv-d2 { transition-delay: 0.2s; } .rv-d3 { transition-delay: 0.3s; }
        @media (max-width: 980px) {
          nav { padding: 0 24px; } .n-nav { display: none; }
          .hero, .s, .newsletter, .shop-cta-inner { padding-left: 24px; padding-right: 24px; }
          .hero { grid-template-columns: 1fr; } .hero-right { display: none; }
          .h-stats { grid-template-columns: 1fr 1fr; }
          .domain-grid, .project-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
          .shop-cta-inner { grid-template-columns: 1fr; padding: 80px 24px; }
          .shop-right { grid-template-columns: 1fr; }
          .newsletter-inner { flex-direction: column; padding: 48px 32px; }
          footer { flex-direction: column; gap: 18px; text-align: center; }
        }
      `}</style>

      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />

      {/* NAV */}
      <nav>
        <Link href="/" className="n-logo">O.R.I.O.N Industries</Link>
        <div className="n-nav">
          <Link href="#domaines">Domaines</Link>
          <Link href="#projets">Projets</Link>
          <Link href="/shop">Boutique</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/shop" className="n-pill">
          <div className="n-pulse" />
          Boutique
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-lines" aria-hidden="true">
          <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none">
            <line x1="0" y1="200" x2="1400" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="0" y1="450" x2="1400" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="0" y1="700" x2="1400" y2="700" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="700" y1="0" x2="700" y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="700" cy="450" r="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="700" cy="450" r="500" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </svg>
        </div>
        <div className="hero-left">
          <div className="h-tag">Informatique · Électronique · Ingénierie · IoT</div>
          <div className="h-wordmark">O.R.I.O.N</div>
          <div className="h-sub">Industries</div>
          <p className="h-desc">
            Entreprise technologique <strong>multidisciplinaire</strong> — nous concevons, développons et déployons des solutions innovantes en informatique, électronique, domotique et IoT.
          </p>
          <div className="h-actions">
            <Link href="#domaines" className="btn-a">Nos domaines</Link>
            <Link href="/contact" className="btn-b">Nous contacter</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="orb-wrap">
            <div className="ring ring-1"><div className="ring-dot" /></div>
            <div className="ring ring-2"><div className="ring-dot-sm" /></div>
            <div className="ring ring-3" />
            <div className="orb-core">
              <div className="orb-core-inner">
                <span>O.R.I.O.N</span>
                <span className="orb-core-sub">Industries</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-stats">
          {stats.map((s, i) => (
            <div className="h-stat" key={i}>
              <div className="h-stat-v">{s.v}</div>
              <div className="h-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINES */}
      <section className="s domains" id="domaines">
        <div className="s-inner">
          <div className="s-eyebrow rv">01 — Domaines</div>
          <div className="s-title rv rv-d1">Nos champs<br /><strong>d&apos;expertise</strong></div>
          <div className="domain-grid">
            {domains.map((d) => (
              <div className="domain-card rv" data-n={d.n} key={d.n}>
                <div className="domain-tag">{d.tag}</div>
                <div className="domain-name">{d.name}</div>
                <div className="domain-desc">{d.desc}</div>
                <div className="domain-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="s values" id="valeurs">
        <div className="s-inner">
          <div className="s-eyebrow rv">02 — Valeurs</div>
          <div className="s-title rv rv-d1">Ce en quoi<br /><strong>nous croyons</strong></div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card rv rv-d${i % 2 === 0 ? "1" : "2"}`} key={v.idx}>
                <div className="value-accent" />
                <div className="value-idx">{v.idx} / 04</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="s projects" id="projets">
        <div className="s-inner">
          <div className="s-eyebrow rv">03 — Projets</div>
          <div className="s-title rv rv-d1">Nos projets<br /><strong>phares</strong></div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <div className={`project-card rv rv-d${i}`} key={p.title}>
                <div className="project-tag">{p.tag}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className={`project-status${p.status === "En développement" ? " active" : ""}`}>{p.status}</div>
                <Link href={p.link} className="project-link">Voir le projet</Link>
                <div className="project-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <div className="manifesto">
        <p className="manifesto-q rv">
          « O.R.I.O.N Industries conçoit la technologie de demain —<br />
          <em>locale, souveraine, maîtrisée par ceux qui l&apos;utilisent.</em><br />
          Pas des outils. Des extensions de l&apos;intelligence humaine. »
        </p>
        <div className="manifesto-attr rv rv-d1">O.R.I.O.N Industries — Vision 2025</div>
      </div>

      {/* BOUTIQUE CTA */}
      <section className="shop-cta" id="boutique">
        <div className="shop-cta-inner" style={{ padding: "0 56px" }}>
          <div className="shop-left rv">
            <div className="s-eyebrow" style={{ marginBottom: "24px" }}>04 — Boutique</div>
            <h2>Nos produits &amp;<br /><strong>solutions</strong></h2>
            <p>Matériel, logiciels, kits électroniques et modules IoT — des produits conçus pour les professionnels et les passionnés de technologie.</p>
            <Link href="/shop" className="btn-a">Accéder à la boutique</Link>
          </div>
          <div className="shop-right rv rv-d2">
            {[
              { n: "Cat. 01", name: "Matériel & Hardware", desc: "Cartes, modules, capteurs et composants électroniques." },
              { n: "Cat. 02", name: "Logiciels & Licences", desc: "Solutions logicielles et outils développés en interne." },
              { n: "Cat. 03", name: "Kits & Projets", desc: "Kits complets pour prototypage, domotique et IoT." },
              { n: "Cat. 04", name: "Services & Support", desc: "Conseil, installation, formation et support technique." },
            ].map((c) => (
              <div className="shop-cat" key={c.n}>
                <div className="shop-cat-bar" />
                <div className="shop-cat-n">{c.n}</div>
                <div className="shop-cat-name">{c.name}</div>
                <div className="shop-cat-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner rv">
          <div className="newsletter-left">
            <h3>Restez<br /><strong>informé</strong></h3>
            <p>Actualités, nouveaux produits et avancées techniques — directement dans votre boîte mail.</p>
          </div>
          <div className="newsletter-form">
            <input className="newsletter-input" type="email" placeholder="votre@email.com" />
            <button className="btn-a" type="button" style={{ cursor: "none", borderRadius: "0", whiteSpace: "nowrap" }}>
              S&apos;inscrire
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="f-logo">O.R.I.O.N Industries</div>
        <div className="f-copy">© 2025 O.R.I.O.N Industries — Tous droits réservés</div>
        <div className="f-links">
          <Link href="#domaines">Domaines</Link>
          <Link href="#projets">Projets</Link>
          <Link href="/shop">Boutique</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
}