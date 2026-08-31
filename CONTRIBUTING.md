# 贡献指南

感谢你愿意给宝可梦图鉴提改动。下面是本地开发和提交时的约定。

## 环境

- Bun 1.3+（默认包管理器，锁文件是 `bun.lockb`）
- 不要提交 `package-lock.json` 或 `yarn.lock`

```sh
bun install
bun run dev
```

开发服务器默认端口 `8080`。

提交前至少跑：

```sh
bun run lint
bun run build
```

## 项目结构

| 路径 | 内容 |
| --- | --- |
| `src/pages` | 路由页面 |
| `src/components` | 功能组件；`ui/` 是 shadcn/Radix 基础件 |
| `src/hooks` | React hooks |
| `src/lib` | 数据、API、平台分流 |
| `src/data` | 静态资料 |
| `docs/` | Android 构建与调试说明 |

Web 运行时走 PokeAPI，不使用本地 SQLite。Android 原生壳仍使用本地库，改动时不要把两条路径缠在一起。

## 代码风格

- TypeScript + React 函数组件
- 两空格缩进
- 组件文件 PascalCase，hooks 为 `useX.ts` / `useX.tsx`
- 源码用 `@/` 别名引用 `src/`
- 交互控件优先用现有 shadcn/Radix，图标用 lucide-react
- 条件 class 用 `src/lib/utils.ts` 的 `cn`
- 保持 `DESIGN.md` 里的图鉴设备界面，不要改成普通网站布局

目前没有 `bun run test`。如果新增测试，放在被测代码附近，命名如 `Component.test.tsx` 或 `hook.test.ts`，并同步更新 `package.json` 与本文件。

## 提交与 PR

使用 Conventional Commits，可带范围：

```text
feat(pokedex): add filter control
fix(api): handle cache expiry
docs(readme): add English getting-started section
```

PR 请包含：

- 改动摘要
- 关联 issue（如有）
- 验证步骤：`bun run lint`、`bun run build`，涉及 UI 时说明桌面和窄屏表现
- UI 改动附截图或录屏，尤其是移动布局

请不要提交：

- `node_modules/`、`dist/`、`public/assets/databases/`
- Android 签名文件、`local.properties`、真实 keystore 密码
- `.impeccable/live/` 等本地 agent 会话

## Android 相关改动

只有在确实要改原生壳或离线库时才需要 Android 工具链。Web 功能请先在浏览器验证。Android 步骤见 `docs/`。
