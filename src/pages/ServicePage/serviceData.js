import heroImg from "../../assets/images/landscapes/10.jpg";
import heroImgNewBorn from "../../assets/images/landscapes/10.jpg";
import heroImgMat from "../../assets/images/landscapes/8.jpg";
import heroImgMonths from "../../assets/images/landscapes/11.jpg";
import l1 from "../../assets/images/landscapes/1.jpg";
import l2 from "../../assets/images/landscapes/2.jpg";
import l3 from "../../assets/images/landscapes/3.jpg";
import l4 from "../../assets/images/landscapes/4.jpg";
import l5 from "../../assets/images/landscapes/5.jpg";
import l6 from "../../assets/images/landscapes/6.jpg";
import l7 from "../../assets/images/landscapes/7.jpg";
import l8 from "../../assets/images/landscapes/8.jpg";
import l9 from "../../assets/images/landscapes/9.jpg";
import l10 from "../../assets/images/landscapes/10.jpg";
import l11 from "../../assets/images/landscapes/11.jpg";
import l12 from "../../assets/images/landscapes/12.jpg";

const BASE_WA = "https://wa.me/919820591096";

// Shared placeholder carousel across all services (you can replace per service later)
const sharedCarousel = [
  { src: l1, alt: "Landscape 1" },
  { src: l2, alt: "Landscape 2" },
  { src: l3, alt: "Landscape 3" },
  { src: l4, alt: "Landscape 4" },
  { src: l5, alt: "Landscape 5" },
  { src: l6, alt: "Landscape 6" },
  { src: l7, alt: "Landscape 7" },
  { src: l8, alt: "Landscape 8" },
  { src: l9, alt: "Landscape 9" },
  { src: l10, alt: "Landscape 10" },
  { src: l11, alt: "Landscape 11" },
  { src: l12, alt: "Landscape 12" },
];

