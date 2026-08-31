# Android 移动端实施方案（Capacitor + SQLite）

## 目标

将现有 Vite + React + TypeScript 宝可梦图鉴项目交付为可在 Android 手机上安装、离线可用、数据持久可靠的移动应用。当前阶段只考虑 Android，不纳入 iOS。

核心目标：

- 复用现有 React 图鉴界面和业务逻辑，避免重写为 React Native 或 Flutter。
- 使用 Capacitor 生成 Android 原生工程，并通过 WebView 承载现有前端产物。
- 使用 SQLite 替代关键业务数据的 `localStorage` 持久化。
- 让列表、搜索、筛选、收藏、队伍、战斗统计在弱网或离线场景下可用。
- 建立本地浏览器、本地 Android 模拟器、Android 真机三层验证流程。

非目标：

- 不处理 iOS 工程、TestFlight、Apple 审核。
- 不在第一阶段实现账号体系、云同步、推送通知。
- 不解决公开上架所需的 Pokémon IP 授权问题，只保留发布风险提示。

## 当前落地状态

截至 2026-05-12，仓库中已经完成 Android MVP 的主体实现：

- 已新增 `capacitor.config.ts`，Android 包名为 `com.pokedexzh.app`，应用名为 `宝可梦图鉴`。
- 已新增 `android/` Capacitor Android 工程。
- 已安装 Capacitor、Android、SQLite、状态栏、返回键、触觉反馈、文件系统和分享相关依赖。
- 已新增 `src/lib/storage/` SQLite 存储层，并为 Web 开发提供 `localStorage` 兜底。
- 已将收藏、收藏分组、队伍、战斗统计和 API 缓存迁移到异步 SQLite-backed repository。
- 已新增 `scripts/generate-pokemon-index.mjs` 和 `src/data/generated/pokemonIndex.ts`，列表、搜索、属性筛选、世代筛选和特殊形态筛选默认使用本地 1025 条索引。
- 已新增 `scripts/build-pokedex-data-db.mjs`，可生成只读 `pokedex_zh_data` SQLite 资料库、zip 更新包和 manifest。
- 已新增 `src/lib/pokedexData/`，支持预置资料库复制、远端 manifest 检查、SHA-256 校验、`PRAGMA integrity_check`、版本切换和资料库 repository 读取。
- 已新增 Android shell 接入，覆盖状态栏、Android 返回键和关键操作触觉反馈。
- 已将收藏导出接入 Android 文件系统和系统分享面板，Web 端保留浏览器下载兜底。
- 已新增 Android 备份规则，避免应用私有数据库被系统备份策略误处理。
- 已新增 release 签名支架和发布准备清单，真实 keystore 与密码不提交仓库。
- 已使用仓库根目录 `logo.png` 生成 Android legacy、round 和 adaptive launcher 图标资源。

仍需单独推进：

- 在真实 Android 测试机上执行本文档的完整验收矩阵并记录设备信息。
- 正式发布前完成真实 release keystore、隐私政策发布页、授权与商标风险评估。

## 当前项目评估

### 有利条件

- 应用入口简单，当前只有一个主路由，移动端封装复杂度低。
- 核心体验集中在 `src/components/Pokedex.tsx`，已有移动双面板切换、触摸按钮、`h-dvh` 布局和局部安全区处理。
- React Query 已经做了数据请求缓存策略，后续可以把底层缓存替换成 SQLite。
- 收藏、队伍、战斗统计的状态边界清晰，适合抽象为统一存储层。

### 历史问题与当前处理

- 图鉴列表、搜索、属性筛选、世代筛选已改为本地索引，不再依赖首屏实时请求 PokeAPI。
- 收藏、队伍、战斗统计和 API 缓存已经迁移到 SQLite-backed repository，并在 SQLite 不可用时回退到 Web 本地存储。
- `src/data/pokemon.ts` 仍保留类型、示例数据和图片 URL helper；完整列表索引来自 `src/data/generated/pokemonIndex.ts`。
- 远程图片、叫声仍依赖网络或浏览器/系统缓存。结构化详情和进化链可以通过预置或远端更新的 `pokedex_zh_data` 只读 SQLite 资料库离线读取；资料库缺失时回退到 PokeAPI + `api_cache`。

