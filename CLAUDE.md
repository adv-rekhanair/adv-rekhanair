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

## Commit Convention

All commits must follow **Conventional Commits** — enforced by commitlint on every commit.

```
<type>(<scope>): <subject>

Types: feat | fix | docs | style | refactor | perf | test | build | ci | chore | revert
```

Examples:

- `feat(hero): add animated scroll indicator`
- `fix(contact): correct email validation regex`
- `docs: update practice areas copy`

## Code Style Rules

- **No comments** unless the WHY is non-obvious (hidden constraints, workarounds).
- Prefer **named exports** over default exports for components.
- Use **`cn()` from `@/lib/utils`** for conditional class merging.
- Keep components **small and focused** — extract logic to hooks.
- All images must have `alt` attributes (enforced by eslint-plugin-jsx-a11y).
- Use **`type` imports** for TypeScript types: `import type { Foo } from "..."`.

## Domain Context

Rekha Nair practices law in Kerala. Key practice areas likely include:

- Civil litigation
- Family law / matrimonial disputes
- Property / land disputes
- Criminal defence
- Consumer forums
- High Court appearances (Kerala High Court)

When writing copy or placeholder content, use formal legal language appropriate for
the Kerala/Indian legal system.
