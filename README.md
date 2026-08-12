# Roofing Company Website Templates

This repo contains two independent, reusable React website templates built for roofing contractors, each designed to be resold and rebranded with minimal effort:

1. **`/` (this directory)** — "Cornerstone Roofing Co.", a premium single-page scrolling template. See details below.
2. **[`roofing-siding-template/`](./roofing-siding-template)** — "Ironclad Roofing & Siding", a multi-page template (Home/About/Services/Portfolio/Contact) built on an explicit 8pt-grid design system. See its own [README](./roofing-siding-template/README.md).

Both are deployed together via `.github/workflows/deploy.yml`: template 1 at the site root, template 2 at `/roofing-siding-template/`.

## Deploying to Vercel

A `vercel.json` at the repo root is already configured to build and serve both templates from one Vercel project (same `/` + `/roofing-siding-template/` layout as GitHub Pages). To deploy:

1. **Via the Vercel dashboard**: Import this GitHub repo as a new project named `templateroofing`. Vercel will read `vercel.json` automatically (Framework Preset: **Other**; build command and output directory are already set in the file — no need to override them).
2. **Via the CLI**, from the repo root:
   ```bash
   npx vercel --prod --name templateroofing
   ```
   (Requires `vercel login` first if you haven't authenticated the CLI before.)

Locally, `npm run build:vercel` runs the same combined build (`scripts/build-vercel.sh`) into `dist_vercel/` so you can sanity-check the output before deploying — e.g. `npx serve dist_vercel`.

---

## Template 1: Cornerstone Roofing Co. (single-page)

A premium, reusable React website template built for roofing contractors. Designed to be resold and rebranded for multiple companies with minimal effort.

## Tech Stack

- React 19 + Vite
- Plain CSS (custom design system, CSS variables, no UI framework dependency)
- No backend required — the estimate form UI is ready to wire up to any API/form service (Formspree, Netlify Forms, a serverless function, etc.)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Rebranding This Template

**Everything is controlled from one file: `src/config/siteConfig.js`.**

To turn this into a new customer's website, edit that file only — you should not need to touch any component. It contains:

- Company name, logo text, license number, years in business
- Contact info (phone, email, address, business hours)
- Brand colors (`theme.primaryColor`, `theme.secondaryColor`, `theme.accentColor`) — applied globally via CSS custom properties at runtime in `App.jsx`
- Social links
- Hero heading/subheading/buttons/image
- Trust bar items
- Services (6 cards with image, name, description)
- About section copy, image, and credibility points
- Projects/gallery entries
- "Why Choose Us" reasons
- Process steps
- Testimonials
- Service areas
- FAQ
- Estimate form service options
- Footer description
- SEO title/description

### Swapping Images

Every image in the site is a URL referenced from `siteConfig.js`. Replace the Unsplash placeholder URLs with the customer's own photography (hosted anywhere, or dropped into `/public` and referenced as `/your-image.jpg`).

### Changing the Favicon

Replace `public/favicon.svg`, or point `company.favicon` in `siteConfig.js` at a different file.

## Project Structure

```
src/
  config/
    siteConfig.js      # single source of truth for all content/branding
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    TrustBar.jsx / .css
    Services.jsx / .css
    About.jsx / .css
    Projects.jsx / .css
    WhyChooseUs.jsx / .css
    Process.jsx / .css
    Testimonials.jsx / .css
    ServiceAreas.jsx / .css
    FAQ.jsx / .css
    CTA.jsx / .css
    EstimateForm.jsx / .css
    Footer.jsx / .css
    Reveal.jsx          # scroll fade-in wrapper
    icons.jsx            # small inline SVG icon set
  hooks/
    useReveal.js
  index.css               # design system: tokens, typography, buttons, layout utilities
  App.jsx                  # composes all sections, injects theme + SEO meta at runtime
```

Each section is an independent, self-contained component with its own colocated stylesheet — remove, reorder, or duplicate sections in `App.jsx` as needed per project.