## 推荐技术路线

采用 Capacitor Android 壳：

```text
React/Vite Web App
  -> npm run build
  -> dist/
  -> Capacitor sync
  -> android/ 原生工程
  -> Android Studio / Gradle 打包 APK 或 AAB
```

推荐新增依赖：

```bash
npm i @capacitor/core @capacitor/android
npm i -D @capacitor/cli
npm i @capacitor-community/sqlite jeep-sqlite
npm i @capacitor/app @capacitor/status-bar @capacitor/haptics @capacitor/filesystem @capacitor/share
```

说明：

- `@capacitor-community/sqlite` 用于 Android SQLite 持久化。
- `jeep-sqlite` 只用于 Web 浏览器开发时模拟 SQLite，便于本地验证。
- `@capacitor/app` 用于 Android 返回键和生命周期事件。
- `@capacitor/status-bar` 用于状态栏颜色和沉浸式配置。
- `@capacitor/haptics` 用于关键按钮触觉反馈。
- `@capacitor/filesystem` 和 `@capacitor/share` 用于移动端收藏数据导入导出。

## 环境要求

本地开发机：

- Node.js：必须使用 Node 22 或更高版本。Capacitor 8 CLI 在 Node 22 以下会拒绝执行；仓库已通过 `.nvmrc` 和 `package.json#engines` 固化该要求。
- npm：继续沿用项目现有 npm 工作流。
- Android Studio：安装最新版稳定版。
- Android SDK：安装当前 Capacitor Android 文档要求的 SDK / Build Tools。
- JDK：优先使用 Android Studio 内置 JDK。
- 一台 Android 测试机：Android 10 及以上优先，至少一台中低端机更有价值。

本仓库当前检测到：

- 项目使用 Vite 5、React 18、TypeScript。
- `package.json` 已包含 Capacitor Android、SQLite 和常用原生能力依赖。
- 当前移动端方案沉淀在本文档，常用 Android 开发命令已同步到 README。

## 阶段一：Capacitor Android 基座

### 任务

1. 安装 Capacitor 依赖。
2. 初始化 Capacitor。
3. 配置 Android 应用 ID、应用名和 Web 产物目录。
4. 生成 Android 原生工程。
5. 建立常用脚本。

建议应用配置：

```ts
// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pokedexzh.app',
  appName: '宝可梦图鉴',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#d61f1f',
  },
};

export default config;
```

建议脚本：

```json
{
  "scripts": {
    "cap:add:android": "cap add android",
    "cap:sync": "npm run build && cap sync android",
    "cap:open:android": "cap open android",
    "android:run": "npm run build && cap run android",
    "android:debug:apk": "npm run cap:sync && cd android && ./gradlew assembleDebug",
    "android:release:aab": "npm run cap:sync && cd android && ./gradlew bundleRelease",
    "data:generate:pokemon-index": "node scripts/generate-pokemon-index.mjs",
    "mobile:verify": "node scripts/verify-mobile-android.mjs"
  }
}
```

### 注意事项

- `appId` 需要在正式发布前换成真实包名，例如 `com.yourorg.pokedexzh`。
- 首次执行 `cap add android` 后会新增 `android/` 目录，应纳入版本控制。
- `dist/` 是构建产物，不应纳入版本控制。
- Web 路由目前使用 `BrowserRouter`。由于当前只有 `/` 主路由，短期风险低；如后续增加深链或多页面路由，建议改成 `HashRouter` 或明确配置 Android 深链。

### 本阶段验收

