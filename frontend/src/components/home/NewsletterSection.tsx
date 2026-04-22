import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} rv`}>
        <div className={styles.left}>
          <h3>Restez<br /><strong>informé</strong></h3>
          <p>Actualités, nouveaux produits et avancées techniques — directement dans votre boîte mail.</p>
        </div>
        <div className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="votre@email.com"
          />
          <button className="btn-a" type="button" style={{ cursor: "none", borderRadius: "0", whiteSpace: "nowrap" }}>
            S&apos;inscrire
          </button>
        </div>
      </div>
    </section>
  );
}