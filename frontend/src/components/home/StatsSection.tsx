import styles from "./StatsSection.module.css";

const values = [
  { idx: "01", title: "Souveraineté technologique", desc: "Nous concevons des solutions qui restent sous le contrôle total de l'utilisateur. Pas de dépendance cloud imposée, pas de boîte noire." },
  { idx: "02", title: "Excellence technique", desc: "Chaque projet est abordé avec rigueur et précision. Nous refusons la médiocrité et visons des standards d'ingénierie irréprochables." },
  { idx: "03", title: "Innovation continue", desc: "La technologie évolue. Nous aussi. Veille permanente, prototypage rapide et intégration des dernières avancées dans chaque solution." },
  { idx: "04", title: "Transparence totale", desc: "Nos systèmes sont documentés, auditables et explicables. Vous savez toujours ce que fait la technologie que vous utilisez." },
];

export default function StatsSection() {
  return (
    <section className={styles.section} id="valeurs">
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} rv`}>02 — Valeurs</div>
        <div className={`${styles.title} rv rv-d1`}>
          Ce en quoi<br /><strong>nous croyons</strong>
        </div>
        <div className={styles.grid}>
          {values.map((v, i) => (
            <div className={`${styles.card} rv rv-d${i % 2 === 0 ? "1" : "2"}`} key={v.idx}>
              <div className={styles.accent} />
              <div className={styles.idx}>{v.idx} / 04</div>
              <div className={styles.cardTitle}>{v.title}</div>
              <div className={styles.desc}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}