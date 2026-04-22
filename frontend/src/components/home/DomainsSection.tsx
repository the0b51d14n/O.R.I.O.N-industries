import styles from "./DomainSection.module.css";

const domains = [
  { n: "01", name: "Informatique", desc: "Développement logiciel, systèmes embarqués, intelligence artificielle locale et architectures haute performance.", tag: "Software & Systems" },
  { n: "02", name: "Électronique", desc: "Conception de circuits, prototypage PCB, intégration hardware-software et systèmes de contrôle sur mesure.", tag: "Hardware Design" },
  { n: "03", name: "Ingénierie", desc: "Solutions techniques complexes, modélisation, simulation et optimisation de systèmes industriels et numériques.", tag: "Engineering" },
  { n: "04", name: "Domotique", desc: "Automatisation résidentielle et professionnelle, interfaces de contrôle intelligentes et systèmes adaptatifs.", tag: "Smart Building" },
  { n: "05", name: "IoT", desc: "Réseaux de capteurs, protocoles de communication, collecte et analyse de données en temps réel.", tag: "Connected Devices" },
  { n: "06", name: "Sciences", desc: "Recherche appliquée, expérimentation, modélisation scientifique et transfert technologique.", tag: "R&D" },
];

export default function DomainsSection() {
  return (
    <section className={styles.section} id="domaines">
      <div className={styles.inner}>
        <div className={`${styles.eyebrow} rv`}>01 — Domaines</div>
        <div className={`${styles.title} rv rv-d1`}>
          Nos champs<br /><strong>d&apos;expertise</strong>
        </div>
        <div className={styles.grid}>
          {domains.map((d) => (
            <div className={`${styles.card} rv`} data-n={d.n} key={d.n}>
              <div className={styles.tag}>{d.tag}</div>
              <div className={styles.name}>{d.name}</div>
              <div className={styles.desc}>{d.desc}</div>
              <div className={styles.bar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}