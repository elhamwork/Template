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
    name: "Tristan & Sons Roofing & Construction LLC",
    shortName: "Tristan & Sons",
    city: "[City]",
    state: "[State]",
    tagline: "Roofing & Construction Experts",
    heroHeadline: "Roofing & Construction Experts — Tristan & Sons",
    licenseNumber: "License #[Pending]",
    yearFounded: "[Year]",
    yearsInBusiness: "[X]",
    logoText: "Tristan & Sons",
    logoAccent: "Roofing & Construction",
  },

  contact: {
    phone: "[Phone Number]",
    phoneRaw: "+1",
    email: "[email@tristanandsons.com]",
    address: "[Street Address, City, State ZIP]",
    serviceArea: "[Service Area]",
    serviceAreas: [
      "[City 1]",
      "[City 2]",
      "[City 3]",
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
      description: "A family-owned business — every job carries our name on it.",
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
      description: "Recent roofing and construction projects across [Service Area].",
      linkText: "View Gallery",
      to: "/gallery",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Completed roofing and siding project",
    },
    {
      title: "Reviews",
      description: "5-star rated by homeowners across [Service Area].",
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
    eyebrow: "About Tristan & Sons",
    heading: "Roofs Done Right.",
    body: [
      "Tristan & Sons Roofing & Construction was founded on a simple idea: do the work right, price it fairly, and treat every home like it's our own. That's still how we run every job.",
      "We're a licensed, locally owned contractor serving [Service Area] with in-house crews — no subcontractor guesswork, no surprises. From a single repair to a full roof and construction project, our team is trained, certified, and accountable for the work we do.",
    ],
    credentials: [
      "Serving [Service Area]",
      "Fully licensed, bonded & insured",
      "Manufacturer-certified installation crews",
      "A+ rated with the local Better Business Bureau",
    ],
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Tristan & Sons Roofing & Construction crew on a completed residential roofing project",
  },

  gallery: [
    {
      id: "gallery-1",
      title: "Architectural Shingle Replacement",
      location: "[City], [State]",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-2",
      title: "Fiber Cement Siding Install",
      location: "[City], [State]",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-3",
      title: "Storm Damage Restoration",
      location: "[City], [State]",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-4",
      title: "Standing-Seam Metal Roof",
      location: "[City], [State]",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gallery-5",
      title: "Full Tear-Off & Replacement",
      location: "[City], [State]",
      image:
        img("gallery-5.svg"),
    },
    {
      id: "gallery-6",
      title: "Vinyl Siding & Trim",
      location: "[City], [State]",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
    },
  ],

  beforeAfter: {
    heading: "See the Difference",
    description: "A storm-damaged roof — fully replaced in two days.",
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
      city: "[City], [State]",
      rating: 5,
      quote:
        "Tristan & Sons replaced our roof after a hailstorm and handled the entire insurance claim for us. The crew was on time every day and left the yard spotless.",
    },
    {
      name: "Marcus Bell",
      city: "[City], [State]",
      rating: 5,
      quote:
        "Fair price, real communication, and a finished roof that looks fantastic. They even walked us through the warranty paperwork in plain English.",
    },
    {
      name: "Angela Torres",
      city: "[City], [State]",
      rating: 5,
      quote:
        "We got three quotes and Tristan & Sons wasn't the cheapest, but it was clear they knew what they were doing. Two years later, zero issues.",
    },
  ],

  contactForm: {
    heading: "Request Your Free Estimate",
    subheading: "Fill out the form and our team will follow up within one business day.",
    submitText: "Request My Free Estimate",
  },

  footer: {
    description:
      "Tristan & Sons Roofing & Construction LLC is a locally owned, fully licensed roofing and construction contractor serving [Service Area].",
  },

  seo: {
    home: {
      title: "Tristan & Sons Roofing & Construction | Roofing Experts",
      description:
        "Tristan & Sons Roofing & Construction provides expert roof repair, replacement, and construction services across [Service Area]. Licensed, insured, free estimates.",
    },
    about: {
      title: "About Us | Tristan & Sons Roofing & Construction",
      description: "Locally owned and operated, Tristan & Sons Roofing & Construction has served [Service Area] with certified, warrantied roofing and construction work.",
    },
    services: {
      title: "Roofing & Construction Services | Tristan & Sons Roofing & Construction",
      description: "Roof repair, roof replacement, roof maintenance, and siding installation from Tristan & Sons Roofing & Construction.",
    },
    gallery: {
      title: "Our Work | Tristan & Sons Roofing & Construction",
      description: "Browse recent roofing and construction projects completed by Tristan & Sons Roofing & Construction across [Service Area].",
    },
    contact: {
      title: "Contact Us | Tristan & Sons Roofing & Construction",
      description: "Request a free roofing or construction estimate from Tristan & Sons Roofing & Construction. Serving [Service Area].",
    },
  },
};

export default siteConfig;
