# WrigglyBun — Edit your website (Sanity CMS)

Your friend can change **wording, photos, prices, FAQs, blog posts**, and more in **Sanity Studio** — no code required.

You do **not** need a custom backend. Sanity is the content backend.

---

## Quick start (test everything)

### Terminal 1 — Sanity Studio (the editor)

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npm install
npm run dev
```

Open the URL it prints (usually **http://localhost:3333**), log in with your Sanity account.

### Terminal 2 — Website

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
npm install
npm run dev
```

Open the site URL (usually **http://localhost:5173**).

### One-time: load existing content into Studio

So she starts with your current copy (not empty forms):

1. Create an **Editor** API token: [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens** → **Add API token** → permission **Editor** (not Viewer).
2. In PowerShell from the **project root**:

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
$env:SANITY_TOKEN="paste_your_token_here"
npm run seed:cms
```

3. Refresh Studio — you should see Home Page, About, Contact info, Services, FAQs, Testimonials, Blog.

### Check the API is live

```powershell
npm run test:cms
```

---

## What she can edit (Studio sidebar)

| Sidebar item | What she changes |
|--------------|------------------|
| **Home Page** | Big photo cards (add/remove/reorder + upload images), best-selling packages, “Our Services” grey cards & wording, featured testimonials, Instagram heading |
| **About Page** | Home About blurb + button, full About page paragraphs, portrait photo |
| **Contact & Business Info** | Phone, email, WhatsApp message, Instagram, Maps, address, contact form session dropdown |
| **Services** | Each service page: hero + gallery photos, pricing plans, features, notes, linked FAQs |
| **FAQs** | Questions & answers. Turn on **Show on home / FAQ section** (or use category Misc) for the FAQ list |
| **Testimonials** | Name, stars, review text, optional photo |
| **Blog Posts** | Title, description, photos, write-up |
| **Upcoming Events** | Same idea as blog + event date |

**Always click Publish** after editing so the live site updates.

### Images
- Click the image field → **Upload** / replace / **Remove**.
- Drag items in arrays to reorder; use the ⋮ menu to delete a card or photo.

### Adding new wording / sections
- On Home: add another **hero card**, **package**, or **grey service** card with the **Add item** button.
- New blog/event: create a new document → fill fields → Publish.
- New FAQ: create FAQ → enable show on FAQ page → Publish.
- New full service *page* (new URL): create Service with a slug, **and** ask you to add a route in the app (URLs are fixed in code today: maternity, newborn, 6months, family, special-events).

---

## Give her access

1. [sanity.io/manage](https://www.sanity.io/manage) → **Members** → **Invite** her email (Editor role).
2. Optional — deploy Studio so she has a permanent link:

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npx sanity deploy
```

Pick a hostname (e.g. `wrigglybun`) → share `https://wrigglybun.sanity.studio`.

---

## How the website behaves

- Until content is **published** in Sanity, the site keeps showing its built-in fallback copy/images.
- After Publish, the React site fetches from Sanity (CDN) and shows her edits (refresh the browser).

---

## Troubleshooting

**“Insufficient permissions; permission create required”** on seed → token is Viewer. Create a new **Editor** token and re-run `npm run seed:cms`.

**Edits don’t show on the site** → document not Published, or hard-refresh the browser. Confirm `npm run test:cms` finds maternity after seeding.

**Studio “Project not found” on a deployed URL** → add that URL under Sanity → **API** → **CORS origins**.
