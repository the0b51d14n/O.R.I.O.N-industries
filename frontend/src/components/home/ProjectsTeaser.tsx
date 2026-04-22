import Link from "next/link";
import styles from "./ProjectsTeaser.module.css";

const projects = [
  { tag: "Projet phare", title: "ORION AI System", desc: "Couche cognitive locale — IA autonome, commande vocale, contrôle OS natif, mémoire contextuelle. L'assistant système du futur.", status: "En développement", link: "/projects/orion-ai" },
  { tag: "Domotique", title: "ORION Home", desc: "Écosystème domotique unifié. Supervision des appareils, scénarios intelligents, perception humaine — sans cloud, sans compromis.", status: "Planifié", link: "/projects/orion-home" },
  { tag: "IoT Platform", title: "ORION Fabric", desc: "Infrastructure IoT souveraine. Réseau de capteurs, protocoles natifs, tableau de bord temps réel et alertes intelligentes.", status: "Planifié", link: "/projects/orion-fabric" },
];

export default function ProjectsTeaser() {
  return (
    <>
      <section className={styles.section} id="projets">
        <div className={styles.inner}>
          <div className={`${styles.eyebrow} rv`}>03 — Projets</div>
          <div className={`${styles.title} rv rv-d1`}>
            Nos projets<br /><strong>phares</strong>
          </div>
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <div className={`${styles.card} rv rv-d${i}`} key={p.title}>
                <div className={styles.tag}>{p.tag}</div>
                <div className={styles.cardTitle}>{p.title}</div>
                <div className={styles.desc}>{p.desc}</div>
                <div className={`${styles.status}${p.status === "En développement" ? ` ${styles.statusActive}` : ""}`}>
                  {p.status}
                </div>
                <Link href={p.link} className={styles.link}>Voir le projet</Link>
                <div className={styles.bar} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <div className={styles.manifesto}>
        <p className={`${styles.manifestoQ} rv`}>
          « O.R.I.O.N Industries conçoit la technologie de demain —<br />
          <em>locale, souveraine, maîtrisée par ceux qui l&apos;utilisent.</em><br />
          Pas des outils. Des extensions de l&apos;intelligence humaine. »
        </p>
        <div className={`${styles.manifestoAttr} rv rv-d1`}>O.R.I.O.N Industries — Vision 2025</div>
      </div>
    </>
  );
}