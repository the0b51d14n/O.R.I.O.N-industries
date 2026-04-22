import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>O.R.I.O.N Industries</div>
      <div className={styles.copy}>© 2025 O.R.I.O.N Industries — Tous droits réservés</div>
      <div className={styles.links}>
        <Link href="/#domaines">Domaines</Link>
        <Link href="/#projets">Projets</Link>
        <Link href="/shop">Boutique</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}