- `npm run build` 成功。
- `npm run cap:sync` 成功。
- Android Studio 可以打开 `android/` 工程。
- 模拟器或真机可以安装启动应用。
- 首页图鉴壳体可以正常打开、切换左右面板。

## 阶段二：SQLite 存储层

### 目标

新增统一异步存储层，先兼容 Web 本地开发，再在 Android 真机使用原生 SQLite。

### 目录建议

```text
src/lib/storage/
  database.ts
  schema.ts
  migrations.ts
  kvStore.ts
  userDataRepository.ts
  apiCacheRepository.ts
  platform.ts
```

职责：

- `database.ts`：初始化 SQLite 连接、创建/关闭数据库。
- `schema.ts`：集中维护表结构和索引。
- `migrations.ts`：数据库版本迁移。
- `kvStore.ts`：简单键值数据读写。
- `userDataRepository.ts`：收藏、分组、队伍、战斗统计读写。
- `apiCacheRepository.ts`：PokeAPI 缓存读写。
- `platform.ts`：判断 Web / Android，决定使用 `jeep-sqlite` 还是原生 SQLite。

### 数据库命名

```text
逻辑数据库名: pokedex_zh
Android 实际文件名: pokedex_zhSQLite.db
```

说明：代码中 `DATABASE_NAME = 'pokedex_zh'`。`@capacitor-community/sqlite` 在 Android 端会把实际数据库文件落为 `pokedex_zhSQLite.db`，因此真机 adb 抽取和验证时应使用实际文件名。

### 表结构建议

```sql
CREATE TABLE IF NOT EXISTS app_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS kv_store (
  key TEXT PRIMARY KEY NOT NULL,
  value_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_pokemon (
  pokemon_id INTEGER PRIMARY KEY NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_group (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_group_member (
  group_id TEXT NOT NULL,
  pokemon_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (group_id, pokemon_id),
  FOREIGN KEY (group_id) REFERENCES favorite_group(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS saved_team (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  pokemon_ids_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS battle_record (
  id TEXT PRIMARY KEY NOT NULL,
  winner_id INTEGER NOT NULL,
  winner_name TEXT NOT NULL,
  loser_id INTEGER NOT NULL,
  loser_name TEXT NOT NULL,
  battle_mode TEXT NOT NULL,
  turns INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS pokemon_battle_stat (
  pokemon_id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  total_battles INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS api_cache (
  cache_key TEXT PRIMARY KEY NOT NULL,
  version INTEGER NOT NULL,
  value_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_api_cache_expires_at ON api_cache(expires_at);
CREATE INDEX IF NOT EXISTS idx_battle_record_created_at ON battle_record(created_at);
```

### 迁移策略

维护数据库版本：

```text
app_meta.schema_version = 1
```

第一版只做 `version 1` 初始化。后续字段改动必须通过迁移脚本升级，不直接改旧建表 SQL。

### localStorage 到 SQLite 的一次性迁移

迁移来源：

- `pokedex_favorites`
- `pokedex_favorite_groups`
- `pokedex_saved_teams`
- `pokedex-battle-stats`
- `pokedex-api-cache:*`

迁移流程：

1. App 启动时初始化 SQLite。
2. 读取 `app_meta.local_storage_migrated`。
3. 如果未迁移，读取现有 `localStorage` 数据。
4. 写入 SQLite，对异常条目跳过并记录日志。
5. 写入 `app_meta.local_storage_migrated = true`。
6. 不立即删除旧 `localStorage`，保留一个版本周期作为回滚缓冲。

### React Hook 改造

把同步 `localStorage` 初始化改成异步加载：

- `useFavorites` 初始返回空数组和 `isReady=false`。
- 数据库读取完成后设置收藏和分组。
- UI 在 `isReady=false` 时显示轻量骨架或保持禁用状态。

同样处理：

- `useSavedTeams`
- `useBattleStats`
- `apiCache`

### 本阶段验收