export const serviceDataBySlug = {
  maternity: {
    slug: "maternity",
    title: "Maternity",
    hero: { src: heroImgMat, alt: "Maternity hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Maternity Photography",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard (Studio)",
        priceLabel: "₹ 19,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 20",
          "Garments - 2",
          "Husband & Siblings included",
          "Hair & Makeup included",
          "Duration - 1 Hour",
        ],
      },
      {
        name: "Premium (Studio)",
        priceLabel: "₹ 27,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 30",
          "Garments - 3",
          "Husband & Siblings included",
          "Hair & Makeup included",
          "Phone Reel provided",
          "Duration - 2 Hours",
        ],
      },
      {
        name: "Maternity + Newborn",
        priceLabel: "₹ 60,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 60",
          "Sessions - 1 (Maternity) + 3 (Newborn, 6 Months, 12 Months)",
          "Husband & Siblings included",
          "Hair & Makeup included",
          "Album (8*16 inches) + Pendrive",
        ],
      },
    ],
    customPricingCta: {
      label: "Get a Quote",
      href: BASE_WA,
      text: "Hi, I'd like a custom pricing plan for",
    },
    notesHeading: "Points to Note",
    notesSections: [
      {
        title: "What’s Included",
        items: [
          "Hair & makeup included",
          "Maternity gowns provided and included in the package",
          "Spouse and one sibling (if any) included",
        ],
      },
      {
        title: "Additional Charges",
        items: [
          "Outdoor shoot: ₹5000 extra",
          "Additional family members: ₹1500 per person",
          "Extra edits, frames, larger albums, etc., available at additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "50% advance to confirm booking; balance due on shoot day",
          "Advance is non-refundable but adjustable for future bookings",
          "Payments accepted via cash, cheque, GPay, or bank transfer",
          "Prices subject to change without prior notice",
        ],
      },
      {
        title: "Other Information",
        items: [
          "Edited images delivered within 2–3 weeks after selection",
          "Raw/unedited images will not be shared",
          "Copyright remains with the photographer",
          "Please arrive on time; late arrival will shorten the session",
        ],
      },
    ],
    faqsHeading: "FAQs",
    faqs: [],
  },

  newborn: {
    slug: "newborn",
    title: "Newborn",
    hero: { src: heroImgNewBorn, alt: "Newborn hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Newborn Photography",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard (Studio)",
        priceLabel: "₹ 19,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 20",
          "Theme / Setups - 3",
          "Duration - 1.5 to 2 Hours",
          "Parent & Siblings included",
          "10 photo prints (8*12 inches)",
        ],
      },
      {
        name: "Premium (Studio)",
        priceLabel: "₹ 29,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 30",
          "Theme / Setups - 4",
          "Duration - 3.5 to 4 Hours",
          "Parent & Siblings included",
          "Album (8*16 inches) + Pendrive",
        ],
      },
      {
        name: "Yearly (Studio)",
        priceLabel: "₹ 55,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 60",
          "Theme / Setups - 10",
          "Duration - 5 Sessions",
          "Album (8*16 inches) + Pendrive",
          "The yearly package is valid until the baby’s first birthday",
        ],
      },
    ],
    customPricingCta: {
      label: "Get a Quote",
      href: BASE_WA,
      text: "Hi, I'd like a custom pricing plan for",
    },
    notesHeading: "What’s Included & Recommendations",
    notesSections: [
      {
        title: "What’s Included & Recommendations",
        items: [
          "Best time to schedule a newborn session: between 5–20 days after birth",
          "For family portraits, it’s best if parents wear color-coordinated solid outfits in neutral or dark shades",
          "Hair & makeup not included, but can be arranged at an additional cost",
        ],
      },
      {
        title: "Additional Charges",
        items: [
          "In-home session: ₹7000 extra",
          "Additional family members: ₹1500 per person",
          "Extra edits, frames, larger albums, etc., are available at additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "50% advance required to confirm booking; balance due on the day of the shoot",
          "Advance is non-refundable but adjustable for future bookings",
          "Payments accepted via cash, cheque, GPay, or bank transfer",
          "Prices subject to change without prior notice",
        ],
      },
      {
        title: "Other Information",
        items: [
          "Edited images delivered within 2–3 weeks after selection",
          "Raw/unedited images will not be shared",
          "Copyright remains with the photographer",
          "Please arrive on time; late arrival will shorten the session",
        ],
      },
    ],
    faqsHeading: "FAQs",
    faqs: [],
  },

  "6months": {
    slug: "6months",
    title: "6 Months & Above",
    hero: { src: heroImgMonths, alt: "6 months hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "6 months & Above",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard (Studio)",
        priceLabel: "₹ 19,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 20",
          "Theme / Setups - 3 (2 Solo + 1 Family)",
          "Parent & Siblings included",
          "10 photo prints (8*12 inches)",
          "Duration - 1.5 to 2 Hours",
        ],
      },
      {
        name: "Premium (Studio)",
        priceLabel: "₹ 29,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 30",
          "Theme / Setups - 4 (3 Solo + 1 Family)",
          "Parent & Siblings included",
          "Album (8*16 inches) + Pendrive",
          "Duration - 3.5 to 4 Hours",
        ],
      },
      {
        name: "Cake Smash (Studio)",
        priceLabel: "₹ 10,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited Images - 10",
          "Theme / Setup - 1",
          "Cake included",
          "Duration - 30 min",
        ],
      },
    ],
    customPricingCta: {
      label: "Get a Quote",
      href: BASE_WA,
      text: "Hi, I'd like a custom pricing plan for",
    },
    notesHeading: "What’s Included & Recommendations",
    notesSections: [
      {
        title: "What’s Included & Recommendations",
        items: [
          "Cake smash and bathtub sessions can be added to standard or premium packages (charges apply separately)",
          "Outfit options available for babies up to 1 year old",
          "Outfit options available for Mom",
          "For family portraits, wear color-coordinated solid outfits in neutral or dark shades for best results",
        ],
      },
      {
        title: "Additional Charges",
        items: [
          "Outdoor shoot: ₹7000 extra",
          "Additional family members: ₹1500 per person",
          "Cake smash/bathtub setups are charged separately based on chosen package",
          "Extra edits, photo frames, larger albums, etc., available at additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "50% advance required to confirm booking; balance due on the day of the shoot",
          "Advance is non-refundable but adjustable for future bookings",
          "Payments accepted via cash, cheque, GPay, or bank transfer",
          "Prices subject to change without prior notice",
        ],
      },
      {
        title: "Other Information",
        items: [
          "Edited images delivered within 2–3 weeks after selection",
          "Raw/unedited images will not be shared",
          "Copyright remains with the photographer",
          "Please arrive on time; late arrival will shorten the session",
        ],
      },
    ],
    faqsHeading: "FAQs",
    faqs: [],
  },

  family: {
    slug: "family",
    title: "Family",
    hero: { src: heroImg, alt: "Family hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Family",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Family (Studio)",
        priceLabel: "₹ 12,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 12",
          "Theme / Setup - 1",
          "No. of Members - 5–6",
          "Duration - 45 minutes",
        ],
      },
      {
        name: "Family (Outdoor)",
        priceLabel: "₹ 18,000",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edited images - 18",
          "Theme / Setup - 1",
          "No. of Members - 5–6",
          "Duration - 90 minutes",
        ],
      },
    ],
    customPricingCta: {
      label: "Get a Quote",
      href: BASE_WA,
      text: "Hi, I'd like a custom pricing plan for",
    },
    notesHeading: "What to Expect & Recommendations",
    notesSections: [
      {
        title: "What to Expect & Recommendations",
        items: [
          "For family portraits, coordinated outfits work best — stick to neutral or dark solid colors",
          "Hair & makeup not included, but can be arranged at an additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "50% advance required to confirm booking; balance due on the day of the shoot",
          "Advance is non-refundable but can be adjusted toward a future session",
          "Payments accepted via cash, cheque, GPay, or bank transfer",
          "Prices subject to change without prior notice",
        ],
      },
      {
        title: "Image Delivery & Add-ons",
        items: [
          "Edited images delivered within 2–3 weeks after selection",
          "Extra edits, photo frames, larger albums, etc., available at additional cost",
        ],
      },
      {
        title: "Session Guidelines",
        items: [
          "Please arrive on time — late arrivals will reduce session time",
          "Raw/unedited images will not be shared",
          "Copyright remains with the photographer",
        ],
      },
    ],
    faqsHeading: "FAQs",
    faqs: [],
  },

  "special-events": {
    slug: "special-events",
    title: "Special Events",
    hero: { src: heroImg, alt: "Special events hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Special Events",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [],
    customPricingCta: {
      label: "Get a Quote",
      href: BASE_WA,
      text: "Hi, I'd like a custom pricing plan for",
    },
    notesHeading: "Points to Note",
    notes: [],
    faqsHeading: "FAQs",
    faqs: [],
  },
};
