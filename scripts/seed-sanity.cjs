/**
 * Seeds Sanity with existing site content so the client can edit it in Studio.
 * Run once: SANITY_TOKEN=your_write_token node scripts/seed-sanity.cjs
 *
 * Get a token: sanity.io/manage → Your project → API → Tokens → Add API token.
 * Token MUST have Editor or Administrator permission (not Viewer).
 */

const { createClient } = require('@sanity/client');
const {
  homePageHeroCards,
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

async function seed() {
  console.log('Seeding Sanity with existing content…\n');

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...siteSettings,
  });
  console.log('✓ Contact & Business Info');

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    ...aboutPage,
  });
  console.log('✓ About Page (upload portrait photo in Studio)');

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroCards: homePageHeroCards.map((card, i) => ({
      _type: 'heroCard',
      _key: `hero-${i}`,
      title: card.title,
      link: card.link,
    })),
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
  console.log('✓ Home Page (hero cards, packages, grey services — add images in Studio)');

  for (const s of services) {
    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      introTitle: s.introTitle,
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
    console.log(`✓ Service: ${s.slug}`);
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

  console.log('\nDone! Next:');
  console.log('  1. cd studio && npm install && npm run dev');
  console.log('  2. Open Studio, upload photos, edit text, Publish.');
  console.log('  3. In another terminal: npm run dev  (website)');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