- Web 本地开发环境能使用 `jeep-sqlite` 正常读写。
- Android 真机重启应用后收藏、分组、队伍、战斗统计不丢失。
- 从旧 `localStorage` 数据升级到 SQLite 后数据完整。
- 断网状态下仍能读取 SQLite 中已有缓存数据。

## 阶段三：离线图鉴索引

### 目标

让核心浏览能力不依赖首屏实时请求 PokeAPI。

### 新增数据文件

```text
src/data/generated/pokemonIndex.ts
```

字段建议：

```ts
export interface LocalPokemonIndexItem {
  id: number;
  name: string;
  nameEn: string;
  types: PokemonType[];
  specialForms: PokemonSpecialFormKind[];
  generation: number;
  spriteUrl: string;
  artworkUrl: string;
}
```

### 数据生成方式

新增脚本：

```text
scripts/generate-pokemon-index.mjs
```

脚本职责：

- 拉取 PokeAPI 的 Pokémon、species、types 基础信息。
- 生成稳定的 TypeScript 数据文件。
- 保留中英文名称、属性、世代、特殊形态标记、图片 URL。
- 生成时写入 `generatedAt`，便于后续更新。

建议脚本：

```json
{
  "scripts": {
    "data:generate:pokemon-index": "node scripts/generate-pokemon-index.mjs"
  }
}
```

### 前端接入方式

- `PokemonGrid` 列表、搜索、属性筛选、世代筛选默认使用本地索引。
- `usePokemonDetail` 继续懒加载详情，并写入 SQLite `api_cache`。
- 图片第一版仍可使用远程 URL；第二版再评估热门图或全部缩略图的离线缓存。

### 本阶段验收

- 飞行模式下，已安装 App 可以打开并浏览完整列表索引。
- 搜索中文名、英文名、编号可用。
- 属性筛选、世代筛选可用。
- 点开未缓存详情时展示明确离线提示。
- 点开已缓存详情时可正常展示。

## 阶段三点五：可更新的只读资料库

### 目标

把本应用可见的 PokeAPI 结构化数据生成到只读 SQLite 资料库，并让 App 能在不影响用户数据的前提下更新资料库。

### 数据库分层

```text
pokedex_zh
  可写库：收藏、分组、队伍、战斗统计、设置、API 缓存、active_data_db 指针

pokedex_zh_data 或 pokedex_zh_data_<datasetVersion>
  只读库：列表项、详情、进化链、原始 PokeAPI JSON、data_meta
```

用户数据和资料库更新分离。更新失败时继续使用旧 `active_data_db`。

### 生成命令

```bash
npm run data:build:pokedex-db -- \
  --dataset-version 2026.05.14 \
  --remote-base-url https://cdn.example.com/pokedex
```

输出目录：

```text
public/assets/databases/
  pokedex_zh_data.db
  pokedex_zh_data_<datasetVersion>.db.zip
  pokedex_zh_data.manifest.json
  databases.json
```

`public/assets/databases/` 是构建产物目录，默认不提交仓库。Android/Web 预置复制依赖 `databases.json`，远端更新依赖 manifest。

### Manifest

```json
{
  "latestDatasetVersion": "2026.05.14",
  "schemaVersion": 1,
  "minAppVersion": "0.0.0",
  "url": "https://cdn.example.com/pokedex/pokedex_zh_data_20260514.db.zip",
  "sha256": "...",
  "sizeBytes": 12345678,
  "databaseName": "pokedex_zh_data_20260514",
  "databaseSha256": "...",
  "databaseSizeBytes": 23456789,
  "dataContentSha256": "...",
  "generatedAt": "2026-05-14T00:00:00.000Z",
  "source": "pokeapi",
  "maxPokemonId": 1025
}
```

### App 更新流程

