export type Plan = {
  id: string;
  term: string;
  months: number;
  priceInr: number;
  /* The one we steer teachers to; also the price quoted elsewhere. */
  featured?: boolean;
};

/* Same product on every plan — the only thing a longer term buys is a
 * lower monthly rate. The per-month and saving figures shown on the
 * page are worked out from these numbers, never written out by hand. */
export const plans: Plan[] = [
  { id: "quarterly", term: "3 months", months: 3, priceInr: 7000 },
  { id: "half-yearly", term: "6 months", months: 6, priceInr: 13000 },
  { id: "yearly", term: "12 months", months: 12, priceInr: 24000, featured: true },
];

/* The shortest term, used as the baseline a longer plan saves against. */
export const baseMonthlyInr = plans[0].priceInr / plans[0].months;

/* The plan every other number on the site is quoted against. */
export const yearlyPlan = plans.find((p) => p.featured) ?? plans[plans.length - 1];

export const site = {
  name: "LearnMints",
  legalName: "Orvinex Software Solution",
  domain: "learnmints.com",
  url: "https://learnmints.com",
  locale: "en_IN",
  priceInr: yearlyPlan.priceInr,
  tagline: "Run your whole tuition from one link. Keep every rupee.",
  description:
    "LearnMints is a micro teaching platform for independent tutors in India. Share watermarked notes, run live classes in the browser, auto-generate quizzes and collect UPI fees that land in your account the same day. ₹7,000 for three months or ₹24,000 a year, flat, with no cut of your tuition.",
  shortDescription:
    "A micro LMS for independent tutors in India. Notes, live classes, quizzes and same-day UPI fee collection from ₹7,000 a term, with no commission.",
  twitter: "@learnmints",
  email: "hello@learnmints.com",
  phone: "+91-80000-00000",
  foundingYear: 2026,
} as const;

export const keywords = [
  "LMS for tutors in India",
  "LMS for private tutors",
  "online tuition platform",
  "sell courses online India",
  "Teachmint alternative",
  "Classplus alternative",
  "tuition fee collection app",
  "UPI fee collection for teachers",
  "course platform for teachers",
  "coaching class app",
  "PDF watermarking for teachers",
  "AI quiz generator for teachers",
  "home tutor software",
  "no commission course platform",
  "micro LMS",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does LearnMints cost?",
    a: "Pick the term you want to pay for: ₹7,000 for three months, ₹13,000 for six, or ₹24,000 for a year — which works out at ₹2,000 a month. Every plan is the same product. It covers every student you teach, every course you publish and every live class you run, and we never take a percentage of your tuition, so a batch of 10 students and a batch of 500 cost you exactly the same.",
  },
  {
    q: "When does the fee money actually reach me?",
    a: "The same working day. Fees are collected through Razorpay Route, which splits each payment at the moment it is made and routes your share straight to your own bank account or UPI ID. There is no platform wallet holding your money for three to seven days, and nothing to 'request a payout' for.",
  },
  {
    q: "Do my students need to install an app?",
    a: "No. LearnMints is a progressive web app, so a student opens your link in Chrome or Safari and taps 'Add to Home Screen'. It takes under a megabyte and behaves like a normal app afterwards, which matters a great deal on an entry-level Android phone with no storage left.",
  },
  {
    q: "How do students get into my class?",
    a: "You share one link, wherever you already talk to your batch. A student opens it, enters their phone number and sets a passcode the first time — no email address, because most school and college students in India do not check email. After that, what is due next, what they have finished and what they have paid all sit on their own dashboard.",
  },
  {
    q: "Can students forward my notes to a Telegram group?",
    a: "They can forward anything, anywhere — that is true of every platform. What LearnMints does is make it traceable. Every PDF and video carries the viewing student's own phone number drifting across it, so a leaked file points directly at who leaked it. In practice that alone stops most casual sharing.",
  },
  {
    q: "How does the quiz generator work?",
    a: "You upload a chapter as a PDF. LearnMints reads it and returns a twenty-question quiz with an answer key, which you can edit before publishing. It is meant to save you the two hours of typing on a Sunday night, not to replace your judgement about what your students need to be tested on.",
  },
  {
    q: "Can I run live classes inside LearnMints?",
    a: "Yes. Live classes run in the browser on your own course page, so students never leave for a Zoom link and you never paste a meeting ID into a group chat again. Attendance is recorded automatically against each student.",
  },
  {
    q: "I already teach through a group chat. Is this worth switching for?",
    a: "Group chats are excellent at reaching students and terrible at everything else — you cannot tell who opened the notes, who still owes fees, or who has stopped attending. LearnMints does not replace your group. You keep sharing your link in it, exactly as you do now, and a real record sits behind every tap.",
  },
  {
    q: "What happens to my content if I stop paying?",
    a: "You can export every course, PDF, video link and student record at any time, including after your subscription lapses. Your students' contact details are yours. We do not hold your batch hostage to make you renew.",
  },
  {
    q: "Is LearnMints only for exam coaching?",
    a: "No. It suits anyone teaching a defined group over time — school subject tuition, competitive exam batches, spoken English, music, coding, commerce and CA coaching. If you teach the same cohort repeatedly and collect fees from them, it fits.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/icon-512.png`, width: 512, height: 512 },
  description: site.shortDescription,
  foundingDate: String(site.foundingYear),
  email: site.email,
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://twitter.com/learnmints",
    "https://www.linkedin.com/company/learnmints",
    "https://www.instagram.com/learnmints",
  ],
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${site.url}/#software`,
  name: site.name,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "Learning Management System",
  operatingSystem: "Web, Android, iOS",
  url: site.url,
  description: site.description,
  inLanguage: "en-IN",
  publisher: { "@id": `${site.url}/#organization` },
  featureList: [
    "Phone-number login with no email address required",
    "Course builder with modules and chapters",
    "Same-day UPI fee settlement via Razorpay Route",
    "Dynamic per-student watermarking on videos and PDFs",
    "AI quiz generation from uploaded PDFs",
    "In-browser live classes with automatic attendance",
    "Installable progressive web app under 1 MB",
  ],
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.term} of ${site.name}`,
    price: plan.priceInr,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${site.url}/#pricing`,
    priceValidUntil: "2027-03-31",
    seller: { "@id": `${site.url}/#organization` },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.priceInr,
      priceCurrency: "INR",
      billingDuration: plan.months,
      billingIncrement: 1,
      unitCode: "MON",
    },
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.shortDescription,
  inLanguage: "en-IN",
  publisher: { "@id": `${site.url}/#organization` },
};
