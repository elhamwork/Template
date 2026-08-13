// ============================================================================
// SITE CONFIGURATION — single source of truth for this template.
// Swap the values below to rebrand the entire site for a new client;
// components read from here rather than hardcoding content.
// ============================================================================

// Fallback for the one Unsplash photo ID that turned out not to show what
// its filename/description implied (a chicken nugget, not roofing work) —
// resolved locally instead of gambling on another unverified stock photo ID.
const img = (path) => `${import.meta.env.BASE_URL}images/${path}`;

const siteConfig = {
  business: {
    name: "Ironclad Roofing & Siding",
    shortName: "Ironclad",
    city: "Dayton",
    state: "OH",
    tagline: "Dayton Roofing Experts",
    heroHeadline: "Dayton Roofing Experts — Ironclad Roofing & Siding",
    licenseNumber: "OH License #RS-58231",
    yearFounded: 2005,
    yearsInBusiness: 20,
    logoText: "Ironclad",
    logoAccent: "Roofing & Siding",
  },

  contact: {
    phone: "(937) 555-0142",
    phoneRaw: "+19375550142",
    email: "office@ironcladroofingsiding.com",
    address: "4517 Wilmington Pike, Dayton, OH 45440",
    serviceArea: "Dayton, OH and the greater Miami Valley",
    serviceAreas: [
      "Dayton",
      "Kettering",
      "Beavercreek",
      "Centerville",
      "Huber Heights",
      "Springboro",
    ],
    hours: [
      { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
      { days: "Saturday", time: "8:00 AM – 2:00 PM" },
      { days: "Sunday", time: "Closed — emergency service available" },
    ],
  },

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://google.com/",
  },

  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ],

  hero: {
    trustSignals: [
      "Free Estimates",
      "Lifetime Warranties",
      "0% Financing Available",
      "Licensed & Insured",
      "Satisfaction Guaranteed",
    ],
    ctaText: "Schedule a Free Estimate",
    secondaryCtaText: "View Our Work",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Roofing contractor installing new architectural shingles on a residential home",
  },

  trustCards: [
    {
      title: "Family-Owned & Operated",
      icon: "home",
      description: "A Miami Valley family business since 2005 — every job carries our name on it.",
    },
    {
      title: "Certified Experts",
      icon: "badge",
      description: "Manufacturer-certified crews with ongoing training, year after year.",
    },
    {
      title: "Premium Materials & Warranties",
      icon: "shield",
      description: "Trusted materials, backed by a written workmanship warranty.",
    },
  ],

  // Compact teaser cards used on the Home page — each links out to its
  // full page instead of duplicating that content on Home.
  explore: [
    {
      title: "Our Services",
      description: "Roof repair, replacement, maintenance, and siding.",
      linkText: "View All Services",
      to: "/services",
      image:
        img("explore-services.svg"),
      imageAlt: "Roofer installing new architectural shingles",
    },
    {
      title: "Our Work",
      description: "Recent roofing and siding projects across the Miami Valley.",
      linkText: "View Gallery",
      to: "/gallery",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Completed roofing and siding project",
    },
    {
      title: "Reviews",
      description: "5-star rated by homeowners across Dayton, OH.",
      linkText: "Read Our Reviews",
      // resolved from social.google at render time — see Home.jsx
      href: null,
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Happy homeowner in front of their finished roof",
    },
  ],

  services: [
    {
      id: "roof-repair",
      name: "Roof Repair",
      icon: "wrench",
      description:
        "Leaks, missing shingles, or storm damage — our team diagnoses the source of the problem and repairs it correctly the first time, backed by our workmanship warranty.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "roof-replacement",
      name: "Roof Replacement",
      icon: "roof",
      description:
        "A full tear-off and replacement using premium architectural shingles or metal roofing, installed by certified crews and backed by a lifetime warranty.",
      image:
        img("service-replacement.svg"),
    },
    {
      id: "roof-maintenance",
      name: "Roof Maintenance",
      icon: "clipboard",
      description:
        "Scheduled inspections and tune-ups that catch small issues before they become expensive ones, extending the life of your existing roof system.",
      image:
        "https://images.unsplash.com/photo-1590942137882-b41c1a5f7267?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "siding",
      name: "Siding Installation",
      icon: "layers",
      description:
        "Vinyl, fiber cement, and engineered wood siding installed to protect your home's exterior and boost curb appeal, with color options to match any style.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  about: {
    eyebrow: "About Ironclad",
    heading: "Two Decades of Roofs Done Right.",
    body: [
      "Ironclad Roofing & Siding was founded in 2005 on a simple idea: do the work right, price it fairly, and treat every home like it's our own. Twenty years later, that's still how we run every job.",
      "We're a licensed, locally owned contractor serving the greater Dayton area with in-house crews — no subcontractor guesswork, no surprises. From a single repair to a full roof and siding replacement, our team is trained, certified, and accountable for the work we do.",
    ],
    credentials: [
      `${20}+ years serving the Miami Valley`,
      "Fully licensed, bonded & insured",
      "Manufacturer-certified installation crews",
      "A+ rated with the local Better Business Bureau",
    ],
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Ironclad Roofing & Siding crew on a completed residential roofing project",
  },

  gallery: [
    {
      id: "gallery-1",
      title: "Architectural Shingle Replacement",
      location: "Kettering, OH",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-2",
      title: "Fiber Cement Siding Install",
      location: "Beavercreek, OH",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-3",
      title: "Storm Damage Restoration",
      location: "Centerville, OH",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-4",
      title: "Standing-Seam Metal Roof",
      location: "Springboro, OH",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-5",
      title: "Full Tear-Off & Replacement",
      location: "Huber Heights, OH",
      image:
        img("gallery-5.svg"),
    },
    {
      id: "gallery-6",
      title: "Vinyl Siding & Trim",
      location: "Dayton, OH",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
    },
  ],

  beforeAfter: {
    heading: "See the Difference",
    description: "A storm-damaged roof in Centerville, OH — fully replaced in two days.",
    before: {
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      label: "Before",
    },
    after: {
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
      label: "After",
    },
  },

  testimonials: [
    {
      name: "Karen Whitfield",
      city: "Kettering, OH",
      rating: 5,
      quote:
        "Ironclad replaced our roof after a hailstorm and handled the entire insurance claim for us. The crew was on time every day and left the yard spotless.",
    },
    {
      name: "Marcus Bell",
      city: "Beavercreek, OH",
      rating: 5,
      quote:
        "Fair price, real communication, and a finished roof that looks fantastic. They even walked us through the warranty paperwork in plain English.",
    },
    {
      name: "Angela Torres",
      city: "Centerville, OH",
      rating: 5,
      quote:
        "We got three quotes and Ironclad wasn't the cheapest, but it was clear they knew what they were doing. Two years later, zero issues.",
    },
  ],

  contactForm: {
    heading: "Request Your Free Estimate",
    subheading: "Fill out the form and our team will follow up within one business day.",
    submitText: "Request My Free Estimate",
  },

  footer: {
    description:
      "Ironclad Roofing & Siding is a locally owned, fully licensed roofing and siding contractor serving the greater Dayton, Ohio area since 2005.",
  },

  seo: {
    home: {
      title: "Ironclad Roofing & Siding | Dayton, OH Roofing Experts",
      description:
        "Ironclad Roofing & Siding provides expert roof repair, replacement, and siding installation across Dayton, OH and the Miami Valley. Licensed, insured, free estimates.",
    },
    about: {
      title: "About Us | Ironclad Roofing & Siding",
      description: "Locally owned and operated since 2005, Ironclad Roofing & Siding has served the greater Dayton, OH area with certified, warrantied roofing and siding work.",
    },
    services: {
      title: "Roofing & Siding Services | Ironclad Roofing & Siding",
      description: "Roof repair, roof replacement, roof maintenance, and siding installation from Ironclad Roofing & Siding in Dayton, OH.",
    },
    gallery: {
      title: "Our Work | Ironclad Roofing & Siding",
      description: "Browse recent roofing and siding projects completed by Ironclad Roofing & Siding across the greater Dayton, OH area.",
    },
    contact: {
      title: "Contact Us | Ironclad Roofing & Siding",
      description: "Request a free roofing or siding estimate from Ironclad Roofing & Siding. Serving Dayton, OH and the Miami Valley.",
    },
  },
};

export default siteConfig;
