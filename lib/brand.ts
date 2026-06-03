export const brand = {
  name: "UnfazedX",
  legalName: "UnfazedX Holdings",
  tagline: "Building the next generation of African technology.",
  description:
    "A technology venture studio and digital solutions company. We build, fund, and scale category-defining products.",
  email: "hello@unfazedx.com",
  url: "https://unfazedx.com",
  address: "Lagos · Nairobi · Cape Town · Remote",
  socials: [
    { label: "Twitter", href: "https://twitter.com/unfazedx" },
    { label: "LinkedIn", href: "https://linkedin.com/company/unfazedx" },
    { label: "GitHub", href: "https://github.com/unfazedx" },
    { label: "Instagram", href: "https://instagram.com/unfazedx" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Ventures", href: "#ventures" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#cta" },
] as const;

export const trustMetrics = [
  { value: 50, suffix: "+", label: "Products shipped" },
  { value: 12, suffix: "", label: "Active ventures" },
  { value: 24, suffix: "M+", label: "Portfolio value (USD)", prefix: "$" },
  { value: 99.99, suffix: "%", label: "Uptime delivered", decimals: 2 },
] as const;

export const services = [
  {
    id: "01",
    title: "Product Strategy",
    description:
      "Zero-to-one product thinking. Market research, business modelling, GTM strategy and roadmap design that turn ambitious ideas into shippable products.",
    capabilities: ["Discovery", "Market sizing", "Roadmaps", "Pricing"],
  },
  {
    id: "02",
    title: "Design Systems",
    description:
      "World-class interface design, brand systems, and motion. Apple-level polish in every pixel — accessibility and craft as a baseline, not an upgrade.",
    capabilities: ["Brand", "Product UI", "Design tokens", "Motion"],
  },
  {
    id: "03",
    title: "Engineering",
    description:
      "Production-grade systems built by senior engineers. Type-safe codebases, observable infrastructure, and shipping cadence the market can feel.",
    capabilities: ["Web", "Mobile", "Backend", "Realtime"],
  },
  {
    id: "04",
    title: "AI & Data",
    description:
      "LLM-native products, retrieval pipelines, agents, and analytics. We turn proprietary data into compounding product advantages.",
    capabilities: ["LLMs", "RAG", "Agents", "Analytics"],
  },
  {
    id: "05",
    title: "Infrastructure",
    description:
      "Cloud, payments, identity, and developer platforms. The boring-but-critical layer that lets ventures scale without breaking.",
    capabilities: ["Cloud", "Payments", "Identity", "DevOps"],
  },
  {
    id: "06",
    title: "Growth",
    description:
      "Distribution, performance marketing, partnerships, and revenue ops. We don't ship and hope — we ship and grow.",
    capabilities: ["Acquisition", "Lifecycle", "Partnerships", "RevOps"],
  },
] as const;

export const whyUnfazedX = [
  {
    title: "Founder DNA",
    description:
      "Operators, not consultants. Every project is led by people who have shipped, scaled, and sold real products.",
  },
  {
    title: "Vertical integration",
    description:
      "Strategy, design, engineering, and growth under one roof. No handoffs, no slippage, no excuses.",
  },
  {
    title: "Capital alignment",
    description:
      "We invest alongside our partners. When you win, we win. We have skin in every game we play.",
  },
  {
    title: "African distribution",
    description:
      "On-the-ground networks across Lagos, Nairobi, Cape Town, and Accra — the markets where Africa's next decade is being built.",
  },
] as const;

export const ventures = [
  {
    name: "Kova",
    sector: "FinTech",
    stage: "Series A",
    description: "Cross-border payments infrastructure for African SMEs.",
  },
  {
    name: "Lumen Health",
    sector: "HealthTech",
    stage: "Seed",
    description: "AI-assisted diagnostics for under-served clinics.",
  },
  {
    name: "Harvest",
    sector: "AgriTech",
    stage: "Pre-Series A",
    description: "Climate-resilient supply chain for smallholder farmers.",
  },
  {
    name: "Cipher",
    sector: "Developer Tools",
    stage: "Seed",
    description: "Secrets and infra management for African dev teams.",
  },
  {
    name: "Atlas Learn",
    sector: "EdTech",
    stage: "Pre-Seed",
    description: "Modular certification platform for the African workforce.",
  },
  {
    name: "Voltage",
    sector: "ClimateTech",
    stage: "Seed",
    description: "Distributed energy financing for off-grid communities.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We pressure-test the thesis, map the market, and identify the unfair advantage before a single pixel is drawn.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Brand, product, and motion systems built end-to-end. Every flow prototyped, every state designed.",
  },
  {
    step: "03",
    title: "Engineer",
    description:
      "Production-ready systems shipped in weeks, not quarters. Type-safe, observable, secure by default.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Go-to-market support, performance instrumentation, and a launch plan engineered to compound.",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Long-term partnership. Capital, distribution, and ongoing product velocity until category leadership.",
  },
] as const;

export const industries = [
  "FinTech",
  "HealthTech",
  "AgriTech",
  "EdTech",
  "ClimateTech",
  "Developer Tools",
  "Logistics",
  "Commerce",
  "Identity",
  "AI & Data",
] as const;

export const coreValues = [
  {
    title: "Velocity",
    description:
      "Ship weekly. Speed is a feature; cadence is the moat. We measure progress in deploys, not decks.",
  },
  {
    title: "Excellence",
    description:
      "Craft is non-negotiable. Every detail, every interaction, every edge case — engineered with intent.",
  },
  {
    title: "Ownership",
    description:
      "We act like owners because we are. Skin in the game on every venture we build.",
  },
  {
    title: "Boldness",
    description:
      "We take on the hard problems. The ones worth solving rarely come with playbooks.",
  },
  {
    title: "Discipline",
    description:
      "Bold ideas. Disciplined execution. Speed without rigor is just noise.",
  },
  {
    title: "Africa-first",
    description:
      "Designed for African realities, engineered for global standards. No compromises.",
  },
] as const;

export const portfolioShowcase = [
  {
    title: "Kova",
    subtitle: "Pan-African payment rails",
    metric: "12x",
    metricLabel: "TPV growth in 9 months",
    gradient: "from-lime to-yellow-200",
  },
  {
    title: "Lumen Health",
    subtitle: "AI diagnostics at the edge",
    metric: "320k",
    metricLabel: "Patient visits supported",
    gradient: "from-emerald-400 to-cyan-300",
  },
  {
    title: "Harvest",
    subtitle: "Supply chain for smallholders",
    metric: "$8.4M",
    metricLabel: "ARR after 14 months",
    gradient: "from-orange-400 to-pink-400",
  },
  {
    title: "Cipher",
    subtitle: "Secrets infrastructure",
    metric: "4.2k",
    metricLabel: "Engineers onboarded",
    gradient: "from-violet-400 to-fuchsia-400",
  },
] as const;

export const testimonials = [
  {
    quote:
      "UnfazedX moves like a startup and ships like a Big Tech team. They built our entire product platform in 11 weeks — and it scaled the day we launched.",
    author: "Chinedu Okafor",
    role: "Founder & CEO",
    company: "Kova",
  },
  {
    quote:
      "The depth across strategy, design, and engineering is rare. We got a category-defining product, not a feature factory.",
    author: "Amara Diallo",
    role: "Co-founder",
    company: "Lumen Health",
  },
  {
    quote:
      "Working with UnfazedX is the closest thing to having a world-class product org on day one. They are operators in every sense.",
    author: "Thandiwe Mokoena",
    role: "CTO",
    company: "Harvest",
  },
  {
    quote:
      "We've worked with three other studios. UnfazedX is the only one that thinks like a venture partner, not a vendor.",
    author: "David Mensah",
    role: "Founder",
    company: "Voltage",
  },
] as const;

export const marqueeWords = [
  "Ventures",
  "Velocity",
  "Africa",
  "Engineering",
  "Design",
  "Capital",
  "Scale",
  "Excellence",
  "AI",
  "Infrastructure",
  "FinTech",
  "Climate",
] as const;
