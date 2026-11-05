import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Alexander Graham Shepherd",
  location: "France",
  locationLink: "https://www.google.com/maps/place/France",
  about:
    "Founding team at Vesara. AI agent products, investing and capital allocation.",
  summary:
    "Founding team at Vesara, where I build AI products by directing coding agents: Prospero, an outbound-sales platform with 48 MCP tools; a meeting-prep agent with its own identity resolver; an SEO audit built on Jev; a search-ads keyword pipeline; and the team's content review tool. In parallel I'm a fractional partner at Potrero Capital, a family office investing across AI, climate tech, gaming and real estate, and I sit on the board of CITILET, a real estate and construction holding. Bachelor in International Business with Distinction from Grenoble École de Management.",
  avatar,
  siteUrl: "https://waviestsun.github.io/cv/",
  contact: {
    email: "alexandergrahamshepherd@gmail.com",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexandergshepherd/",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/WaviestSun",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "Grenoble École de Management",
      degree: "Bachelor in International Business, with Distinction",
      start: "2021",
      end: "2024",
    },
    {
      school: "American School of Grenoble",
      degree:
        "High School Diploma, with Advanced Placement in European History, Comparative Government and French",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Vesara Inc",
      link: "https://vesara.ai",
      badges: ["AI agents", "Product", "San Francisco Bay Area"],
      title: "Founding Team",
      start: "Mar 2026",
      end: null,
      description:
        "Vesara runs long-horizon agents on a company's data to resurface the revenue it is losing. Advisor from March 2026, founding team since June.",
      highlights: [
        "Built Prospero, the meeting-prep platform and its identity resolver, and feedtheloop, directing AI coding agents across 550+ merged pull requests",
        "Shipped delivery, monitoring and quality guardrails for the Vesara Daily newsletter",
      ],
    },
    {
      company: "Potrero Capital",
      badges: ["Private equity", "Family offices", "Monaco"],
      title: "Fractional Partner (Partner, 2023 to 2026)",
      start: "May 2023",
      end: null,
      description:
        "Syndicating, investing and advising across AI, climate tech, gaming, blockchain, real estate, automotive and aviation, cybersecurity and biotech.",
    },
    {
      company: "CITILET",
      badges: ["Real estate", "Financial advisory"],
      title: "Board Member (Accounting Bookkeeper, 2019 to 2023)",
      start: "Jan 2019",
      end: null,
      description:
        "Executive-level operations, management and capital allocation for Karin ApS and its holdings across real estate, construction and holiday rental. Kept the books for four years before joining the board in 2023.",
    },
    {
      company: "Future Tech Games",
      badges: ["General management", "Fundraising", "United Kingdom"],
      title: "Advisor & Shareholder",
      start: "Mar 2022",
      end: "Dec 2025",
      description: "Advised on general management and fundraising.",
    },
    {
      company: "Cut Media ltd",
      badges: ["Internship"],
      title: "Summer Intern",
      start: "Jun 2022",
      end: "Sep 2022",
      description: "Fundraising and pitch development.",
    },
  ],
  skills: [
    "AI agents",
    "Claude Code",
    "Cursor",
    "MCP",
    "TypeScript",
    "Next.js",
    "Postgres",
    "Vercel",
    "Docker",
    "SEO",
    "Private equity",
    "Fundraising",
    "Financial advisory",
    "Real estate",
  ],
  projects: [
    {
      title: "Prospero",
      date: "Aug 2026",
      techStack: ["Next.js", "Neon", "MCP", "Vitest"],
      description:
        "A hosted outbound-sales platform that runs inside Claude through 48 MCP tools: ICP, personas, accounts, signals, enrichment, email verification, sequences and launch, across 14 providers including Apollo, Hunter, Instantly and Smartlead. Multi-tenant on Neon with row-level security, and three rules no code path can skip: nothing sends without approval, invalid emails are dropped, replies are drafted and never sent. 1,400+ commits and 240 merged pull requests, 339 test files, live acceptance checks on every preview.",
    },
    {
      title: "Vesara Meeting Prep",
      date: "Jun 2026",
      techStack: ["Next.js", "Vercel Workflow", "Neon", "MCP"],
      description:
        "An agent product that preps every meeting. It syncs Google Calendar, picks out the real meetings, profiles each participant from Apollo, Tavily, Exa and Gmail, and emails a brief 15 minutes before. Its identity resolver chains four data providers with every fact tied to its source and resolves 11 to 12 of 17 people on a cold-email benchmark. Admin console, MCP server and a Claude plugin; 257 pull requests, 180+ test files.",
    },
    {
      title: "Jev SEO",
      date: "Sep 2026",
      techStack: ["TypeScript", "Jev", "Claude Code", "Vitest"],
      description:
        "An SEO and AI-answer-engine audit that runs from Claude Code. It crawls a site within robots.txt, runs 47 checks, has Jev, TypeSafe's classifier, answer narrow questions and sends unsure cases to Claude through a validated queue. It then maps keywords to pages and finds gaps and pages competing for the same search. 430 tests; hardened through live runs on copilot.money and nebula.io.",
    },
    {
      title: "Search-ads keyword pipeline",
      date: "Oct 2026",
      techStack: ["Claude in Chrome", "Google Ads", "Ahrefs", "openpyxl"],
      description:
        "A Claude skill that turns a company, its competitors and a target region into a scored paid-search keyword workbook. Terms pass a six-step filter: Autocomplete phrasing, a Trends gate, Ahrefs difficulty, the Ads Transparency Center and the live regional results page through Google Ads Ad Preview. Each gets a 0 to 100 score on volume, cost, crowding and data completeness and a BID, TEST or CAUTION verdict, alongside Google's merged search-term pools and an advertiser map.",
    },
    {
      title: "feedtheloop",
      date: "Oct 2026",
      techStack: ["Next.js", "Neon", "Drizzle", "Scriptable"],
      description:
        "The Vesara team's tool for reviewing ads, videos and copy: yes, no or maybe votes, plus head-to-head ranking. Votes come from the web, Slack and an iPhone home-screen widget in Vesara's colours; content imports from Google Drive, and it has its own MCP server. Multi-tenant on Neon with row-level security and isolation tests; 70 pull requests in two weeks.",
    },
    {
      title: "Sharon GC",
      date: "Jun 2026",
      techStack: ["Next.js", "OpenClaw", "Composio", "Vercel"],
      description:
        "Extended an AI construction-management app for a residential general contractor, covering permits to punch list, clients and vendors, document triage and compliance. I added a per-tenant OpenClaw agent gateway, Stack Auth, Composio integrations, persistent chat, voice and file uploads, across 33 pull requests and 29 production deployments.",
    },
    {
      title: "byo-sub",
      date: "Oct 2026",
      link: "https://github.com/WaviestSun/byo-sub",
      techStack: ["Node", "OAuth", "OpenAI"],
      description:
        "Open-source starter that lets people use their own ChatGPT plan inside your app: no API key, no AI bill. Sign in with ChatGPT, token refresh that never runs twice at once, streaming chat, and same-origin and CSP protection, in about 670 lines of plain Node with one dependency.",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "Profile",
  projects: "Selected projects",
  work: "Experience",
  skills: "Skills",
  education: "Education",
} satisfies Partial<Record<keyof ResumeData, string>>;
