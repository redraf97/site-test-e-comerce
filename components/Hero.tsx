import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.subtitle}>NOUVELLE COLLECTION</span>
        <h1 className={styles.title}>L'Art du Minimalisme.</h1>
        <p className={styles.description}>
          Des pièces uniques conçues pour durer. Découvrez l'élégance Mikianeli.
        </p>
        <a href="#shop" className={styles.button}>
          Voir la boutique
        </a>
      </div>
    </section>
  );
}