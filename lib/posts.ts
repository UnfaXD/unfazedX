export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readMin: number;
  gradient: string; // tailwind gradient classes
  intro: string;
  points: { h: string; p: string }[];
  takeaway: string;
};

const RAW: Post[] = [
  {
    slug: "how-much-website-cost-rwanda",
    title: "How Much Does a Website Cost in Rwanda? (2026 Guide)",
    category: "Business",
    excerpt:
      "A clear breakdown of what websites actually cost in Rwanda in 2026 — and what changes the price.",
    date: "2026-06-12",
    readMin: 5,
    gradient: "from-lime/30 via-emerald-500/20 to-teal-500/20",
    intro:
      "Website pricing in Rwanda ranges widely, from a few hundred dollars to several thousand. Here is what actually drives the number so you can budget with confidence.",
    points: [
      { h: "What you're really paying for", p: "You're paying for strategy, design, development, content, and hosting — not just 'pages'. The biggest cost driver is custom design and functionality, not page count." },
      { h: "Typical ranges", p: "A simple professional site usually lands around RWF 350K–550K, a larger custom site RWF 700K–1.25M, and a full online store RWF 1.8M–4.4M depending on features." },
      { h: "Avoid the cheapest option", p: "Sites built for RWF 50–80K often look templated and convert poorly. A credible site pays for itself through trust and leads." },
    ],
    takeaway:
      "Budget for value, not the lowest price — a site is a sales tool, and quality compounds.",
  },
  {
    slug: "website-vs-instagram-rwanda",
    title: "Do You Really Need a Website If You Have Instagram?",
    category: "Business",
    excerpt:
      "Social media is rented land. Here's why Rwandan businesses still need a website they own.",
    date: "2026-06-05",
    readMin: 4,
    gradient: "from-fuchsia-500/20 via-pink-500/20 to-rose-500/20",
    intro:
      "Instagram and WhatsApp are powerful, but they're platforms you rent. A website is the home base you own — and it does things social can't.",
    points: [
      { h: "You control the experience", p: "On your own site you control the layout, story, and checkout. On social, the algorithm and design are out of your hands." },
      { h: "You show up on Google", p: "People search 'restaurant in Kimihurura' or 'web designer Kigali' on Google, not Instagram. No website means you're invisible to them." },
      { h: "Credibility", p: "A clean website signals you're a real, established business — which matters for bigger clients and partnerships." },
    ],
    takeaway:
      "Use social to reach people, but send them to a site you own and control.",
  },
  {
    slug: "restaurant-online-orders-kigali",
    title: "How a Kigali Restaurant Can Take Orders Online with WhatsApp + MoMo",
    category: "E-commerce",
    excerpt:
      "A practical, low-cost way for restaurants to sell online without a complex platform.",
    date: "2026-05-28",
    readMin: 4,
    gradient: "from-amber-400/30 via-orange-500/20 to-red-500/20",
    intro:
      "You don't need an expensive app to take orders online. A simple menu page plus WhatsApp and MoMo can get you selling this week.",
    points: [
      { h: "Start with a menu page", p: "A clean online menu with photos and prices is the single highest-impact thing — customers decide with their eyes." },
      { h: "Order via WhatsApp", p: "A 'Order on WhatsApp' button that pre-fills the item makes ordering effortless and keeps the conversation personal." },
      { h: "Get paid with MoMo", p: "MoMo Pay with a QR code or merchant number lets customers pay instantly — near-universal in Kigali." },
    ],
    takeaway:
      "Menu + WhatsApp + MoMo is the fastest route to online orders. Add a full store later.",
  },
  {
    slug: "momo-payments-online-store",
    title: "Accepting MoMo Payments on Your Online Store: What to Know",
    category: "E-commerce",
    excerpt:
      "Mobile Money is how Rwanda pays. Here's how to use it well on your store.",
    date: "2026-05-20",
    readMin: 4,
    gradient: "from-yellow-400/30 via-lime/20 to-emerald-500/20",
    intro:
      "Mobile Money adoption in Kigali is near-universal, which makes it the default payment method for any online store in Rwanda.",
    points: [
      { h: "Merchant accounts", p: "A MoMo Pay or Airtel Money merchant account lets you accept payments with a phone number and QR code, with small per-transaction fees." },
      { h: "Confirmations matter", p: "Always send an order confirmation so the customer trusts the payment went through — reassurance reduces drop-off." },
      { h: "Plan for cards too", p: "For tourists and international buyers, add a card option via a gateway so you don't lose those sales." },
    ],
    takeaway:
      "Lead with MoMo, support cards for outsiders, and confirm every payment clearly.",
  },
  {
    slug: "small-business-branding-rwanda",
    title: "Branding Basics for Small Rwandan Businesses",
    category: "Branding",
    excerpt:
      "Branding is more than a logo. Here are the basics that make a small business look big.",
    date: "2026-05-12",
    readMin: 4,
    gradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    intro:
      "Strong branding makes a young business feel established and trustworthy. It's also more achievable than most owners think.",
    points: [
      { h: "Consistency beats fancy", p: "Using the same colors, fonts, and tone everywhere is more powerful than an expensive one-off design." },
      { h: "A simple system", p: "You need a logo, two or three brand colors, one or two fonts, and a clear voice. That's a brand system." },
      { h: "Show up the same everywhere", p: "Your website, Instagram, and WhatsApp profile should feel like the same company." },
    ],
    takeaway:
      "Pick a simple, consistent brand system and apply it everywhere — that's 80% of branding.",
  },
  {
    slug: "logo-design-mistakes",
    title: "5 Logo Mistakes That Make a Business Look Amateur",
    category: "Branding",
    excerpt: "Common logo traps — and how to avoid them.",
    date: "2026-05-04",
    readMin: 3,
    gradient: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
    intro:
      "A logo is the face of your brand. A few avoidable mistakes can quietly undermine trust.",
    points: [
      { h: "Too much detail", p: "Logos must work tiny — on a phone, a stamp, a favicon. Intricate detail disappears at small sizes." },
      { h: "Trendy fonts", p: "Chasing trends dates your logo fast. Clean, timeless type lasts years." },
      { h: "No single-color version", p: "You need a version that works in one color for stamps, embroidery, and dark backgrounds." },
    ],
    takeaway:
      "Keep it simple, scalable, and versatile — a logo should work everywhere, in any size.",
  },
  {
    slug: "local-seo-kigali",
    title: "Local SEO: How Kigali Customers Find You on Google",
    category: "SEO",
    excerpt: "The handful of moves that get you found in local search.",
    date: "2026-04-26",
    readMin: 5,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime/20",
    intro:
      "When someone searches 'web designer in Kigali' or 'best salon near me', local SEO decides whether you show up.",
    points: [
      { h: "Google Business Profile", p: "Claiming and completing your profile is the single biggest local SEO win — it puts you on Maps and the local pack." },
      { h: "Consistent name, address, phone", p: "Use the exact same details everywhere online. Google cross-checks them to trust you." },
      { h: "Reviews", p: "Google reviews directly boost local ranking and click-through. Ask every happy customer." },
    ],
    takeaway:
      "Profile + consistent details + reviews is the local SEO foundation. Start there.",
  },
  {
    slug: "google-business-profile-rwanda",
    title: "Why Every Rwandan Business Needs a Google Business Profile",
    category: "SEO",
    excerpt: "It's free, fast, and the highest-ROI marketing most businesses ignore.",
    date: "2026-04-18",
    readMin: 3,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    intro:
      "A Google Business Profile is free and takes an afternoon — yet most small businesses in Rwanda don't have one set up properly.",
    points: [
      { h: "You appear on Maps", p: "Customers searching nearby see your location, hours, and contact instantly." },
      { h: "Photos build trust", p: "Real photos of your space, team, and work make people choose you over an empty listing." },
      { h: "Reviews live here", p: "It's where customers leave reviews that future customers read before deciding." },
    ],
    takeaway:
      "Set up and complete your Google Business Profile today — it's the best free marketing you have.",
  },
  {
    slug: "ecommerce-launch-checklist-rwanda",
    title: "Launching an Online Store in Rwanda: A Practical Checklist",
    category: "E-commerce",
    excerpt: "Everything to sort before you take your first online order.",
    date: "2026-04-10",
    readMin: 5,
    gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
    intro:
      "Launching a store is more than uploading products. This checklist covers the essentials that make sales actually happen.",
    points: [
      { h: "Payments & delivery", p: "Decide MoMo/card options and how you'll deliver (own riders, a courier, or pickup) before launch." },
      { h: "Great product info", p: "Clear photos, prices, and short descriptions reduce questions and build trust." },
      { h: "A simple return/contact policy", p: "Tell customers how to reach you and what happens if something's wrong — it removes hesitation." },
    ],
    takeaway:
      "Sort payments, delivery, and trust signals first — products are the easy part.",
  },
  {
    slug: "fast-website-speed",
    title: "Why a Slow Website Is Costing You Customers",
    category: "Web Design",
    excerpt: "Speed is a feature. Here's why it matters and what slows sites down.",
    date: "2026-04-02",
    readMin: 4,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-400/20",
    intro:
      "On mobile data, every second counts. A slow site loses visitors before they ever see your offer.",
    points: [
      { h: "People leave fast", p: "Most visitors abandon a page that takes more than a few seconds — especially on mobile networks." },
      { h: "Images are the usual culprit", p: "Huge, uncompressed images are the number-one cause of slow sites. Optimize them." },
      { h: "Google notices", p: "Page speed is a ranking factor. A faster site ranks better and converts better." },
    ],
    takeaway:
      "Optimize images and keep things lightweight — speed wins both customers and rankings.",
  },
  {
    slug: "mobile-first-rwanda",
    title: "Mobile-First: Designing for How Rwandans Actually Browse",
    category: "Web Design",
    excerpt: "Most of your visitors are on phones. Design for them first.",
    date: "2026-03-25",
    readMin: 4,
    gradient: "from-teal-500/20 via-cyan-500/20 to-sky-500/20",
    intro:
      "The majority of web traffic in Rwanda is on mobile. A site that only looks good on desktop is designed for the wrong audience.",
    points: [
      { h: "Thumb-friendly", p: "Buttons and links must be big enough to tap easily, with room around them." },
      { h: "Readable text", p: "Body text should be comfortable to read on a small screen without zooming." },
      { h: "No hover-only features", p: "Anything that only works on hover is invisible on a phone. Design for taps." },
    ],
    takeaway:
      "Design and test on a phone first — that's how most of your customers will see you.",
  },
  {
    slug: "content-marketing-sme",
    title: "Content Marketing on a Small Budget",
    category: "Marketing",
    excerpt: "You don't need a big budget to attract customers with content.",
    date: "2026-03-17",
    readMin: 4,
    gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    intro:
      "Content marketing means answering your customers' questions so they find and trust you. It's slow but compounding.",
    points: [
      { h: "Answer real questions", p: "Write about what customers actually ask you. Each answer can rank on Google and pull in leads." },
      { h: "Repurpose everything", p: "One article becomes several social posts, a WhatsApp broadcast, and a newsletter issue." },
      { h: "Consistency wins", p: "One useful post a week beats ten posts in a burst and then silence." },
    ],
    takeaway:
      "Answer customer questions consistently — content is the cheapest long-term marketing there is.",
  },
  {
    slug: "social-media-strategy-rwanda",
    title: "A Simple Social Media Plan for Busy Business Owners",
    category: "Marketing",
    excerpt: "A realistic posting plan you can actually keep up with.",
    date: "2026-03-09",
    readMin: 4,
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    intro:
      "Most owners don't fail at social media because of strategy — they fail because the plan isn't sustainable.",
    points: [
      { h: "Pick one or two platforms", p: "Do Instagram and WhatsApp well rather than five platforms badly." },
      { h: "Batch your content", p: "Plan and shoot a week or month of posts in one sitting to save time." },
      { h: "Mix the content", p: "Alternate work showcases, tips, behind-the-scenes, and offers so you're not always selling." },
    ],
    takeaway:
      "Fewer platforms, batched content, and a simple mix — that's a plan you can sustain.",
  },
  {
    slug: "brand-colors-meaning",
    title: "How to Choose Brand Colors That Fit Your Business",
    category: "Branding",
    excerpt: "Color sets the mood before a word is read. Choose with intent.",
    date: "2026-03-01",
    readMin: 3,
    gradient: "from-lime/30 via-yellow-400/20 to-amber-500/20",
    intro:
      "Color is the first thing people feel about your brand. A little intention goes a long way.",
    points: [
      { h: "Start with a feeling", p: "Decide the impression you want — trustworthy, energetic, premium, friendly — then pick colors that match." },
      { h: "Keep it to a few", p: "One or two main colors plus neutrals is enough. Too many colors look chaotic." },
      { h: "Check contrast", p: "Make sure text is readable on your colors — it's both a usability and accessibility issue." },
    ],
    takeaway:
      "Pick a small palette tied to a feeling, and make sure it stays readable.",
  },
  {
    slug: "ux-conversion-basics",
    title: "UX Basics: Turning Website Visitors into Customers",
    category: "Web Design",
    excerpt: "Small UX changes that turn browsers into buyers.",
    date: "2026-02-21",
    readMin: 4,
    gradient: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
    intro:
      "Good UX quietly guides visitors toward action. A few fundamentals make a big difference to conversion.",
    points: [
      { h: "One clear next step", p: "Every page should make the next action obvious — call, message, buy, or book." },
      { h: "Reduce friction", p: "Ask for less, remove extra steps, and make buttons easy to find." },
      { h: "Build trust on the page", p: "Show proof — reviews, logos, results — near the point of decision." },
    ],
    takeaway:
      "Make the next step obvious, easy, and trustworthy on every page.",
  },
  {
    slug: "ai-tools-small-business",
    title: "AI Tools Every Small Business Should Try in 2026",
    category: "Product",
    excerpt: "Practical AI that saves small teams real time.",
    date: "2026-02-13",
    readMin: 4,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    intro:
      "AI won't replace your judgment, but it can take hours of busywork off your plate as a small team.",
    points: [
      { h: "Drafting & content", p: "Use AI to draft posts, product descriptions, and replies — then edit in your voice." },
      { h: "Customer support", p: "An FAQ bot or smart auto-replies can handle common questions around the clock." },
      { h: "Admin & summaries", p: "AI can summarize meetings, organize notes, and speed up repetitive admin." },
    ],
    takeaway:
      "Let AI handle the busywork so your small team can focus on clients and craft.",
  },
  {
    slug: "domain-hosting-guide-rwanda",
    title: "Domains & Hosting in Rwanda: A Beginner's Guide",
    category: "Web Design",
    excerpt: "What domains and hosting are, and how to choose without overpaying.",
    date: "2026-02-05",
    readMin: 4,
    gradient: "from-slate-500/20 via-zinc-500/20 to-neutral-500/20",
    intro:
      "A domain is your address; hosting is the land your site sits on. Here's how to choose both sensibly.",
    points: [
      { h: "Pick a clear domain", p: "Short, easy to spell, and memorable. A .rw or .com both work — get the one customers will remember." },
      { h: "Hosting that's fast", p: "Choose reliable, fast hosting with good uptime. Modern platforms also handle security and backups." },
      { h: "Own your accounts", p: "Always register the domain in your own name — never let a vendor own your brand's address." },
    ],
    takeaway:
      "Get a memorable domain, reliable hosting, and keep both registered in your own name.",
  },
  {
    slug: "whatsapp-business-tips",
    title: "Getting the Most from WhatsApp Business",
    category: "Marketing",
    excerpt: "WhatsApp is your storefront and support desk. Use it like one.",
    date: "2026-01-28",
    readMin: 3,
    gradient: "from-green-500/20 via-emerald-500/20 to-lime/20",
    intro:
      "For most Rwandan businesses, WhatsApp is where sales actually happen. A few features make it far more effective.",
    points: [
      { h: "Catalog & quick replies", p: "Set up a product catalog and saved replies so you respond fast and look professional." },
      { h: "A real profile", p: "Add your logo, hours, address, and website link so the profile feels legitimate." },
      { h: "Fast first response", p: "Speed wins deals. Even a quick 'Hi, looking into this now' keeps customers from leaving." },
    ],
    takeaway:
      "Treat WhatsApp Business like a storefront: catalog, fast replies, and a complete profile.",
  },
  {
    slug: "portfolio-case-study-power",
    title: "Why Case Studies Sell Better Than Ads",
    category: "Marketing",
    excerpt: "Show the work and the result — proof beats promises.",
    date: "2026-01-20",
    readMin: 4,
    gradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
    intro:
      "A good case study quietly convinces a prospect that you can solve their problem, because you already solved someone else's.",
    points: [
      { h: "Tell a story", p: "Challenge, what you did, and the result. People remember stories, not feature lists." },
      { h: "Use real numbers", p: "Concrete results ('5,000+ participants', '50+ features') are far more persuasive than adjectives." },
      { h: "Make them skimmable", p: "Headings, images, and short paragraphs let busy prospects get the gist fast." },
    ],
    takeaway:
      "Turn every project into a short, story-driven case study — it's your best salesperson.",
  },
  {
    slug: "tourism-website-rwanda",
    title: "What a Great Tourism Website Looks Like (for Rwanda)",
    category: "Web Design",
    excerpt: "Tourism buyers decide with their eyes — and pay in USD.",
    date: "2026-01-12",
    readMin: 4,
    gradient: "from-teal-500/20 via-emerald-500/20 to-green-500/20",
    intro:
      "Tourism and hospitality clients need to win trust from visitors abroad. The website does a lot of that work.",
    points: [
      { h: "Big, beautiful imagery", p: "Travelers buy the experience. High-quality photos and video sell it instantly." },
      { h: "Easy enquiry/booking", p: "A clear, simple way to ask or book — in a couple of taps — captures intent before it cools." },
      { h: "Trust for foreigners", p: "Reviews, clear pricing, and professional design reassure people booking from far away." },
    ],
    takeaway:
      "Lead with stunning imagery and effortless booking — that's how tourism sites convert.",
  },
  {
    slug: "real-estate-listings-online",
    title: "Selling Property Online: Listings That Convert",
    category: "E-commerce",
    excerpt: "What makes a property listing actually generate enquiries.",
    date: "2026-01-04",
    readMin: 4,
    gradient: "from-blue-500/20 via-indigo-500/20 to-violet-500/20",
    intro:
      "Property is a high-consideration purchase. Listings that give clarity and confidence get the calls.",
    points: [
      { h: "Photos and a map", p: "Plenty of clear photos and a location map answer the first questions buyers have." },
      { h: "Honest details", p: "Price, size, and key features up front filter serious enquiries and build trust." },
      { h: "One-tap contact", p: "A direct call/WhatsApp button on every listing turns interest into a conversation." },
    ],
    takeaway:
      "Clear photos, honest details, and one-tap contact turn listings into leads.",
  },
  {
    slug: "clinic-website-essentials",
    title: "Website Essentials for Clinics & Health Practices",
    category: "Web Design",
    excerpt: "What patients look for before they book.",
    date: "2025-12-20",
    readMin: 3,
    gradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20",
    intro:
      "Patients choosing a clinic want reassurance and convenience. A few essentials cover both.",
    points: [
      { h: "Services & hours", p: "Make it obvious what you offer, when you're open, and how to reach you." },
      { h: "Easy booking", p: "A simple way to book or message reduces no-shows and phone tag." },
      { h: "Trust signals", p: "Photos of the team and facility, plus any credentials, build confidence." },
    ],
    takeaway:
      "Clear services, easy booking, and a human, trustworthy feel win patients.",
  },
  {
    slug: "ecommerce-photos-product",
    title: "Product Photos That Sell (with Just a Phone)",
    category: "E-commerce",
    excerpt: "You don't need a studio — you need light and consistency.",
    date: "2025-12-12",
    readMin: 3,
    gradient: "from-yellow-400/20 via-amber-500/20 to-orange-500/20",
    intro:
      "Online, your photos are your product. Good ones can be shot on a phone with a few simple habits.",
    points: [
      { h: "Use natural light", p: "Shoot near a window with soft daylight — it beats most artificial setups for free." },
      { h: "Clean background", p: "A plain, uncluttered background keeps the focus on the product." },
      { h: "Be consistent", p: "Same angle, lighting, and crop across products makes your store look professional." },
    ],
    takeaway:
      "Window light, clean backgrounds, and consistency turn phone photos into a pro-looking store.",
  },
  {
    slug: "email-newsletter-start",
    title: "How to Start an Email Newsletter That People Read",
    category: "Marketing",
    excerpt: "Email is an audience you own. Here's how to begin.",
    date: "2025-12-04",
    readMin: 4,
    gradient: "from-violet-500/20 via-fuchsia-500/20 to-pink-500/20",
    intro:
      "Unlike social followers, an email list is an audience you fully own. Starting one is simpler than it looks.",
    points: [
      { h: "Give a reason to subscribe", p: "Offer something useful — tips, early offers, a guide — in exchange for an email." },
      { h: "Keep it valuable", p: "Most issues should help the reader, not just sell. Trust earns future sales." },
      { h: "Be consistent", p: "A reliable monthly issue beats sporadic bursts. Pick a cadence you can keep." },
    ],
    takeaway:
      "Offer value, stay consistent, and you'll build an audience you actually own.",
  },
  {
    slug: "pricing-your-services",
    title: "How to Price Your Services Without Underselling",
    category: "Business",
    excerpt: "Pricing with confidence — and stopping the race to the bottom.",
    date: "2025-11-26",
    readMin: 4,
    gradient: "from-lime/30 via-green-500/20 to-emerald-500/20",
    intro:
      "Underpricing is the fastest way to burn out. Pricing with confidence is a skill you can build.",
    points: [
      { h: "Price the value", p: "Charge for the result you deliver, not the hours you spend. Outcomes are worth more." },
      { h: "Offer tiers", p: "Good/Better/Best options let clients self-select and usually lift the average sale." },
      { h: "Always take a deposit", p: "A 50% deposit protects your cash flow and filters out non-serious clients." },
    ],
    takeaway:
      "Price for value, offer tiers, and take deposits — confidence is part of the product.",
  },
  {
    slug: "first-paying-customer",
    title: "How We'd Get Your First 3 Paying Customers",
    category: "Business",
    excerpt: "A simple, repeatable path to your first revenue.",
    date: "2025-11-18",
    readMin: 5,
    gradient: "from-rose-500/20 via-red-500/20 to-orange-500/20",
    intro:
      "Your first customers come from proof and outreach, not luck. Here's the path we'd run.",
    points: [
      { h: "Build proof first", p: "A live site and one or two sample projects give prospects something real to react to." },
      { h: "Reach out daily", p: "Message warm contacts, walk into local businesses, and DM those active on social with no website." },
      { h: "Lower the risk", p: "A friendly first-client rate in exchange for a testimonial gets your first case studies fast." },
    ],
    takeaway:
      "Proof + daily outreach + a low-risk offer is how the first three deals actually happen.",
  },
  {
    slug: "rebrand-when-why",
    title: "When (and Why) to Rebrand Your Business",
    category: "Branding",
    excerpt: "Rebrand for the right reasons — not boredom.",
    date: "2025-11-10",
    readMin: 3,
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    intro:
      "A rebrand is powerful but disruptive. Do it for strategic reasons, not because you're tired of your logo.",
    points: [
      { h: "Good reasons", p: "Your offer has changed, you've outgrown the old look, or the brand no longer fits your audience." },
      { h: "Weak reasons", p: "Boredom alone. Customers notice your brand far less often than you do." },
      { h: "Keep equity", p: "Evolve rather than erase — keep what people already recognize where you can." },
    ],
    takeaway:
      "Rebrand when strategy demands it, and evolve rather than throw away recognition.",
  },
  {
    slug: "accessibility-web-basics",
    title: "Web Accessibility Basics Every Site Should Have",
    category: "Web Design",
    excerpt: "Accessible sites are better for everyone — and for SEO.",
    date: "2025-11-02",
    readMin: 4,
    gradient: "from-sky-500/20 via-blue-500/20 to-cyan-500/20",
    intro:
      "Accessibility means everyone can use your site, including people with disabilities. It also improves usability and SEO for all.",
    points: [
      { h: "Readable contrast", p: "Make sure text stands out clearly against its background." },
      { h: "Alt text on images", p: "Describe images so screen readers — and search engines — understand them." },
      { h: "Keyboard friendly", p: "Every link and button should be reachable and usable without a mouse." },
    ],
    takeaway:
      "Good contrast, alt text, and keyboard support make your site better for everyone.",
  },
  {
    slug: "analytics-track-what-matters",
    title: "Website Analytics: Track What Actually Matters",
    category: "Marketing",
    excerpt: "Skip vanity metrics. Measure what moves the business.",
    date: "2025-10-25",
    readMin: 4,
    gradient: "from-emerald-500/20 via-cyan-500/20 to-blue-500/20",
    intro:
      "Analytics can overwhelm you with numbers. A few metrics tell you what's really working.",
    points: [
      { h: "Where leads come from", p: "Know which channels (Google, Instagram, referrals) bring people who actually contact you." },
      { h: "Conversions, not just visits", p: "Track messages, calls, and orders — not just traffic. Visits don't pay bills." },
      { h: "Review monthly", p: "A quick monthly look helps you double down on what works and cut what doesn't." },
    ],
    takeaway:
      "Track sources and conversions, review monthly, and ignore the vanity numbers.",
  },
  {
    slug: "design-trends-2026",
    title: "Web Design Trends Worth Following in 2026 (and What to Ignore)",
    category: "Web Design",
    excerpt: "Which trends help your business — and which are just noise.",
    date: "2025-10-17",
    readMin: 4,
    gradient: "from-fuchsia-500/20 via-purple-500/20 to-violet-500/20",
    intro:
      "Trends come and go. The useful ones serve your customer; the rest are decoration. Here's how to tell them apart.",
    points: [
      { h: "Worth following", p: "Bold, readable typography; fast, lightweight pages; and thoughtful motion that guides attention." },
      { h: "Handle with care", p: "Heavy animations and experimental layouts can look cool but hurt speed and usability." },
      { h: "Timeless beats trendy", p: "Clarity, trust, and a clear next step never go out of style." },
    ],
    takeaway:
      "Follow trends that serve clarity and speed; skip the ones that only serve the designer's ego.",
  },
];

export const posts: readonly Post[] = [...RAW].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const postCategories = Array.from(
  new Set(posts.map((p) => p.category)),
);
