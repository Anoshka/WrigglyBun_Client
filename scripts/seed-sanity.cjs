/**
 * Seeds Sanity with existing site content + uploads local images.
 *
 * PowerShell:
 *   $env:SANITY_TOKEN="your_editor_token"
 *   npm run seed:cms
 *
 * Token must be Editor or Administrator (not Viewer).
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');
const {
  homePageHeroCards,
  serviceImagePaths,
  aboutPortraitPath,
  bestSellingPackages,
  greyServices,
  aboutPage,
  siteSettings,
  faqs,
  services,
  testimonials,
  blogPosts,
} = require('./seed-data.cjs');

const projectId = 'q7ct7sx2';
const dataset = 'production';
const token = process.env.SANITY_TOKEN;
const root = path.join(__dirname, '..');

if (!token) {
  console.error('Missing SANITY_TOKEN. Create one at sanity.io/manage → API → Tokens, then run:');
  console.error('  PowerShell: $env:SANITY_TOKEN="your_token"; npm run seed:cms');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
});

/** Cache so the same file is only uploaded once */
const assetCache = new Map();

function resolveLocal(relPath) {
  return path.join(root, relPath);
}

async function uploadImage(relPath) {
  if (!relPath) return null;
  if (assetCache.has(relPath)) return assetCache.get(relPath);

  const abs = resolveLocal(relPath);
  if (!fs.existsSync(abs)) {
    console.warn(`  ⚠ Missing file, skipped: ${relPath}`);
    return null;
  }

  const filename = path.basename(abs);
  const stream = fs.createReadStream(abs);
  const asset = await client.assets.upload('image', stream, { filename });
  const imageField = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };
  assetCache.set(relPath, imageField);
  console.log(`  ↑ uploaded ${filename}`);
  return imageField;
}

async function imageWithAlt(relPath, alt) {
  const img = await uploadImage(relPath);
  if (!img) return undefined;
  return { ...img, alt: alt || '' };
}

async function cleanupDuplicateServices() {
  // Keep one canonical service doc per slug: service-<slug>
  const rows = await client.fetch(
    '*[_type=="service" && defined(slug.current)]{_id, "slug": slug.current}'
  );

  const toDelete = [];
  for (const row of rows) {
    const canonicalId = `service-${row.slug}`;
    if (row._id !== canonicalId) {
      toDelete.push(row._id);
    }
  }

  if (!toDelete.length) {
    console.log('✓ Service docs are already clean (no duplicates)');
    return;
  }

  for (const id of toDelete) {
    await client.delete(id);
    console.log(`  - removed duplicate service doc: ${id}`);
  }
  console.log(`✓ Removed ${toDelete.length} duplicate service doc(s)`);
}

async function seed() {
  console.log('Seeding Sanity with content + images…\n');
  console.log('(First run uploads many photos — may take a few minutes.)\n');

  await cleanupDuplicateServices();

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...siteSettings,
  });
  console.log('✓ Contact & Business Info (+ brand colors)');

  const portrait = await imageWithAlt(aboutPortraitPath, 'Anandita');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    ...aboutPage,
    ...(portrait ? { portrait } : {}),
  });
  console.log('✓ About Page');

  console.log('Uploading home hero card images…');
  const heroCards = [];
  for (let i = 0; i < homePageHeroCards.length; i++) {
    const card = homePageHeroCards[i];
    const image = await imageWithAlt(card.imagePath, card.title);
    heroCards.push({
      _type: 'heroCard',
      _key: `hero-${i}`,
      title: card.title,
      link: card.link,
      ...(image ? { image } : {}),
    });
  }

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroCards,
    packagesTitle: 'BEST SELLING PACKAGES',
    packagesQuoteLabel: 'GET A QUOTE',
    bestSellingPackages: bestSellingPackages.map((p, i) => ({
      _type: 'packageCard',
      _key: `pkg-${i}`,
      title: p.title,
      link: p.link,
      buttonLabel: p.buttonLabel,
    })),
    greyServicesTitle: 'Our Services',
    greyServices: greyServices.map((g, i) => ({
      _type: 'greyService',
      _key: `grey-${i}`,
      id: g.id,
      title: g.title,
      description: g.description,
      link: g.link,
      linkLabel: g.linkLabel,
    })),
    featuredTestimonialsHeading: 'What clients say',
    featuredTestimonials: [],
    instaHeading: 'WRIGGLY MOMENTS ON INSTA',
  });
  console.log('✓ Home Page (hero photos included)');

  for (const s of services) {
    console.log(`Uploading images for service: ${s.slug}…`);
    const paths = serviceImagePaths[s.slug] || {};
    const hero = paths.hero
      ? await imageWithAlt(paths.hero, `${s.title} hero`)
      : undefined;

    const carousel = [];
    for (let i = 0; i < (paths.carousel || []).length; i++) {
      const img = await imageWithAlt(paths.carousel[i], `Gallery ${i + 1}`);
      if (img) {
        carousel.push({ ...img, _key: `carousel-${s.slug}-${i}` });
      }
    }

    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      introTitle: s.introTitle,
      ...(hero ? { hero } : {}),
      ...(carousel.length ? { carousel } : {}),
      pricingHeading: s.pricingHeading,
      pricingPlans: s.pricingPlans.map((p, i) => ({
        _type: 'pricingPlan',
        _key: `plan-${i}`,
        name: p.name,
        priceLabel: p.priceLabel,
        periodLabel: p.periodLabel,
        cta: p.cta,
        features: p.features,
      })),
      customPricingCta: s.customPricingCta,
      notesHeading: s.notesHeading,
      notesSections: (s.notesSections || []).map((n, i) => ({
        _type: 'notesSection',
        _key: `note-${i}`,
        title: n.title,
        items: n.items,
      })),
      faqsHeading: s.faqsHeading,
      faqs: [],
    });
    console.log(`✓ Service: ${s.slug} (${carousel.length} gallery photos)`);
  }

  for (let i = 0; i < faqs.length; i++) {
    const f = faqs[i];
    await client.createOrReplace({
      _id: `faq-misc-${i + 1}`,
      _type: 'faq',
      category: f.category,
      question: f.question,
      answer: f.answer,
      showOnFaqPage: f.showOnFaqPage,
    });
  }
  console.log(`✓ FAQs (${faqs.length})`);

  const testimonialIds = [];
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    const id = `testimonial-${i + 1}`;
    await client.createOrReplace({
      _id: id,
      _type: 'testimonial',
      name: t.name,
      rating: t.rating,
      review: t.review,
    });
    testimonialIds.push({ _type: 'reference', _ref: id, _key: id });
    console.log(`✓ Testimonial: ${t.name}`);
  }

  await client
    .patch('homePage')
    .set({ featuredTestimonials: testimonialIds.slice(0, 3) })
    .commit();
  console.log('✓ Home Page: linked first 3 testimonials as featured');

  for (const p of blogPosts) {
    await client.createOrReplace({
      _id: `blogPost-${p.slug}`,
      _type: 'blogPost',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      description: p.description,
      link: p.link,
      publishedAt: p.publishedAt,
    });
    console.log(`✓ Blog post: ${p.slug}`);
  }

  console.log(`\nDone. Uploaded ${assetCache.size} unique image file(s).`);
  console.log('Refresh Sanity Studio — open a Service → Photos to see gallery thumbnails.');
  console.log('Drag photos to reorder, then Publish.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
