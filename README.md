# Rekha Nair — Advocate Portfolio

Professional portfolio website for **Rekha Nair**, an advocate based in Kerala, India.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Linting**: ESLint 9 + Prettier
- **Git Hooks**: Husky + lint-staged
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/)

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9 — install with `npm i -g pnpm`

### Installation

```bash
# Clone the repository
git clone <https://github.com/adv-rekhanair/adv-rekhanair>
cd adv-rekhanair

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Then fill in the values in .env.local

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start dev server with Turbopack          |
| `pnpm build`        | Create production build                  |
| `pnpm start`        | Start production server                  |
| `pnpm lint`         | Run ESLint                               |
| `pnpm lint:fix`     | Run ESLint with auto-fix                 |
| `pnpm format`       | Format all files with Prettier           |
| `pnpm format:check` | Check formatting without writing         |
| `pnpm type-check`   | Run TypeScript type check                |
| `pnpm release`      | Create a release and update CHANGELOG    |
| `pnpm release:dry`  | Preview the next release without changes |

---

## Project Structure

```
src/
├── app/                  # App Router pages and layouts
│   ├── (home)/           # Home route group
│   ├── about/
│   ├── practice-areas/
│   ├── contact/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page-level sections
│   └── ui/               # Reusable UI primitives
├── config/
│   └── site.ts           # Site-wide configuration & metadata
├── data/                 # Static content data
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Shared utilities (cn, etc.)
└── types/
    └── index.ts          # Global TypeScript types
```

---

## Commit Convention

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via **commitlint**.
Non-conforming commits will be rejected by the `commit-msg` Husky hook.

```
<type>(<optional scope>): <subject>
```

### Allowed types

| Type       | Description                                      |
| ---------- | ------------------------------------------------ |
| `feat`     | A new feature                                    |
| `fix`      | A bug fix                                        |
| `docs`     | Documentation only changes                       |
| `style`    | Formatting, missing semicolons — no logic change |
| `refactor` | Code change that is neither a fix nor a feature  |
| `perf`     | Performance improvement                          |
| `test`     | Adding or updating tests                         |
| `build`    | Build system or dependency changes               |
| `ci`       | CI/CD configuration changes                      |
| `chore`    | Other changes that don't modify src or tests     |
| `revert`   | Reverts a previous commit                        |

**Examples:**

```bash
git commit -m "feat(hero): add animated scroll indicator"
git commit -m "fix(contact): correct email validation regex"
git commit -m "docs: update README with deployment guide"
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and populate the values.
**Never commit `.env.local` or any file containing real secrets.**

See [.env.example](.env.example) for all available variables.

---

## License

Private — all rights reserved. © Rekha Nair.
