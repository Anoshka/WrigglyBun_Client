/**
 * Text-only copy of existing site content for seeding into Sanity.
 * Used by: node scripts/seed-sanity.cjs
 */

const BASE_WA = 'https://wa.me/919820591096';

const homePageHeroCards = [
  { title: 'Newborn', link: '/newborn' },
  { title: 'Maternity', link: '/maternity' },
  { title: '6 Months & Above', link: '/6months' },
  { title: 'Family', link: '/family' },
  { title: 'Special Occasions', link: '/special-events' },
];

const bestSellingPackages = [
  { title: 'Maternity Yearly Plan', link: '/maternity', buttonLabel: 'KNOW MORE' },
  { title: 'Newborn Yearly Plan', link: '/newborn', buttonLabel: 'KNOW MORE' },
  { title: '6 Months and Above Yearly Plan', link: '/6months', buttonLabel: 'KNOW MORE' },
  { title: 'Family Plan', link: '/family', buttonLabel: 'KNOW MORE' },
];

const greyServices = [
  {
    id: '01',
    title: 'Newborn',
    link: '/newborn',
    linkLabel: 'READ MORE →',
    description:
      "Each moment, from the tiniest fingers, softest yawns, and the pure wonder of your newborn’s first days, is a treasure. Let us capture these irreplaceable memories so you can hold onto them forever.",
  },
  {
    id: '02',
    title: 'Maternity',
    link: '/maternity',
    linkLabel: 'READ MORE →',
    description:
      'Celebrate the journey of life as it begins, capturing the glow of motherhood and the anticipation of meeting your little one. These timeless maternity portraits honor the love, strength, and beauty of this special chapter.',
  },
  {
    id: '03',
    title: '6 Months & Above',
    link: '/6months',
    linkLabel: 'READ MORE →',
    description:
      "From the first laugh to tiny milestones like sitting up or crawling, these joyful phases of growth deserve to be remembered. Our milestone sessions beautifully document your baby’s journey, one triumph at a time.",
  },
  {
    id: '04',
    title: 'Family',
    link: '/family',
    linkLabel: 'READ MORE →',
    description:
      'The love shared within a family is the foundation of everything. Our family portraits celebrate your bond, creating lasting keepsakes of the laughter and connection you share.',
  },
  {
    id: '05',
    title: 'Special Events',
    link: '/special-events',
    linkLabel: 'READ MORE →',
    description:
      'Preserve the memories of your special events with stunning photos that capture the joy, emotion, and celebration.',
  },
];

const aboutPage = {
  landingTitle: 'ABOUT US',
  landingText:
    'At WrigglyBun, we go beyond photography. It’s about honoring your journey, celebrating your story, and creating an experience as special as the memories themselves.',
  landingButtonLabel: 'WRIGGLYBUN PHOTOGRAPHY',
  landingButtonLink: '/about',
  paragraphs: [
    'Anandita, the heart and soul behind this venture, fell in love with photography as a child. Armed with a humble Kodak camera loaded with a 36 exposures reel, she eagerly captured moments on yearly family trips across India. Those trips ignited her passion for storytelling through images, each frame speaking volumes.',
    'Over the years, Anandita explored multiple photography genres. Her artistic eye sharpened during her time photographing Bharatnatyam dance performances, a demanding art form that calls for impeccable timing, rhythm, and the ability to anticipate fleeting moments. As a former Bharatnatyam student herself, this background honed her observational skills, enabling her to capture candid moments that resonate across all ages.',
  ],
};

const siteSettings = {
  businessName: 'WrigglyBun Photography',
  phone: '+919820591096',
  phoneDisplay: '+91 982 059 1096',
  email: 'wrigglybun@gmail.com',
  whatsappNumber: '919820591096',
  whatsappMessage: "Hi Anandita, I'd like to book a photoshoot!",
  instagramUrl: 'https://www.instagram.com/wrigglybunphotography/',
  instagramHandle: 'wrigglybunphotography',
  mapsUrl: 'https://maps.app.goo.gl/KRzKScyNmm6bmgSn8',
  addressLines: [
    'Tower 2, Prestige Dolce Vita, Ecc Rd, near Prestige',
    'Bougainvillea, Dodsworth Layout, Whitefield, Bengaluru,',
    'Karnataka 560066, India',
  ],
  contactPageTitle: 'Contact Us',
  sessionOptions: [
    'Little Bun Moments',
    'First Wriggles',
    'Tiny Triumphs',
    'Wriggly Explorers',
    'Youthful Charms',
    'Forever Frames',
    'Bun-tastic Celebrations',
    'Birth & Beyond',
    'Styled Stories',
    'General Inquiry',
  ],
};

