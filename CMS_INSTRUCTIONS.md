# Headless CMS (Sanity) – Setup & Editing Guide

Your site content is editable in **Sanity Studio**. This stays **free** on Sanity’s plan for normal usage (generous free tier for small sites).

**Nothing changes until you add content in Sanity.** The site keeps showing what’s already there (static content). When you create and publish documents in the Studio, the site uses that instead. You can edit or add anytime; existing content is the fallback.

---

## Let the client access and edit existing content

1. **Put existing content into Sanity (one-time seed)**  
   So the client can see and edit it in Studio instead of starting from scratch:
   - **Create a token with write permission:**  
     Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens** → **Add API token**.  
     **Important:** Set the token permission to **Editor** (or **Administrator**), **not** Viewer. A Viewer token cannot create documents and will cause “Insufficient permissions; permission create required”. Copy the token after creating it.
   - From the project root run:
     ```bash
     SANITY_TOKEN=your_token npm run seed:cms
     ```
     (On Windows PowerShell: `$env:SANITY_TOKEN="your_token"; npm run seed:cms`)
   - This creates in Sanity: **Home Page** (5 hero cards, titles/links), **5 Services** (maternity, newborn, 6months, family, special-events), **7 Testimonials**, **2 Blog posts**. Images are not uploaded; the client adds those in Studio.

2. **Give the client access to Studio**  
   - **Option A – Invite to Sanity (no deploy):** [sanity.io/manage](https://www.sanity.io/manage) → your project → **Members** → **Invite** the client by email. They log in at [sanity.io](https://www.sanity.io) and open your project.  
   - **Option B – Deploy Studio (share a URL):** See **“Deploy Studio”** below. You get a link (e.g. `wrigglybun.sanity.studio` or your Vercel URL) to send the client; they open it and log in with the Sanity account you invited (Option A).

3. **Client workflow**  
   - Open Studio (your deployed URL or sanity.io → your project).  
   - Edit **Home Page**, **Service**, **Testimonial**, **Blog Post**, etc.  
   - Upload **hero/carousel/thumbnail photos** where the seed left them empty.  
   - **Publish** each document; the live site will show the updated content.

---

## Deploy Studio (Option B – share a URL with the client)

Pick one of these. After deploy, share the URL with the client; they open it and log in with the Sanity account you invited in **Members**.

### Option 1: Sanity hosting (easiest, one command)

1. In a terminal, from your **project root**:
   ```bash
   cd studio
   npm install
   npx sanity deploy
   ```
2. When prompted:
   - **Hostname:** choose a subdomain (e.g. `wrigglybun`) → your Studio will be at **https://wrigglybun.sanity.studio**.
   - Log in with your Sanity account if asked.
3. Share that URL (e.g. `https://wrigglybun.sanity.studio`) with the client. They open it and log in with the account you invited.

To redeploy after you change schemas or config: run `npx sanity deploy` again from the `studio` folder.

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest if your project is in a repo).
2. **Add New** → **Project**. Import your repo (the one that contains the `studio` folder).
3. **Configure:**
   - **Root Directory:** click **Edit** → set to `studio` (so Vercel builds only the studio folder).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist` (Sanity’s default)
   - **Install Command:** `npm install`
4. Click **Deploy**. When it’s done, Vercel gives you a URL (e.g. `your-studio-xxx.vercel.app`).
5. Share that URL with the client. They open it and log in with the Sanity account you invited.

**If the Studio shows “Project not found”:** In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add your Vercel URL (e.g. `https://your-studio-xxx.vercel.app`).

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in. **Add new site** → **Import an existing project** (connect your repo).
2. **Build settings:**
   - **Base directory:** `studio`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. **Deploy**. Netlify gives you a URL; share it with the client.
4. In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add that Netlify URL.

---

## 1. Run Sanity Studio (local)

```bash
cd studio
npm install
npm run dev
```

Open the URL shown (e.g. `http://localhost:3333`), log in, and you’ll see the content types below.

---

## 2. What you can edit

