import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      {/* Barre de navigation */}
      <header>
        <div className="brand-logo">MIKIANELI</div>
        <div style={{ 
        fontSize: '0.9rem', 
        fontWeight: 'bold',
        padding: '8px 15px',
        background: '#f0f0f0',
        borderRadius: '20px'
        }}>
        Panier (0)
        </div>
      </header>
      
      <Hero />

      <main>
        {/* 👇 C'EST ICI QUE J'AI FAIT LA CORRECTION 👇 */}
        <div 
          id="shop" 
          style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            scrollMarginTop: '100px' /* Empêche le titre d'être caché par le menu */
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' }}>
            Nouveautés
          </h2>
          <p style={{ color: '#666' }}>La collection exclusive été 2025.</p>
        </div>
        
        {/* Grille de produits Responsive */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}