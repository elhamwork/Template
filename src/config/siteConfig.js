// ============================================================================
// SITE CONFIGURATION
// ----------------------------------------------------------------------------
// This is the single source of truth for the entire template. Every piece of
// content rendered on the site (company info, colors, copy, images, services,
// testimonials, etc.) is pulled from this file.
//
// To rebrand this template for a new roofing company, edit the values below.
// You should not need to touch any component files to change content.
// ============================================================================

const siteConfig = {
  // --------------------------------------------------------------------
  // COMPANY IDENTITY
  // --------------------------------------------------------------------
  company: {
    name: "Cornerstone Roofing Co.",
    shortName: "Cornerstone Roofing",
    tagline: "Built to Protect What Matters Most.",
    logoText: "Cornerstone", // used in navbar/footer wordmark
    logoAccent: "Roofing Co.",
    favicon: "/favicon.svg",
    licenseNumber: "License #RC-04821",
    yearsExperience: 18,
    yearFounded: 2007,
    description:
      "Cornerstone Roofing Co. has been protecting homes and businesses across the region with expert craftsmanship, quality materials, and honest service since 2007. We're a locally owned, fully licensed and insured roofing contractor built on referrals and repeat customers.",
  },

  // --------------------------------------------------------------------
  // CONTACT INFORMATION
  // --------------------------------------------------------------------
  contact: {
    phone: "(555) 271-4900",
    phoneRaw: "+15552714900",
    email: "info@cornerstoneroofingco.com",
    address: {
      street: "4820 Ridgeline Parkway",
      city: "Maple Grove",
      state: "MN",
      zip: "55369",
    },
    hours: [
      { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
      { days: "Saturday", time: "8:00 AM – 2:00 PM" },
      { days: "Sunday", time: "Closed — Emergency service available" },
    ],
  },

  // --------------------------------------------------------------------
  // BRAND COLORS
  // Applied globally via CSS custom properties — see src/index.css
  // --------------------------------------------------------------------
  theme: {
    primaryColor: "#1c2b3a", // deep charcoal navy — headers, footer, primary UI
    secondaryColor: "#f6f4ef", // warm off-white — section backgrounds
    accentColor: "#b3492f", // brick red — CTAs, highlights
    textColor: "#28323c",
    mutedTextColor: "#5c6773",
  },

  // --------------------------------------------------------------------
  // SOCIAL MEDIA
  // --------------------------------------------------------------------
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    google: "https://google.com/",
  },

  // --------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------
  hero: {
    heading: "Built to Protect What Matters Most.",
    subheading:
      "Professional residential and commercial roofing built to last — trusted by homeowners and businesses across the region for nearly two decades.",
    primaryButtonText: "Get a Free Estimate",
    secondaryButtonText: "View Our Work",
    trustLine: "Licensed & Insured  •  Free Estimates  •  Quality Workmanship",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Professional roofer installing new architectural shingles on a residential roof",
  },

  // --------------------------------------------------------------------
  // TRUST / CREDIBILITY BAR
  // --------------------------------------------------------------------
  trustItems: [
    { label: "Licensed & Insured" },
    { label: "Free Estimates" },
    { label: "Quality Materials" },
    { label: "Experienced Professionals" },
    { label: "Workmanship Warranty" },
  ],

  // --------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------
  services: [
    {
      id: "roof-replacement",
      name: "Roof Replacement",
      description:
        "Full tear-off and replacement using premium materials, precise installation, and a workmanship warranty backing every job.",
      image:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "roof-repair",
      name: "Roof Repair",
      description:
        "From missing shingles to persistent leaks, our team diagnoses the root cause and repairs it right the first time.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "new-roof-installation",
      name: "New Roof Installation",
      description:
        "Building new or adding an addition? We work directly with builders and homeowners for precise, code-compliant installs.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "commercial-roofing",
      name: "Commercial Roofing",
      description:
        "Flat, low-slope, and metal roofing systems for warehouses, retail centers, and office buildings, installed with minimal downtime.",
      image:
        "https://images.unsplash.com/photo-1581091870627-3f8c6c9a8b6e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "roof-inspections",
      name: "Roof Inspections",
      description:
        "A thorough, honest assessment of your roof's condition — ideal before buying a home, filing a claim, or planning ahead.",
      image:
        "https://images.unsplash.com/photo-1590942137882-b41c1a5f7267?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "storm-damage",
      name: "Storm Damage",
      description:
        "Rapid response after hail and wind damage, with experienced help navigating the insurance claims process from start to finish.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // --------------------------------------------------------------------
  // ABOUT SECTION
  // --------------------------------------------------------------------
  about: {
    heading: "Roofing Built Around Quality.",
    body:
      "We believe a roof should do more than protect your property. It should provide confidence for years to come. For nearly two decades, Cornerstone Roofing Co. has combined skilled craftsmanship with premium materials to deliver roofing that homeowners and business owners can rely on — backed by clear communication and a crew that shows up when they say they will.",
    points: [
      "Experienced, in-house crews — no subcontractor guesswork",
      "Manufacturer-certified installation of premium materials",
      "Clear, written estimates with no hidden costs",
    ],
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Finished residential roof with dark architectural shingles on a two-story home",
    ctaText: "Learn More About Us",
  },

  // --------------------------------------------------------------------
  // PROJECTS / GALLERY
  // --------------------------------------------------------------------
  projectsSection: {
    heading: "Recent Roofing Projects",
    subheading: "See the quality behind every project.",
  },
  projects: [
    {
      id: "project-1",
      title: "Full Roof Replacement",
      location: "Maple Grove, MN",
      type: "Residential",
      description: "Complete tear-off and replacement with GAF Timberline HDZ architectural shingles.",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "project-2",
      title: "Commercial Flat Roof",
      location: "Plymouth, MN",
      type: "Commercial",
      description: "TPO membrane installation for a 22,000 sq. ft. retail center.",
      image:
        "https://images.unsplash.com/photo-1581091870627-3f8c6c9a8b6e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "project-3",
      title: "Storm Damage Restoration",
      location: "Brooklyn Park, MN",
      type: "Residential",
      description: "Insurance-approved full replacement following a spring hailstorm.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "project-4",
      title: "New Construction Install",
      location: "Corcoran, MN",
      type: "New Installation",
      description: "Ground-up roofing system install in coordination with the builder's timeline.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "project-5",
      title: "Cedar Shake Restoration",
      location: "Wayzata, MN",
      type: "Residential",
      description: "Detailed restoration preserving the home's original cedar shake character.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "project-6",
      title: "Metal Roof Installation",
      location: "Rogers, MN",
      type: "Residential",
      description: "Standing-seam metal roof installed for long-term durability and curb appeal.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // --------------------------------------------------------------------
  // WHY CHOOSE US
  // --------------------------------------------------------------------
  whyChooseUs: {
    heading: "Why Homeowners Choose Cornerstone",
    reasons: [
      {
        title: "Licensed & Insured",
        description: "Fully licensed, bonded, and insured for your complete peace of mind on every job.",
      },
      {
        title: "Quality Materials",
        description: "We install trusted, manufacturer-certified roofing systems built to last.",
      },
      {
        title: "Experienced Professionals",
        description: "Our in-house crews average over a decade of hands-on roofing experience.",
      },
      {
        title: "Workmanship Warranty",
        description: "Every installation is backed by a written workmanship warranty.",
      },
      {
        title: "Free Estimates",
        description: "Straightforward, no-pressure estimates with transparent pricing.",
      },
      {
        title: "Reliable Service",
        description: "We show up on schedule and keep you informed from start to finish.",
      },
    ],
  },

  // --------------------------------------------------------------------
  // PROCESS
  // --------------------------------------------------------------------
  process: {
    heading: "Our Process",
    subheading: "A straightforward path from first call to finished roof.",
    steps: [
      {
        step: "01",
        title: "Schedule Your Inspection",
        description: "Reach out online or by phone and we'll schedule a convenient time to assess your roof.",
      },
      {
        step: "02",
        title: "Get Your Estimate",
        description: "We'll walk you through our findings and provide a clear, written estimate.",
      },
      {
        step: "03",
        title: "Plan Your Project",
        description: "We coordinate materials, scheduling, and any insurance paperwork before work begins.",
      },
      {
        step: "04",
        title: "We Build It Right",
        description: "Our crew completes the work with care, then walks the finished job with you.",
      },
    ],
  },

  // --------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------
  testimonialsSection: {
    heading: "What Our Customers Say",
  },
  testimonials: [
    {
      name: "Sarah Mitchell",
      city: "Maple Grove, MN",
      rating: 5,
      review:
        "The crew was professional from the first estimate to the final cleanup. Our new roof looks great and they explained every step of the process along the way.",
    },
    {
      name: "David Chen",
      city: "Plymouth, MN",
      rating: 5,
      review:
        "After a hailstorm, Cornerstone helped us navigate the entire insurance claim. Communication was excellent and the finished roof exceeded expectations.",
    },
    {
      name: "Rebecca Torres",
      city: "Brooklyn Park, MN",
      rating: 5,
      review:
        "Fair pricing, on-time crew, and a genuinely clean job site every day. It's obvious this company takes pride in their work.",
    },
  ],

  // --------------------------------------------------------------------
  // FREE ESTIMATE CTA
  // --------------------------------------------------------------------
  cta: {
    heading: "Ready to Protect Your Home?",
    subheading: "Schedule your free roofing estimate today.",
    buttonText: "Get a Free Estimate",
    image:
      "https://images.unsplash.com/photo-1600566752734-2a0cd53f92e8?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Well-maintained residential roof against a clear sky",
  },

  // --------------------------------------------------------------------
  // ESTIMATE FORM
  // --------------------------------------------------------------------
  estimateForm: {
    heading: "Request Your Free Estimate",
    subheading: "Fill out the form below and our team will get back to you within one business day.",
    submitText: "Request My Free Estimate",
    serviceOptions: [
      "Roof Replacement",
      "Roof Repair",
      "New Roof Installation",
      "Commercial Roofing",
      "Roof Inspection",
      "Storm Damage",
      "Other",
    ],
  },

  // --------------------------------------------------------------------
  // SERVICE AREAS
  // --------------------------------------------------------------------
  serviceAreas: {
    heading: "Proudly Serving Maple Grove and Surrounding Areas",
    subheading:
      "We provide residential and commercial roofing services throughout the greater metro area.",
    areas: [
      "Maple Grove",
      "Plymouth",
      "Brooklyn Park",
      "Corcoran",
      "Rogers",
      "Wayzata",
      "Minnetonka",
      "Champlin",
    ],
  },

  // --------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------
  faq: [
    {
      question: "How much does a new roof cost?",
      answer:
        "Every roof is different, so cost depends on size, materials, and the current condition of your roof. We provide a detailed, written estimate after a free in-person inspection so you know exactly what to expect before any work begins.",
    },
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most residential roof replacements are completed in one to three days, weather permitting. Larger or more complex commercial projects may take longer, and we'll always provide a timeline up front.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes. We offer free, no-obligation estimates for every project, whether it's a small repair or a full replacement.",
    },
    {
      question: "Do you work with insurance claims?",
      answer:
        "Yes. Our team has extensive experience working directly with insurance adjusters on storm and wind damage claims, and we'll help guide you through the process.",
    },
    {
      question: "What roofing materials do you offer?",
      answer:
        "We install a wide range of materials including architectural asphalt shingles, metal roofing, cedar shake, and flat/low-slope commercial systems such as TPO and EPDM.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed, bonded, and insured. We're happy to provide documentation upon request.",
    },
  ],

  // --------------------------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------------------------
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  // --------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------
  footer: {
    description:
      "Locally owned and operated, Cornerstone Roofing Co. provides expert residential and commercial roofing services built on quality craftsmanship and honest service.",
    copyrightName: "Cornerstone Roofing Co.",
  },

  // --------------------------------------------------------------------
  // SEO / META
  // --------------------------------------------------------------------
  seo: {
    title: "Cornerstone Roofing Co. | Residential & Commercial Roofing",
    description:
      "Cornerstone Roofing Co. provides expert residential and commercial roofing, repair, and storm damage restoration across the greater metro area. Licensed, insured, and locally owned. Free estimates.",
  },
};

export default siteConfig;
