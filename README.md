# 宝可梦图鉴

[English](./README.en.md)

非官方掌上宝可梦图鉴。浏览器里像一台图鉴设备：浏览、筛选、收藏、查看详情，也可以组队和模拟对战。

**在线演示：** [https://pokedex.guoxudong.io/](https://pokedex.guoxudong.io/)

> 本项目与 Nintendo、GAME FREAK、The Pokémon Company 无关，未获官方授权。详见 [NOTICE](./NOTICE)。

## 功能

- 全国图鉴列表、中英文搜索、属性 / 世代 / 特殊形态筛选
- 详情：能力值、特性、进化、形态、招式与图鉴文本
- 收藏分组、队伍构建、属性相克与对战模拟
- **Web：** 直接请求 [PokeAPI](https://pokeapi.co/)
- **Android（可选）：** Capacitor 壳 + 本地 SQLite 离线图鉴库

## 快速开始（Web）

本项目默认使用 [Bun](https://bun.sh/)。需要 Bun 1.3+。

```sh
git clone https://github.com/sunny0826/pokedex-zh.git
cd pokedex-zh
bun install
bun run dev
```

开发服务器默认 `http://localhost:8080`。

```sh
bun run lint
bun run build
bun run preview
```

## 技术栈

- Vite 7 + React 18 + TypeScript
- Tailwind CSS + shadcn/Radix
- TanStack Query
- Capacitor Android + SQLite（仅原生应用）

## Android（可选）

Android 不是运行 Web 版的前提。真机或模拟器构建：

```sh
bun install
bun run lint
bun run data:build:pokedex-db
bun run build
bun run cap:sync
bun run android:debug:apk
```

Debug APK：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

更完整的说明：

- [本地模拟与调试](docs/android-local-simulation-debugging.md)
- [测试机安装](docs/android-test-device-deploy.md)
- [发布准备与隐私注意](docs/android-release-readiness.md)

在完成商标与版权评估前，**不建议**把本应用上架 Google Play 或国内应用商店。

## 图鉴数据包（Android）

离线库只给 Android 用。生成：

```sh
bun run data:build:pokedex-db -- \
  --dataset-version 2026.05.14 \
  --remote-base-url https://cdn.example.com/pokedex
```

产物写在已忽略的 `public/assets/databases/`。把 manifest 和版本化 `.zip` 放到静态托管后，设置 `VITE_POKEDEX_DATA_MANIFEST_URL`。模板见 `.env.example`。

## 部署

前端部署在 [https://pokedex.guoxudong.io/](https://pokedex.guoxudong.io/)。框架选 Vite，根目录为仓库根目录。

可选环境变量：

| 变量 | 用途 |
| --- | --- |
| `VITE_POKEDEX_DATA_MANIFEST_URL` | Android 离线资料库更新检查；纯 Web 不需要 |

## 字体与数据

- UI 字体 [Ark Pixel](https://github.com/TakWolf/ark-pixel-font)，SIL Open Font License 1.1，见 `public/fonts/OFL.txt`
- 宝可梦数据与精灵图来自 [PokeAPI](https://pokeapi.co/)

## 贡献

见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 许可

源代码以 [MIT License](./LICENSE) 发布。宝可梦名称、形象、叫声和官方文本的权利仍归其权利人，不在 MIT 范围内。详见 [NOTICE](./NOTICE)。
