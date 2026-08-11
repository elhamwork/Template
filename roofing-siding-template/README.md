# Roofing & Siding Contractor Website Template

A modern, multi-page website template for a roofing and siding contractor business. Built with React, React Router, and a documented 8pt-grid design system, so it can be rebranded and resold to individual contractor clients.

## Tech Stack

- React 19 + Vite
- React Router 7 (client-side routing across 5 pages)
- Plain CSS — no UI framework — built on a token-based design system (`src/styles/tokens.css`)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Design System

Defined once in `src/styles/tokens.css` and used everywhere via CSS custom properties:

- **Color** — navy primary (`--color-primary`), red-orange accent (`--color-accent`), white/light-gray neutrals, charcoal body text (not pure black)
- **Type scale** — 14 / 16 / 20 / 28 / 36 / 48px (`--text-sm` → `--text-3xl`)
- **Spacing scale** — 8pt grid: 8, 16, 24, 32, 48, 64, 96px (`--space-1` → `--space-7`)

## Pages

1. **Home** (`/`) — hero, trust cards, services preview, about preview, testimonials, CTA
2. **About** (`/about`) — company story, credentials, trust cards
3. **Services** (`/services`) — detailed service breakdown (roof repair, replacement, maintenance, siding)
4. **Portfolio** (`/gallery`) — before/after slider + project gallery grid
5. **Contact** (`/contact`) — quote request form + contact info/hours

## Rebranding This Template

**Everything is controlled from one file: `src/config/siteConfig.js`.** Edit that file to swap in a new client's business name, phone number, license number, service area, services, testimonials, and images — no component code should need to change.

## Reusable Components

`src/components/` contains the shared building blocks used across all 5 pages:

- `Button.jsx` — primary (solid accent) / secondary (outline) variants, renders as `<Link>`, `<a>`, or `<button>`
- `TrustCard.jsx`, `ServiceCard.jsx`, `TestimonialCard.jsx`, `GalleryItem.jsx` — content cards
- `Navbar.jsx`, `Footer.jsx` — sticky nav with mobile menu, footer with nav/contact/service-area columns
- `PageHero.jsx` — shared header banner used on About/Services/Gallery/Contact
- `ContactForm.jsx` — quote request form, UI-complete and ready to wire up to an API or form service
- `BeforeAfterSlider.jsx` — draggable/keyboard-accessible before/after image comparison

## Notes

- Images are referenced by URL from `siteConfig.js` — swap in a client's real photography there.
- The contact form's submit handler is a placeholder — connect it to your API, Formspree, Netlify Forms, or a serverless function.
