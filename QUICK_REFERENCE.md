# ⚡ Quick Reference - Asoka Baby Store Demo

## Start Here

```bash
# 1. Navigate to project
cd "c:/Users/user/Downloads/portfolio-asoka-baby-marketplace/asoka-demo"

# 2. View the demo locally
npm run dev
# Open: http://localhost:3000

# 3. Deploy to Vercel (when ready)
npm install -g vercel
vercel
```

---

## Files to Know

| File | Purpose | Edit? |
|------|---------|-------|
| `app/page.tsx` | Product listing | ✏️ Yes |
| `app/checkout/page.tsx` | Checkout | ✏️ Yes |
| `lib/products.ts` | Product data | ✏️ **Yes (first!)** |
| `lib/store.ts` | Cart state | ⚠️ Advanced |
| `app/globals.css` | Brand colors | ✏️ Yes |
| `components/Header.tsx` | Navigation | ⚠️ Advanced |

---

## Quick Customizations

### Add/Edit Products
📍 `lib/products.ts` (lines 12-65)

```typescript
{
  id: '1',
  name: 'Product Name',
  category: 'Category',
  price: 85000,
  memberPrice: 78000,
  description: 'Description',
  image: 'https://image-url.com/product.jpg',
  promo: true,
}
```

### Change Brand Colors
📍 `app/globals.css` (lines 3-10)

```css
--primary: #E91E8C;        /* Main color */
--accent: #6C3B9E;         /* Accent */
```

### Update Contact Info
📍 `app/page.tsx` (lines 175-180)

```typescript
<p className="mb-4">
  Hubungi kami: YOUR_PHONE | YOUR_EMAIL
</p>
```

### Change Loyalty Points Value
📍 `lib/store.ts` (line 24)

```typescript
loyaltyPoints: 500,  // Change to your amount
```

---

## Demo Flow

1. **Homepage** → Scroll products, click category filter
2. **Add Items** → Click "Beli Sekarang", watch cart counter
3. **Open Cart** → Click 🛒 icon → see drawer
4. **Checkout** → Click "Lanjut ke Checkout"
   - Step 1: Review cart
   - Step 2: Fill form
   - Step 3: Choose payment
   - Step 4: See confirmation

---

## Deployment Commands

### Local Testing
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (3 min)
```bash
vercel
```

---

## What Each Component Does

| Component | File | Do What |
|-----------|------|---------|
| Header | `components/Header.tsx` | Logo + nav + cart |
| ProductCard | `components/ProductCard.tsx` | Single product + button |
| CartDrawer | `components/CartDrawer.tsx` | Shopping cart UI |
| CheckoutSteps | `components/CheckoutSteps.tsx` | 3-step checkout |

---

## Useful URLs

| Resource | URL |
|----------|-----|
| Local demo | http://localhost:3000 |
| Deployed (after vercel) | https://asoka-demo.vercel.app |
| Vercel dashboard | https://vercel.com |
| Next.js docs | https://nextjs.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |

---

## Troubleshooting

**Q: Dev server won't start**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

**Q: Build fails**
```bash
# Check Node version (need 18+)
node --version

# Clear and rebuild
rm -rf .next
npm run build
```

**Q: Images not showing**
- Edit images in `lib/products.ts`
- Use real image URLs (not placeholder)
- Example: `https://cdn.asoka-shop.com/image.jpg`

**Q: Cart loses items on refresh**
- This is normal (demo uses in-memory state)
- Phase 2 will add localStorage/database

---

## Important Notes

✅ This is demo/frontend only
✅ No real payment processing yet
✅ No backend database yet
✅ Can be deployed as-is to Vercel
⚠️ Phase 2 needed for real transactions

---

## Next Phase (Backend)

Requirements for checkout to actually work:
- [ ] Database (Supabase/Firebase)
- [ ] Payment API (Midtrans/Xendit)
- [ ] Order tracking system
- [ ] Email/SMS notifications
- [ ] Admin dashboard

Estimated Phase 2: 4-6 weeks development

---

**Current Status**: ✅ Production-Ready Frontend
**Ready to Deploy**: Yes
**Ready for Real Orders**: No (Phase 2 needed)
