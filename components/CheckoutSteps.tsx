'use client';

import { useState } from 'react';
import { useCart } from '@/lib/store';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface StepProps {
  isActive: boolean;
  isCompleted: boolean;
  stepNumber: number;
  title: string;
}

function StepIndicator({ isActive, isCompleted, stepNumber, title }: StepProps) {
  return (
    <div className="flex items-center mb-8 pb-8 border-b last:border-b-0">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
          isCompleted
            ? 'bg-success text-white'
            : isActive
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-600'
        }`}
      >
        {isCompleted ? '✓' : stepNumber}
      </div>
      <div className="ml-4">
        <p
          className={`font-semibold transition-colors ${
            isActive ? 'text-primary' : isCompleted ? 'text-success' : 'text-gray-600'
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function CheckoutSteps() {
  const items = useCart((s) => s.items);
  const getSubtotal = useCart((s) => s.getSubtotal);
  const getLoyaltyDiscount = useCart((s) => s.getLoyaltyDiscount);
  const checkoutData = useCart((s) => s.checkoutData);
  const setCheckoutData = useCart((s) => s.setCheckoutData);

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const subtotal = getSubtotal();
  const loyaltyDiscount = getLoyaltyDiscount();
  const total = subtotal - loyaltyDiscount;

  const handleNextStep = () => {
    if (currentStep === 1 && !checkoutData.nama) {
      alert('Mohon isi nama terlebih dahulu');
      return;
    }
    if (currentStep === 1 && !checkoutData.noHp) {
      alert('Mohon isi nomor HP terlebih dahulu');
      return;
    }
    if (currentStep === 1 && !checkoutData.alamat) {
      alert('Mohon isi alamat terlebih dahulu');
      return;
    }
    if (currentStep === 2 && !checkoutData.paymentMethod) {
      alert('Mohon pilih metode pembayaran');
      return;
    }

    setCompletedSteps([...completedSteps, currentStep]);
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter((s) => s !== currentStep - 1));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            {/* Step 1: Cart Summary */}
            <StepIndicator
              stepNumber={1}
              title="Ringkasan Pesanan"
              isActive={currentStep === 1}
              isCompleted={completedSteps.includes(1)}
            />

            {(currentStep === 1 || completedSteps.includes(1)) && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-4">Produk Anda:</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Customer Info */}
            <StepIndicator
              stepNumber={2}
              title="Data Pengiriman"
              isActive={currentStep === 2}
              isCompleted={completedSteps.includes(2)}
            />

            {currentStep >= 2 && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={checkoutData.nama}
                  onChange={(e) => setCheckoutData({ nama: e.target.value })}
                  disabled={completedSteps.includes(2)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
                />
                <input
                  type="tel"
                  placeholder="No HP (62812...)"
                  value={checkoutData.noHp}
                  onChange={(e) => setCheckoutData({ noHp: e.target.value })}
                  disabled={completedSteps.includes(2)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
                />
                <textarea
                  placeholder="Alamat Pengiriman lengkap (jalan, nomor rumah, kelurahan, kecamatan, kota, provinsi, kode pos)"
                  value={checkoutData.alamat}
                  onChange={(e) => setCheckoutData({ alamat: e.target.value })}
                  disabled={completedSteps.includes(2)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100 min-h-24"
                />
              </div>
            )}

            {/* Step 3: Payment Method */}
            <StepIndicator
              stepNumber={3}
              title="Metode Pembayaran"
              isActive={currentStep === 3}
              isCompleted={completedSteps.includes(3)}
            />

            {currentStep >= 3 && (
              <div className="mb-8 space-y-3">
                {(['transfer', 'qris', 'cod'] as const).map((method) => (
                  <label
                    key={method}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      checkoutData.paymentMethod === method
                        ? 'border-primary bg-primary-tint'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={checkoutData.paymentMethod === method}
                      onChange={(e) =>
                        setCheckoutData({ paymentMethod: e.target.value as any })
                      }
                      disabled={completedSteps.includes(3)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-foreground">
                      {method === 'transfer' && '💳 Transfer Bank'}
                      {method === 'qris' && '📱 QRIS'}
                      {method === 'cod' && '🚚 Bayar di Tempat (COD)'}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {/* Loyalty Points */}
            {currentStep >= 1 && (
              <div className="mb-8 p-4 bg-primary-tint border-2 border-primary rounded-lg">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkoutData.useLoyaltyPoints}
                    onChange={(e) =>
                      setCheckoutData({ useLoyaltyPoints: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <span className="ml-3 font-semibold text-foreground">
                    💰 Gunakan 500 poin anda = Diskon Rp 5.000
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            {currentStep < 4 && (
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevStep}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-foreground font-bold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Kembali
                  </button>
                )}
                {currentStep < 3 && (
                  <button
                    onClick={handleNextStep}
                    className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Lanjut <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {currentStep === 3 && (
                  <button
                    onClick={handleNextStep}
                    className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Konfirmasi Pesanan
                  </button>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Pesanan Berhasil!
                </h2>
                <p className="text-gray-600 mb-6">
                  Terima kasih telah berbelanja di Asoka Baby Store
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Kami akan segera menghubungi Anda di {checkoutData.noHp}
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-4">
            <h3 className="font-bold text-lg mb-4 text-foreground">Ringkasan</h3>
            <div className="space-y-3 pb-4 border-b mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              {loyaltyDiscount > 0 && (
                <div className="flex justify-between text-sm text-success font-semibold">
                  <span>Diskon Poin:</span>
                  <span>-Rp {loyaltyDiscount.toLocaleString('id-ID')}</span>
                </div>
              )}
            </div>
            <div className="flex justify-between text-xl font-bold text-primary mb-4">
              <span>Total:</span>
              <span>Rp {total.toLocaleString('id-ID')}</span>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
              <p className="font-semibold mb-1">💡 Hemat lebih banyak!</p>
              <p>Belanja langsung hemat biaya platform. Kami juga untung!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
