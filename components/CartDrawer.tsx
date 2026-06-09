'use client';

import { useCart } from '@/lib/store';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const getSubtotal = useCart((s) => s.getSubtotal);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getSubtotal();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg z-50 flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold text-foreground">Keranjang Anda</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-foreground text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <p>Keranjang kosong</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto p-4 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold text-sm mt-1">
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded text-sm"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded text-sm"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      Rp {subtotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-primary text-white py-3 rounded-lg font-bold text-center hover:bg-pink-700 transition-colors"
                  >
                    Lanjut ke Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
