"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import DecryptText from "@/components/ui/DecryptText";

const domains = [
  { n: "01", name: "Informatique", desc: "Développement logiciel, systèmes embarqués, IA locale et architectures haute performance.", tag: "Software & Systems" },
  { n: "02", name: "Électronique", desc: "Conception de circuits, prototypage PCB, intégration hardware-software et systèmes de contrôle.", tag: "Hardware Design" },
  { n: "03", name: "Ingénierie", desc: "Solutions techniques complexes, modélisation, simulation et optimisation de systèmes.", tag: "Engineering" },
  { n: "04", name: "Domotique", desc: "Automatisation résidentielle et professionnelle, interfaces intelligentes et systèmes adaptatifs.", tag: "Smart Building" },
  { n: "05", name: "IoT", desc: "Réseaux de capteurs, protocoles de communication, collecte et analyse de données en temps réel.", tag: "Connected Devices" },
  { n: "06", name: "Sciences", desc: "Recherche appliquée, expérimentation, modélisation scientifique et transfert technologique.", tag: "R&D" },
];

const values = [
  { idx: "01", title: "Souveraineté technologique", desc: "Nous concevons des solutions qui restent sous le contrôle total de l'utilisateur. Pas de dépendance cloud imposée, pas de boîte noire." },
  { idx: "02", title: "Excellence technique", desc: "Chaque projet est abordé avec rigueur et précision. Nous refusons la médiocrité et visons des standards d'ingénierie irréprochables." },
  { idx: "03", title: "Innovation continue", desc: "La technologie évolue. Nous aussi. Veille permanente, prototypage rapide et intégration des dernières avancées." },
  { idx: "04", title: "Transparence totale", desc: "Nos systèmes sont documentés, auditables et explicables. Vous savez toujours ce que fait la technologie que vous utilisez." },
];

const projects = [
  { tag: "Projet phare", title: "ORION AI System", desc: "Couche cognitive locale — IA autonome, commande vocale, contrôle OS natif, mémoire contextuelle.", status: "En développement", link: "/projects/orion-ai" },
  { tag: "Domotique", title: "ORION Home", desc: "Écosystème domotique unifié. Supervision des appareils, scénarios intelligents — sans cloud.", status: "Planifié", link: "/projects/orion-home" },
  { tag: "IoT Platform", title: "ORION Fabric", desc: "Infrastructure IoT souveraine. Réseau de capteurs, protocoles natifs, tableau de bord temps réel.", status: "Planifié", link: "/projects/orion-fabric" },
];

const shopCats = [
  { n: "Cat. 01", name: "Matériel & Hardware", desc: "Cartes, modules, capteurs et composants électroniques." },
  { n: "Cat. 02", name: "Logiciels & Licences", desc: "Solutions logicielles et outils développés en interne." },
  { n: "Cat. 03", name: "Kits & Projets", desc: "Kits complets pour prototypage, domotique et IoT." },
  { n: "Cat. 04", name: "Services & Support", desc: "Conseil, installation, formation et support technique." },
];

const s = { fontFamily: "'Space Mono',monospace" } as const;

