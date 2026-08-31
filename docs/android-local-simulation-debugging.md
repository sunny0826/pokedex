# Android 本地模拟运行与调试指南

本文档说明如何在本机完整模拟本项目的 Android 应用运行效果，并说明每个工具的作用、适用场景和预期结果。本文面向当前仓库的 Capacitor Android 实现，不是通用 Android 入门教程。

## 当前项目基线

- Web 技术栈：Vite + React + TypeScript。
- Android 容器：Capacitor Android。
- Android 包名：`com.pokedexzh.app`。
- 应用名：`宝可梦图鉴`。
- Web 构建产物目录：`dist`。
- Android 原生工程目录：`android/`。
- Debug APK 输出：`android/app/build/outputs/apk/debug/app-debug.apk`。
- SQLite 逻辑库名：`pokedex_zh`。
- Android SQLite 实际文件名：`pokedex_zhSQLite.db`。
- Node 要求：`>=22.0.0`，仓库 `.nvmrc` 已固定为 `22`。

相关配置文件：

- `package.json`：项目脚本、Capacitor 和 Android 依赖。
- `capacitor.config.ts`：Capacitor 应用 ID、应用名、`webDir`、Android 状态栏和 SQLite 插件配置。
- `android/`：Capacitor 生成的 Android 原生工程。
- `src/lib/storage/`：SQLite-backed 存储层。

## 模拟目标

本地模拟需要覆盖三类效果：

1. Web 侧快速调试：验证 React 页面、样式、列表、筛选、搜索、详情等交互。
2. Android 壳内运行：验证 WebView、Capacitor 插件、Android 返回键、状态栏、触觉反馈、分享面板和 SQLite。
3. 接近发布包的行为：验证打包后的 `dist` 被复制到 APK，应用可以在无开发服务器的情况下启动。

不同模拟方式的可信度不同：

| 方式 | 速度 | 接近真实 APK | 适合验证 | 不适合验证 |
| --- | --- | --- | --- | --- |
| 浏览器 `bun run dev` | 最快 | 低 | UI、路由、数据展示、基础交互 | Android WebView、原生插件、APK 离线启动 |
| Capacitor 静态包 `npx cap run android` | 中等 | 高 | APK 运行、SQLite、返回键、分享、状态栏 | 高频 UI 改动实时预览 |
| Capacitor live reload | 快 | 中 | Android 壳 + Web 热更新联调 | 离线启动、最终包资源路径 |
| Android Studio Run | 中等 | 高 | 原生工程、Logcat、模拟器管理、Gradle 问题 | 纯 Web UI 高频迭代 |
| ADB 手动安装 APK | 中等 | 高 | 已构建 APK 安装、覆盖升级、启动验证 | 自动同步 Web 改动 |

## 工具与作用

| 工具 | 作用 | 本项目中的用途 | 正常预期 |
| --- | --- | --- | --- |
| `bun` | JS 运行时和包管理器 | `bun install`、`bun run dev`、`bun run build`、`bun run cap:sync` | `bun -v` 显示 1.3+ |
| Vite | Web 开发服务器和构建器 | `bun run dev`、`bun run build` | 本地 Web 可访问，`dist/` 可生成 |
| Capacitor CLI | 同步 Web 产物到 Android 并运行原生项目 | `npx cap sync android`、`npx cap run android` | 识别 6 个 Android 插件并完成 copy/update |
| Android Studio | Android IDE、SDK 管理、模拟器管理、Logcat | 打开 `android/` 工程、创建模拟器、运行 App | 可以启动模拟器并运行 `app` |
| Android SDK Manager | 安装 SDK 包 | 安装 `platforms;android-36`、`build-tools`、`platform-tools`、`emulator`、system image | SDK 目录包含对应组件 |
| Android Emulator | 本地 Android 虚拟设备 | 运行 `pokedex_api36` 等 AVD | `emulator -list-avds` 能看到设备 |
| ADB | 与模拟器或真机通信 | 安装 APK、启动 App、查日志、抽取 SQLite | `adb devices` 显示 `device` |
| Gradle Wrapper | Android 构建 | `android/gradlew assembleDebug` | 生成 `app-debug.apk` |
| Chrome DevTools | 调试 Android WebView | `chrome://inspect/#devices` | 能看到 `com.pokedexzh.app` WebView |
| Logcat | 查看 Android 日志 | 排查崩溃、WebView、Capacitor、SQLite 问题 | 无 `Fatal Exception` / `AndroidRuntime` |
| `sqlite3` | 本机查看抽取出的 SQLite 数据库 | 检查收藏、队伍、缓存等表 | 能看到项目预期表结构 |

