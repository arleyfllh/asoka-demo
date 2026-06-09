import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface CheckoutData {
  nama: string;
  noHp: string;
  alamat: string;
  paymentMethod: 'transfer' | 'qris' | 'cod' | null;
  useLoyaltyPoints: boolean;
}

interface CartStore {
  items: CartItem[];
  loyaltyPoints: number;
  checkoutData: CheckoutData;

  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getLoyaltyDiscount: () => number;

  setCheckoutData: (data: Partial<CheckoutData>) => void;
  resetCheckout: () => void;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  loyaltyPoints: 500,
  checkoutData: {
    nama: '',
    noHp: '',
    alamat: '',
    paymentMethod: null,
    useLoyaltyPoints: false,
  },

  addItem: (item: CartItem) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { items: [...state.items, item] };
    }),

  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQuantity: (id: string, quantity: number) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.id !== id)
          : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),

  clearCart: () => set({ items: [] }),

  getSubtotal: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getLoyaltyDiscount: () => {
    const state = get();
    if (!state.checkoutData.useLoyaltyPoints) return 0;
    return Math.min(state.loyaltyPoints * 10, state.getSubtotal() * 0.1);
  },

  setCheckoutData: (data: Partial<CheckoutData>) =>
    set((state) => ({
      checkoutData: { ...state.checkoutData, ...data },
    })),

  resetCheckout: () =>
    set({
      checkoutData: {
        nama: '',
        noHp: '',
        alamat: '',
        paymentMethod: null,
        useLoyaltyPoints: false,
      },
      items: [],
    }),
}));
