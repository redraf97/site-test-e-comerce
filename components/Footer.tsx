import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>MIKIANELI</h3>
          <p>L'élégance au quotidien.</p>
        </div>
        <div className={styles.column}>
          <h4>Liens utiles</h4>
          <a href="#">Contact</a>
          <a href="#">Livraisons & Retours</a>
          <a href="/legal">Mentions Légales</a>
        </div>
        <div className={styles.column}>
          <h4>Réseaux</h4>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2025 Mikianeli Store. Tous droits réservés.
      </div>
    </footer>
  );
}