# NishVa Arthritis & Rheumatology Clinic website (multi-page)

Next.js (App Router, JavaScript) + Tailwind CSS + GSAP. It builds to a plain static site, so it can be hosted anywhere.

## Run it

```bash
npm install
npm run dev        # development at http://localhost:3000
npm run build      # creates the finished website in the /out folder (upload that folder to your host)
npm start          # preview the built /out folder
```

## Pages

| Page | Address | What it contains |
|------|---------|------------------|
| Home | `/` | Auto-changing slider, hours/location/contact bar, doctor introduction, links to the other pages |
| About | `/about` | Doctor photo and full description, how the clinic cares |
| Services | `/services` | Condition cards with images, plus the other conditions |
| Treatment | `/treatment` | Scroll-driven treatment walkthrough and benefits |
| First visit | `/first-visit` | Signs worth getting checked, what to expect |
| Appointment | `/appointment` | Hours, address, phone, WhatsApp, request form, FAQ |

## Folder guide

```
public/images/        Photos: brand (logo), doctor, conditions (slider + service cards), treatment
src/data/             ALL the text. Edit these files to change content, no code needed
  clinic.js           Doctor, phone, WhatsApp, address, opening hours
  slides.js           Hero slider slides (image, heading, text)
  services.js         Condition cards (with images) and the "more conditions" list
  treatments.js       The scroll walkthrough: heading and four treatments
  content.js          Menu and footer links, approach, warning signs, first visit, benefits, FAQ
src/app/              One folder per page, each with a small page.js that lists its sections
  page.js             Home
  about/ services/ treatment/ first-visit/ appointment/
  layout.js           Shared header, footer and page title
  template.js         Restarts the scroll effects on every page
  globals.css         Styles
src/components/
  layout/             Header (with page links), Footer, and the floating WhatsApp button
  sections/           One file per section (HeroSlider, About, Services, Treatment, ...)
  ui/                 Shared pieces: PageHero (blue page banner), Icons, OpenStatus, ScrollEffects, Words
scripts/make-headers.mjs   Builds the security headers after `npm run build`
```

To add a page: create `src/app/<name>/page.js` (copy any existing one), then add it to `navLinks` in `src/data/content.js`.

## Common edits

- **Change a photo:** replace the file in `public/images/` keeping the same name, or point to a new name in `src/data/`.
- **Slider speed:** `INTERVAL` at the top of `src/components/sections/HeroSlider.js` (milliseconds).
- **Opening hours:** `hours` in `src/data/clinic.js`. The "Open now" badge reads from it.
- **Colours:** `tailwind.config.js` (`navy` and `brand`).

## Appointment form

The form checks the fields but sends nothing until you give it an endpoint. Copy `.env.example` to `.env.local`
and set `NEXT_PUBLIC_APPOINTMENT_ENDPOINT` to your own HTTPS URL (it receives JSON: name, phone, day).
Until then the form tells the visitor nothing was sent and shows the clinic phone number.

## Security

- No third-party scripts, fonts or trackers. GSAP is bundled.
- `npm run build` writes `out/_headers` with a strict Content-Security-Policy and other headers.
  Netlify and Cloudflare Pages apply it automatically; on other hosts copy those headers into the server settings.
- Do not put health details or secrets in the form, URLs or analytics.

## Content notes

Doctor details, address and phone come from the clinic flyer; condition and treatment wording comes from the clinic's own
listing and treatment infographic. Check hours and phone numbers with the clinic before launch.
