// components/ProductCard.tsx
"use client"; // <--- TRES IMPORTANT : Indique que c'est un composant interactif

import styles from './ProductCard.module.css';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  
  const handleBuy = async () => {
    // 1. On appelle notre API
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product.id }),
    });

    const data = await res.json();

    // 2. Si on reçoit l'URL, on redirige l'utilisateur vers Stripe
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Erreur inconnue");
    }
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{(product.price / 100).toFixed(2)} €</p>
        <p className={styles.desc}>{product.description}</p>
        
        {/* On ajoute l'événement onClick */}
        <button onClick={handleBuy} className={styles.button}>
          Acheter maintenant
        </button>
      </div>
    </div>
  );
}