### **Home Page**
- **Home Page** (single document)
  - **Hero Cards**: Exactly 5 items. Each has: **Title**, **Link** (e.g. `/newborn`, `/maternity`, `/6months`, `/family`, `/special-events`), **Image**.
  - **Featured Testimonials**: Pick which testimonials show on the landing page (references to Testimonial documents).

### **Services (every service page, including Special Occasions)**
- **Service** documents. One per page. **Slug** must match the URL:
  - `maternity` → /maternity  
  - `newborn` → /newborn  
  - `6months` → /6months  
  - `family` → /family  
  - `special-events` → /special-events (Special Occasions page)
- Each Service has: **Title**, **Intro title**, **Hero image**, **Carousel** (many images), **Pricing heading**, **Pricing plans** (name, price, period, CTA, features), **Custom pricing CTA**, **Notes heading**, **Notes sections** (title + bullet list), **FAQs heading**, **FAQs** (link to FAQ documents).  
- **Special Occasions** is just another Service: create a Service with slug **special-events** and fill the same fields; it will render like the other service pages.

### **Testimonials**
- **Testimonial** documents: **Name**, **Rating** (1–5), **Review** (text), **Photo** (optional).
- Shown on: **Testimonials** page and, if you add them to **Home Page → Featured Testimonials**, on the landing page.

### **Blog**
- **Blog Post** documents: **Title**, **Slug**, **Short description**, **Thumbnail**, **Images** (top of post), **Write-up** (body text), optional **External link**, **Published at**.
- List: `/blog`. Single post: `/blog/<slug>`.

### **Upcoming Events**
- **Upcoming Event** documents: same idea as Blog – **Title**, **Slug**, **Description**, **Thumbnail**, **Images**, **Write-up**, optional **Link**, **Event date**, **Published at**.
- List: `/events`. Single event: `/events/<slug>`.

### **FAQs (for service pages)**
- **FAQ** documents: **Category**, **Question**, **Answer**.  
- Link them in each **Service** under **FAQs** so they appear on that service page.

---

## 3. Keep it free

- Use **one** Sanity project and the **production** dataset.
- Don’t add a token in the front-end (your app uses the public API).
- Stay within Sanity’s free limits (see [sanity.io/pricing](https://www.sanity.io/pricing)); for a small site this is usually enough.

---

## 4. Quick checklist

| Page / Area           | In Studio |
|-----------------------|-----------|
| 5 big photos on top   | Home Page → Hero Cards (exactly 5) |
| Landing testimonials  | Home Page → Featured Testimonials + Testimonial docs |
| Each service page     | Service (slug = URL: maternity, newborn, 6months, family, **special-events**) |
| Special Occasions     | Service with slug **special-events** (same fields as others) |
| Blog list + posts     | Blog Post (thumbnail, images, write-up) |
| Events list + detail | Upcoming Event (same shape as blog) |
| Testimonials page     | Testimonial (name, rating, review, photo) |

---

## Troubleshooting: "Insufficient permissions; permission create required"

If the seed script fails with this error, the API token does **not** have write permission. It is likely a **Viewer** token.

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens**.
2. **Add API token** (or edit the existing one). When creating/editing, set the permission to **Editor** or **Administrator**—**not** Viewer.
3. Copy the new token and run the seed again:  
   `SANITY_TOKEN=your_new_token npm run seed:cms`  
   (PowerShell: `$env:SANITY_TOKEN="your_new_token"; npm run seed:cms`).

---

## 5. Run the site

```bash
# From project root (not studio)
npm install
npm run dev
```

**Behavior:** The site shows **existing content** by default. When you add and publish content in Sanity, that content is used instead. So:
- **Service pages** (maternity, newborn, etc.): existing `serviceData.js` until you create/publish that Service in Studio.
- **Landing 5 photos**: existing images until you create a Home Page doc with 5 hero cards.
- **Landing testimonials**: only the Sanity “What clients say” block appears if you set Featured Testimonials on Home Page; the rest of the page is unchanged.
- **Blog**: existing 2 posts until you add Blog Post documents in Sanity.
- **Testimonials page**: existing list until you add Testimonial documents.
- **Events**: “No upcoming events” until you add Upcoming Event documents.
