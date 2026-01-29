import Link from 'next/link';

export default function CancelPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      background: '#ffebee' // Rouge très clair
    }}>
      <h1 style={{ color: '#c62828', fontSize: '3rem' }}>Oups...</h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        Le paiement n'a pas abouti ou a été annulé.
      </p>
      <Link href="/" style={{
        textDecoration: 'none',
        background: '#333',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Réessayer
      </Link>
    </div>
  );
}