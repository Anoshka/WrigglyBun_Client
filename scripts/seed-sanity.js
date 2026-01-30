/**
 * Seeds Sanity with existing site content so the client can edit it in Studio.
 * Run once: SANITY_TOKEN=your_write_token node scripts/seed-sanity.js
 *
 * Get a token: sanity.io/manage → Your project → API → Tokens → Add API token (Editor).
 */

const { createClient } = require('@sanity/client');
const { homePageHeroCards, services, testimonials, blogPosts } = require('./seed-data.js');

const projectId = 'q7ct7sx2';
const dataset = 'production';
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error('Missing SANITY_TOKEN. Create one at sanity.io/manage → API → Tokens, then run:');
  console.error('  SANITY_TOKEN=your_token node scripts/seed-sanity.js');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
});

async function seed() {
  console.log('Seeding Sanity with existing content…\n');

  // 1. Home Page (singleton)
  const homeId = 'homePage';
  await client.createOrReplace({
    _id: homeId,
    _type: 'homePage',
    heroCards: homePageHeroCards.map((card) => ({ _type: 'object', title: card.title, link: card.link })),
    featuredTestimonials: [], // Client can add after testimonials exist
  });
  console.log('✓ Home Page (hero cards: title + link only; client can add images in Studio)');

  // 2. Services
  for (const s of services) {
    const id = `service-${s.slug}`;
    await client.createOrReplace({
      _id: id,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      introTitle: s.introTitle,
      pricingHeading: s.pricingHeading,
      pricingPlans: s.pricingPlans.map((p) => ({
        _type: 'object',
        name: p.name,
        priceLabel: p.priceLabel,
        periodLabel: p.periodLabel,
        cta: p.cta,
        features: p.features,
      })),
      customPricingCta: s.customPricingCta,
      notesHeading: s.notesHeading,
      notesSections: (s.notesSections || []).map((n) => ({ _type: 'object', title: n.title, items: n.items })),
      faqsHeading: s.faqsHeading,
      faqs: [],
    });
    console.log(`✓ Service: ${s.slug}`);
  }

  // 3. Testimonials (client can add photos in Studio)
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
    testimonialIds.push({ _type: 'reference', _ref: id });
    console.log(`✓ Testimonial: ${t.name}`);
  }

  // Link featured testimonials to Home Page (first 3)
  await client.patch('homePage').set({ featuredTestimonials: testimonialIds.slice(0, 3) }).commit();
  console.log('✓ Home Page: linked first 3 testimonials as featured');

  // 4. Blog posts (client can add thumbnail + images + body in Studio)
  for (const p of blogPosts) {
    const id = `blogPost-${p.slug}`;
    await client.createOrReplace({
      _id: id,
      _type: 'blogPost',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      description: p.description,
      link: p.link,
      publishedAt: p.publishedAt,
    });
    console.log(`✓ Blog post: ${p.slug}`);
  }

  console.log('\nDone. The client can now open Sanity Studio, log in, and edit/upload images.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
