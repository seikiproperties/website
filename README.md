# Seiki Properties — Website

A Next.js 14 (App Router, TypeScript, Tailwind) site for Seiki Properties.

---

## 1. Run it locally (optional, to preview before deploying)

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## 2. Deploy via GitHub + Vercel (recommended path)

### Step A — Push this folder to GitHub
1. Create a new repository on [github.com](https://github.com/new) (e.g. `seiki-properties`).
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/seiki-properties.git
   git push -u origin main
   ```

### Step B — Import into Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and log in (or sign up — it's free for this use case).
2. Click **Import** next to the GitHub repo you just pushed.
3. Vercel auto-detects Next.js — leave all settings as default.
4. Click **Deploy**. In about a minute you'll have a live URL like `seiki-properties.vercel.app`.

### Step C — Connect your domain
1. In the Vercel project, go to **Settings → Domains**.
2. Add your domain (e.g. `seikiproperties.com`).
3. Vercel will give you DNS records (usually an A record or CNAME) to add at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.).
4. Once DNS propagates (can take a few minutes to a few hours), your domain is live.

That's it — every time you push a change to GitHub's `main` branch, Vercel redeploys automatically.

---

## 3. What's left for you to fill in before launch

Everything below is marked with `// TODO` comments directly in the code, so you can search for `TODO` in your editor to find every spot.

| What | Where to edit |
|---|---|
| **Phone numbers, WhatsApp number, email, office address** | `src/lib/siteConfig.ts` |
| **Real Instagram handle/URL** | `src/lib/siteConfig.ts` |
| **Founder names, bios, photos** | `src/components/home/Founders.tsx` and `src/app/about/page.tsx`. Replace the placeholder SVGs in `public/images/` with real photos (same filenames, or update the path in `src/lib/images.ts`) |
| **Confirmed list of developers you've actually worked with** | `src/lib/siteConfig.ts` → `developersWorkedWith` array |
| **Property listings** | `src/lib/properties.ts` |
| **Blog/Insights articles** | `src/lib/insights.ts` |
| **Testimonials (once ready)** | `src/components/home/TrustSection.tsx` — currently a trust statement, swap for real quotes |
| **Hero & section imagery** | `src/lib/images.ts` — currently pointing to free Unsplash photos; swap any URL for `/images/your-file.jpg` after adding your own photo to `public/images/` |

---

## 4. Instagram feed strip — how to hide it instantly

If the Instagram section ever looks broken or you want to hide it quickly:

Open `src/lib/siteConfig.ts` and change:
```ts
showInstagramStrip: true,
```
to:
```ts
showInstagramStrip: false,
```
Push the change (or edit directly on GitHub and Vercel will redeploy automatically). The section disappears site-wide with no other side effects.

The current Instagram section is a static placeholder grid, not a live feed. To make it live later, swap in an embed widget (e.g. SnapWidget, Elfsight, or the official Instagram Graph API) inside `src/components/home/InstagramStrip.tsx` — the show/hide toggle and surrounding layout will keep working as-is.

---

## 5. Contact form — connecting it to receive real leads

Right now, the contact form (footer + Contact page) simulates a successful submission so the UI is complete, but it doesn't yet send anywhere. To wire it up:

- **Easiest:** Use a form backend like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — free tier, no backend code needed. You'll get an endpoint URL to POST to.
- **More control:** Create a Vercel serverless function (`src/app/api/contact/route.ts`) that emails you via a service like Resend or SendGrid, or writes to a Google Sheet.

The form logic lives in `src/components/ContactForm.tsx` — look for the `handleSubmit` function and the `TODO` comment inside it.

---

## 6. Project structure

```
src/
  app/
    page.tsx              → Homepage
    about/page.tsx         → About page
    properties/page.tsx    → Properties listing (with filters)
    insights/page.tsx      → Blog listing
    insights/[slug]/       → Individual blog post pages
    contact/page.tsx       → Contact page
  components/
    home/                  → Homepage section components
    SiteHeader.tsx, SiteFooter.tsx, ContactForm.tsx, WhatsAppButton.tsx
  lib/
    siteConfig.ts          → Phone numbers, social links, developer lists, feature toggles
    images.ts              → All image URLs in one place
    properties.ts           → Property listings data
    insights.ts            → Blog post data
```

---

## 7. Imagery note

All current photography is sourced from Unsplash under the [Unsplash License](https://unsplash.com/license) (free to use commercially, no attribution required) and is referenced live from Unsplash's CDN — nothing is downloaded into this repo. Once you have your own professional photography, replace the URLs in `src/lib/images.ts` with paths to files you add in `public/images/`.
