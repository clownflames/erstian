/**
 * Every piece of copy on the site lives here so the narrative can be read
 * end-to-end in one place.
 *
 * Content rule: Erstian is a company at the beginning of its journey.
 * Nothing in this file may imply shipped products, customers, revenue,
 * awards, partnerships or years of operation.
 */

export const brand = {
  name: "Erstian",
  legalName: "Erstian",
  tagline: "Software for real-world needs.",
  email: "hello@erstian.com",
  businessEmail: "business@erstian.com",
  securityEmail: "security@erstian.com",
  url: "https://erstian.com",
} as const;

/**
 * Internbird — a product/platform operated by Erstian.
 *
 * The single declaration of everything about Internbird on this site. Every page
 * that mentions it imports from here, so the name, the URL and the description
 * cannot drift apart across the marketing pages, the footer and the legal
 * documents.
 *
 * Two things deliberately kept in this comment rather than the rendered copy:
 * the brand casing ("Internbird", not "InternBird") and the single canonical
 * URL. Both have been inconsistent before; centralising them is the fix.
 *
 * Internbird is described as a platform Erstian operates. It is not presented
 * as a separate legal entity, because there is nothing in this project that
 * says it is one.
 */
export const internbird = {
  name: "Internbird",
  /** The only Internbird URL used anywhere on this site. */
  url: "https://internbird.erstian.com/",
  /** One line. Used wherever a compact description is needed. */
  summary:
    "Internbird is a product/platform operated by Erstian that helps students discover internships, training programs, and career opportunities.",
  /** Sentence form, for prose that is not a bullet point. */
  prose:
    "Internbird is a product/platform operated by Erstian. It helps students discover internships, training programs, and career opportunities, and manage the applications that follow.",
  /** What it does, stated functionally rather than aspirationally. */
  features: [
    "Internship discovery matched to a student's skills and interests.",
    "Training programs and career opportunities in one place.",
    "Application and document management for students.",
  ],
} as const;

/**
 * Primary navigation.
 *
 * Every entry is a real route, which means one header works from every page and
 * the nav never depends on which page you are already on. The home page's
 * in-page sections (#solutions, #approach, #what-we-build and the rest) are
 * reachable from the footer, the hero CTAs and the scroll rail — a one-page
 * site whose header only works on the home page is worse than one that works
 * everywhere.
 */
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Updates", href: "/updates" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  label: "Software company",
  headline: ["Software that", "solves everyday", "problems."],
  lead: "We build simple, useful and accessible software for businesses and everyday users.",
  body: "From productivity and business tools to solutions for everyday digital needs, Erstian creates products designed to make work easier, faster and more efficient.",
  primaryCta: { label: "Explore Erstian", href: "#about" },
  secondaryCta: { label: "Explore Internbird", href: internbird.url },
  scrollHint: "Scroll to explore",
} as const;

/**
 * Internbird section on the home page.
 *
 * Its own numbered band rather than a card in the products grid, because it is
 * the one product a visitor can use today — everything else on the page is
 * described in terms of what is being built.
 */
export const internbirdSection = {
  index: "05",
  label: "Internbird",
  heading: ["Internships,", "found for", "students."],
  lead: internbird.summary,
  body: "Internbird helps students cut through the noise: opportunities matched to what a student is actually good at, training programs worth their time, and every application in one place instead of a dozen browser tabs.",
  features: internbird.features,
  cta: { label: "Visit Internbird", href: internbird.url },
  secondaryCta: { label: "Ask about Internbird", href: "/contact" },
  footnote:
    "Internbird is a product/platform operated by Erstian. Accounts, applications and payments are handled on the Internbird site, where its own terms and privacy notice apply alongside these.",
} as const;

export const about = {
  index: "01",
  label: "About Erstian",
  heading: ["We build software", "people can", "actually use."],
  intro:
    "There are countless digital problems that people deal with every day.",
  points: [
    "Businesses need better tools.",
    "Teams need simpler workflows.",
    "Individuals need easier ways to get things done.",
  ],
  closing:
    "Erstian exists to build software that solves those problems.",
  focus:
    "We focus on creating practical digital products that are easy to understand, useful in the real world and accessible to the people who need them.",
} as const;

