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
  url: "https://erstian.com",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  label: "Software company",
  headline: ["Software that", "solves everyday", "problems."],
  lead: "We build simple, useful and accessible software for businesses and everyday users.",
  body: "From productivity and business tools to solutions for everyday digital needs, Erstian creates products designed to make work easier, faster and more efficient.",
  primaryCta: { label: "Explore Erstian", href: "#about" },
  secondaryCta: { label: "What's Coming", href: "#products" },
  scrollHint: "Scroll to explore",
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
      body: "Tools designed to help businesses manage tasks, workflows, operations and everyday processes more efficiently.",
    },
    {
      number: "02",
      title: ["Productivity", "tools"],
      body: "Software that helps people organize work, save time and get more done.",
    },
    {
      number: "03",
      title: ["Utility", "software"],
      body: "Simple digital solutions for common problems faced by everyday users.",
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
  heading: ["Something new is", "being built."],
  body: "Erstian is currently building its first generation of software products.",
  note: "Our product ecosystem will grow over time across different categories and use cases.",
  cta: { label: "Stay Updated", href: "#contact" },
} as const;

export const forBusiness = {
  index: "05",
  label: "For businesses",
  heading: ["Software that helps", "you work better."],
  paragraphs: [
    "Businesses shouldn't have to adapt their entire workflow around complicated software.",
    "We aim to build focused tools that solve specific business problems without unnecessary complexity.",
    "From everyday operations to productivity and workflow management, Erstian's products are designed with practical business use in mind.",
  ],
  cta: { label: "Business Solutions — Coming Soon", href: "#contact" },
} as const;

export const forEverydayUsers = {
  index: "06",
  label: "For everyday users",
  heading: ["Useful software", "for everyday life."],
  paragraphs: [
    "Not every software product needs to be built for enterprises.",
    "Some problems are simply everyday problems.",
    "We build accessible tools that help individuals complete tasks, solve problems and make better use of their time.",
  ],
  cta: { label: "Explore Consumer Products — Coming Soon", href: "#contact" },
} as const;

export const whyErstian = {
  index: "07",
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
  index: "08",
  label: "Our vision",
  heading: ["A growing ecosystem", "of useful software."],
  lead: "Erstian starts with a simple idea:",
  statement: "Build software that people find useful enough to keep using.",
  body: "Over time, we aim to create a diverse ecosystem of products serving businesses, teams and individuals across different areas of everyday digital life.",
  closer: "One product at a time.",
} as const;

export const company = {
  index: "09",
  label: "About",
  heading: ["We are building", "from the ground up."],
  paragraphs: [
    "Erstian is a software company focused on creating public-facing digital products.",
    "We are starting small, experimenting with ideas, learning from users and building toward a larger ecosystem of software products.",
    "Our long-term goal is not to build software for the sake of having software.",
  ],
  emphasis: "It's to build products people choose to use.",
} as const;

export const comingSoon = {
  heading: ["Something useful", "is coming."],
  body: "We're just getting started.",
  note: "Follow Erstian as we build software designed for the way people and businesses work today.",
  primaryCta: { label: "Stay Updated", href: "#contact" },
  secondaryCta: { label: "Contact Us", href: "#contact" },
} as const;

export const contact = {
  index: "10",
  label: "Contact",
  heading: ["Have an idea or want", "to work with us?"],
  body: "Whether you're interested in our upcoming products, have a business requirement, want to explore a partnership or simply want to connect — we'd like to hear from you.",
  cta: { label: "Get in Touch", href: `mailto:${brand.email}` },
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
      "Erstian is a software company building public-facing digital products for businesses and everyday users.",
  },
  {
    question: "What kind of software does Erstian build?",
    answer:
      "We are focused on practical software across business, productivity, utility and other everyday digital use cases.",
  },
  {
    question: "Are Erstian's products available now?",
    answer:
      "We are currently at the beginning of our journey, with our first products being developed. More information will be announced as products become ready.",
  },
  {
    question: "Will Erstian offer subscription-based software?",
    answer:
      "Yes. Subscription-based products will be an important part of Erstian's business model, alongside other possible product models.",
  },
  {
    question: "Who are Erstian's products for?",
    answer:
      "Our products may serve businesses, teams, professionals and general users depending on the specific product.",
  },
  {
    question: "Can I suggest a product idea?",
    answer:
      "Yes. If you have a problem that you think software could solve, you can contact us and share your idea.",
  },
] as const;

export const footer = {
  tagline: brand.tagline,
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#company" },
        { label: "Products", href: "#products" },
        { label: "Approach", href: "#approach" },
        { label: "Careers", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Business Software", href: "#solutions" },
        { label: "Productivity", href: "#what-we-build" },
        { label: "Utilities", href: "#what-we-build" },
        { label: "Coming Soon", href: "#products" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#faq" },
        { label: "Contact", href: "#contact" },
        { label: "FAQs", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  legal: "© 2026 Erstian. All rights reserved.",
} as const;
