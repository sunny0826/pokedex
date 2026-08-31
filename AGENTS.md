# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React + TypeScript Pokédex app. Application code lives under `src/`: route pages in `src/pages`, feature components in `src/components`, shadcn/Radix primitives in `src/components/ui`, hooks in `src/hooks`, shared helpers in `src/lib`, and static Pokémon/move data in `src/data`. Global styles are in `src/index.css` and `src/App.css`; Tailwind configuration is in `tailwind.config.ts`. Public static assets live in `public/`. Product and design context are documented in `PRODUCT.md` and `DESIGN.md`.

## Package Manager

This repository defaults to **Bun**. Use `bun.lockb` as the lockfile. Do not add `package-lock.json` or `yarn.lock`.

## Build, Test, and Development Commands

- `bun install`: install dependencies.
- `bun run dev`: start the Vite development server on port `8080`.
- `bun run build`: create a production build in `dist/`.
- `bun run build:dev`: build in development mode.
- `bun run preview`: preview the built app locally.
- `bun run lint`: run ESLint across the repository.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Prefer existing project patterns before adding abstractions. Keep component files in PascalCase, hooks as `useX.ts` or `useX.tsx`, and utility modules in camelCase. Use the `@/` alias for `src` imports. Follow the existing two-space indentation and Tailwind utility style. Use shadcn/Radix primitives for accessible interactive UI, lucide-react for icons, and `cn` from `src/lib/utils.ts` for conditional class names.

## Testing Guidelines

No automated test framework or `bun run test` script is currently configured. Before submitting changes, run `bun run lint` and `bun run build`. If you add tests, place them near the code they cover with names such as `Component.test.tsx` or `hook.test.ts`, and document the new test command in `package.json` and this file.

## Documentation Language

`README.md` is English. Keep the Chinese translation in `README.zh-CN.md`.

## Commit & Pull Request Guidelines

Write commit messages and pull request titles/descriptions in **English**. Use Conventional Commits with a short type and optional scope, for example `feat(pokedex): add filter control` or `fix(api): handle cache expiry`. Do not use Chinese in commit subjects or PR titles.

PRs should include a clear English summary, a linked issue when applicable, verification steps, and screenshots or screen recordings for UI changes, especially mobile layout changes.

## Agent-Specific Instructions

Do not overwrite unrelated local changes. Keep edits scoped, preserve the Pokédex device-like UI described in `DESIGN.md`, and verify user-facing changes with lint/build before handoff.