## 环境安装与检查

### 1. Bun

本项目默认使用 Bun。在仓库根目录执行：

```bash
cd /path/to/pokedex-zh
bun -v
bun install
```

预期：

- `bun -v` 显示 `1.3.x` 或更高。
- `bun install` 完成，无阻断性错误。

如果 Capacitor CLI 提示需要 Node.js >=22：

```text
The Capacitor CLI requires NodeJS >=22.0.0
```

再安装 Node 22（仓库 `.nvmrc` 已指定），然后：

```bash
nvm install 22
nvm use
```

### 2. Android Studio

推荐安装官方 Mac ARM 版 Android Studio。安装完成后应用路径通常是：

```text
/Applications/Android Studio.app
```

如果使用 Homebrew：

```bash
brew install --cask android-studio
```

首次启动：

```bash
open "/Applications/Android Studio.app"
```

安装向导中保持默认 SDK 路径即可：

```text
$HOME/Library/Android/sdk
```

如果 `bun run cap:open:android` 提示找不到 Android Studio：

```bash
export CAPACITOR_ANDROID_STUDIO_PATH="/Applications/Android Studio.app"
bun run cap:open:android
```

### 3. Android SDK 与模拟器组件

设置终端环境变量：

```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
```

建议写入 `~/.zshrc` 后执行：

```bash
source ~/.zshrc
```

安装必要 SDK 包：

```bash
sdkmanager --install "platform-tools"
sdkmanager --install "platforms;android-36"
sdkmanager --install "build-tools;36.0.0"
sdkmanager --install "emulator"
sdkmanager --install "system-images;android-36;google_apis;arm64-v8a"
yes | sdkmanager --licenses
```

检查：

```bash
adb version
emulator -list-avds
ls "$ANDROID_HOME/emulator"
```

预期：

- `adb version` 能输出版本。
- `ls "$ANDROID_HOME/emulator"` 能看到 emulator 相关文件。
- 如果还没有创建 AVD，`emulator -list-avds` 可以暂时为空。

如果 `npx cap run android` 报错：

```text
ERR_SDK_PACKAGE_NOT_FOUND: SDK package not found by location:
$HOME/Library/Android/sdk/emulator
```

说明 SDK 缺少 Emulator 包，执行：

```bash
sdkmanager --install "emulator"
```

### 4. 创建 Android 模拟器

使用命令行创建：

```bash
avdmanager create avd \
  -n pokedex_api36 \
  -k "system-images;android-36;google_apis;arm64-v8a" \
  -d pixel_8
```

如果你明确需要 Play Store 镜像，可以把 system image 换成 `system-images;android-36;google_apis_playstore;arm64-v8a`，前提是本机 SDK 源中能列出该包。

启动：

```bash
emulator -avd pokedex_api36
```

也可以在 Android Studio 中创建：

```text
Tools -> Device Manager -> Create device
```

推荐：

- Device：Pixel 8 或 Pixel 7。
- System Image：API 36，ARM64。
- AVD Name：`pokedex_api36`。

检查模拟器在线：

```bash
adb devices -l
```

预期看到类似：

```text
emulator-5554 device product:sdk_gphone64_arm64 model:sdk_gphone64_arm64
```

## 模拟流程一：浏览器快速调试

用途：

- 最快验证 React 页面和 CSS。
- 适合搜索、筛选、详情页、布局、基础状态管理。
- 不验证真实 Android WebView 和 Capacitor 原生插件。

命令：

```bash
cd /path/to/pokedex-zh
bun run dev
```

打开：

