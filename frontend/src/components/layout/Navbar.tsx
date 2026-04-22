"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoCircle}>
          <Image
            src="/favicon.ico"
            alt="O.R.I.O.N Industries"
            width={20}
            height={20}
            className={styles.logoImg}
          />
        </div>
        O.R.I.O.N Industries
      </Link>
      <div className={styles.links}>
        <Link href="/#domaines">Domaines</Link>
        <Link href="/#projets">Projets</Link>
        <Link href="/shop">Boutique</Link>
        <Link href="/about">À propos</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Link href="/shop" className={styles.pill}>
        <div className={styles.pulse} />
        Boutique
      </Link>
    </nav>
  );
}