import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      background: '#e8f5e9' // Vert très clair
    }}>
      <h1 style={{ color: '#2e7d32', fontSize: '3rem' }}>🎉 Merci !</h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        Votre commande a été validée avec succès.
      </p>
      <Link href="/" style={{
        textDecoration: 'none',
        background: '#2e7d32',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Retour à la boutique
      </Link>
    </div>
  );
}