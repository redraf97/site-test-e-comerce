"use client";

import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  // 1. On récupère l'ID dans l'URL (ex: price_123)
  const { id } = useParams();
  
  // 2. On cherche le produit correspondant
  const product = products.find((p) => p.id === id);

  // 3. Si le produit n'existe pas, on affiche une erreur 404
  if (!product) {
    return notFound();
  }

  // 4. La fonction pour acheter (on la déplace ici)
  const handleBuy = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else alert(data.error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Colonne Image */}
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>

        {/* Colonne Infos */}
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>{(product.price / 100).toFixed(2)} €</p>
          
          <div className={styles.description}>
            <p>{product.description}</p>
            <p style={{ marginTop: '10px', color: '#666' }}>
              Livraison gratuite et retours sous 30 jours. 
              Produit certifié authentique Mikianeli.
            </p>
          </div>

          <button onClick={handleBuy} className={styles.buyButton}>
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
}