# Villa Allamanda Website - Project Context for Claude

## Project Overview
Building a new website for Villa Allamanda, a boutique hotel in Eleuthera, Bahamas. Replacing an old WordPress site with a modern Vue 3 + TypeScript + Tailwind CSS static site.

## Tech Stack
- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom colors
- **Router:** Vue Router 4
- **Build:** Vite
- **Hosting:** Will deploy to Vercel (not done yet)

## Project Location
```
~/Personal/villa-allamanda/
```

## Custom Tailwind Colors (in tailwind.config.js)
```js
colors: {
  sand: '#F5F0E8',      // Background cream
  ocean: '#1E6B7B',     // Primary teal
  'ocean-dark': '#154B56',
  coral: '#E07A5F',     // Accent
  palm: '#3D5A45',      // Green accent
  gold: '#C9A227',      // Gold accent
}
```

## Custom CSS Classes (in src/style.css)
- `.btn-primary` - Ocean background button
- `.btn-outline` - Outlined button
- `.section-padding` - Standard section padding

## Key URLs & Info

**Booking (FreeToBook):**
```
http://www.freetobook.com/affiliates/reservation.php?w_id=11455&w_tkn=bHx0FjW3ZNZpfLK03Kg3epw1MFBG1I7XbJJ6ZQHUgzJUZs8dwaU8JZJsgedAH
```

**Contact:**
- Phone Local: (242) 332-3934
- Toll Free: (877) 516-6639
- WhatsApp: (242) 359-7766 — https://wa.me/12423597766
- Email: info@villaallamanda.com

**Car Rental Partner:** https://eleutheraislandrentacar.com/

**Social:**
- Facebook: https://www.facebook.com/Cigatoo.Estates.Governors.Harbour.Eleuthera/?ref=hl
- Twitter: https://twitter.com/VillaAllamanda
- Pinterest: https://www.pinterest.com/villaallamanda/
- TripAdvisor: https://www.tripadvisor.com/Hotel_Review-g2698766-d6483216-Reviews-Villa_Allamanda_Eleuthera-Governor_s_Harbour_Eleuthera_Out_Islands_Bahamas.html#REVIEWS

## File Structure
```
src/
├── assets/
│   └── images/          # Downloaded from WordPress (144 images)
├── components/
│   ├── NavBar.vue       # Header with nav links
│   └── Footer.vue       # Footer with social links
├── views/
│   ├── HomeView.vue     # Landing page
│   ├── RoomsView.vue    # Room listings with modal details
│   ├── RatesView.vue    # Pricing table and policies
│   ├── GalleryView.vue  # Photo gallery (needs images)
│   ├── ActivitiesView.vue   # Things to do
│   ├── InfoView.vue     # Visitor information
│   ├── GettingHereView.vue  # Directions, airlines
│   └── ContactView.vue  # Contact form and info
├── router/
│   └── index.ts         # Route definitions
├── App.vue
├── main.ts
└── style.css
```

## Current Status

### ✅ Done
- Project scaffolded with Vue 3 + TypeScript + Vite
- Tailwind CSS configured with custom colors
- Vue Router set up with all routes
- NavBar and Footer components created
- All view files created with real content from WordPress
- Images downloaded from WordPress to src/assets/images/

### 🔲 TODO
1. **Update image paths in Vue files** — Images are downloaded but paths need to be set
2. **GalleryView.vue** — Needs to display actual gallery images
3. **Test responsive design** on mobile
4. **Deploy to Vercel**
5. **Point domain** (villaallamanda.com) to Vercel — do this LAST

## Room Types (for reference)
1. Garden Cottage Queen Bedroom — sleeps 2-4, 182 sq ft
2. Efficiency Suite — sleeps 2-3, 270 sq ft
3. Queen Studio Bedroom (2nd Floor) — sleeps 2-3, 151-173 sq ft
4. Queen Studio Bedroom (3rd Floor) — sleeps 2-3, 155-178 sq ft
5. One Bedroom King Suite (2nd Floor) — sleeps 2-3, 470 sq ft
6. One Bedroom King Suite (3rd Floor) — sleeps 2-3, 475 sq ft
7. Two Bedroom Suite (combo option)

## Rates (per night, before tax)
| Room | Summer (May-Nov) | Winter (Nov-May) |
|------|------------------|------------------|
| Cottage/Efficiency/Queen Studio | $220.55 | $245.05 |
| King Suite | $290.41 | $322.68 |
| Two Bedroom | $334.41 | $366.68 |

## Image Path Convention
Images should be imported or referenced as:
```vue
<!-- Option 1: Import in script -->
<script setup>
import heroImage from '@/assets/images/hero.jpg'
</script>

<!-- Option 2: Direct path in template -->
<img src="@/assets/images/rooms/garden-cottage.jpg" />

<!-- Option 3: Public folder (for large/many images) -->
<img src="/images/gallery/photo1.jpg" />
```

## Notes for Claude
- User prefers TypeScript and Vue 3 Composition API
- Keep code clean and well-organized
- User is a junior dev learning as they go
- The booking system is external (FreeToBook) — just link to it, don't build booking functionality
- Contact form needs a backend solution (Formspree recommended for simplicity)

## Original WordPress Site (for reference)
- Live site: https://villaallamanda.com/
- Demo/staging: https://villaallamanda.com/demo/
