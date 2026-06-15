export const brand = {
  name: "UnfazedX",
  legalName: "UnfazedX Holdings",
  tagline: "Build. Launch. Grow. Scale.",
  subtagline: "Web · Brand · Product · Growth — for Rwandan businesses",
  description:
    "UnfazedX is a Kigali-based creative technology studio. We design and build websites, online stores, brands, and digital products for ambitious businesses across Rwanda — and build our own ventures alongside them.",
  email: "reconfortdanny@gmail.com",
  phone: "+250 780 151 067",
  whatsapp: {
    number: "250780151067",
    url: "https://wa.me/250780151067?text=Hi%20UnfazedX%20%E2%80%94%20I%27d%20like%20to%20start%20a%20project.",
    label: "WhatsApp · +250 780 151 067",
  },
  url: "https://unfazedx.com",
  city: "Kigali",
  country: "Rwanda",
  address: "Kigali, Rwanda · Remote-ready across Africa",
  founded: "2024",
  team: 3,
  founder: {
    name: "NDAYISHIMIYE Reconfort Daniel",
    shortName: "Reconfort Daniel",
    role: "Founder & Lead Designer",
  },
  builder: {
    name: "Reconfort Daniel",
    role: "Senior Software Engineer & UI/UX Designer",
    url: "https://reconfort.vercel.app",
    label: "reconfort.vercel.app",
  },
  socials: [
    { label: "Dribbble", href: "https://dribbble.com/Netfort" },
    { label: "Behance", href: "https://www.behance.net/reconfortdaniel" },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/ReconfortDaniel/netfort-uiz/",
    },
    { label: "Portfolio", href: "https://unfazedx.com" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Ventures", href: "#ventures" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#cta" },
] as const;

export const trustMetrics = [
  { value: 5, suffix: "+", label: "Years across product & creative" },
  { value: 20, suffix: "+", label: "Brand & UI projects shipped" },
  {
    value: 38,
    suffix: "%",
    label: "Avg. client engagement lift",
    prefix: "+",
  },
  { value: 100, suffix: "%", label: "On-time delivery rate" },
] as const;

export const services = [
  {
    id: "01",
    title: "Software Engineering",
    description:
      "Custom web apps, SaaS platforms, enterprise systems, mobile applications, and APIs — built type-safe, observable, and ready to scale.",
    capabilities: ["Web Apps", "SaaS", "Mobile", "APIs", "Cloud"],
  },
  {
    id: "02",
    title: "Product Design & UI/UX",
    description:
      "User research, product discovery, wireframes, interactive prototypes, and full design systems engineered for conversion and clarity.",
    capabilities: [
      "UX Research",
      "Prototyping",
      "Design Systems",
      "Conversion",
    ],
  },
  {
    id: "03",
    title: "Branding & Creative",
    description:
      "Brand identity systems, logo design, corporate profiles, marketing materials, and creative campaign assets that look unmistakably world-class.",
    capabilities: ["Identity", "Logo Systems", "Profiles", "Campaigns"],
  },
  {
    id: "04",
    title: "Digital Marketing & Growth",
    description:
      "Social media management, content strategy, SEO, lead generation, performance marketing, and lifecycle programs that compound month over month.",
    capabilities: ["Social", "Content", "SEO", "Performance"],
  },
  {
    id: "05",
    title: "Campaign Management",
    description:
      "Product launches, awareness pushes, and multi-channel campaign execution — from strategy and creative to audience engagement and reporting.",
    capabilities: ["Launches", "Strategy", "Multi-channel", "Reporting"],
  },
  {
    id: "06",
    title: "Digital Transformation",
    description:
      "Business process automation, workflow optimization, data management, and internal systems — the back-office work that unlocks real growth.",
    capabilities: ["Automation", "Workflows", "Data", "Internal Tools"],
  },
] as const;

export const packages = [
  {
    name: "Launch Site",
    summary:
      "A clean, professional 3–5 page site that makes a small business look credible online — fast.",
    priceRwf: "RWF 350K–550K",
    priceUsd: "$240–375",
    timeline: "1–2 weeks",
    features: [
      "Mobile-first design",
      "Contact + WhatsApp",
      "Basic SEO + Google",
      "1 year hosting",
    ],
    featured: false,
  },
  {
    name: "Growth Site",
    summary:
      "A bigger, custom-designed site built to convert — for businesses ready to grow seriously online.",
    priceRwf: "RWF 700K–1.25M",
    priceUsd: "$475–850",
    timeline: "2–4 weeks",
    features: [
      "8–15 custom pages",
      "Tailored UI/UX",
      "Blog + advanced SEO",
      "CRM / email integration",
    ],
    featured: true,
  },
  {
    name: "Online Store",
    summary:
      "A branded storefront with catalogue, MoMo Pay + card checkout, WhatsApp ordering and delivery logic.",
    priceRwf: "RWF 1.8M–4.4M",
    priceUsd: "$1,200–3,000",
    timeline: "4–10 weeks",
    features: [
      "Product catalogue",
      "MoMo Pay + card",
      "WhatsApp order flow",
      "Delivery & inventory",
    ],
    featured: false,
  },
  {
    name: "Brand Identity",
    summary:
      "A complete visual identity that makes a young business look established and unmistakable.",
    priceRwf: "RWF 450K–900K",
    priceUsd: "$300–600",
    timeline: "1–2 weeks",
    features: [
      "Logo system",
      "Colour + typography",
      "Brand guidelines",
      "Social templates",
    ],
    featured: false,
  },
  {
    name: "Social + Ads",
    summary:
      "Ongoing content and paid campaigns that keep customers coming — managed month to month.",
    priceRwf: "RWF 300K–650K / mo",
    priceUsd: "$200–440 / mo",
    timeline: "Monthly retainer",
    features: [
      "Content calendar",
      "Posting & design",
      "Meta / Google ads",
      "Monthly reporting",
    ],
    featured: false,
  },
  {
    name: "Care Plan",
    summary:
      "We keep your site fast, secure and up to date so you never have to think about it.",
    priceRwf: "RWF 50K–120K / mo",
    priceUsd: "$35–80 / mo",
    timeline: "Monthly retainer",
    features: [
      "Hosting & uptime",
      "Security & backups",
      "Updates & fixes",
      "Small changes",
    ],
    featured: false,
  },
] as const;

export const whyUnfazedX = [
  {
    title: "We Build",
    description:
      "We transform ideas into scalable digital products. Strategy, design, and engineering under one roof.",
  },
  {
    title: "We Design",
    description:
      "We create intuitive, engaging user experiences. Craft is non-negotiable at every layer of the stack.",
  },
  {
    title: "We Grow",
    description:
      "We help businesses reach and retain customers. Distribution and lifecycle baked into every launch.",
  },
  {
    title: "We Innovate",
    description:
      "We develop technology solutions for tomorrow's challenges. AI-native, mobile-first, Africa-ready.",
  },
  {
    title: "We Partner",
    description:
      "We work alongside clients as long-term growth partners — not vendors. Skin in the game.",
  },
] as const;

export const ventures = [
  {
    name: "Estatify",
    sector: "Real Estate Tech",
    stage: "In development",
    description:
      "A modern property technology platform connecting owners, agents, developers, and buyers. Listings, management, analytics, and digital marketing under one roof.",
  },
  {
    name: "UnfazedX Commerce",
    sector: "Electronics Marketplace",
    stage: "In development",
    description:
      "A trusted marketplace connecting consumers with verified electronics vendors — expanding into distribution, logistics, and owned inventory over four phases.",
  },
  {
    name: "Future Ventures",
    sector: "Edu · Health · FinTech · AI",
    stage: "Sourcing",
    description:
      "Continuously exploring opportunities to launch products that solve meaningful problems across Africa's highest-impact sectors.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Build",
    description:
      "Translate ambitious ideas into shippable products. Strategy, architecture, design, and engineering in tight feedback loops.",
  },
  {
    step: "02",
    title: "Launch",
    description:
      "Take it to market with a launch plan engineered to compound. Brand, performance creative, distribution, and instrumentation.",
  },
  {
    step: "03",
    title: "Grow",
    description:
      "Acquire, activate, retain. Performance marketing, lifecycle programs, and conversion optimization at every funnel stage.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Compound the wins. Infrastructure hardening, automation, expansion, and long-term operating partnership.",
  },
] as const;

export const industries = [
  "Restaurants & Cafés",
  "Hospitality & Tourism",
  "Real Estate",
  "Health & Clinics",
  "Beauty & Wellness",
  "Retail & Commerce",
  "Professional Services",
  "Education",
  "Startups & Tech",
  "NGOs & Cooperatives",
] as const;

export const coreValues = [
  {
    title: "Unfazed",
    description:
      "We take on hard, unglamorous problems and ship. Pressure, deadlines, and ambitious scope don't shake us — they focus us.",
  },
  {
    title: "Craft",
    description:
      "Design and code people can feel the quality of. Craft is non-negotiable at every layer, from the first pixel to production.",
  },
  {
    title: "Clarity",
    description:
      "We make the complex simple for clients who aren't technical. No jargon, no surprises — just clear work and clear communication.",
  },
  {
    title: "Partnership",
    description:
      "Our clients' growth is the only scoreboard that matters. We work as long-term partners with skin in the game, not vendors.",
  },
] as const;

type ProjectCategory =
  | "Mobile App"
  | "Landing Page"
  | "E-commerce"
  | "Web Design"
  | "Brand & UI"
  | "Agency Site";

type ProjectPlatform = "Dribbble" | "Behance";

export type Project = {
  title: string;
  category: ProjectCategory;
  platform: ProjectPlatform;
  href: string;
  blurb: string;
  image: string;
  gradient: string;
  objectPosition?: string;
};

const DRIB_POS = "center 92%";

export const projects: readonly Project[] = [
  {
    title: "Mindsnap",
    category: "Mobile App",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/26645335-Mindsnap",
    blurb: "Learning mobile app — focused study sessions, fast capture.",
    image: "/projects/mindsnap.png",
    gradient: "from-lime via-yellow-300 to-amber-200",
    objectPosition: DRIB_POS,
  },
  {
    title: "Zose Landing Page",
    category: "Landing Page",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/26640181-Zose-Landing-Page",
    blurb: "Editorial product landing page with bold typographic system.",
    image: "/projects/zose-landing.png",
    gradient: "from-zinc-200 via-zinc-300 to-zinc-400",
    objectPosition: DRIB_POS,
  },
  {
    title: "PickBazar",
    category: "E-commerce",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/26640058-PickBazar",
    blurb: "Multi-category commerce experience — clean, modern, conversion-led.",
    image: "/projects/pickbazar.png",
    gradient: "from-orange-300 via-rose-300 to-pink-400",
    objectPosition: DRIB_POS,
  },
  {
    title: "Aether Landing Page",
    category: "Landing Page",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25658108-Aether-Landing-Page",
    blurb: "Premium SaaS landing design with motion-led storytelling.",
    image: "/projects/aether-landing.png",
    gradient: "from-violet-400 via-fuchsia-400 to-pink-400",
    objectPosition: DRIB_POS,
  },
  {
    title: "Minimal Portfolio",
    category: "Web Design",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25657995-Modern-Minimal-Portfolio-UI-UX",
    blurb: "Modern minimal portfolio — quiet design, loud craft.",
    image: "/projects/minimal-portfolio.png",
    gradient: "from-neutral-200 via-neutral-300 to-neutral-500",
    objectPosition: DRIB_POS,
  },
  {
    title: "Non-Profit",
    category: "Web Design",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25656110-Non-Profit-Organisation-UI-UX",
    blurb: "Non-profit organisation UI/UX — purpose-built and accessible.",
    image: "/projects/non-profit.png",
    gradient: "from-emerald-300 via-teal-400 to-cyan-500",
    objectPosition: DRIB_POS,
  },
  {
    title: "Job Listing Web",
    category: "Web Design",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25656085-Job-Listing-Web-UI-UX",
    blurb: "Job marketplace UI — search-first, filter-rich, decisive.",
    image: "/projects/job-listing.png",
    gradient: "from-sky-300 via-blue-400 to-indigo-500",
    objectPosition: DRIB_POS,
  },
  {
    title: "Lunaroot.rw",
    category: "E-commerce",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25656036-Lunaroot-rw-streetwear-UI-UX-Design",
    blurb: "Streetwear brand & commerce design — Rwandan culture, global polish.",
    image: "/projects/lunaroot.png",
    gradient: "from-amber-300 via-orange-400 to-red-500",
    objectPosition: DRIB_POS,
  },
  {
    title: "Icon.v1 Agency",
    category: "Agency Site",
    platform: "Dribbble",
    href: "https://dribbble.com/shots/25655960-Icon-v1-Agency-Landing-Page",
    blurb: "Agency landing page — kinetic typography, editorial layout.",
    image: "/projects/icon-agency.png",
    gradient: "from-slate-300 via-slate-500 to-slate-700",
    objectPosition: DRIB_POS,
  },
  {
    title: "Pregnancy Tracker",
    category: "Mobile App",
    platform: "Behance",
    href: "https://www.behance.net/gallery/200038923/Pregnancy-Ovulation-Tracker-UIUX-Mobile-App",
    blurb: "Pregnancy & ovulation tracker — calm, clinical, considered.",
    image: "/projects/pregnancy-tracker.jpg",
    gradient: "from-rose-200 via-pink-300 to-fuchsia-400",
  },
  {
    title: "Inventory App",
    category: "Mobile App",
    platform: "Behance",
    href: "https://www.behance.net/gallery/189952665/Inventory-Mobile-App",
    blurb: "Inventory management mobile app — clarity at scale.",
    image: "/projects/inventory-app.jpg",
    gradient: "from-cyan-300 via-sky-400 to-blue-500",
  },
  {
    title: "Agency UI/UX",
    category: "Agency Site",
    platform: "Behance",
    href: "https://www.behance.net/gallery/188451061/Agency-UIUX",
    blurb: "Agency website redesign — brand-first, conversion-led.",
    image: "/projects/agency-uiux.png",
    gradient: "from-purple-300 via-violet-400 to-indigo-500",
  },
  {
    title: "NGO UI/UX",
    category: "Brand & UI",
    platform: "Behance",
    href: "https://www.behance.net/gallery/188350287/NGO-UIUX-Design",
    blurb: "NGO platform identity and UI — purpose-driven design system.",
    image: "/projects/ngo-uiux.jpg",
    gradient: "from-teal-300 via-emerald-400 to-green-500",
  },
] as const;

export type ClientItem = {
  name: string;
  description: string;
  status: "Client" | "Partner" | "Venture";
};

export const clients: readonly ClientItem[] = [
  {
    name: "Amali-Tech",
    description: "UI/UX redesign · Micro-frontend rollout · Team mentorship",
    status: "Client",
  },
  {
    name: "KLab Rwanda",
    description: "Bilingual brand & training media for 5,000+ participants",
    status: "Client",
  },
  {
    name: "Icon",
    description: "Reusable motion-ready template systems · Brand identity kits",
    status: "Client",
  },
  {
    name: "Park & Pick",
    description: "Mobile product design · 50+ shipped features in React Native",
    status: "Client",
  },
  {
    name: "Estatify",
    description: "Property tech platform — design, engineering, GTM",
    status: "Venture",
  },
  {
    name: "UnfazedX Commerce",
    description: "Electronics marketplace — built from scratch in-house",
    status: "Venture",
  },
] as const;

export const marqueeWords = [
  "Build",
  "Launch",
  "Grow",
  "Scale",
  "Kigali",
  "Africa",
  "Ventures",
  "Design",
  "Engineering",
  "Brand",
  "Growth",
  "AI",
  "Mobile",
  "Commerce",
] as const;
