"use client";

import Link from 'next/link'; // On importe Link pour naviguer sans recharger
import styles from './ProductCard.module.css';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Note: On a enlevé la fonction handleBuy d'ici
  
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      {/* Tout le bloc devient cliquable grâce au Link */}
      
      <img src={product.image} alt={product.name} className={styles.image} />
      
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{(product.price / 100).toFixed(2)} €</p>
        <p className={styles.desc}>{product.description}</p>
        
        {/* Le bouton devient juste visuel */}
        <div className={styles.button}>
          Voir le produit
        </div>
      </div>
    </Link>
  );
}