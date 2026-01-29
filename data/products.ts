// data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "price_123", 
    name: "Sneakers Ultra",
    price: 12000, 
    currency: "EUR",
    image: "https://via.placeholder.com/300",
    description: "Le confort ultime pour tes pieds."
  },
  {
    id: "price_456",
    name: "Hoodie Dev",
    price: 4500, 
    currency: "EUR",
    image: "https://via.placeholder.com/300",
    description: "Code en style, hiver comme été."
  }
];