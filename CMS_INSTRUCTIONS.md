# WrigglyBun — CMS & Preview Setup Guide

This guide covers everything: setting up Studio locally, seeding content, giving your client access, and enabling draft preview on the staging site.

---

## Table of contents

1. [Run Studio + website locally](#1-run-studio--website-locally)
2. [Seed existing content into Studio](#2-seed-existing-content-into-studio)
3. [What your client can edit](#3-what-your-client-can-edit)
4. [Set up draft preview](#4-set-up-draft-preview)
5. [Deploy Studio (give client a permanent link)](#5-deploy-studio-give-client-a-permanent-link)
6. [Invite your client](#6-invite-your-client)
7. [How the website behaves](#7-how-the-website-behaves)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Run Studio + website locally

You need two terminals open at the same time.

### Terminal 1 — Sanity Studio (the editor UI)

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npm install
npm run dev
```

When it prints a URL like `http://localhost:3333`, open that in the browser and log in with your Sanity account. You will see the Studio sidebar.

### Terminal 2 — The website

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
npm install
npm run dev
```

Open `http://localhost:5173`. When both are running, changes you Publish in Studio should appear on the website after a browser refresh.

> **If `npm` says "cannot be loaded because running scripts is disabled":**  
> Run this at the top of each PowerShell terminal before any npm commands:
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

---

## 2. Seed existing content into Studio

This loads your current website copy and photos into Sanity so your client doesn't start from an empty Studio.

### Step 1 — Create an Editor API token

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click your project (WrigglyBun)
3. In the left sidebar click **API**
4. Click the **Tokens** tab
5. Click **Add API token**
6. Give it a name like `seed-token`
7. Set permission to **Editor** (not Viewer — Viewer can't write)
8. Click **Save** and **copy the token** (it only shows once)

### Step 2 — Run the seed script

Open PowerShell in the project root (not the studio folder):

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
$env:SANITY_TOKEN="paste_your_token_here"
npm run seed:cms
```

Replace `paste_your_token_here` with what you copied. Keep the quotes.

This will upload:
- Home page hero photos
- About portrait
- Each service's hero photo and full gallery (12 images per service)

**First run takes several minutes** (uploading large images). You will see progress in the terminal.

### Step 3 — Verify it worked

1. Go to Studio (`http://localhost:3333`)
2. Click **Services** in the sidebar
3. Open **Newborn** → click the **Photos** tab
4. You should see thumbnail previews of the gallery images
5. Drag them to reorder if you want, then click **Publish**

If you see empty fields, check the token was Editor not Viewer, and re-run the seed.

---

## 3. What your client can edit

Everything is in Studio. She does not need to touch code or Netlify.

| Studio sidebar item | What changes on the website |
|---|---|
| **Home Page** | The five big photo cards at the top (images, titles, links), best-selling packages section, the grey "Our Services" cards, featured testimonials, the Instagram section heading |
| **About Page** | The "About" blurb on the home page + button text, the full About page paragraphs, the portrait photo |
| **Contact & Business Info** | Phone, email, WhatsApp number + auto-message, Instagram URL, Google Maps link, address, the session-type dropdown options in the contact form |
| **Contact & Business Info → Brand colors tab** | Main brown, accent/hover colour, page background, text colour — paste hex codes like `#26110d` |
| **Services** | For each service (Newborn, Maternity, etc.): hero image, gallery photos, pricing plan names/descriptions, notes, linked FAQs |
| **FAQs** | Each question and answer. Toggle **Show on FAQ page** to control which ones appear on the FAQ page |
| **Testimonials** | Client name, star rating, review text, optional photo |
| **Blog Posts** | Title, description, photos, written content, publish date |
| **Upcoming Events** | Same as blog posts but with an event date |

> **She must always click Publish after making changes.** Saving in Studio creates a draft — the website only updates after Publish.

### Editing images

- Click any image field → **Upload** to upload a new photo, or drag and drop onto it
- To replace an existing image: click the image → click **Replace**
- To remove an image: click the image → click the **⋮** menu → **Remove**
- To reorder photos in a gallery: drag the items up/down by the drag handle

### Adding new items

- To add another hero card or package: scroll to the bottom of that section → click **Add item**
- To add a new blog post or event: click the document type in the sidebar → click the pencil/create icon
- To add a new FAQ: click **FAQs** → create → fill in question + answer → toggle **Show on FAQ page** → Publish

---

## 4. Set up draft preview

This lets your client preview her unpublished edits on the **staging/view website** (`wrigglybunview.netlify.app`) before they go live on `www.wrigglybunphotography.com`.

### How it works (overview)

1. She edits in Studio → changes are saved as drafts
2. She opens the **Presentation** tab in Studio → it loads the staging website in a side panel
3. The staging site shows a **yellow banner** at the top: "Preview mode — you are seeing unpublished drafts"
4. She sees exactly how the page will look
5. When happy she clicks **Publish** → the live site updates too

The main live site **never shows drafts**.

---

### Step 1 — Create a Viewer API token (separate from the Editor token)

This token lets the staging website fetch draft content from Sanity. It is **read-only** so it is safe to put in Netlify.

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens**
2. Click **Add API token**
3. Name it something like `preview-viewer`
4. Set permission to **Viewer**
5. Click **Save** and **copy the token**

---

### Step 2 — Pick a preview secret

This is just a long password that you make up. It prevents random people from turning on preview mode.

Choose any string — for example: `wb-preview-a8k3x2m9`

Make a note of it. You will paste it in two places (Netlify and optionally `.env.local`).

---

### Step 3 — Add environment variables to the VIEW Netlify site

> This is the Netlify project that deploys `wrigglybunview.netlify.app` (the `view` branch). Do **not** do this on the main/live site.

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click the **view site project** (not the main one)
3. Go to **Site configuration** → **Environment variables**
4. Click **Add a variable** (or **Add a new variable** depending on UI version)
5. Add the first variable:
   - Key: `VITE_SANITY_PREVIEW_SECRET`
   - Value: the secret you picked in Step 2
   - Scope: leave as default (all deploy contexts)
   - Click **Save**
6. Add the second variable:
   - Key: `VITE_SANITY_PREVIEW_TOKEN`
   - Value: the Viewer token from Step 1
   - Scope: leave as default
   - Click **Save**
7. **Redeploy the view site** — go to **Deploys** → click **Trigger deploy** → **Deploy site**

> **Do not add these to the main/live Netlify project.** If the env vars are missing, preview mode simply does not activate — the site shows published content as normal.

---

### Step 4 — Add the staging URL to Sanity CORS

Sanity blocks requests from unknown origins. Run this from inside the studio folder:

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npx sanity cors add https://wrigglybunview.netlify.app --credentials
```

It will ask you to confirm — type `y` and press Enter.

You can verify it worked at [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**. You should see `https://wrigglybunview.netlify.app` in the list.

---

### Step 5 — Test preview locally (optional but recommended)

Before deploying, verify it works on your machine.

1. In the project root, copy the example env file:
   ```powershell
   cd d:\personal\projects\WrigglyBun\wrigglybun_client
   Copy-Item .env.example .env.local
   ```
2. Open `.env.local` in a text editor and fill in both values:
   ```
   VITE_SANITY_PREVIEW_SECRET=wb-preview-a8k3x2m9
   VITE_SANITY_PREVIEW_TOKEN=your_viewer_token_here
   ```
3. Start the website (`npm run dev`) and Studio (`npm run dev` in the studio folder)
4. In Studio, open the **Presentation** tab
   - If Presentation asks for an origin, it will default to `http://localhost:5173` (the local site)
5. The website should load inside Studio with the yellow preview banner
6. Make a small edit in Studio (e.g. change a heading) — without Publish, you should see the draft change live in the Presentation panel

> **If Presentation doesn't load the right URL locally:**  
> Copy `studio/.env.example` to `studio/.env`:
> ```powershell
> cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
> Copy-Item .env.example .env
> ```
> That file already has `SANITY_STUDIO_PREVIEW_ORIGIN=http://localhost:5173`. Restart Studio after.

---

### Step 6 — Deploy Studio with Presentation enabled

Once you've tested locally, deploy Studio so your client gets the Presentation tab at the permanent Studio URL.

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npx sanity deploy
```

It will ask you to pick a hostname — type something like `wrigglybun` and press Enter.  
Studio will be live at `https://wrigglybun.sanity.studio`.

The Presentation tab will open `https://wrigglybunview.netlify.app` (the staging site) in the preview panel.

---

### Step 7 — Push the view branch to Netlify

The preview code is in this repo. Make sure the view branch is deployed:

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
git add -A
git commit -m "Add draft preview: PreviewBanner, PreviewProvider, Presentation tool, all CMS hooks updated"
git push origin view
```

Netlify will auto-deploy the view site from the `view` branch.

---

### Manual preview link (no Studio needed)

Anyone with this link can turn on preview on the staging site:

```
https://wrigglybunview.netlify.app/?sanity-preview=YOUR_SECRET
```

Replace `YOUR_SECRET` with the value from Step 2. A yellow banner will appear. Click **Exit preview** in the banner to turn it off.

---

## 5. Deploy Studio (give client a permanent link)

If you haven't done this yet:

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npx sanity deploy
```

Pick a short hostname when prompted (e.g. `wrigglybun`).

Studio will be live at `https://wrigglybun.sanity.studio` — share this URL with your client.

She can bookmark it and log in whenever she wants to edit content.

---

## 6. Invite your client

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click your project (WrigglyBun)
3. In the left sidebar click **Members**
4. Click **Invite members**
5. Enter her email address
6. Set role to **Editor**
7. Click **Send invitation**

She will receive an email. She creates a free Sanity account, accepts the invite, and then has access to edit content at `https://wrigglybun.sanity.studio`.

> She does **not** need a paid Sanity plan. The free tier is enough for this site.

---

## 7. How the website behaves

| Situation | What visitors see |
|---|---|
| Content exists in Sanity and is **Published** | Sanity content (her edits) |
| Content exists in Sanity but only **saved as draft** | The previous published version (or fallback copy if never published) |
| No content in Sanity at all | Built-in fallback copy/images from the code |
| Viewing on the **staging site** with preview active | Draft content (unpublished) |
| Viewing on the **live site** | Always published content only |

After she clicks Publish, the website updates within a few seconds. She may need to hard-refresh the browser (`Ctrl+Shift+R`) to clear the cache.

---

## 8. Troubleshooting

### "Cannot be loaded because running scripts is disabled"
This is a PowerShell restriction. Run this at the top of your terminal session before using npm:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Seed script error: "Insufficient permissions; permission create required"
Your token is a Viewer token. Go back to [sanity.io/manage](https://www.sanity.io/manage) → API → Tokens → create a new **Editor** token. Then re-run the seed with the new token.

### Edits don't show on the local website after Publish

Almost always a CORS issue. Check:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**
2. Make sure `http://localhost:5173` is in the list with **Allow credentials: on**
3. If it's missing, run:
   ```powershell
   cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
   npx sanity cors add http://localhost:5173 --credentials
   ```
4. Hard-refresh the website (`Ctrl+Shift+R`)

### Preview mode shows published content, not drafts

- Check that `VITE_SANITY_PREVIEW_TOKEN` is set on the **view Netlify site** (not the main one)
- Check that the Viewer token you pasted is correct and hasn't been deleted (go to Sanity manage → API → Tokens to verify)
- Redeploy the view site after adding env vars

### Preview banner does not appear

- Check that `VITE_SANITY_PREVIEW_SECRET` matches between Netlify and the URL/Presentation tab you used to activate preview
- If testing locally, make sure `.env.local` exists in the project root with both values filled in

### Studio "Project not found" after deploying

Add the deployed Studio URL to CORS:
```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client\studio
npx sanity cors add https://wrigglybun.sanity.studio --credentials
```

### Presentation tab shows a blank page or error

- Make sure the view/staging site is deployed and live
- Check that `https://wrigglybunview.netlify.app` is in Sanity CORS (Step 4 above)
- Check that both `VITE_SANITY_PREVIEW_SECRET` and `VITE_SANITY_PREVIEW_TOKEN` are set on the view Netlify site and the site has been redeployed

### Confirm the CMS is connected

```powershell
cd d:\personal\projects\WrigglyBun\wrigglybun_client
npm run test:cms
```

This should print the maternity service document if the seed ran successfully.
