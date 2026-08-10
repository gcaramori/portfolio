# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router portfolio site written in TypeScript. Route entry points live in `app/`, including static pages such as `app/about/page.tsx` and dynamic routes such as `app/projects/[slug]/page.tsx`. Reusable UI is grouped by feature in `components/` (`components/topbar`, `components/projects`, `components/about`). Shared state lives in `contexts/`, and utility or content helpers live in `lib/`. Static assets, project images, and 3D files belong in `public/`.

## Build, Test, and Development Commands
- `npm run dev`: starts the local dev server at `http://localhost:3000` with Turbopack, which is the Next.js 16 default.
- `npm run build`: creates the production build and catches type or route-level build issues.
- `npm run start`: serves the production build locally after `npm run build`.
- `npm run lint`: runs ESLint with the Next.js flat config (`core-web-vitals` and TypeScript rules).

## Coding Style & Naming Conventions
Use TypeScript for all new code. Follow the existing Prettier config: 2-space indentation, single quotes, no semicolons, 80-character line target. Prefer the `@/` path alias from `tsconfig.json` for cross-folder imports. Export React components in PascalCase, keep route files named `page.tsx`, and keep feature-local component filenames lowercase to match the current structure, such as `components/topbar/topbar.tsx`.

## Testing Guidelines
There is no dedicated test runner configured yet. At minimum, run `npm run lint` and a manual browser check before opening a PR. When adding non-trivial logic in `lib/` or interactive components, add tests alongside the change if you introduce a test framework, and note the command in `package.json`.

## Commit & Pull Request Guidelines
Recent history uses vague subjects like `working on...`; do not continue that pattern. Write short, imperative commit messages that describe the change, for example `Add localized project details` or `Fix topbar navigation state`. PRs should include a clear summary, linked issue if applicable, screenshots or short recordings for UI changes, and a brief validation note listing commands run.

## Configuration Notes
Do not commit secrets. Keep environment-specific values in local env files, and treat `public/computer` and `public/projects` assets as source content that should be optimized before committing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` - verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
