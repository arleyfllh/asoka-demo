export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  memberPrice?: number;
  promo?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Popok Baby Comfort Premium',
    category: 'Popok',
    price: 85000,
    memberPrice: 78000,
    description: 'Popok premium dengan daya serap super, lembut di kulit bayi',
    image: 'https://via.placeholder.com/300x300?text=Popok+Premium',
    promo: true,
  },
  {
    id: '2',
    name: 'Susu Formula Bayi Gold',
    category: 'Susu',
    price: 125000,
    memberPrice: 115000,
    description: 'Formula lengkap dengan DHA, AA, dan probiotik',
    image: 'https://via.placeholder.com/300x300?text=Susu+Formula',
  },
  {
    id: '3',
    name: 'Sabun Bayi Organik Asoka',
    category: 'Perawatan',
    price: 45000,
    description: 'Sabun bayi organik, aman untuk kulit sensitif',
    image: 'https://via.placeholder.com/300x300?text=Sabun+Organik',
  },
  {
    id: '4',
    name: 'Minyak Telon Tradisional',
    category: 'Perawatan',
    price: 35000,
    memberPrice: 32000,
    description: 'Minyak telon dengan bahan alami, hangat dan nyaman',
    image: 'https://via.placeholder.com/300x300?text=Minyak+Telon',
  },
  {
    id: '5',
    name: 'Bedak Bayi Anti Jamur',
    category: 'Perawatan',
    price: 38000,
    description: 'Bedak anti jamur dan anti bau, aman untuk bayi',
    image: 'https://via.placeholder.com/300x300?text=Bedak+Bayi',
    promo: true,
  },
  {
    id: '6',
    name: 'Vitamin Bayi Lengkap',
    category: 'Suplemen',
    price: 95000,
    memberPrice: 87000,
    description: 'Vitamin A, D, C, dan nutrisi lengkap untuk bayi',
    image: 'https://via.placeholder.com/300x300?text=Vitamin',
  },
  {
    id: '7',
    name: 'Popok Malam Super Panjang',
    category: 'Popok',
    price: 105000,
    memberPrice: 96000,
    description: 'Popok khusus malam, daya serap 12 jam tanpa kebocoran',
    image: 'https://via.placeholder.com/300x300?text=Popok+Malam',
  },
  {
    id: '8',
    name: 'Shampo Bayi Extra Lembut',
    category: 'Perawatan',
    price: 42000,
    description: 'Shampo bayi dengan kondisioner, tidak pedih di mata',
    image: 'https://via.placeholder.com/300x300?text=Shampo',
  },
];

export const CATEGORIES = ['Semua', 'Popok', 'Susu', 'Perawatan', 'Suplemen'];
