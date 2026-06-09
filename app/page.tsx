'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import { TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredProducts =
    selectedCategory === 'Semua'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />

      {/* Value Proposition Banner */}
      <div className="sticky bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-6 z-20 animate-bounce">
        <div className="bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 flex-shrink-0 mt-1" />
            <div className="text-sm">
              <p className="font-bold">💰 Belanja di sini = Anda hemat biaya platform</p>
              <p className="text-xs mt-1 opacity-90">Tidak ada komisi 1-5% seperti Shopee/TikTok</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Asoka Baby Store
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Produk bayi berkualitas premium dengan harga terjangkau
          </p>
          <p className="text-primary font-semibold">
            Hemat hingga Rp 5.000 dengan poin loyalitas Anda
          </p>
        </section>

        {/* Category Filter */}
        <section id="products" className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Kategori Produk</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {selectedCategory === 'Semua' ? 'Semua Produk' : `Kategori ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-primary-tint rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Mengapa Belanja di Asoka Baby?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-foreground mb-2">Hemat Biaya Platform</h3>
              <p className="text-gray-700 text-sm">
                Tidak ada komisi 1-5% seperti marketplace. Hemat lebih banyak, kami juga untung!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-foreground mb-2">Produk Premium</h3>
              <p className="text-gray-700 text-sm">
                Semua produk terpilih, berkualitas, dan aman untuk buah hati Anda
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-bold text-foreground mb-2">Loyalitas Reward</h3>
              <p className="text-gray-700 text-sm">
                Kumpulkan poin dan dapatkan diskon eksklusif setiap pembelian
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Pertanyaan Umum</h2>
          <div className="space-y-4 max-w-2xl">
            <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
              <summary className="font-semibold text-foreground">
                Berapa lama pengiriman?
              </summary>
              <p className="text-gray-600 text-sm mt-3">
                Pengiriman 2-5 hari kerja ke seluruh Indonesia. Gratis ongkir untuk pembelian
                di atas Rp 100.000
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
              <summary className="font-semibold text-foreground">
                Metode pembayaran apa saja?
              </summary>
              <p className="text-gray-600 text-sm mt-3">
                Transfer Bank, QRIS, COD (Bayar di Tempat), dan e-wallet populer
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
              <summary className="font-semibold text-foreground">
                Bagaimana dengan garansi produk?
              </summary>
              <p className="text-gray-600 text-sm mt-3">
                Semua produk kami bergaransi keaslian. Bisa ditukar jika ada cacat produk dalam
                7 hari
              </p>
            </details>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-gray-600 text-sm">
          <p className="mb-4">Hubungi kami: 0817-1712-1250 | support@asokababystore.com</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary">
              Instagram
            </a>
            <a href="#" className="hover:text-primary">
              TikTok
            </a>
            <a href="#" className="hover:text-primary">
              WhatsApp
            </a>
          </div>
          <p>© 2024 Asoka Baby Store. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