```text
http://localhost:8080
```

预期效果：

- 首页正常显示宝可梦图鉴设备界面。
- 点击进入图鉴后可以看到全国图鉴列表。
- 中文、英文、编号搜索正常。
- 属性、世代、特殊形态筛选正常。
- 详情页、收藏、队伍、战斗相关基础交互可操作。

注意：

- Web 端 SQLite 通过 `jeep-sqlite` 模拟，行为不等同于 Android 原生 SQLite。
- Android 返回键、触觉反馈、系统分享面板、状态栏颜色不能在普通浏览器中完整验证。

## 模拟流程二：静态 APK 模拟器运行

用途：

- 最接近真实安装包。
- 验证 `dist` 已打入 APK。
- 验证 Android WebView、Capacitor 插件、SQLite、返回键、状态栏、分享面板。

完整命令：

```bash
cd /path/to/pokedex-zh
bun run lint
bun run build
bun run cap:sync
npx cap run android
```

也可以直接使用项目脚本构建 APK：

```bash
bun run android:debug:apk
```

再手动安装：

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
adb shell monkey -p com.pokedexzh.app 1
```

预期命令输出：

- Capacitor 完成 `Copying web assets from dist`。
- Capacitor 识别以下 Android 插件：
  - `@capacitor-community/sqlite`
  - `@capacitor/app`
  - `@capacitor/filesystem`
  - `@capacitor/haptics`
  - `@capacitor/share`
  - `@capacitor/status-bar`
- Gradle build 成功。
- 应用被部署到 `pokedex_api36` 或当前在线设备。

预期模拟器效果：

- 桌面出现 `宝可梦图鉴` 应用图标。
- 启动后无长时间白屏或崩溃。
- 状态栏颜色与应用红色主题一致。
- 点击、切换、收藏等操作正常。
- Android 返回键可以从图鉴深层界面返回上一级状态。
- 收藏、队伍、战斗记录写入后，强停再启动仍保留。
- 无开发服务器时也可以启动，说明静态资源已随 APK 打包。

强停和重启：

```bash
adb shell am force-stop com.pokedexzh.app
adb shell monkey -p com.pokedexzh.app 1
```

清理应用数据：

```bash
adb shell pm clear com.pokedexzh.app
```

注意：`pm clear` 会删除应用私有 SQLite 数据。

## 模拟流程三：Capacitor live reload 联调

用途：

- 在真实 Android WebView 壳内调试 Web 页面。
- 适合高频 UI 和交互改动。
- 比静态 APK 快，但不等同于最终离线 APK。

先启动 Vite：

```bash
cd /path/to/pokedex-zh
bun run dev -- --host 0.0.0.0 --port 8080
```

再运行 Android：

```bash
npx cap run android --live-reload --host localhost --port 8080 --forwardPorts 8080:8080
```

如果不使用 `adb reverse`，模拟器访问宿主机通常使用：

```text
http://10.0.2.2:8080
```

对应命令是：

```bash
npx cap run android --live-reload --host 10.0.2.2 --port 8080
```

预期效果：

- 应用仍运行在 Android 模拟器里。
- Web 页面内容从本机 Vite dev server 加载。
- 修改 React/CSS 后，模拟器中的页面可以热更新或快速刷新。
- Capacitor 插件仍可在 Android 壳中调用。

限制：

- 无法验证最终 APK 是否包含正确静态资源。
- 无法验证无网络或无开发服务器时的启动效果。
- 如果本机防火墙、代理或网络策略阻止模拟器访问宿主机，页面可能白屏。

排查：

```bash
adb shell am force-stop com.pokedexzh.app
adb shell monkey -p com.pokedexzh.app 1
adb logcat -d -t 300 | grep -iE "chromium|capacitor|err_cleartext|failed"
```

如果 live reload 长期不可用，优先使用静态 APK 流程，可信度更高。

## 模拟流程四：Android Studio 调试

用途：

- 管理 SDK、模拟器和系统镜像。
- 查看 Logcat。
- 调试 Gradle、Manifest、资源、原生工程问题。
- 用 IDE Run/Debug 启动 App。

打开工程：

```bash
cd /path/to/pokedex-zh
bun run cap:open:android
```

或手动打开：

```text
Android Studio -> Open -> /path/to/pokedex-zh/android
```

预期：

- Android Studio 可以识别 Gradle project。
- Run configuration 中可以选择 `app`。
- Device Manager 中能启动 `pokedex_api36`。
- 点击 Run 后应用安装并启动。
- Logcat 可以筛选 `com.pokedexzh.app`。

如果 Android Studio 无法打开：

```bash
ls "/Applications/Android Studio.app"
export CAPACITOR_ANDROID_STUDIO_PATH="/Applications/Android Studio.app"
bun run cap:open:android
```

## 调试入口

### 1. WebView 调试

在 Chrome 打开：

```text
chrome://inspect/#devices
```

预期：

- 能看到 Android 模拟器或真机。
- 能看到 `com.pokedexzh.app` 下的 WebView。
- 点击 `inspect` 后可以使用 Console、Network、Sources、Application 面板。

适合排查：

- JS 运行时错误。
- 网络请求失败。
- 静态资源路径错误。
- CSS 和布局问题。
- localStorage / IndexedDB / Web SQL 相关 Web 侧状态。

### 2. Android 日志

查看实时日志：

```bash
adb logcat | grep -iE "pokedex|capacitor|sqlite|chromium|AndroidRuntime|Fatal Exception"
```

查看最近日志：

```bash
adb logcat -d -t 500 | grep -iE "AndroidRuntime|Fatal Exception|sqlite|capacitor|chromium"
```

预期：

- 没有 `Fatal Exception`。
- 没有 `AndroidRuntime` 崩溃堆栈。
- 没有 SQLite 初始化失败或 schema 执行失败。

### 3. 进程和前台 Activity

检查进程：

```bash
adb shell pidof com.pokedexzh.app
```

检查前台 Activity：

```bash
adb shell dumpsys activity activities | grep -E "mResumedActivity|topResumedActivity"
```

预期：

- `pidof` 返回进程 ID。
- 前台 Activity 是 `com.pokedexzh.app/.MainActivity`。

### 4. SQLite 数据验证

确认数据库：

```bash
adb shell run-as com.pokedexzh.app ls databases
```

抽取数据库：

```bash
adb shell run-as com.pokedexzh.app cp databases/pokedex_zhSQLite.db files/pokedex_zhSQLite.db
adb exec-out run-as com.pokedexzh.app cat files/pokedex_zhSQLite.db > /tmp/pokedex_zhSQLite.db
```

查看表：

```bash
sqlite3 /tmp/pokedex_zhSQLite.db ".tables"
sqlite3 /tmp/pokedex_zhSQLite.db "select key, value from app_meta;"
```

预期至少包含：

```text
app_meta
kv_store
favorite_pokemon
favorite_group
favorite_group_member
saved_team
battle_record
pokemon_battle_stat
api_cache
```

验证收藏持久化示例：

```bash
sqlite3 /tmp/pokedex_zhSQLite.db "select * from favorite_pokemon order by pokemon_id;"
```

预期：

- 收藏宝可梦后表中出现对应 `pokemon_id`。
- 强停并重新启动应用后，记录仍存在。

## 推荐日常工作流

### UI 快速开发

```bash
bun run dev
```

预期：

- 在浏览器快速完成 UI 和交互修改。
- 修改后立即反馈。

完成一组改动后再进入 Android 壳验证：

```bash
bun run build
bun run cap:sync
npx cap run android
```

### Android 行为调试

```bash
bun run build
bun run cap:sync
npx cap run android
adb logcat | grep -iE "pokedex|capacitor|sqlite|AndroidRuntime|Fatal Exception"
```

预期：

- 应用安装并启动。
- 返回键、SQLite、分享、触觉反馈、状态栏表现符合预期。
- 日志中无崩溃。

### 发布前本地验证

```bash
bun run lint
bun run build
bun run cap:sync
bun run android:debug:apk
bun run mobile:verify
```

预期：

- ESLint 通过。
- Vite build 通过。
- Capacitor sync 成功。
- Debug APK 生成。
- `mobile:verify` 的移动端结构检查通过。

## 模拟验收清单

每次认为“Android 本地模拟通过”时，至少确认：

| 验收项 | 预期 |
| --- | --- |
| APK 安装 | `adb install -r` 成功或 `npx cap run android` 部署成功 |
| 冷启动 | 无崩溃、无长时间白屏 |
| 首屏 | 图鉴设备界面完整显示 |
| 图鉴列表 | 能看到全国图鉴和宝可梦条目 |
| 搜索 | 中文、英文、编号搜索正常 |
| 筛选 | 属性、世代、特殊形态筛选正常 |
| 详情页 | 能打开宝可梦详情并返回 |
| Android 返回键 | 深层界面返回到上一级，不直接异常退出 |
| 收藏 | 收藏写入成功 |
| 持久化 | 强停重启后收藏仍存在 |
| 队伍 | 保存、加载、删除正常 |
| 战斗记录 | 自动或手动记录能写入统计 |
| 分享 | 收藏导出可以唤起 Android 分享面板 |
| 离线 | 已缓存详情可打开，未缓存详情给出可理解反馈 |
| 日志 | 最近日志无 `Fatal Exception` / `AndroidRuntime` |
| SQLite | `pokedex_zhSQLite.db` 存在且表结构完整 |

## 常见问题

### Node 版本不足

现象：

```text
The Capacitor CLI requires NodeJS >=22.0.0
```

处理：

```bash
nvm install 22
nvm use
node -v
```

### 缺少 Android Emulator 包

现象：

```text
ERR_SDK_PACKAGE_NOT_FOUND: SDK package not found by location:
$HOME/Library/Android/sdk/emulator
```

处理：

```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
sdkmanager --install "emulator"
```

### 找不到 Android Studio

现象：

```text
Unable to launch Android Studio. Is it installed?
Attempted to open Android Studio at: /Applications/Android Studio.app
```

处理：

```bash
ls "/Applications/Android Studio.app"
export CAPACITOR_ANDROID_STUDIO_PATH="/Applications/Android Studio.app"
bun run cap:open:android
```

如果路径不存在，先安装 Android Studio。

### ADB 看不到设备

处理：

```bash
adb kill-server
adb start-server
adb devices -l
```

模拟器未启动时：

```bash
emulator -list-avds
emulator -avd pokedex_api36
```

### ADB smartsocket 权限错误

现象：

```text
could not install *smartsocket* listener: Operation not permitted
```

处理：

- 换到普通 macOS Terminal、iTerm 或 Android Studio Terminal 执行。
- 不要在受限沙箱终端里运行 `adb install`、`npx cap run android` 这类需要本地 socket 的命令。

### Web 修改没有出现在模拟器里

静态 APK 流程需要重新构建和同步：

```bash
bun run build
bun run cap:sync
npx cap run android
```

如果只是 UI 高频联调，使用 live reload 流程。

### 安装时报签名不兼容

现象通常是设备上已有同包名但不同签名的应用：

```text
INSTALL_FAILED_UPDATE_INCOMPATIBLE
```

处理：

```bash
adb uninstall com.pokedexzh.app
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

注意：`adb uninstall` 会删除应用私有数据。

## 记录模板

每次完成一轮本地模拟，可以记录：

```text
日期:
Git commit:
Node 版本:
Android Studio 版本:
Android SDK:
AVD 名称:
Android API:
APK 路径:
安装方式:
启动结果:
Chrome inspect:
Logcat 异常:
SQLite 表检查:
收藏持久化:
返回键:
离线/弱网:
结论:
```

APK 校验值：

```bash
shasum -a 256 android/app/build/outputs/apk/debug/app-debug.apk
```

## 相关文档

- `docs/android-test-device-deploy.md`：真机测试包安装与基础验证。
- `docs/android-mobile-sqlite-plan.md`：Android + SQLite 实施方案。
- `docs/android-mobile-verification-report.md`：已有移动端验证记录。
- `docs/android-release-readiness.md`：发布签名、隐私和上架风险清单。
