import Link from "next/link";
import styles from "./FeaturedProducts.module.css";

const categories = [
  { n: "Cat. 01", name: "Matériel & Hardware", desc: "Cartes, modules, capteurs et composants électroniques." },
  { n: "Cat. 02", name: "Logiciels & Licences", desc: "Solutions logicielles et outils développés en interne." },
  { n: "Cat. 03", name: "Kits & Projets", desc: "Kits complets pour prototypage, domotique et IoT." },
  { n: "Cat. 04", name: "Services & Support", desc: "Conseil, installation, formation et support technique." },
];

export default function FeaturedProducts() {
  return (
    <section className={styles.section} id="boutique">
      <div className={styles.inner}>
        <div className={`${styles.left} rv`}>
          <div className={styles.eyebrow}>04 — Boutique</div>
          <h2>Nos produits &amp;<br /><strong>solutions</strong></h2>
          <p>Matériel, logiciels, kits électroniques et modules IoT — des produits conçus pour les professionnels et les passionnés de technologie.</p>
          <Link href="/shop" className="btn-a">Accéder à la boutique</Link>
        </div>
        <div className={`${styles.right} rv rv-d2`}>
          {categories.map((c) => (
            <div className={styles.cat} key={c.n}>
              <div className={styles.catBar} />
              <div className={styles.catN}>{c.n}</div>
              <div className={styles.catName}>{c.name}</div>
              <div className={styles.catDesc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}