# Pokédex ZH

[中文](./README.zh-CN.md)

An unofficial handheld Pokédex. The UI behaves like a device: browse, filter, collect, and inspect Pokémon, then build teams or run battle simulations.

**Live demo:** [https://pokedex.guoxudong.io/](https://pokedex.guoxudong.io/)

> This project is not affiliated with Nintendo, GAME FREAK, or The Pokémon Company, and is not officially licensed. See [NOTICE](./NOTICE).

## Features

- National Dex list, Chinese/English search, type / generation / special-form filters
- Details: stats, abilities, evolution, forms, moves, and Pokédex text
- Favorite groups, team builder, type chart, and battle simulation
- **Web:** talks to [PokeAPI](https://pokeapi.co/) directly
- **Android (optional):** Capacitor shell plus a local SQLite Pokédex database

## Quick start (Web)

This repo defaults to [Bun](https://bun.sh/). Bun 1.3+ is required.

```sh
git clone https://github.com/sunny0826/pokedex.git
cd pokedex
bun install
bun run dev
```

The dev server listens on `http://localhost:8080`.

```sh
bun run lint
bun run build
bun run preview
```

## Stack

- Vite 7 + React 18 + TypeScript
- Tailwind CSS + shadcn/Radix
- TanStack Query
- Capacitor Android + SQLite (native app only)

## Android (optional)

Android is not required to run the web app. To build for a device or emulator:

```sh
bun install
bun run lint
bun run data:build:pokedex-db
bun run build
bun run cap:sync
bun run android:debug:apk
```

Debug APK:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

More detail:

- [Local simulation and debugging](docs/android-local-simulation-debugging.md)
- [Install on a test device](docs/android-test-device-deploy.md)
- [Release readiness and privacy notes](docs/android-release-readiness.md)

Until a trademark and copyright review is done, **do not** ship this app to Google Play or other stores.

## Pokédex data packages (Android)

The offline database is Android-only. Generate it with:

```sh
bun run data:build:pokedex-db -- \
  --dataset-version 2026.05.14 \
  --remote-base-url https://cdn.example.com/pokedex
```

Artifacts are written to the ignored `public/assets/databases/` directory. Host the manifest and versioned `.zip`, then set `VITE_POKEDEX_DATA_MANIFEST_URL`. See `.env.example`.

## Deploy

The web app is at [https://pokedex.guoxudong.io/](https://pokedex.guoxudong.io/). Use the Vite preset with the repository root as the project root.

Optional environment variable:

| Variable | Purpose |
| --- | --- |
| `VITE_POKEDEX_DATA_MANIFEST_URL` | Android offline data-package update checks; not needed for web |

## Fonts and data

- UI font: [Ark Pixel](https://github.com/TakWolf/ark-pixel-font), SIL Open Font License 1.1, see `public/fonts/OFL.txt`
- Pokémon data and sprites come from [PokeAPI](https://pokeapi.co/)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Write commit messages and pull requests in English.

## License

Source code is released under the [MIT License](./LICENSE). Pokémon names, likenesses, cries, and official text remain with their rights holders and are outside the MIT grant. See [NOTICE](./NOTICE).
