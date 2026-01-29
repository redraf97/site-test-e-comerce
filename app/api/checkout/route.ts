// app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/data/products'; // On récupère nos produits

// On initialise Stripe avec la clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-12-15.clover', 
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId } = body;

    // 1. On retrouve le produit dans notre liste pour sécuriser le prix
    // (On ne fait jamais confiance au prix envoyé par le frontend !)
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }
    
    const baseUrl = 'https://site-test-e-comerce.vercel.app';

    // 2. On crée la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: product.price, // Le prix en centimes (ex: 2000 pour 20.00€)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success`, // Page de succès
      cancel_url: `${request.headers.get('origin')}/cancel`,   // Page d'annulation
    });

    // 3. On renvoie l'URL de paiement au frontend
    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}