const faqs = [
  {
    category: 'Misc',
    showOnFaqPage: true,
    question: 'Do you travel outside Bangalore for photoshoots?',
    answer: 'Yes, we’re happy to travel based on your requirements.',
  },
  {
    category: 'Misc',
    showOnFaqPage: true,
    question: 'How long does a photoshoot take?',
    answer:
      'The duration depends on the type of session. Maternity, toddler, and cake smash sessions typically take 2-3 hours, while a newborn session can last up to 4 hours to accommodate breaks and the baby’s comfort.',
  },
  {
    category: 'Misc',
    showOnFaqPage: true,
    question: 'Do you offer baby books or photo albums?',
    answer:
      'Yes, we create custom-designed baby books and photo albums upon request, helping you preserve these special memories beautifully.',
  },
  {
    category: 'Misc',
    showOnFaqPage: true,
    question: 'Will my images be shared on social media or your website?',
    answer:
      'Yes, sharing our work allows us to showcase our photography. However, we respect your privacy and don’t tag or name your baby unless you request us to.',
  },
  {
    category: 'Misc',
    showOnFaqPage: true,
    question: 'When will I receive my images?',
    answer:
      'Your carefully edited images will be delivered within 20-25 days from the date of your session.',
  },
];

const services = [
  {
    slug: 'maternity',
    title: 'Maternity',
    introTitle: 'Maternity Photography',
    pricingHeading: 'Pricing Packages',
    pricingPlans: [
      { name: 'Standard (Studio)', priceLabel: '₹ 19,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 20', 'Garments - 2', 'Husband & Siblings included', 'Hair & Makeup included', 'Duration - 1 Hour'] },
      { name: 'Premium (Studio)', priceLabel: '₹ 27,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 30', 'Garments - 3', 'Husband & Siblings included', 'Hair & Makeup included', 'Phone Reel provided', 'Duration - 2 Hours'] },
      { name: 'Maternity + Newborn', priceLabel: '₹ 60,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 60', 'Sessions - 1 (Maternity) + 3 (Newborn, 6 Months, 12 Months)', 'Husband & Siblings included', 'Hair & Makeup included', 'Album (8*16 inches) + Pendrive'] },
    ],
    customPricingCta: { label: 'Get a Quote', href: BASE_WA, text: "Hi, I'd like a custom pricing plan for" },
    notesHeading: 'Points to Note',
    notesSections: [
      { title: "What's Included", items: ['Hair & makeup included', 'Maternity gowns provided and included in the package', 'Spouse and one sibling (if any) included'] },
      { title: 'Additional Charges', items: ['Outdoor shoot: ₹5000 extra', 'Additional family members: ₹1500 per person', 'Extra edits, frames, larger albums, etc., available at additional cost'] },
      { title: 'Booking & Payment', items: ['50% advance to confirm booking; balance due on shoot day', 'Advance is non-refundable but adjustable for future bookings', 'Payments accepted via cash, cheque, GPay, or bank transfer', 'Prices subject to change without prior notice'] },
      { title: 'Other Information', items: ['Edited images delivered within 2–3 weeks after selection', 'Raw/unedited images will not be shared', 'Copyright remains with the photographer', 'Please arrive on time; late arrival will shorten the session'] },
    ],
    faqsHeading: 'FAQs',
  },
  {
    slug: 'newborn',
    title: 'Newborn',
    introTitle: 'Newborn Photography',
    pricingHeading: 'Pricing Packages',
    pricingPlans: [
      { name: 'Standard (Studio)', priceLabel: '₹ 19,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 20', 'Theme / Setups - 3', 'Duration - 1.5 to 2 Hours', 'Parent & Siblings included', '10 photo prints (8*12 inches)'] },
      { name: 'Premium (Studio)', priceLabel: '₹ 29,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 30', 'Theme / Setups - 4', 'Duration - 3.5 to 4 Hours', 'Parent & Siblings included', 'Album (8*16 inches) + Pendrive'] },
      { name: 'Yearly (Studio)', priceLabel: '₹ 55,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 60', 'Theme / Setups - 10', 'Duration - 5 Sessions', 'Album (8*16 inches) + Pendrive', 'The yearly package is valid until the baby\'s first birthday'] },
    ],
    customPricingCta: { label: 'Get a Quote', href: BASE_WA, text: "Hi, I'd like a custom pricing plan for" },
    notesHeading: "What's Included & Recommendations",
    notesSections: [
      { title: "What's Included & Recommendations", items: ['Best time to schedule a newborn session: between 5–20 days after birth', "For family portraits, it's best if parents wear color-coordinated solid outfits in neutral or dark shades", 'Hair & makeup not included, but can be arranged at an additional cost'] },
      { title: 'Additional Charges', items: ['In-home session: ₹7000 extra', 'Additional family members: ₹1500 per person', 'Extra edits, frames, larger albums, etc., are available at additional cost'] },
      { title: 'Booking & Payment', items: ['50% advance required to confirm booking; balance due on the day of the shoot', 'Advance is non-refundable but adjustable for future bookings', 'Payments accepted via cash, cheque, GPay, or bank transfer', 'Prices subject to change without prior notice'] },
      { title: 'Other Information', items: ['Edited images delivered within 2–3 weeks after selection', 'Raw/unedited images will not be shared', 'Copyright remains with the photographer', 'Please arrive on time; late arrival will shorten the session'] },
    ],
    faqsHeading: 'FAQs',
  },
  {
    slug: '6months',
    title: '6 Months & Above',
    introTitle: '6 months & Above',
    pricingHeading: 'Pricing Packages',
    pricingPlans: [
      { name: 'Standard (Studio)', priceLabel: '₹ 19,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 20', 'Theme / Setups - 3 (2 Solo + 1 Family)', 'Parent & Siblings included', '10 photo prints (8*12 inches)', 'Duration - 1.5 to 2 Hours'] },
      { name: 'Premium (Studio)', priceLabel: '₹ 29,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 30', 'Theme / Setups - 4 (3 Solo + 1 Family)', 'Parent & Siblings included', 'Album (8*16 inches) + Pendrive', 'Duration - 3.5 to 4 Hours'] },
      { name: 'Cake Smash (Studio)', priceLabel: '₹ 10,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited Images - 10', 'Theme / Setup - 1', 'Cake included', 'Duration - 30 min'] },
    ],
    customPricingCta: { label: 'Get a Quote', href: BASE_WA, text: "Hi, I'd like a custom pricing plan for" },
    notesHeading: "What's Included & Recommendations",
    notesSections: [
      { title: "What's Included & Recommendations", items: ['Cake smash and bathtub sessions can be added to standard or premium packages (charges apply separately)', 'Outfit options available for babies up to 1 year old', 'Outfit options available for Mom', 'For family portraits, wear color-coordinated solid outfits in neutral or dark shades for best results'] },
      { title: 'Additional Charges', items: ['Outdoor shoot: ₹7000 extra', 'Additional family members: ₹1500 per person', 'Cake smash/bathtub setups are charged separately based on chosen package', 'Extra edits, photo frames, larger albums, etc., available at additional cost'] },
      { title: 'Booking & Payment', items: ['50% advance required to confirm booking; balance due on the day of the shoot', 'Advance is non-refundable but adjustable for future bookings', 'Payments accepted via cash, cheque, GPay, or bank transfer', 'Prices subject to change without prior notice'] },
      { title: 'Other Information', items: ['Edited images delivered within 2–3 weeks after selection', 'Raw/unedited images will not be shared', 'Copyright remains with the photographer', 'Please arrive on time; late arrival will shorten the session'] },
    ],
    faqsHeading: 'FAQs',
  },
  {
    slug: 'family',
    title: 'Family',
    introTitle: 'Family',
    pricingHeading: 'Pricing Packages',
    pricingPlans: [
      { name: 'Family (Studio)', priceLabel: '₹ 12,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 12', 'Theme / Setup - 1', 'No. of Members - 5–6', 'Duration - 45 minutes'] },
      { name: 'Family (Outdoor)', priceLabel: '₹ 18,000', periodLabel: '/ Package', cta: { label: 'Get Started', href: BASE_WA }, features: ['Edited images - 18', 'Theme / Setup - 1', 'No. of Members - 5–6', 'Duration - 90 minutes'] },
    ],
    customPricingCta: { label: 'Get a Quote', href: BASE_WA, text: "Hi, I'd like a custom pricing plan for" },
    notesHeading: 'What to Expect & Recommendations',
    notesSections: [
      { title: 'What to Expect & Recommendations', items: ['For family portraits, coordinated outfits work best — stick to neutral or dark solid colors', 'Hair & makeup not included, but can be arranged at an additional cost'] },
      { title: 'Booking & Payment', items: ['50% advance required to confirm booking; balance due on the day of the shoot', 'Advance is non-refundable but can be adjusted toward a future session', 'Payments accepted via cash, cheque, GPay, or bank transfer', 'Prices subject to change without prior notice'] },
      { title: 'Image Delivery & Add-ons', items: ['Edited images delivered within 2–3 weeks after selection', 'Extra edits, photo frames, larger albums, etc., available at additional cost'] },
      { title: 'Session Guidelines', items: ['Please arrive on time — late arrivals will reduce session time', 'Raw/unedited images will not be shared', 'Copyright remains with the photographer'] },
    ],
    faqsHeading: 'FAQs',
  },
  {
    slug: 'special-events',
    title: 'Special Events',
    introTitle: 'Special Events',
    pricingHeading: 'Pricing Packages',
    pricingPlans: [],
    customPricingCta: { label: 'Get a Quote', href: BASE_WA, text: "Hi, I'd like a custom pricing plan for" },
    notesHeading: 'Points to Note',
    notesSections: [],
    faqsHeading: 'FAQs',
  },
];

