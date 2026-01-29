// app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/data/products';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is missing');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover', // (Ou ta version actuelle)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId } = body;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    // 👇 C'EST ICI QU'ON CHANGE 👇
    // On met l'URL réelle de ton site (sans slash à la fin)
    const baseUrl = 'https://site-test-e-comerce.vercel.app'; 

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              images: [product.image], // Optionnel si l'URL image n'est pas une URL web complète
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // 👇 On utilise la variable baseUrl
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}