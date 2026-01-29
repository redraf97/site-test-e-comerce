import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

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

      <main>
        {/* Titre de la section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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