'use client';

import { Product } from '@/lib/products';
import { useCart, CartItem } from '@/lib/store';
import { ShoppingCart, Tag } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);
  const isMember = true;

  const displayPrice = isMember && product.memberPrice ? product.memberPrice : product.price;
  const originalPrice = isMember && product.memberPrice ? product.price : null;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: displayPrice,
      quantity: 1,
      image: product.image,
      category: product.category,
    };
    addItem(item);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative bg-gray-100 aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.promo && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Tag className="w-3 h-3" />
            PROMO
          </div>
        )}
        {product.memberPrice && (
          <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
            MEMBER
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-sm">
          {product.name}
        </h3>

        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4 flex items-center gap-2">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              Rp {originalPrice.toLocaleString('id-ID')}
            </span>
          )}
          <span className="text-primary font-bold text-lg">
            Rp {displayPrice.toLocaleString('id-ID')}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold text-sm hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