1. 启动后 `PokedexDataUpdater` 静默尝试复制预置资料库。
2. 从 `VITE_POKEDEX_DATA_MANIFEST_URL` 或本地配置读取远端 manifest。
3. 当 `latestDatasetVersion` 大于当前 `data_meta.dataset_version` 时下载更新包。
4. 先按 manifest `sha256` 校验下载包内容。
5. 使用 SQLite 插件导入 `.db` 或 `.zip`。
6. 打开 staging DB，执行 `PRAGMA integrity_check`，并校验 `data_meta` 的版本、schema 和 `dataContentSha256`。
7. 校验通过后在 `pokedex_zh.app_meta.active_data_db` 切换当前资料库。

### 前端接入方式

- `usePokemonList`、范围列表、ID 列表优先读取资料库，缺失时回退到 TS 静态索引。
- `usePokemonDetail` 优先读取资料库，缺失时回退到 PokeAPI + `api_cache`。
- `EvolutionChain` 优先读取资料库，缺失时回退到现有 PokeAPI 请求和缓存。
- 图片和叫声仍以 URL 形式存储，不作为 SQLite BLOB 写入。

### 本阶段验收

- 生成命令能产出 `.db`、`.zip`、manifest 和 `databases.json`。
- manifest 的 `sha256` 对应实际发布的 `.zip`。
- App 离线时可从预置资料库读取详情和进化链。
- 远端 manifest 有新版本时，更新失败不影响旧资料库。
- 切换资料库不影响收藏、队伍和战斗统计。

## 阶段四：Android 原生体验

### Android 返回键

接入 `@capacitor/app`：

- 如果在右侧详情面板，返回键切回左侧列表。
- 如果在战斗/组队模式，返回键回到图鉴模式。
- 如果图鉴是打开状态，返回键关闭图鉴封面。
- 如果已经在封面状态，二次返回退出 App 或交给系统。

### 状态栏和安全区

接入 `@capacitor/status-bar`：

- 状态栏背景使用 Pokedex Red 或深红。
- Android 上避免内容被状态栏遮挡。
- 检查 `h-dvh` 在不同 WebView 版本下的实际高度。
- 对 `main` 和 Pokedex 外层增加统一 `safe-area` CSS 变量，而不是只在局部组件写 `env(safe-area-inset-bottom)`。

### 触觉反馈

接入 `@capacitor/haptics`：

- 打开图鉴。
- 切换左右面板。
- 收藏/取消收藏。
- 随机 Pokémon。
- 战斗开始、胜负结果。

触觉反馈要轻，不要在滚动、筛选列表每一项上触发。

### 文件导入导出

替换浏览器 Blob 下载：

- 导出：写入 JSON 文件到应用可访问目录，再调用系统分享。
- 导入：第一版可保留 Web 文件选择；如真机体验不稳定，再接 Android 文件选择插件。

### 本阶段验收

- Android 返回键行为符合预期。
- 顶部状态栏、底部导航栏、异形屏不遮挡内容。
- 触觉反馈只出现在关键操作。
- 收藏导出能通过系统分享面板发送 JSON。
- 导入旧 JSON 后收藏和分组正确写入 SQLite。

## 阶段五：构建与发布包

### Debug APK

用于开发和测试机快速安装：

```bash
npm run cap:sync
cd android
./gradlew assembleDebug
```

产物位置通常为：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

安装到连接的测试机：

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

### Release AAB

用于 Google Play 内测或正式发布：

```bash
npm run cap:sync
cd android
./gradlew bundleRelease
```

产物位置通常为：

```text
android/app/build/outputs/bundle/release/app-release.aab
```

发布前必须配置签名：

- 生成 release keystore。
- 配置 `android/gradle.properties` 或安全的本地签名配置。
- 不把 keystore 和密码提交到仓库。

## 本地验证方案

本地验证分为 Web 层、Capacitor 层、SQLite 层、Android 工程层。

### 1. Web 基础验证

命令：

```bash
npm run lint
npm run build
npm run dev
```

浏览器验证：

