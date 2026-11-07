# R Star Interiors

A modern interior-design studio demo built for R Star Interiors by Madtech.

## Features

- Responsive showroom homepage with living-room, kitchen and bedroom concepts.
- Interactive 3D room with selectable materials, lighting and viewing angles.
- Design-style explorer, material library, home-planning guides and FAQs.
- Quotation builder with client details, room-wise specifications, quantities, rates, discounts, tax, payment milestones and a printable proposal.
- Admin demo with project tracking, location/status filters, receipts, expenses, cash-profit reporting and CSV export.

## Run locally

Requires Node.js 22.13 or newer.

    npm install
    npm run dev

The default development URL is http://localhost:5173. To use the demo's current port:

    npm run dev -- --host 127.0.0.1 --port 4317

## Build

    npm run build

## Deploy on Vercel

Import this repository with its root directory set to the repository root. The tracked `vercel.json` selects Next.js, runs `npm run build:vercel` and uses the `.next` output directory. Leave the install command at its default and use Node.js 22 or newer.

The default `npm run build` remains the Vinext/Cloudflare build used by Sites. Its `dist` output is different from a Next.js build and must not be used with Vercel's Next.js preset. For a local check of the Vercel build:

    npm run build:vercel

## Project structure

- app/showroom.tsx: homepage and room previews
- app/home-sections.tsx: expanded homepage sections
- app/studio.tsx: shared navigation, quotation builder and admin dashboard
- app/scene3d.tsx: procedural Three.js room
- public/: original demo logo and generated interior concept assets
- DEMO-NOTES.md: walkthrough, asset prompts and demo behaviour

## Demo data

All client names, projects, financial records and portfolio scenes are illustrative. Images are AI-generated concepts, not completed R Star projects. Edits are saved in browser localStorage; no real payments, messages or client records are processed. Cash profit means receipts minus recorded project expenses.

## Stack

React, TypeScript, Vinext/Vite, Three.js and Lucide icons. The repository retains its Sites/Cloudflare deployment integration in .openai/hosting.json and the supplied build scripts.
