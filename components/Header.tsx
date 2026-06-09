'use client';

import Link from 'next/link';
import { CartDrawer } from './CartDrawer';

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          🌸 Asoka Baby
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-semibold text-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <a href="#products" className="hover:text-primary transition-colors">
            Produk
          </a>
          <a href="#benefits" className="hover:text-primary transition-colors">
            Keuntungan
          </a>
        </nav>

        <CartDrawer />
      </div>
    </header>
  );
}