- 打开 `http://localhost:8080`。
- 图鉴封面可以打开。
- 左右面板切换正常。
- 搜索、属性筛选、世代筛选正常。
- 收藏、分组、队伍、战斗统计可读写。
- 刷新页面后数据仍存在。

### 2. SQLite Web 模拟验证

使用 `jeep-sqlite` 后验证：

- 首次启动创建数据库成功。
- `app_meta.schema_version` 正确。
- 收藏写入 `favorite_pokemon`。
- 分组写入 `favorite_group` 和 `favorite_group_member`。
- 队伍写入 `saved_team`。
- 战斗写入 `battle_record` 和 `pokemon_battle_stat`。
- API 缓存写入 `api_cache`。

建议新增调试入口，仅开发模式显示：

```text
window.__POKEDEX_DEBUG_DB__
```

能力：

- 打印数据库版本。
- 打印表记录数。
- 清理 API 缓存。
- 导出调试快照。

### 3. 离线索引验证

步骤：

1. 启动 Web 本地服务。
2. 打开图鉴并确认完整索引加载。
3. 在浏览器 DevTools 中切换 Offline。
4. 刷新页面。
5. 验证列表、搜索、筛选仍可用。
6. 点开未缓存详情，应显示离线提示。
7. 恢复网络后点开详情，应正常请求并缓存。
8. 再切 Offline，点开同一详情，应读取缓存。

### 4. Capacitor 构建验证

命令：

```bash
npm run build
npx cap sync android
npx cap open android
```

Android Studio 验证：

- Gradle Sync 成功。
- Debug 构建成功。
- 模拟器启动应用成功。
- Chrome DevTools 可以通过 `chrome://inspect` 调试 WebView。

## Android 真机验证方案

### 测试机准备

建议至少准备：

- Android 10-11 中低端机一台，验证性能和 WebView 兼容性。
- Android 13-15 主力机一台，验证现代权限、系统返回手势、状态栏和分享面板。
- 小屏机或窄屏机一台，验证图鉴控制台布局。

测试前准备：

```bash
adb devices
adb shell getprop ro.build.version.release
adb shell getprop ro.product.model
```

记录：

- 设备型号。
- Android 版本。
- WebView 版本。
- 屏幕尺寸和刷新率。
- 是否开启系统深色模式。

