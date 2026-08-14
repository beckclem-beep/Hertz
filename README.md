# Hertz Brossard Tesla Finder

Next.js app for searching Tesla rentals at Hertz Brossard.

## Important
Hertz does not provide a public pricing API that this app can legally/ reliably query from Vercel. The app therefore validates the requested rental and opens the official Hertz reservation flow instead of inventing prices. A future authorized API/browser provider can be plugged into `app/api/search/route.ts`.

## Deploy
Import this repository into Vercel. Build command: `next build`.
