/**
 * Copy for the standalone pages: /about, /products, /faq, /careers, /updates
 * and /contact.
 *
 * Held apart from lib/content.ts for the same reason the legal copy lives
 * beside it: lib/content.ts is the narrative of the home page, and these are
 * separate documents. The content rule from that file applies here unchanged —
 * Erstian is a company at the beginning of its journey, so nothing in this file
 * may imply shipped products, customers, revenue, awards, partnerships or years
 * of operation.
 */

import { brand, internbird, navLinks } from "@/lib/content";

/**
 * Every standalone marketing page, in navigation order.
 *
 * `changeFrequency` and `priority` live here rather than in app/sitemap.ts so
 * the route, its copy and its crawl hints are declared in one place — adding a
 * page means adding one entry, not editing two files that can drift apart.
 */
/**
 * Every standalone marketing page, in navigation order.
 *
 * `changeFrequency` and `priority` live here rather than in app/sitemap.ts so
 * the route, its copy and its crawl hints are declared in one place — adding a
 * page means adding one entry, not editing two files that can drift apart.
 *
 * This list drives page metadata and the sitemap. `navLinks` in lib/content.ts
 * drives the header; the two must agree, which is checked at module load below.
 */
export const subpages = [
  {
    slug: "about",
    href: "/about",
    label: "About",
    title: "About",
    description:
      "Why Erstian exists, what we build, and how we work — written by the company that is doing it.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "products",
    href: "/products",
    label: "Products",
    title: "Products",
    description:
      "The four categories of software Erstian is building, what is in development, and what we are deliberately not promising.",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    slug: "faq",
    href: "/faq",
    label: "FAQ",
    title: "Questions, answered",
    description:
      "Answers to the questions people ask Erstian most often, including the ones that are awkward to answer honestly.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    slug: "contact",
    href: "/contact",
    label: "Contact",
    title: "Contact",
    description:
      "How to reach Erstian — general enquiries, business enquiries, security reports and media — and what to expect after you write.",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    slug: "updates",
    href: "/updates",
    label: "Updates",
    title: "Updates",
    description:
      "What Erstian has done and what it is working on, in public — including the parts that are not yet finished.",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    slug: "careers",
    href: "/careers",
    label: "Careers",
    title: "Careers",
    description:
      "There are no open roles at Erstian today. This page explains how we work and what we would look for when that changes.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
] as const;

export type SubpageSlug = (typeof subpages)[number]["slug"];

/**
 * Every marketing page must be reachable from the header.
 *
 * `navLinks` (lib/content.ts) drives the primary navigation and `subpages` above
 * drives metadata and the sitemap. Nothing links them together, so a page
 * added to one list and not the other builds cleanly and then goes live with no
 * route into it — invisible to crawlers and unreachable from the site itself.
 * `/legal` is the deliberate exception: it is reached from the footer, not the
 * primary nav, because it is a document index rather than a page about Erstian.
 */
const NAV_EXEMPT = new Set(["/legal"]);

for (const page of subpages) {
  if (NAV_EXEMPT.has(page.href)) continue;

  if (!navLinks.some((link) => link.href === page.href)) {
    throw new Error(
      `lib/pages.ts: "${page.href}" is not in navLinks. Add it to the primary ` +
        "navigation or the page is unreachable.",
    );
  }
}

for (const link of navLinks) {
  if (!subpages.some((page) => page.href === link.href)) {
    throw new Error(
      `lib/content.ts: navLinks points at "${link.href}", which has no entry ` +
        "in subpages. Add the page or remove the link.",
    );
  }
}

/* --- /about ---------------------------------------------------------------- */

export const aboutPage = {
  label: "About",
  heading: ["Building software", "from the ground up."],
  lead: "Erstian develops and operates digital products and services, including Internbird.",
  standfirst:
    "We run one live product today and build the rest in the open. What follows is what we believe, what we operate now, and how we intend to work.",
  sections: [
    {
      index: "01",
      label: "The problem we picked",
      heading: ["Everyday problems", "deserve everyday", "software."],
      body: [
        "Most software is built for a market that can afford it. Enterprise buyers with procurement teams, teams with a budget line for tooling, and people who already know what they want.",
        "That leaves a lot of people solving the same simple problems with awkward tools. A small business running its day out of a spreadsheet. A student hunting through scattered job boards for an internship that actually fits. A team whose real problem is that their process has six steps where two would do.",
        "These are not problems that need more features. They need software that is understandable in a minute and useful every day after that.",
      ],
    },
    {
      index: "02",
      label: "What we operate",
      heading: ["Internbird,", "and what comes", "after."],
      body: [
        internbird.prose,
        "Internbird is the clearest example of how we build. Finding an internship should not mean twenty browser tabs and a mental model of which boards are worth checking. Matching a student to an opportunity they are actually suited for — and then keeping every application in one place — is a problem worth solving properly.",
        "Alongside Internbird, Erstian builds business software, productivity tools and utility software. Those are in development. We publish their status rather than describing them as if they had shipped.",
      ],
    },
    {
      index: "03",
      label: "How we work",
      heading: ["Build, listen,", "improve, repeat."],
      body: [
        "We start with a problem someone actually has, not with a market segment we can write a deck about. Then we build the smallest thing that solves it, put it in front of people, and change it based on what we learn.",
        "That loop is slower than designing for a persona in a conference room. It is also how software ends up working on the first Tuesday rather than the first Tuesday of next quarter.",
        "When a product proves useful, we make it available to more people. When it does not, we change it or stop. We will tell you which.",
      ],
    },
    {
      index: "04",
      label: "How we talk",
      heading: ["Say what is true,", "before it is true."],
      body: [
        "There is a habit in software of describing things as shipped, proven and loved when they are none of those. It is not lying exactly, but it costs the reader something, and eventually they find out.",
        "So we describe what we are building as what we are building. If a product is in development, we say it is in development. If we have no customers, we do not imply we do. If a page is missing something, we would rather say the page is missing something.",
        "It makes for a quieter website. We have made our peace with that.",
      ],
    },
    {
      index: "05",
      label: "Where we are going",
      heading: ["An ecosystem,", "one product", "at a time."],
      body: [
        "The long-term goal is a growing set of useful software across the areas of everyday digital life — for students, for businesses, for teams, and for individuals.",
        "We are not going to tell you when that will happen. Companies that publish a five-year plan and then quietly move the dates teach their audience to discount everything else they say. We would rather be useful this quarter and let the rest arrive when it arrives.",
        "If you want to follow along, the updates page is the honest place to look.",
      ],
    },
  ],
  closing: {
    heading: "Want to know more?",
    body: "We answer every message, including the awkward ones. If something on this site is unclear or wrong, say so and we will fix it.",
    primary: { label: "Get in touch", href: "/contact" },
    secondary: { label: "See our products", href: "/products" },
  },
} as const;

/* --- /products ------------------------------------------------------------- */

export const productsPage = {
  label: "Products",
  heading: ["One live,", "the rest in", "development."],
  lead: "Everything Erstian operates and is building, organised by the problem it tries to solve.",
  standfirst:
    "Internbird is live and accepting registrations and payments. Alongside it, Erstian develops business software, productivity tools and utility software. Certain products, features, programs or services may become available at different times.",
  /**
   * The live product, rendered as its own block above the development
   * categories. Keeping it separate is the point: a single grid where every
   * entry says "in development" misrepresents the business, and a reviewer
   * checking whether anything is actually sold would struggle to tell that
   * something is.
   */
  live: {
    name: internbird.name,
    url: internbird.url,
    status: "Available now",
    summary: internbird.summary,
    body: "Finding an internship should not mean twenty browser tabs and no way to tell which boards are worth checking. Internbird matches students to internships, training programs and career opportunities suited to them, and keeps every application and document in one place.",
    features: internbird.features,
    audience: "Students — school, college and recent graduates",
    cta: { label: "Visit Internbird", href: internbird.url },
    secondaryCta: { label: "Ask a question", href: "/contact" },
    footnote:
      "Accounts, applications and payments are handled on the Internbird site, where the same Terms & Conditions, Privacy Policy and Refund & Cancellation Policy apply.",
  },
  categories: [
    {
      number: "02",
      title: ["Business", "software"],
      status: "In development",
      body: "Tools for businesses that run their day out of spreadsheets and inboxes. Task and workflow management, operations, and the reporting that follows from both — without the setup project.",
      audience: "Small and mid-sized businesses, operations teams",
      lookingFor: ["Task and workflow tools", "Inventory and operations", "Reporting that needs no analyst"],
    },
    {
      number: "03",
      title: ["Productivity", "tools"],
      status: "In development",
      body: "Software for organising work and protecting the hours it takes. Focus, planning, and the small daily friction that adds up to a working day that feels longer than it was.",
      audience: "Individuals and small teams",
      lookingFor: ["Planning and focus", "Notes that stay searchable", "Low-friction daily use"],
    },
    {
      number: "04",
      title: ["Utility", "software"],
      status: "In development",
      body: "Small, single-purpose tools for common digital annoyances. Open one, do the thing, close it. No account, no dashboard, no upsell.",
      audience: "Everyone",
      lookingFor: ["Single-purpose tools", "Works without an account", "No dark patterns"],
    },
    {
      number: "05",
      title: ["Future", "products"],
      status: "Exploring",
      body: "The category we cannot describe yet, because we have not found the problem worth building for. This entry exists so the list is honest about having an open end.",
      audience: "To be determined by the problem, not the other way round",
      lookingFor: ["Problems we have not solved yet", "Suggestions from anyone with one"],
    },
  ],
  principles: {
    heading: ["What every Erstian", "product has in", "common."],
    items: [
      {
        number: "01",
        title: "One problem",
        body: "If you cannot describe what a product is for in a sentence, it is not finished being designed.",
      },
      {
        number: "02",
        title: "Understandable in a minute",
        body: "No onboarding tour. If a feature needs explaining, the interface is wrong.",
      },
      {
        number: "03",
        title: "Genuinely useful",
        body: "A tool you open once and never again is a demo, not a product.",
      },
      {
        number: "04",
        title: "Free of dark patterns",
        body: "No nagging, no artificial urgency, no making the cancel button harder to find than the subscribe button.",
      },
      {
        number: "05",
        title: "Accessible by default",
        body: "Keyboard, screen reader and reduced motion are requirements, not settings added later.",
      },
      {
        number: "06",
        title: "Honest status",
        body: "In development, available, or retired. Never anything in between to sound better.",
      },
    ],
  },
  notYet: {
    heading: ["What is not", "on this page."],
    body: [
      "Prices for anything in development. Nothing is for sale that we have not put a price on, and nothing is for sale without a checkout that shows you the total first.",
      "Dates. Publishing a date we might miss teaches you to distrust the rest of the page.",
      "Customer logos, because we would rather show you working software than a wall of names.",
      "A comparison table, because there is nothing yet worth comparing against.",
      "When those exist, they will appear here. You do not have to take our word for it in the meantime.",
    ],
  },
  closing: {
    heading: "Want one of these when it lands?",
    body: "Tell us what problem you would like solved. It genuinely changes what we build next, and we will tell you if your idea is one we can build.",
    primary: { label: "Suggest a product", href: "/contact" },
    secondary: { label: "Follow our progress", href: "/updates" },
  },
} as const;

/* --- /updates -------------------------------------------------------------- */

export const updatesPage = {
  label: "Updates",
  heading: ["What we have done,", "and what comes", "next."],
  lead: "A public record of Erstian's progress, including the parts that are not finished.",
  standfirst:
    "Most companies publish announcements. We are not far enough along for that, so this is closer to a build log: what has happened, what is in progress, and what has not worked.",
  entries: [
    {
      version: "Site 001",
      date: "2026-01-15",
      state: "Live",
      title: "Internbird is live",
      body: [
        `${internbird.name} is available at ${internbird.url}. It helps students discover internships, training programs and career opportunities, and manage the applications that follow.`,
        "Internbird is a product/platform operated by Erstian. It is covered by the same Terms & Conditions, Privacy Policy and Refund & Cancellation Policy as the rest of our services, and it is where payments are processed.",
      ],
    },
    {
      version: "Site 002",
      date: "2026-01-15",
      state: "Live",
      title: "This website exists",
      body: [
        "The erstian.com site is up. It describes what we operate today, what we are building, and what that costs.",
        "The legal documents — terms, privacy, refunds, security, DPA — are written to be the versions we keep using, not placeholders we will replace under pressure later.",
      ],
    },
    {
      version: "Site 003",
      date: "2026-01-15",
      state: "In progress",
      title: "Business, productivity and utility software",
      body: [
        "Alongside Internbird, Erstian is building business software, productivity tools and small utility software. None of them is ready.",
        "We will not put a date on any of them until we understand our own timeline well enough to be worth trusting. What we can say: each solves a specific, common problem, and none will require a demo call.",
      ],
    },
    {
      version: "Site 004",
      date: "2026-01-15",
      state: "In progress",
      title: "Accessibility and privacy, as constraints",
      body: [
        "Accessibility is treated as a requirement on this site and on our products rather than a review at the end — WCAG 2.2 AA as the target, with the gaps listed in public.",
        "We ship no analytics and no advertising trackers on this site, and we publish what that means. It costs us the ability to tell you which pages are popular, which we think is the right trade.",
      ],
    },
    {
      version: "Site 005",
      date: "2026-01-15",
      state: "Planned",
      title: "A changelog for the products",
      body: [
        "Every release will get a note: what changed, what broke, and what we fixed.",
        "We will publish it here and link it from each product. A changelog is how a company that wants to be trusted handles the version where something goes wrong.",
      ],
    },
  ],
  standing: {
    heading: ["What we will", "always publish."],
    items: [
      "When a product becomes available, and what it costs.",
      "What changed in each release, including the parts we broke.",
      "When we get something wrong materially — a data incident, a security issue, a commitment we missed.",
      "When a product is retired or a feature is withdrawn, and what that means for anyone using it.",
    ],
  },
  closing: {
    heading: "Follow along",
    body: "There is no newsletter yet. If you want to hear when something launches, the honest answer is to email us and say so — we will tell you when there is.",
    primary: { label: "Get in touch", href: "/contact" },
    secondary: { label: "See products", href: "/products" },
  },
} as const;

/* --- /faq ------------------------------------------------------------------ */

export const faqPage = {
  label: "Support",
  heading: ["Questions,", "answered."],
  lead: "The things people ask us most, including the ones where the honest answer is 'we do not know yet'.",
  standfirst:
    "If your question is not here, write to us. We would rather answer it than leave it on a page somewhere.",
  groups: [
    {
      label: "About Erstian",
      items: [
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
            "No. Internbird is a product/platform operated by Erstian. It is covered by the same Terms & Conditions, Privacy Policy and Refund & Cancellation Policy as the rest of our services, and reaching Internbird support reaches us.",
        },
        {
          question: "Where can I use Internbird?",
          answer: `Internbird is at ${internbird.url}.`,
        },
        {
          question: "Are you a real company with staff?",
          answer:
            "We are a real company doing real work, and we are small. We would rather tell you that than imply a headcount that might not match reality.",
        },
      ],
    },
    {
      label: "Products & availability",
      items: [
        {
          question: "What products does Erstian operate?",
          answer:
            "Internbird is live today. Alongside it we develop business software, productivity tools and small utility software. Certain products, features, programs or services may become available at different times.",
        },
        {
          question: "Can I use an Erstian product today?",
          answer:
            "Yes — Internbird. It is available now and accepting registrations and payments. The other products are in development, and the products page says which is which.",
        },
        {
          question: "When will the next products launch?",
          answer:
            "We do not know, and a date from us today would not be worth anything. When a product works, we will say so on the updates page and tell you what it does and what it costs.",
        },
        {
          question: "Are products free or paid?",
          answer:
            "Both. Some offerings on Internbird are paid, others are not. Where something costs money you will see the price and the total before you commit to anything, and our Refund & Cancellation Policy explains your options.",
        },
        {
          question: "Can I suggest a product idea?",
          answer:
            "Please do. Tell us about the problem rather than the solution — what you were trying to do, and what got in the way. It genuinely changes what we build next, and we will tell you honestly whether it is something we can build.",
        },
      ],
    },
    {
      label: "Payments & refunds",
      items: [
        {
          question: "How do I pay?",
          answer:
            "Payments are processed by a third-party payment provider on a secure checkout page. Before you pay you will see what you are buying, what it costs in total, what you receive, and the cancellation terms.",
        },
        {
          question: "Do you store my card or UPI details?",
          answer:
            "No. Card numbers, CVVs, UPI PINs and banking credentials are entered on the payment provider's own secure page and never reach us. We keep only the transaction reference, amount, date, status and the email address on your order — what we need to deliver it and handle refunds.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "Yes, where the product allows it. You can request a refund if a service was not delivered, did not match its description, was unavailable for a significant part of the period, if you were charged twice, or if an amount was debited but the payment did not complete.",
        },
        {
          question: "How long does a refund take?",
          answer:
            "We acknowledge a refund request within 3 business days and decide within 10. Once approved we initiate the refund through the same provider, normally within 10 business days. How long it then takes to appear in your account depends on your bank — we will give you the reference so you can chase it with them.",
        },
        {
          question: "My payment failed but money left my account. What now?",
          answer:
            "Email our billing address with your transaction reference. A debited amount with no confirmed order is treated as a failed payment, and we will either confirm the order or refund you. See section 6 of our Refund & Cancellation Policy.",
        },
        {
          question: "I was charged twice. What do I do?",
          answer:
            "Email us the two transaction references. We refund the duplicate in full. You do not need to argue your case — a duplicated charge is our problem to resolve.",
        },
      ],
    },
    {
      label: "Privacy & data",
      items: [
        {
          question: "Do you track me on this website?",
          answer:
            "No. There are no analytics scripts, no advertising pixels and no cookies on erstian.com. We can see that a page was requested in server logs; we cannot tell which pages you visited or where you came from.",
        },
        {
          question: "What happens to my Internbird data?",
          answer:
            "Our Privacy Policy sets out exactly what we collect — account details, your profile, applications and documents you upload, and your transaction records — why we collect it, who sees it (including employers you apply to) and how long we keep it.",
        },
        {
          question: "Can I get my data deleted?",
          answer:
            "Yes. You can delete your Internbird account from your account settings, or email us and ask. We respond to privacy requests within the period the law requires and do not charge for them. Some transaction records are retained because tax law requires it — ask and we will tell you exactly what we kept.",
        },
        {
          question: "Can I get a refund and delete my account in one go?",
          answer:
            "Yes. Send one message asking for both. If an application is with an employer we cannot withdraw it from their own systems, and we will tell you who you applied to so you can ask them directly.",
        },
        {
          question: "Do you sell my data?",
          answer:
            "No, and we never have. We do not buy data about visitors, and we do not use what you give us for advertising profiles.",
        },
        {
          question: "Is my password readable by Erstian?",
          answer:
            "No. Passwords are stored as one-way salted hashes. Our database holds a hash rather than your password, so a copy of it would not reveal it.",
        },
      ],
    },
    {
      label: "Using Internbird",
      items: [
        {
          question: "How does matching work?",
          answer:
            "We match opportunities against the skills, interests and preferences in your profile. The more you tell us, the better the match — anything you leave out, we cannot use.",
        },
        {
          question: "Does an internship listing guarantee me a place?",
          answer:
            "No. Listing an opportunity does not guarantee a response, an interview or an offer. Erstian is not the employer, and we do not control what an employer does after you apply.",
        },
        {
          question: "Who sees my application documents?",
          answer:
            "The employer or program you applied to, which is what applying means. We do not sell applications or share them with anyone else.",
        },
        {
          question: "Can I apply on behalf of someone else?",
          answer:
            "No. Applying in your own name with your own accurate qualifications is a condition of using Internbird. Misrepresenting your education or experience can have real consequences for you, and we may suspend accounts that do it.",
        },
      ],
    },
    {
      label: "Working with us",
      items: [
        {
          question: "Can I work at Erstian?",
          answer:
            "There are no open roles today, and we would rather say that than keep a fictional listings page warm. The careers page describes how we work and what we would look for when that changes.",
        },
        {
          question: "Do you offer internships or freelance work?",
          answer:
            "Not as paid roles today, and we would rather say that plainly than keep a listings page warm. If you are using Internbird to find an internship, that is a different thing — see the Internbird section above.",
        },
        {
          question: "Can I write about Erstian?",
          answer:
            "Yes. Write what is true and we will not ask you to change it. If you need something specific confirmed, email us first and we will answer.",
        },
        {
          question: "Can I invest or partner with Erstian?",
          answer:
            "Those conversations go to the business address on the contact page rather than the general inbox.",
        },
      ],
    },
  ],
  closing: {
    heading: "Question not answered here?",
    body: "Send it to us. If it is a good question we will add the answer to this page, which is a better outcome for everyone than replying privately.",
    primary: { label: "Ask us", href: "/contact" },
    secondary: { label: "Read about us", href: "/about" },
  },
} as const;

