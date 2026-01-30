/**
 * Seeds Sanity with existing site content so the client can edit it in Studio.
 * Run once: SANITY_TOKEN=your_write_token node scripts/seed-sanity.cjs
 *
 * Get a token: sanity.io/manage → Your project → API → Tokens → Add API token.
 * Token MUST have Editor or Administrator permission (not Viewer), or you'll get
 * "Insufficient permissions; permission create required".
 */

const { createClient } = require('@sanity/client');
const { homePageHeroCards, services, testimonials, blogPosts } = require('./seed-data.cjs');

const projectId = 'q7ct7sx2';
const dataset = 'production';
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error('Missing SANITY_TOKEN. Create one at sanity.io/manage → API → Tokens, then run:');
  console.error('  SANITY_TOKEN=your_token node scripts/seed-sanity.cjs');
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

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroCards: homePageHeroCards.map((card) => ({ _type: 'object', title: card.title, link: card.link })),
    featuredTestimonials: [],
  });
  console.log('✓ Home Page (hero cards: title + link only; client can add images in Studio)');

  for (const s of services) {
    await client.createOrReplace({
      _id: `service-${s.slug}`,
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

  await client.patch('homePage').set({ featuredTestimonials: testimonialIds.slice(0, 3) }).commit();
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

  console.log('\nDone. The client can now open Sanity Studio, log in, and edit/upload images.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
