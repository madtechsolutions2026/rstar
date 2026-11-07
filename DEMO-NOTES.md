# R Star Interiors concept demo

Pages: `/` (studio), `/quotation` (editable quotation builder), `/admin` (project and financial dashboard).

## Demo boundary

All portfolio scenes, client names, projects and financial records are illustrative. There is no real client backend, payment processing, message delivery or production admin authentication. Sites owner-private access controls the hosted demo. Browser localStorage holds edits, quotations and consultation requests on the current device. Different devices and domains have separate data.

## Walkthrough

1. Show the homepage, open a portfolio concept, and explore the material room. Switch palette and lighting, then drag the room or use its angle slider.
2. Open the quotation maker. Edit client details, quantities, rates, material specifications, discounts, tax and terms. Save a quote, reopen it from Saved, and use Print / save PDF in a browser supporting printing.
3. Open Admin. Select 2026 and November, then inspect collections, expenses and cash profit. Add a transaction: its date selects the corresponding period and all relevant figures update.
4. Filter projects by status, city or search. Open a project to update status/progress. Add a fictional project and export the current period's journal as CSV.

Financial periods are calendar years. Collections and expenses use transaction dates. Cash profit equals receipts less recorded project expenses; it is not accrual profit and excludes unrecorded overheads and tax. Outstanding payments are all-time contract values less all-time receipts per project, clamped at zero; overpayments display as credit on the project row.

## Assets

`public/favicon.svg` and the inline R Star mark are original vector artwork. The 3D room is original procedural geometry in `app/scene3d.tsx`, with a CSS 3D fallback in `app/room.tsx`. The Three.js scene loads near the viewport, pauses rendering offscreen, uses a capped pixel ratio and targets 30 fps. Images are compressed WebP derivatives of built-in ImageGen outputs, not photographs of actual R Star projects.

Image generation used the built-in image_gen tool, with these final prompts:

### Living room (`public/living-room.webp`, master `public/living-room.png`)

Use case: photorealistic-natural. Create a single ultra-realistic architectural interior photograph for the hero of a premium Indian residential interior studio named R Star Interiors. Wide landscape 16:9 composition, beautifully designed contemporary Indian apartment living room, warm ivory curved linen sectional sofa, walnut wall panelling, pale travertine coffee table, one sculptural brass floor lamp, deep emerald armchair, large windows on right with sheer drapes, leafy greenery, subtle Indian craft objects, elegant natural materials, warm morning sunlight and soft realistic shadows. Camera at eye level from a spacious corner, architectural magazine quality, restrained luxury, absolutely no text, no people, no logos, no watermark. Rich photographic detail, believable proportions.

### Kitchen (`public/kitchen.webp`, master `public/kitchen.png`)

Use case photorealistic-natural. A refined contemporary Indian home interior, premium architectural magazine photograph. Wide landscape image of an exquisite open-plan kitchen and dining room: matte deep emerald lower cabinetry, pale cream upper cabinets, honed ivory stone island with rounded edge, sculptural brass pendant, walnut dining table, textured neutral walls, warm soft daylight, one tall plant. Sophisticated residential design, impeccably realistic materials, quiet atmosphere, no people, no text, no logos, no watermark. This is an original concept interior for a demo portfolio, not a screenshot or collage. Wide architectural composition.

### Bedroom (`public/bedroom.webp`, master `public/bedroom.png`)

Use case photorealistic-natural. Original interior design concept photograph for premium Indian residential studio. A serene contemporary master bedroom: low walnut platform bed, ivory linen bedding, deep emerald accent cushion, warm textured plaster wall behind bed, full-height walnut wardrobe to one side, delicate brass bedside pendant, sheer curtains filtering morning sunlight, muted olive plant, wool rug and natural stone bedside table. Architectural magazine photography, elegant uncluttered quiet luxury, realistic materials and proportions. Wide landscape composition with the full bed and wardrobe visible. No people, no writing, no logos, no watermark.

## Development

Node 22.13+; `npm install`, `npm run dev`, `npm run build`. Framework: Vinext/React, with the supplied Sites integration retained. The source identity is in `.openai/hosting.json`.