/* --- /careers -------------------------------------------------------------- */

export const careersPage = {
  label: "Careers",
  heading: ["No open roles.", "Not a fake page."],
  lead: "We are too small to hire well right now. Here is what we are doing instead of posting listings.",
  standfirst:
    "This page exists because 'Careers' pointing nowhere looks worse than saying plainly that there is nothing. It also means that when we do hire, you can read this and know what you are walking into.",
  status: {
    heading: ["Where we are", "today"],
    body: [
      "Erstian is a small team operating Internbird and building its next products. We are not hiring, and we are not going to create a role to have a pipeline to choose from — a company that hires ahead of having the work is spending someone's year badly.",
      "If you are interested in working with us, the honest routes are: send us a problem you would want solved, or send us something you have built. Both are read by people who do the work.",
    ],
    channels: [
      { label: "General", value: brand.email, href: `mailto:${brand.email}` },
      {
        label: "Business",
        value: brand.businessEmail,
        href: `mailto:${brand.businessEmail}`,
      },
    ],
  },
  howWeWork: {
    heading: ["How we work,", "when you", "would be here."],
    items: [
      {
        number: "01",
        title: "Small on purpose",
        body: "Everyone here talks to everyone. There is no layer of people who relay messages, which means fewer misunderstandings and less time spent on process.",
      },
      {
        number: "02",
        title: "Written down",
        body: "Decisions, reasoning and what we tried that failed all get written where the team can find them. Memory is not a system.",
      },
      {
        number: "03",
        title: "Say the uncomfortable thing",
        body: "A problem raised early is cheap. A problem raised late is expensive and career-limiting for whoever it lands on. We would rather hear it.",
      },
      {
        number: "04",
        title: "Scope before status",
        body: "Nobody's title outranks a well-argued point. We disagree on the merits and commit once decided.",
      },
      {
        number: "05",
        title: "Sustainable pace",
        body: "We are building something meant to last years. Working someone to the point where they stop being able to think clearly is not a strategy.",
      },
      {
        number: "06",
        title: "Honest in public",
        body: "The same standard that shapes this website shapes how we talk about the product. That includes admitting when something does not work.",
      },
    ],
  },
  lookingFor: {
    heading: ["What we would", "look for."],
    body: [
      "None of these are requirements today. They are the shape of person that tends to be right for a team this size, written down so that when we hire, it is not vibes.",
    ],
    items: [
      {
        title: "Curiosity about real problems",
        body: "Interest in what people actually struggle with, rather than interest in a technology for its own sake.",
      },
      {
        title: "Finishing things",
        body: "Small, complete, shipped work beats large, impressive, unfinished work. Every time.",
      },
      {
        title: "Writing clearly",
        body: "Most of this job is explaining a decision to someone who will disagree with you. Writing is how that goes well.",
      },
      {
        title: "Comfort with plain text",
        body: "Email, documents and issues. Tools are a means; nobody has ever been promoted for a tool they liked.",
      },
      {
        title: "Care about the user's week",
        body: "Whether the person is an enterprise buyer or someone checking something on their phone at eleven at night.",
      },
    ],
  },
  closing: {
    heading: "Check back, or just write",
    body: "If we hire, it will be announced on this site and on the updates page first. If you would rather not wait for a listing, send us something.",
    primary: { label: "Send us something", href: "/contact" },
    secondary: { label: "See our updates", href: "/updates" },
  },
} as const;

