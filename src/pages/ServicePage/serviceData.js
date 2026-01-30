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
    title: "Maternity Photoshoot",
    subtitle: "The best time to schedule your maternity shoot is between 28 and 34 weeks.",
    hero: { src: heroImgMat, alt: "Maternity hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Maternity Photography",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard",
        priceLabel: "₹ 11,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 10",
          "Setup & Garments - 1",
          "Duration - 1 Hour",
          "Digital only",
        ],
      },
      {
        name: "Classic",
        priceLabel: "₹ 18,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 20",
          "Setup & Garments - 2",
          "Duration - 2 Hours",
          "Hair & Makeup",
          "Digitals",
          "10 prints (8*12 in)",
        ],
      },
      {
        name: "Premium",
        priceLabel: "₹ 26,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 30",
          "Setup & Garments - 3",
          "Duration - 3 Hours",
          "Hair & Makeup",
          "Digitals",
          "Album (8*16 in)",
          "Phone Reel",
        ],
      },
      {
        name: "Yearly",
        priceLabel: "₹ 50,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 60",
          "Setups - 8",
          "4 Sessions  - Maternity, Newborn, 6 Months, 12 Months",
          "Hair, Makeup & Gown",
          "Digitals",
          "Album (8*16 in)",
          "Phone Reel",
          
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
          "Edits refer to professionally retouched high-resolution images.",
          "Husband & Siblings included across all sessions",
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
          "70% advance to confirm booking; balance due on shoot day",
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
    title: "Newborn Photoshoot",
    subtitle: "Best time for newborn shoot is 5-20 days.",
    hero: { src: heroImgNewBorn, alt: "Newborn hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Newborn Photography",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard",
        priceLabel: "₹ 11,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 10",
          "Setups - 2",
          "Duration - 1 Hour",
          "Parents & Siblings included",
          "Digital only",
        ],
      },
      {
        name: "Classic",
        priceLabel: "₹ 18,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 20",
          "Setups - 3",
          "Duration - 2 Hours",
          "Parents & Siblings included",
          "Digitals",
          "10 prints (8*12 in)",
        ],
      },
      {
        name: "Premium",
        priceLabel: "₹ 26,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 30",
          "Setups - 4",
          "Duration - 3 Hours",
          "Parents & Siblings included",
          "Digitals",
          "Album (8*16 in)",
          "Phone Reel",
        ],
      },
      {
        name: "Yearly",
        priceLabel: "₹ 50,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 60",
          "Setups - 8",
          "4 Sessions  - Newborn, 4 Months, 6 Months, 12 Months",
          "Digitals",
          "Parents & Siblings included",
          "Album (8*16 in)",
          "Phone Reel",
          
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
          "Edits refer to professionally retouched high-resolution images.",
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
          "70% advance required to confirm booking; balance due on the day of the shoot",
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
    title: "6 Months & Above Photoshoot",
    subtitle: "After six months, little moments turn into real expressions and that’s where the magic begins.",
    hero: { src: heroImgMonths, alt: "6 months hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "6 months & Above",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard",
        priceLabel: "₹ 11,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 10",
          "Setups - 2",
          "Duration - 1 Hour",
          "Parents & Siblings included",
          "Digital only",
        ],
      },
      {
        name: "Classic",
        priceLabel: "₹ 18,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 20",
          "Setups - 3",
          "Duration - 2 Hours",
          "Parents & Siblings included",
          "Digitals",
          "10 prints (8*12 in)",
        ],
      },
      {
        name: "Premium",
        priceLabel: "₹ 26,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 30",
          "Setups - 4",
          "Duration - 3 Hours",
          "Parents & Siblings included",
          "Digitals",
          "Album (8*16 in)",
          "Phone Reel",
        ],
      },
      {
        name: "Yearly",
        priceLabel: "₹ 50,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 60",
          "Setups - 8",
          "4 Sessions  - Valid for one year from the first session",
          "Parents & Siblings included",
          "Digitals",
          "Album (8*16 in)",
          "Phone Reel",
          
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
          "Cake smash and bathtub sessions can be added to classic or premium packages",
          "Outfit options available for babies up to 1 year old",
          "Outfit options available for Mom",
          "For family portraits, wear color-coordinated solid outfits in neutral or dark shades for best results",
          "Edits refer to professionally retouched high-resolution images.",
        ],
      },
      {
        title: "Additional Charges",
        items: [
          "Outdoor shoot/In home session: ₹7000 extra",
          "Additional family members: ₹1500 per person",
          "Extra edits, photo frames, larger albums, etc., available at additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "70% advance required to confirm booking; balance due on the day of the shoot",
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
    title: "Family Photoshoot",
    subtitle: "Capturing the love, laughter, and connection that make a family.",
    hero: { src: heroImg, alt: "Family hero" },
    breadcrumbLabel: "Home",
    ourServiceHeading: "Our Service",
    introTitle: "Family",
    carousel: sharedCarousel,
    pricingHeading: "Pricing Packages",
    pricingPlans: [
      {
        name: "Standard",
        priceLabel: "₹ 9,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 10",
          "Setups - 1",
          "Duration - 1 hour",
          "Digital only"
        ],
      },
      {
        name: "Classic",
        priceLabel: "₹ 15,999",
        periodLabel: "/ Package",
        cta: { label: "Get Started", href: BASE_WA },
        features: [
          "Edits - 20",
          "Setups - 2",
          "Duration - 2 hours",
          "Digitals",
          "10 prints (8*12 in)",
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
        title: "What’s Included & Recommendations",
        items: [
          "Outfit options available for babies up to 1 year old",
          "Outfit options available for Mom",
          "For family portraits, wear color-coordinated solid outfits in neutral or dark shades for best results",
          "Edits refer to professionally retouched high-resolution images.",
        ],
      },
      {
        title: "Additional Charges",
        items: [
          "Outdoor shoot/In home session: ₹5000 extra",
          "Additional family members: ₹1500 per person",
          "Hair & makeup not included, but can be arranged at an additional cost",
          "Extra edits, photo frames, larger albums, etc., available at additional cost",
        ],
      },
      {
        title: "Booking & Payment",
        items: [
          "70% advance required to confirm booking; balance due on the day of the shoot",
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

  "special-events": {
    slug: "special-events",
    title: "Special Events",
    subtitle: "Every celebration, every tradition, every moment that matters, from birthdays and naming ceremonies to baby showers, engagements, and anniversaries, we’ve got you covered.",
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
