export default function LegalPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Mentions Légales</h1>
      
      <p><strong>Éditeur du site :</strong><br/>
      Mikianeli<br/>
      [Adresse de ton ami]<br/>
      Contact : [Email de ton ami]</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>Hébergement</h2>
      <p>Ce site est hébergé par Vercel Inc.<br/>
      440 N Barranca Ave #4133<br/>
      Covina, CA 91723<br/>
      privacy@vercel.com</p>
      
      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>Paiements</h2>
      <p>Les paiements sont sécurisés et gérés par Stripe.</p>

      <div style={{ marginTop: '40px' }}>
        <a href="/" style={{ textDecoration: 'underline' }}>← Retour à la boutique</a>
      </div>
    </div>
  );
}