/* --- /contact -------------------------------------------------------------- */

export const contactPage = {
  label: "Contact",
  heading: ["Tell us", "what you", "need."],
  lead: "Every message is read by someone who works here. There is no ticket queue and no form that goes nowhere.",
  standfirst:
    "Choose whichever channel fits. If you are not sure, the general address reaches all of us and we will route it.",
  channels: [
    {
      label: "General",
      value: brand.email,
      href: `mailto:${brand.email}`,
      bestFor: "Questions, feedback, anything that does not fit elsewhere",
      response: "Within 2 business days",
    },
    {
      label: "Business",
      value: brand.businessEmail,
      href: `mailto:${brand.businessEmail}`,
      bestFor: "Requirements, partnerships, procurement, investment",
      response: "Within 3 business days",
    },
    {
      label: "Security",
      value: "security@erstian.com",
      href: "mailto:security@erstian.com",
      bestFor: "Vulnerability reports — see the security policy first",
      response: "Acknowledged within 2 business days",
    },
    {
      label: "Billing & refunds",
      value: brand.businessEmail,
      href: `mailto:${brand.businessEmail}`,
      bestFor:
        "Refunds, cancellations, failed payments, duplicate charges — include your transaction reference",
      response: "Acknowledged within 3 business days",
    },
    {
      label: "Privacy",
      value: brand.email,
      href: `mailto:${brand.email}`,
      bestFor:
        "Data requests, access, deletion, or a complaint — say privacy and it reaches the right person",
      response: "Within 30 days, as the law requires",
    },
    {
      label: "Internbird support",
      value: brand.email,
      href: `mailto:${brand.email}`,
      bestFor:
        "Anything about an Internbird account, application or payment — or use the in-app support on Internbird",
      response: "Within 2 business days",
    },
    {
      label: "Press",
      value: brand.businessEmail,
      href: `mailto:${brand.businessEmail}`,
      bestFor: "Media enquiries and fact-checking",
      response: "Within 3 business days",
    },
  ],
  /** The live product, linked from the contact page so it is never a dead end. */
  internbird: {
    name: internbird.name,
    url: internbird.url,
    note: "Account, application and payment questions about Internbird can go to the address above, or straight to the support option inside the app.",
  },
  expectations: {
    heading: ["What happens", "after you", "write."],
    steps: [
      {
        number: "01",
        title: "A person reads it",
        body: "Not a bot, not a queue. The first reply is from someone who will actually be part of the conversation.",
      },
      {
        number: "02",
        title: "You get a straight answer",
        body: "If we can help, we will say how. If we cannot, we will say that too, and mean it. If the question is about a product that is not out yet, that is the answer.",
      },
      {
        number: "03",
        title: "Nothing is sold on",
        body: "Your address is not sold, rented or added to a marketing list. It is used to reply to you, and nothing else.",
      },
    ],
  },
  helpful: {
    heading: ["Saves us both", "a round trip."],
    items: [
      "What you are trying to do, in your own words.",
      "If it is about a payment, your transaction reference or order ID — it is in your confirmation email and in your account.",
      "If it is about an Internbird application, which opportunity it relates to.",
      "If it is about work, the tool or process involved.",
      "Your platform and operating system, if the answer depends on them.",
      "Anything you have already tried. Genuinely — the obvious answer is often the right one.",
      "Your timezone, if you need a reply within a working day.",
    ],
  },
  note: {
    heading: ["One thing", "worth saying"],
    body: "Internbird is live, and the rest of our products are not. If you write asking when something launches, the answer is 'we do not know yet' — and it will stay that answer until we genuinely do, rather than a date designed to make you feel better. If you are asking about a payment on Internbird, we can usually resolve it immediately.",
  },
  closing: {
    heading: "Still here?",
    body: "The contact details above are the whole story. No chat widget, no callback form, no automated funnel — just email, answered by people.",
    primary: { label: `Email ${brand.email}`, href: `mailto:${brand.email}` },
    secondary: { label: "Read the FAQ", href: "/faq" },
  },
} as const;