export default function HomePage() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      animId = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(loop);
    const onEnter = () => { ring.style.width = "56px"; ring.style.height = "56px"; ring.style.borderColor = "rgba(255,255,255,0.5)"; };
    const onLeave = () => { ring.style.width = "36px"; ring.style.height = "36px"; ring.style.borderColor = "rgba(255,255,255,0.35)"; };
    document.querySelectorAll<HTMLElement>("a,button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(animId); };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "140px 56px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none">
            <line x1="0" y1="200" x2="1400" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="0" y1="450" x2="1400" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="700" y1="0" x2="700" y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="700" cy="450" r="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="700" cy="450" r="500" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 600 }}>
          <div style={{ ...s, fontSize: 9, letterSpacing: "0.35em", color: "var(--dim)", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 40, height: 1, background: "var(--wire)", display: "inline-block" }} />
            Informatique · Électronique · Ingénierie · IoT
          </div>
          <DecryptText text="O.R.I.O.N" delay={200} duration={3000} tag="div"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(72px,9vw,124px)", letterSpacing: "0.06em", color: "var(--pure)", lineHeight: 0.95, marginBottom: 12 }} />
          <DecryptText text="Industries" delay={600} duration={2500} tag="div"
            style={{ ...s, fontSize: 10, letterSpacing: "0.55em", color: "var(--dim)", textTransform: "uppercase", marginBottom: 44 }} />
          <DecryptText
            text="Entreprise technologique multidisciplinaire — nous concevons, développons et déployons des solutions innovantes en informatique, électronique, domotique et IoT."
            delay={1000} duration={4500} tag="p"
            style={{ fontSize: 18, fontWeight: 200, lineHeight: 1.85, color: "var(--mid)", maxWidth: 460, marginBottom: 52 }} />
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Link href="#domaines" className="btn-a">Nos domaines</Link>
            <Link href="/contact" className="btn-b">Nous contacter</Link>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", height: 520 }}>
          <div style={{ position: "relative", width: 380, height: 380 }}>
            {[{ w: 180, dur: "22s", dir: "normal" as const }, { w: 260, dur: "40s", dir: "reverse" as const }, { w: 350, dur: "60s", dir: "normal" as const, dashed: true }].map((r, i) => (
              <div key={i} style={{ position: "absolute", inset: "50%", width: r.w, height: r.w, margin: `${-r.w / 2}px 0 0 ${-r.w / 2}px`, border: `1px ${r.dashed ? "dashed" : "solid"} rgba(255,255,255,0.1)`, borderRadius: "50%", animation: `spin ${r.dur} linear infinite ${r.dir}`, opacity: r.dashed ? 0.5 : 1 }}>
                {!r.dashed && <div style={{ position: "absolute", width: i === 0 ? 5 : 3, height: i === 0 ? 5 : 3, borderRadius: "50%", background: i === 0 ? "var(--pale)" : "var(--wire)", top: 0, left: "50%", transform: "translate(-50%,-50%)" }} />}
              </div>
            ))}
            <div style={{ position: "absolute", inset: "50%", transform: "translate(-50%,-50%)", width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle at 38% 38%, #404048, #141418)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 14, letterSpacing: "0.1em", color: "var(--bright)", textAlign: "center" }}>
                <div>O.R.I.O.N</div>
                <div style={{ ...s, fontSize: 7, letterSpacing: "0.3em", color: "var(--dim)" }}>Industries</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ gridColumn: "1/-1", display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--lh)", marginTop: 64 }}>
          {[{ v: "6+", l: "Domaines d'expertise" }, { v: "100%", l: "Local-first" }, { v: "∞", l: "Évolutivité" }, { v: "V1", l: "En développement actif" }].map((st, i) => (
            <div key={i} style={{ padding: "36px 40px", borderRight: i < 3 ? "1px solid var(--lh)" : "none" }}>
              <DecryptText text={st.v} delay={1400 + i * 150} duration={2000} tag="div"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, letterSpacing: "0.04em", color: "var(--white)", lineHeight: 1, marginBottom: 6 }} />
              <div style={{ ...s, fontSize: 9, letterSpacing: "0.22em", color: "var(--dim)", textTransform: "uppercase" }}>{st.l}</div>
            </div>
          ))}
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </section>

      {/* ── DOMAINES ── */}
      <section style={{ padding: "140px 56px", background: "var(--ink2)" }} id="domaines">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ ...s, fontSize: 9, letterSpacing: "0.35em", color: "var(--dim)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <span style={{ width: 32, height: 1, background: "var(--wire)", display: "inline-block" }} />
            <DecryptText text="01 — Domaines" duration={2000} />
          </div>
          <div style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 200, color: "var(--white)", lineHeight: 1.1, marginBottom: 72 }}>
            <DecryptText text="Nos champs" duration={2500} tag="div" />
            <DecryptText text="d'expertise" delay={300} duration={2500} tag="div" style={{ fontWeight: 500 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--lh)" }}>
            {domains.map((d, i) => (
              <div key={d.n} style={{ background: "var(--ink2)", padding: "52px 44px", position: "relative", overflow: "hidden", transition: "background 0.35s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--ink3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--ink2)")}>
                <div style={{ ...s, fontSize: 9, letterSpacing: "0.3em", color: "var(--dim)", textTransform: "uppercase", marginBottom: 20 }}>{d.tag}</div>
                <DecryptText text={d.name} delay={i * 100} duration={2000} tag="div" style={{ fontSize: 22, fontWeight: 400, color: "var(--white)", marginBottom: 16 }} />
                <div style={{ fontSize: 14, fontWeight: 200, color: "var(--mid)", lineHeight: 1.8 }}>{d.desc}</div>
                <div style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: 0, background: "var(--bright)", transition: "width 0.5s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                  ref={el => { if (el) { el.parentElement!.onmouseenter = () => el.style.width = "100%"; el.parentElement!.onmouseleave = () => el.style.width = "0"; } }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section style={{ padding: "140px 56px", background: "var(--ink)" }} id="valeurs">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ ...s, fontSize: 9, letterSpacing: "0.35em", color: "var(--dim)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <span style={{ width: 32, height: 1, background: "var(--wire)", display: "inline-block" }} />
            <DecryptText text="02 — Valeurs" duration={2000} />
          </div>
          <div style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 200, color: "var(--white)", lineHeight: 1.1, marginBottom: 72 }}>
            <DecryptText text="Ce en quoi" duration={2500} tag="div" />
            <DecryptText text="nous croyons" delay={300} duration={2500} tag="div" style={{ fontWeight: 500 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--lh)" }}>
            {values.map((v, i) => (
              <div key={v.idx} style={{ background: "var(--ink)", padding: "52px 48px", position: "relative", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.018)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--ink)")}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "transparent", transition: "background 0.4s" }}
                  ref={el => { if (el) { el.parentElement!.onmouseenter = () => el.style.background = "var(--bright)"; el.parentElement!.onmouseleave = () => el.style.background = "transparent"; } }} />
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, letterSpacing: "0.2em", color: "var(--wire)", marginBottom: 24 }}>{v.idx} / 04</div>
                <DecryptText text={v.title} delay={i * 80} duration={2500} tag="div" style={{ fontSize: 20, fontWeight: 400, color: "var(--white)", marginBottom: 16, lineHeight: 1.35 }} />
                <div style={{ fontSize: 14, fontWeight: 200, color: "var(--mid)", lineHeight: 1.8 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section style={{ padding: "140px 56px", background: "var(--ink2)" }} id="projets">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ ...s, fontSize: 9, letterSpacing: "0.35em", color: "var(--dim)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <span style={{ width: 32, height: 1, background: "var(--wire)", display: "inline-block" }} />
            <DecryptText text="03 — Projets" duration={2000} />
          </div>
          <div style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 200, color: "var(--white)", lineHeight: 1.1, marginBottom: 72 }}>
            <DecryptText text="Nos projets" duration={2500} tag="div" />
            <DecryptText text="phares" delay={300} duration={2000} tag="div" style={{ fontWeight: 500 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--lh)" }}>
            {projects.map((p, i) => (
              <div key={p.title} style={{ background: "var(--ink2)", padding: "52px 44px", display: "flex", flexDirection: "column", gap: 16, transition: "background 0.3s", position: "relative" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--ink3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--ink2)")}>
                <div style={{ ...s, fontSize: 9, letterSpacing: "0.3em", color: "var(--dim)", textTransform: "uppercase" }}>{p.tag}</div>
                <DecryptText text={p.title} delay={i * 100} duration={2500} tag="div" style={{ fontSize: 22, fontWeight: 400, color: "var(--white)", lineHeight: 1.2 }} />
                <div style={{ fontSize: 14, fontWeight: 200, color: "var(--mid)", lineHeight: 1.8, flex: 1 }}>{p.desc}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, ...s, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: p.status === "En développement" ? "var(--bright)" : "var(--dim)" }}>
                  {p.status === "En développement" && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--white)", display: "inline-block", animation: "pulse 2s infinite" }} />}
                  {p.status}
                </div>
                <Link href={p.link} style={{ ...s, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--dim)")}>
                  Voir le projet →
                </Link>
                <div style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: 0, background: "var(--bright)", transition: "width 0.5s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                  ref={el => { if (el) { el.parentElement!.onmouseenter = () => el.style.width = "100%"; el.parentElement!.onmouseleave = () => el.style.width = "0"; } }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.15} }`}</style>
      </section>

      {/* ── MANIFESTO ── */}
      <div style={{ background: "var(--ink)", padding: "180px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.025), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto 36px" }}>
          <DecryptText text="« O.R.I.O.N Industries conçoit la technologie de demain —" duration={3500} tag="p"
            style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 200, lineHeight: 1.65, color: "var(--white)", letterSpacing: "-0.01em" }} />
          <DecryptText text="locale, souveraine, maîtrisée par ceux qui l'utilisent." delay={400} duration={3500} tag="p"
            style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 200, lineHeight: 1.65, color: "var(--mid)", letterSpacing: "-0.01em" }} />
          <DecryptText text="Pas des outils. Des extensions de l'intelligence humaine. »" delay={800} duration={3500} tag="p"
            style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 200, lineHeight: 1.65, color: "var(--white)", letterSpacing: "-0.01em" }} />
        </div>
        <DecryptText text="O.R.I.O.N Industries — Vision 2025" delay={1200} duration={2000}
          style={{ ...s, fontSize: 10, letterSpacing: "0.3em", color: "var(--wire)", textTransform: "uppercase", position: "relative", zIndex: 1 }} />
      </div>

      {/* ── BOUTIQUE ── */}
      <section style={{ background: "var(--ink2)", padding: "140px 56px" }} id="boutique">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          <div>
            <div style={{ ...s, fontSize: 9, letterSpacing: "0.35em", color: "var(--dim)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <span style={{ width: 32, height: 1, background: "var(--wire)", display: "inline-block" }} />
              <DecryptText text="04 — Boutique" duration={2000} />
            </div>
            <div style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 200, color: "var(--white)", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
              <DecryptText text="Nos produits &" duration={2500} tag="div" />
              <DecryptText text="solutions" delay={300} duration={2000} tag="div" style={{ fontWeight: 500 }} />
            </div>
            <p style={{ fontSize: 17, fontWeight: 200, color: "var(--mid)", lineHeight: 1.9, marginBottom: 48 }}>
              Matériel, logiciels, kits électroniques et modules IoT — des produits conçus pour les professionnels et les passionnés.
            </p>
            <Link href="/shop" className="btn-a">Accéder à la boutique</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--lh)" }}>
            {shopCats.map((c) => (
              <div key={c.n} style={{ background: "var(--ink2)", padding: "36px 32px", transition: "background 0.3s", position: "relative" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--ink3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--ink2)")}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "transparent", transition: "background 0.3s" }}
                  ref={el => { if (el) { el.parentElement!.onmouseenter = () => el.style.background = "var(--pale)"; el.parentElement!.onmouseleave = () => el.style.background = "transparent"; } }} />
                <div style={{ ...s, fontSize: 9, letterSpacing: "0.2em", color: "var(--wire)", marginBottom: 12 }}>{c.n}</div>
                <DecryptText text={c.name} duration={2000} tag="div" style={{ fontSize: 16, fontWeight: 400, color: "var(--white)", marginBottom: 8 }} />
                <div style={{ fontSize: 13, fontWeight: 200, color: "var(--dim)", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: "var(--ink)", padding: "120px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 80, border: "1px solid var(--lh)", padding: "72px 80px" }}>
          <div>
            <DecryptText text="Restez informé" duration={2500} tag="h3"
              style={{ fontSize: 32, fontWeight: 200, color: "var(--white)", marginBottom: 12, letterSpacing: "-0.02em" }} />
            <p style={{ fontSize: 15, fontWeight: 200, color: "var(--mid)" }}>Actualités, nouveaux produits et avancées techniques — directement dans votre boîte mail.</p>
          </div>
          <div style={{ display: "flex", flex: 1, maxWidth: 440 }}>
            <input type="email" placeholder="votre@email.com"
              style={{ flex: 1, background: "rgba(255,255,255,0.034)", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "var(--pale)", padding: "16px 0", fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 300, outline: "none" }} />
            <button className="btn-a" type="button" style={{ cursor: "none", borderRadius: 0, whiteSpace: "nowrap" }}>S&apos;inscrire</button>
          </div>
        </div>
      </section>
    </>
  );
}