### 安装验证

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
adb shell monkey -p com.pokedexzh.app 1
```

检查：

- 应用图标显示正确。
- 冷启动不白屏超过 2 秒。
- 首屏加载动画正常。
- 没有崩溃弹窗。

日志观察：

```bash
adb logcat | grep -i capacitor
adb logcat | grep -i sqlite
```

### 功能验证清单

基础图鉴：

- 打开封面。
- 切换左侧列表和右侧详情。
- 随机 Pokémon。
- 关闭图鉴回到封面。
- 搜索中文名。
- 搜索英文名。
- 搜索编号。
- 属性筛选。
- 世代筛选。
- 特殊形态筛选。

详情：

- 打开默认 Pokémon 详情。
- 切换信息、能力、进化页签。
- 查看图片变体。
- 播放叫声。
- 语音播报。
- 网络失败时展示错误或缓存数据。

收藏与分组：

- 收藏一个 Pokémon。
- 取消收藏。
- 创建分组。
- 添加 Pokémon 到分组。
- 删除分组。
- 重启 App 后数据仍存在。
- 卸载 App 后数据清除符合预期。

队伍：

- 添加 6 个 Pokémon。
- 保存队伍。
- 加载队伍。
- 更新队伍。
- 删除队伍。
- 重启 App 后队伍仍存在。

战斗：

- 选择双方 Pokémon。
- 自动战斗。
- 手动战斗。
- 查看战斗统计。
- 清空统计。
- 重启 App 后统计保留。

导入导出：

- 导出收藏 JSON。
- 通过系统分享面板发送。
- 修改或准备旧 JSON。
- 导入 JSON。
- 导入非法 JSON 时显示错误。

### SQLite 真机验证

通过 App 内开发调试面板验证：

- 数据库可打开。
- 表结构版本为 1。
- 写入收藏后 `favorite_pokemon` 数量增加。
- 删除收藏后数量减少。
- 写入详情缓存后 `api_cache` 数量增加。
- 缓存过期清理可运行。

如需 adb 抽取数据库：

```bash
adb shell run-as com.pokedexzh.app ls databases
adb shell run-as com.pokedexzh.app cp databases/pokedex_zhSQLite.db files/pokedex_zhSQLite.db
adb exec-out run-as com.pokedexzh.app cat files/pokedex_zhSQLite.db > /tmp/pokedex_zhSQLite.db
sqlite3 /tmp/pokedex_zhSQLite.db ".tables"
```

注意：`run-as` 只适用于 debug 包或 debuggable 应用。

### 离线和弱网验证

飞行模式：

1. 打开 App，确认列表索引可用。
2. 搜索和筛选可用。
3. 打开已缓存详情可用。
4. 打开未缓存详情显示离线提示。
5. 收藏、分组、队伍、战斗统计仍可写入。

弱网：

```bash
adb shell settings put global http_proxy ""
```

也可以用 Android Studio Network Profiler 或系统网络限制工具模拟。

检查：

- 请求慢时 UI 不阻塞。
- 加载态清晰。
- 失败后能重试。
- 有旧缓存时优先展示旧缓存。

### 生命周期验证

- Home 键进入后台，再回到前台。
- 锁屏 1 分钟后解锁。
- 切换其他 App 后返回。
- 系统杀进程后重新打开。
- 旋转屏幕，如果不支持横屏，应保持竖屏或布局稳定。
- 连续快速点击收藏、随机、切换面板，不出现状态错乱。

### Android 返回键验证

场景：

- 右侧详情页按返回，回左侧列表。
- 战斗模式按返回，回图鉴详情或列表。
- 队伍模式按返回，回图鉴。
- 图鉴打开状态按返回，关闭到封面。
- 封面状态按返回，退出 App。

### 性能验证

使用真机观察：

- 冷启动到可交互时间。
- 首次打开列表是否掉帧。
- 搜索输入是否卡顿。
- 左右面板切换是否流畅。
- 图片加载是否导致布局跳动。
- 长列表滚动是否稳定。

建议目标：

- 中端 Android 机冷启动 3 秒内可交互。
- 已缓存数据下启动 1.5 秒内出现可操作界面。
- 搜索输入无明显卡顿。
- 常规面板切换动画 150-250ms。

## 验证记录模板

每次交付测试包时，在 PR 或测试记录中保留以下信息，便于回归定位：

| 项目 | 记录 |
| --- | --- |
| Git commit |  |
| APK 路径 | `android/app/build/outputs/apk/debug/app-debug.apk` |
| APK 大小 |  |
| 构建命令 | `npm run lint` / `npm run build` / `npm run cap:sync` / `./gradlew assembleDebug` |
| 构建结果 |  |
| 测试设备型号 |  |
| Android 版本 |  |
| WebView 版本 |  |
| 网络状态 | Wi-Fi / 蜂窝 / 飞行模式 / 弱网 |
| SQLite 验证结果 |  |
| Android 返回键结果 |  |
| 离线能力结果 |  |
| 已知问题 |  |

## 回归验证矩阵

每次合并移动端相关改动前执行：

```bash
npm run lint
npm run build
npm run mobile:verify
npm run cap:sync
cd android && ./gradlew assembleDebug
```

| 类别 | 本地 Web | Android 模拟器 | Android 真机 |
| --- | --- | --- | --- |
| lint/build | 必测 | 必测 | 不适用 |
| 图鉴打开/关闭 | 必测 | 必测 | 必测 |
| 搜索/筛选 | 必测 | 必测 | 必测 |
| 详情加载 | 必测 | 必测 | 必测 |
| 收藏/分组 SQLite | 必测 | 必测 | 必测 |
| 队伍 SQLite | 必测 | 必测 | 必测 |
| 战斗统计 SQLite | 必测 | 必测 | 必测 |
| 离线索引 | 必测 | 必测 | 必测 |
| Android 返回键 | 不适用 | 必测 | 必测 |
| 状态栏/安全区 | 不适用 | 必测 | 必测 |
| 分享导出 | 不适用 | 可测 | 必测 |
| 重启数据保留 | 可测 | 必测 | 必测 |

## 建议任务拆分

### 任务 1：Capacitor Android 初始化

- 安装 Capacitor 依赖。
- 新增 `capacitor.config.ts`。
- 新增 Android 工程。
- 新增 npm scripts。
- 通过模拟器启动。

验收：Debug APK 可安装启动。

### 任务 2：SQLite 基础设施

- 安装 SQLite 插件。
- 新增数据库初始化模块。
- 新增 schema 和 migration。
- Web 下接入 `jeep-sqlite`。
- Android 下接入原生 SQLite。

验收：Web 和 Android 都能创建数据库并读写 `kv_store`。

### 任务 3：用户数据迁移到 SQLite

- 改造 `useFavorites`。
- 改造 `useSavedTeams`。
- 改造 `useBattleStats`。
- 增加 `localStorage` 一次性迁移。

验收：真机重启后收藏、队伍、战斗统计不丢失。

### 任务 4：API 缓存迁移到 SQLite

- 改造 `apiCache`。
- 增加缓存过期清理。
- 增加读取过期缓存兜底。

验收：断网时可读取已有详情缓存。

### 任务 5：本地图鉴索引

- 新增数据生成脚本。
- 生成完整索引。
- 列表、搜索、筛选改用本地索引。

验收：飞行模式下完整列表、搜索、筛选可用。

### 任务 6：Android 原生体验

- 返回键。
- 状态栏。
- 安全区。
- 触觉反馈。
- 分享导出。

验收：真机验证通过。

### 任务 7：打包和测试文档

- 增加 Debug APK 构建说明。
- 增加 Release AAB 构建说明。
- 增加真机测试记录模板。
- 更新 README 的移动端开发入口。

验收：新人能按文档完成本地构建和真机安装。

## 风险与处理

### IP 和上架风险

当前项目使用 Pokémon 名称、图像和 Pokedex 概念。公开上架 Google Play 前需要单独评估授权、商标、图标、应用名、截图和免责声明。技术方案可以先完成测试包，但不要默认可以公开发布。

### 远程资源风险

图片和叫声来自远程资源，可能失败、变慢或被限制。第一版应保障核心数据离线可用，第二版再考虑资源离线包。

### SQLite 异步改造风险

现有 hooks 多数同步读取 `localStorage`。改成 SQLite 后会引入 `isReady`、加载态和错误态，需要避免初始空数据误覆盖数据库。

### 数据生成风险

生成完整索引时应固定数据版本，避免每次构建都实时请求外部 API。建议手动执行生成脚本并提交生成结果。

## 最小可交付版本定义

MVP 必须满足：

- Android Debug APK 可安装启动。
- 图鉴列表使用本地完整索引。
- 搜索、筛选、收藏、队伍、战斗统计可用。
- 收藏、分组、队伍、战斗统计存储在 SQLite。
- 已缓存详情可离线读取。
- Android 返回键符合预期。
- 真机重启后数据不丢。
- `npm run lint` 和 `npm run build` 通过。

## 参考资料

- Capacitor Android 文档：https://capacitorjs.com/docs/android
- Capacitor 环境配置：https://capacitorjs.com/docs/getting-started/environment-setup
- Capacitor 存储指南：https://capacitorjs.com/docs/guides/storage
- Capacitor Community SQLite：https://github.com/capacitor-community/sqlite
- PokeAPI：https://pokeapi.co/
