# Contributing

Thanks for helping with Pokédex. This file covers local setup and how to send changes.

## Environment

- Bun 1.3+ (default package manager; lockfile is `bun.lockb`)
- Do not commit `package-lock.json` or `yarn.lock`

```sh
bun install
bun run dev
```

The dev server listens on port `8080`.

Before you open a pull request, run:

```sh
bun run lint
bun run build
```

## Layout

| Path | Contents |
| --- | --- |
| `src/pages` | Route pages |
| `src/components` | Feature components; `ui/` is shadcn/Radix primitives |
| `src/hooks` | React hooks |
| `src/lib` | Data, API, and platform split |
| `src/data` | Static data |
| `docs/` | Android build and debugging notes |

The web runtime talks to PokeAPI and does not use local SQLite. The Android shell still uses the local database. Keep those paths separate.

## Style

- TypeScript and React function components
- Two-space indentation
- PascalCase component files; hooks as `useX.ts` / `useX.tsx`
- Import `src/` through the `@/` alias
- Prefer existing shadcn/Radix controls and lucide-react icons
- Use `cn` from `src/lib/utils.ts` for conditional classes
- Keep the Pokédex device UI in `DESIGN.md`; do not turn it into a generic website layout

There is no `bun run test` script yet. If you add tests, keep them next to the code they cover (`Component.test.tsx` or `hook.test.ts`) and update `package.json` plus this file.

## Commits and pull requests

Write commit messages and pull requests in English. Use Conventional Commits, with an optional scope:

```text
feat(pokedex): add filter control
fix(api): handle cache expiry
docs(readme): add English getting-started section
```

Do not use Chinese in commit subjects or PR titles.

Each PR should include:

- An English summary
- A linked issue when there is one
- Verification: `bun run lint`, `bun run build`, and desktop vs narrow-screen notes for UI work
- Screenshots or a recording for UI changes, especially mobile layout

Do not commit:

- `node_modules/`, `dist/`, or `public/assets/databases/`
- Android signing files, `local.properties`, or real keystore passwords
- Local agent sessions such as `.impeccable/live/`

## Android changes

You only need the Android toolchain when changing the native shell or the offline database. Verify web features in the browser first. Android steps live in `docs/`.