export const whatWeBuild = {
  index: "02",
  label: "What we build",
  heading: ["Software for", "real-world needs."],
  lead: "Our products are built around problems — not trends.",
  items: [
    {
      number: "01",
      title: ["Business", "software"],
      body: "Tools designed to help businesses manage tasks, workflows, operations and everyday processes more efficiently. In development.",
    },
    {
      number: "02",
      title: ["Productivity", "tools"],
      body: "Software that helps people organize work, save time and get more done. In development.",
    },
    {
      number: "03",
      title: ["Utility", "software"],
      body: "Simple digital solutions for common problems faced by everyday users. In development.",
    },
    {
      number: "04",
      title: ["Future", "products"],
      body: "We're continuously exploring new ideas and opportunities where software can make something simpler, faster or more accessible.",
    },
  ],
} as const;

export const approach = {
  index: "03",
  label: "Our approach",
  heading: ["Simple ideas.", "Useful software."],
  lead: "We believe good software doesn't need to be complicated.",
  steps: [
    {
      number: "01",
      title: "Identify",
      body: "We look for problems that people and businesses actually face.",
    },
    {
      number: "02",
      title: "Build",
      body: "We turn those problems into focused, practical software products.",
    },
    {
      number: "03",
      title: "Improve",
      body: "We use feedback and real-world usage to continuously improve our products.",
    },
    {
      number: "04",
      title: "Scale",
      body: "When a product proves useful, we make it available to more people.",
    },
  ],
} as const;

export const products = {
  index: "04",
  label: "Products",
  heading: ["One live,", "the rest in", "development."],
  body: "Internbird is live and accepting registrations and payments. Alongside it, Erstian builds business software, productivity tools and utility software.",
  note: "Our product ecosystem will grow over time. Certain products, features, programs or services may become available at different times.",
  cta: { label: "Visit Internbird", href: internbird.url },
  secondaryCta: { label: "See What's In Development", href: "/products" },
} as const;

export const forBusiness = {
  index: "06",
  label: "For businesses",
  heading: ["Software that helps", "you work better."],
  paragraphs: [
    "Businesses shouldn't have to adapt their entire workflow around complicated software.",
    "We aim to build focused tools that solve specific business problems without unnecessary complexity.",
    "From everyday operations to productivity and workflow management, Erstian's products are designed with practical business use in mind.",
  ],
  cta: { label: "Business Solutions — Coming Soon", href: "/products" },
} as const;

export const forEverydayUsers = {
  index: "07",
  label: "For everyday users",
  heading: ["Useful software", "for everyday life."],
  paragraphs: [
    "Not every software product needs to be built for enterprises.",
    "Some problems are simply everyday problems.",
    "We build accessible tools that help individuals complete tasks, solve problems and make better use of their time.",
  ],
  cta: { label: "Explore Consumer Products — Coming Soon", href: "/products" },
} as const;

export const whyErstian = {
  index: "08",
  label: "Why Erstian",
  heading: ["Built around", "usefulness."],
  principles: [
    {
      number: "01",
      title: "Practical",
      body: "We build products around real problems and real use cases.",
    },
    {
      number: "02",
      title: "Accessible",
      body: "Our goal is to make useful software available without unnecessary complexity.",
    },
    {
      number: "03",
      title: "Focused",
      body: "Each product is designed around a clear purpose.",
    },
    {
      number: "04",
      title: "Continuous",
      body: "Software doesn't stop at launch. We listen, learn and improve.",
    },
    {
      number: "05",
      title: "Scalable",
      body: "Our products are designed to serve users beyond a single organization or location.",
    },
  ],
} as const;

export const vision = {
  index: "09",
  label: "Our vision",
  heading: ["A growing ecosystem", "of useful software."],
  lead: "Erstian starts with a simple idea:",
  statement: "Build software that people find useful enough to keep using.",
  body: "Over time, we aim to create a diverse ecosystem of products serving businesses, teams and individuals across different areas of everyday digital life.",
  closer: "One product at a time.",
} as const;

export const company = {
  index: "10",
  label: "About",
  heading: ["We are building", "from the ground up."],
  paragraphs: [
    "Erstian is a technology company that develops and operates digital products and services, including Internbird.",
    "Internbird is live today and serves students directly. Alongside it we are building the next generation of software products, learning from real usage as we go.",
    "Our long-term goal is not to build software for the sake of having software.",
  ],
  emphasis: "It's to build products people choose to use.",
} as const;

