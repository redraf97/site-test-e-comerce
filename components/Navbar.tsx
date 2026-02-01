"use client"; // Indispensable pour l'interactivité

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer le menu (ouvert/fermé)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* 1. Le Logo à gauche */}
      <Link href="/" className={styles.logo}>
        MIKIANELI
      </Link>

      {/* 2. Le Bouton Burger à droite */}
      <button onClick={toggleMenu} className={styles.burgerButton}>
        {/* Une icône SVG simple pour le menu */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" /> // Une croix (X) si ouvert
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" /> // Les 3 barres si fermé
          )}
        </svg>
      </button>

      {/* 3. Le Menu Déroulant */}
      {/* On ajoute la classe 'active' si isOpen est vrai */}
      <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={toggleMenu} className={styles.link}>
          Accueil
        </Link>
        <Link href="/#shop" onClick={toggleMenu} className={styles.link}>
          Boutique
        </Link>
        <Link href="#" onClick={toggleMenu} className={styles.link}>
          Panier (0)
        </Link>
        <Link href="/legal" onClick={toggleMenu} className={styles.link}>
          Mentions Légales
        </Link>
      </div>
    </nav>
  );
}