const testimonials = [
  { name: 'Anumeha Asthana', rating: 5, review: "We had the pleasure of working with Anandita during Dhruva's two-month shoot, and it was an incredibly fun and memorable experience. Anandita not only made Dhruva feel at ease but also went above and beyond to accommodate our specific requests for various shots. She even included our family pet in some stunning family photos, which was a wonderful touch." },
  { name: 'Ayushi Mishra', rating: 5, review: 'Anandita is a true professional. She is extremely knowledgeable and accommodating. She did a fantastic photo shoot of our new born and captured some precious, candid moments. She has a touch of a mother who was able to engage and handle the infant which was very much required. Thank you once again Anandita.' },
  { name: 'Vishali Hari', rating: 5, review: 'I was in search of a photographer for my maternity shoot. That is when I got to know about WigglyBun Photography. From the first day of inquiry till now Anandita has been extremely sweet and passionate. She made me and my family comfortable during the shoot. The day of the shoot was very well paced which was really a big relief for me. She is very passionate and compatible person. Her love towards capturing the expression from behind the lens added additional beauty to the pictures. All the pictures came out well and very affordable too. Loved her work. Waiting for the newborn shoot with WrigglyBun Photography. Much love to you Anandita. Keep up the good work you are doing. I would strongly suggest her if you are looking for your maternity shoot as well as newborn shoot in and around Bangalore.' },
  { name: 'Sonal Gupta', rating: 5, review: "We had the pleasure of working with Anandita for a photo shoot of our 20-day-old baby, and we couldn't be happier with the experience. Anandita was incredibly caring and gentle throughout the entire session. Despite multiple changes of dress and wrapping, our baby remained comfortable and undisturbed, which speaks volumes about her skill and patience. Baby photoshoots require a lot of patience and a calm demeanor, and Anandita handled it all beautifully. She delivered stunning shots that we will cherish forever. We highly recommend Anandita for anyone looking for a talented and compassionate photographer for their little ones." },
  { name: 'Sapna Soni', rating: 5, review: "Such a beautiful experience while Aanya's photosession!! Best thing is as a photographer you are so soft spoken ..in future will definitely do more photosession for my kids ..thankyou." },
  { name: 'Anu Roy', rating: 5, review: "It has been a wholesome experience getting my twins photographed with WrigglyBun. Anandita is an ace photographer and holds great deal of expertise specifically in kids and babies photography. She has her way to get the most precious moments captured. I would recommend everyone to opt for WrigglyBun photography when they need the best experience with their kids photography." },
  { name: 'Swarna Gowri', rating: 5, review: 'It was amazing experience to shoot with Anandita. She made it really comfortable for the kids to pose and click. We had a wonderful time and those memories got captured forever. The photos were amazing 🤩' },
];

const blogPosts = [
  { title: 'Christmas Shoot!', slug: 'christmas-shoot', description: "Tis the season, and we're all for it! See what we were up to during the Christmas break!", link: 'https://wrigglybunphotography.pixieset.com/seasonalmix/', publishedAt: new Date().toISOString() },
  { title: 'Freezing those special moments in time', slug: 'freezing-special-moments', description: "We know the fragility of these special moments, and here we explore how you can freeze these moments forever", link: 'https://wrigglybunphotography.pixieset.com/familyportraits/', publishedAt: new Date().toISOString() },
];

module.exports = {
  homePageHeroCards,
  bestSellingPackages,
  greyServices,
  aboutPage,
  siteSettings,
  faqs,
  services,
  testimonials,
  blogPosts,
};
