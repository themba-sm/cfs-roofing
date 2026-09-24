# C.F.S. Roofing & Gutters — Website

Production website for C.F.S. Roofing & Gutters (Kempton Park, South Africa).
Built with React + Vite. No UI libraries, no analytics scripts, no secrets in
the client bundle.

## Stack

- React 18 + Vite (static build, deployable to Vercel as-is)
- Hand-rolled router (`src/lib/router.jsx`) with SPA rewrites via `vercel.json`
- Bespoke CSS design system (`src/styles.css`) — mobile-first
- Lead capture backed by a secure serverless function (Base44 backend):
  validation, spam honeypot, rate limiting and durable storage

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, services, materials, applications, trust, FAQ |
| `/roofing` | Full roofing services deep-dive |
| `/seamless-gutters` | Seamless gutter enquiries |
| `/gallery` | Gallery framework with categories + lightbox |
| `/about` | Company background |
| `/contact` | Contact details + guided "Request a Quote" flow |

## Lead flow

The guided enquiry flow (`src/components/QuoteFlow.jsx`) posts to a serverless
endpoint that validates server-side, blocks spam (honeypot + rate limit) and
stores each lead with status `NEW`. The customer is told their request was
received; internal lead statuses (`NEW / CONTACTED / QUOTED / COMPLETED /
CLOSED`) are never exposed publicly.

The endpoint URL is configured in `src/lib/api.js`.

## Development

```bash
npm install
npm run dev
npm run build   # outputs static site to dist/
```

## Deployment (Vercel)

Import the repository in Vercel — no configuration needed beyond the
framework defaults; `vercel.json` handles SPA rewrites for client-side routes.

## Content policy

All business facts on the site (services, materials, address, phones, emails,
"since 1994") come from information supplied by the business. No invented
prices, hours, reviews, ratings, certifications or project claims. Gallery
imagery is contextual and clearly not presented as completed C.F.S. projects.
