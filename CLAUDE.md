# CLAUDE.md — Rekha Nair Advocate Portfolio

This file provides context for Claude Code working in this repository.

## Project Overview

A professional portfolio website for **Rekha Nair**, an advocate based in Kerala, India.
The site showcases her practice areas, experience, publications, and contact information.

## Tech Stack

| Layer       | Technology                                       |
| ----------- | ------------------------------------------------ |
| Framework   | Next.js 16 (App Router, React Server Components) |
| Language    | TypeScript 5 (strict mode)                       |
| Styling     | Tailwind CSS v4                                  |
| Package mgr | pnpm                                             |
| Linting     | ESLint 9 (flat config) + Prettier                |
| Git hooks   | Husky + lint-staged                              |
| Commits     | Conventional Commits (enforced via commitlint)   |
| Releases    | release-it + @release-it/conventional-changelog  |

## Repository Structure

```
src/
├── app/                  # Next.js App Router pages & layouts
│   ├── (home)/           # Home route group
│   ├── about/            # About page
│   ├── practice-areas/   # Practice areas listing
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles + Tailwind imports
│   └── layout.tsx        # Root layout (metadata, fonts)
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Full-width page sections (Hero, About, etc.)
│   └── ui/               # Small reusable UI primitives (Button, Card, etc.)
├── config/
│   └── site.ts           # Central site metadata (name, links, nav items)
├── data/
│   ├── practice-areas.ts # Static data for practice areas
│   └── testimonials.ts   # Client testimonials
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Utility helpers (e.g. cn() for classnames)
└── types/
    └── index.ts          # Shared TypeScript types
```

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint auto-fix
pnpm format       # Prettier format all files
pnpm type-check   # TypeScript type check (no emit)
pnpm release      # Interactive release + CHANGELOG update
pnpm release:dry  # Dry-run release to preview version bump
```

## Code Style Rules

- **No comments** unless the WHY is non-obvious (hidden constraints, workarounds).
- Prefer **named exports** over default exports for components.
- Use **`cn()` from `@/lib/utils`** for conditional class merging.
- Keep components **small and focused** — extract logic to hooks.
- All images must have `alt` attributes (enforced by eslint-plugin-jsx-a11y).
- Use **`type` imports** for TypeScript types: `import type { Foo } from "..."`.

## Bar Council of India Compliance

This website must comply with **Rule 36 of the Bar Council of India Rules** (as amended in 2008),
which governs what advocates may publish online.

### What is permitted

Advocates may maintain a website containing **only**:

- Name
- Contact details (address, phone, email)
- Professional and academic qualifications
- Areas of practice

### What is strictly prohibited

- Advertising or soliciting clients directly or indirectly
- Claiming rankings, ratings, or superiority over other advocates
- Testimonials or endorsements from clients
- Any content that could be construed as marketing or promotion

### Disclaimer popup (BCI requirement)

A **disclaimer modal** (`src/components/ui/disclaimer-modal.tsx`) is shown on every new browser session via `sessionStorage`. It blocks the page until the user actively accepts. This is standard practice across Indian law firm websites and signals that the site is informational, not promotional.

When writing any copy for this site:

- Use neutral, factual language — describe experience and qualifications, never rank or promote.
- Do not write phrases like "best lawyer", "top advocate", "award-winning", or "trusted by X clients".
- Frame everything as information the user is seeking voluntarily, not marketing directed at them.
- Never add call-to-action language like "hire us", "get a free consultation", or "contact us today".

Violation of Rule 36 can result in disciplinary proceedings under Section 35 of the Advocates Act, 1961.

## Domain Context

Rekha Nair practices law in Kerala. Key practice areas likely include:

- Civil litigation
- Family law / matrimonial disputes
- Property / land disputes
- Consumer forums
- High Court appearances (Kerala High Court)

When writing copy or placeholder content, use formal legal language appropriate for
the Kerala/Indian legal system.
