# Axenor Trading — Frontend

Frontend for the Axenor Trading B2B catalog website. Frontend only: there is no backend yet.

Stack: React 19, Vite, Tailwind CSS v4, React Router 7, Motion (animations), Embla Carousel, Lucide icons.
Fonts: Manrope (headings) and Inter (body) via Google Fonts.

## Run

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`). Lint with `npm run lint`.

## Where to edit content

- `src/data/company.js` — company name, tagline, about text, contact details (including a WhatsApp
  number for the floating button), social links, markets. Fields set to `null` or `[]` are hidden in
  the UI until filled in. Nothing is invented.
- `src/data/products.js` — categories and products. Each entry has an `image` path under
  `public/images/`; set it to `null` to fall back to the branded placeholder graphic.

## Assets

- `public/brand/` — logo variants cropped from the brand identity board: `logo-light.png` (navy on
  transparent, for light backgrounds), `logo-dark.png` (white on transparent, for navy backgrounds),
  `icon.png`, `wordmark.png`, `favicon.png`.
- `public/images/hero.jpg` — the client-supplied port scene used in the hero, about and CTA sections.
- `public/images/categories/` and `public/images/products/` — royalty-free stock photos from Unsplash
  and Pexels, chosen as stand-ins until real product photography is available.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero slider, feature strip, about statement, category tiles, product carousel, process, CTA |
| `/products` | Catalog with search and category filter (`?category=slug&q=text`) |
| `/products/:slug` | Product detail with specs, related products and Send Inquiry |
| `/about` | Company overview |
| `/contact` | Inquiry form (`?product=slug` preselects a product) |

## Animation

Shared helpers live in `src/components/motion.jsx` (`FadeUp`, `SlideIn`, `Stagger`, `StaggerItem`)
with the easing curve in `src/lib/animation.js`. The hero slider auto-rotates every 6.5 seconds, pauses
on hover, and slides text and card content in opposite directions. All motion is disabled when the
visitor has reduced motion enabled.

## Inquiry form

`src/components/InquiryForm.jsx` validates on the client and currently logs the payload to the console
before showing a success state. Replace the marked block in `onSubmit` with a request to your backend
or form service when one exists.

## Design tokens

Colors and fonts are defined in  under . The palette is built from five
client-supplied colours, with three shades derived so accent text and borders reach a readable contrast.

| Token | Hex | Source | Role |
| --- | --- | --- | --- |
|  | #36453b | Dark Slate Grey | Dark sections, footer, headings, primary buttons |
|  | #515751 | Ebony | Raised surfaces on dark, button hover |
|  | #c2c1a5 | Dry Sage | Accent: icons, rules, category pills, accent button |
|  | #d7d6c2 | derived | Accent text on dark backgrounds |
|  | #6f6a4a | derived | Accent text on light backgrounds |
|  | #f5f9e9 | Ivory | Page background |
|  | #e9eed7 | derived | Subtle alternate surface |
|  | #dbdac4 | derived | Borders and dividers |
|  | #596869 | Dim Grey | Secondary body text |

Card surfaces use plain white to lift off the ivory page. Every text pairing meets WCAG AA, the
tightest being sage-dark on ivory at 5.1:1.

Note: the logo files in  come from the client's identity board and still carry the
original navy and gold brand colours, so they do not match this palette. Replace them with sage
versions if the brand identity is being changed too.
