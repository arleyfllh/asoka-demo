'use client';

import { Header } from '@/components/Header';
import { CheckoutSteps } from '@/components/CheckoutSteps';

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>
        <CheckoutSteps />
      </main>
    </>
  );
}
