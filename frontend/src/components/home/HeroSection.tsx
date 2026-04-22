"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

const stats = [
  { v: "6+", l: "Domaines d'expertise" },
  { v: "100%", l: "Local-first" },
  { v: "∞", l: "Évolutivité" },
  { v: "V1", l: "En développement actif" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLines} aria-hidden="true">
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <line x1="0" y1="200" x2="1400" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="450" x2="1400" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="700" x2="1400" y2="700" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="700" y1="0" x2="700" y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="700" cy="450" r="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="700" cy="450" r="500" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </svg>
      </div>

      <div className={styles.heroLeft}>
        <div className={styles.hTag}>Informatique · Électronique · Ingénierie · IoT</div>
        <div className={styles.hWordmark}>O.R.I.O.N</div>
        <div className={styles.hSub}>Industries</div>
        <p className={styles.hDesc}>
          Entreprise technologique <strong>multidisciplinaire</strong> — nous concevons, développons et déployons des solutions innovantes en informatique, électronique, domotique et IoT.
        </p>
        <div className={styles.hActions}>
          <Link href="#domaines" className="btn-a">Nos domaines</Link>
          <Link href="/contact" className="btn-b">Nous contacter</Link>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.orbWrap}>
          <div className={`${styles.ring} ${styles.ring1}`}><div className={styles.ringDot} /></div>
          <div className={`${styles.ring} ${styles.ring2}`}><div className={styles.ringDotSm} /></div>
          <div className={`${styles.ring} ${styles.ring3}`} />
          <div className={styles.orbCore}>
            <div className={styles.orbCoreInner}>
              <span>O.R.I.O.N</span>
              <span className={styles.orbCoreSub}>Industries</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hStats}>
        {stats.map((s, i) => (
          <div className={styles.hStat} key={i}>
            <div className={styles.hStatV}>{s.v}</div>
            <div className={styles.hStatL}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}