export const comingSoon = {
  heading: ["More to come.", "Built the same way."],
  body: "Internbird is live. The rest of our products are in development.",
  note: "We publish what we are working on as it happens, so you can see where things stand instead of waiting for an announcement.",
  primaryCta: { label: "See What's In Development", href: "/products" },
  secondaryCta: { label: "Follow Our Progress", href: "/updates" },
} as const;

export const contact = {
  index: "12",
  label: "Contact",
  heading: ["Have an idea or want", "to work with us?"],
  body: "Whether you're interested in our upcoming products, have a business requirement, want to explore a partnership or simply want to connect — we'd like to hear from you.",
  cta: { label: "Get in Touch", href: "/contact" },
  /** Kept short on the home page; /contact carries the full channel list. */
  channels: [
    { label: "General", value: brand.email, href: `mailto:${brand.email}` },
    {
      label: "Business",
      value: brand.businessEmail,
      href: `mailto:${brand.businessEmail}`,
    },
  ],
} as const;

export const faqs = [
  {
    question: "What is Erstian?",
    answer:
      "Erstian is a technology company that develops and operates digital products and services, including Internbird.",
  },
  {
    question: "What is Internbird?",
    answer: internbird.summary,
  },
  {
    question: "Is Internbird a separate company?",
    answer:
      "No. Internbird is a product/platform operated by Erstian. It is covered by the same Terms & Conditions, Privacy Policy and Refund & Cancellation Policy as the rest of our services.",
  },
  {
    question: "What other products does Erstian operate?",
    answer:
      "Alongside Internbird, Erstian develops business software, productivity tools and utility software. Certain products, features, programs or services may become available at different times.",
  },
  {
    question: "Are all products available now?",
    answer:
      "Not all of them. Internbird is live and accepting registrations and payments. Other products are in development, and we publish their status on our updates page.",
  },
  {
    question: "How does Internbird handle payments?",
    answer:
      "Payments on Internbird are processed by a third-party payment provider. Erstian never receives or stores your card number, UPI PIN or any banking credential — the payment provider handles those directly.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, where the product allows it. Our Refund & Cancellation Policy explains eligibility, cancellation windows and how long a refund takes, including what happens if a payment fails or is duplicated.",
  },
  {
    question: "Who are Erstian's products for?",
    answer:
      "Internbird serves students looking for internships, training and career opportunities. Other Erstian products serve businesses, teams and individuals depending on the product.",
  },
  {
    question: "Can I suggest a product idea?",
    answer:
      "Yes. If you have a problem that you think software could solve, you can contact us and share your idea.",
  },
] as const;

export const footer = {
  tagline: brand.tagline,
  /**
   * The same route/section distinction as `navLinks`: `#hash` entries are
   * home-page sections and only meaningful there, everything else is a real
   * page. `SiteFooter` routes the hashes through Lenis and lets the routes
   * navigate normally, so one list can hold both.
   */
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our approach", href: "#approach" },
        { label: "Careers", href: "/careers" },
        { label: "Updates", href: "/updates" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Overview", href: "/products" },
        // External. `SiteFooter` renders any non-`#` href as a plain link, so
        // this opens in the same tab like the internal routes do.
        { label: "Internbird", href: internbird.url },
        { label: "Business Software", href: "#solutions" },
        { label: "Productivity", href: "#what-we-build" },
        { label: "In development", href: "#products" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact us", href: "/contact" },
        { label: "Updates", href: "/updates" },
        { label: "Security", href: "/security" },
        { label: "Accessibility", href: "/accessibility" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "All documents", href: "/legal" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Refund & Cancellation", href: "/refunds" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Data Processing", href: "/dpa" },
      ],
    },
  ],
  /**
   * Deliberately empty.
   *
   * These used to point at each platform's home page, which is worse than no
   * link at all: it looks like an Erstian profile in the footer and sends a
   * visitor to Instagram's homepage. Add real profile URLs here when the
   * accounts exist — `organizationJsonLd()` in lib/seo.ts picks these up as
   * `sameAs` at the same time, which is the point of keeping them in one list.
   */
  social: [] as readonly { label: string; href: string }[],
} as const;

/**
 * Footer copyright line.
 *
 * A function rather than a string so the year cannot go stale — a hardcoded
 * "© 2026" still reads correctly in December and quietly becomes wrong on 1
 * January. Computed at render, on the server, so the footer HTML always matches
 * the year it was served.
 */
export function copyrightLine(): string {
  return `© ${new Date().getFullYear()} ${brand.legalName}. All rights reserved.`;
}
