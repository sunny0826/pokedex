# Android 移动端实施验证报告

本文是历史验证记录。设备标识已替换为占位符，不代表当前发布状态。

## 验证范围

- Android-only
- SQLite 持久化
- 本地索引列表
- Capacitor Android 壳
- 本地构建与 APK 打包

## 已通过项

- `npm run lint`
- `npm run build`
- `npm run cap:sync`
- `npm run mobile:verify`
- `cd android && ./gradlew assembleDebug`
- `cd android && ./gradlew bundleRelease`

## 2026-05-12 复核结果

- `npm run lint`: 通过。
- `npm run build`: 通过。
- `PATH=/opt/homebrew/bin:$PATH npm run cap:sync`: 通过，Capacitor 识别 6 个 Android 插件。
- `npm run mobile:verify`: 通过，53 项检查全部通过。
- `./gradlew assembleDebug`: 通过。当前环境使用临时 JDK `Temurin-21.0.11`、Android SDK `/private/tmp/pokedex-android-sdk`、Gradle home `/private/tmp/pokedex-gradle`。
- `./gradlew bundleRelease`: 通过。当前环境同上。
- 产物大小复核：
  - `android/app/build/outputs/apk/debug/app-debug.apk`: `27359817` bytes
  - `android/app/build/outputs/bundle/release/app-release.aab`: `14986886` bytes

环境注意：

- 默认 shell 当前是 Node `v21.7.3`，无法直接运行 Capacitor 8 CLI；已在 `.nvmrc`、`package.json#engines`、README 和实施方案中固化 Node `>=22.0.0` 要求。
- 默认系统 Java 当前是 Java 8，无法运行 Android Gradle Plugin 8.13；本次复核通过临时 JDK 21 完成 Gradle 构建。长期本地开发建议安装 Android Studio 自带 JBR 或 JDK 21。
- 新增 release signing 支架后，当前沙箱内复跑 Gradle 会因 `FileLockContentionHandler` 本地 socket 被拒绝而失败；需要在正常终端或 Android Studio 中重跑 `./gradlew assembleDebug` / `./gradlew bundleRelease` 做最终发布前确认。

## 模拟器烟测

- Android Emulator: `sdk_gphone64_arm64`
- Android 版本: `16`
- 包管理器启动后的前台应用: `com.pokedexzh.app/.MainActivity`
- 应用进程: `pidof com.pokedexzh.app` 返回 `5515`
- SQLite 数据库文件: `databases/pokedex_zhSQLite.db` 已存在
- 崩溃日志: `adb logcat` 未匹配到 `Fatal Exception`、`AndroidRuntime`、SQLite 关键错误
- UI 层级: WebView 已获得焦点，说明应用前台已加载

## 真机烟测

- 设备序列号: `<device-id>`
- 设备型号: `V2337A`
- Android 版本: `16`
- 当前 debug APK 安装: `adb install --user 0 -r android/app/build/outputs/apk/debug/app-debug.apk` 成功。
- 启动命令: `adb shell monkey -p com.pokedexzh.app 1`
- 前台 Activity: `com.pokedexzh.app/.MainActivity`
- 应用进程: `pidof com.pokedexzh.app` 返回 `16111`
- UI 层级: WebView 已加载，标题为 `宝可梦图鉴 | Pokémon Pokédex`，可见文本包括 `宝可梦图鉴`、`探索神奇的宝可梦世界`。
- 打开图鉴: 点击封面后可见 `全国图鉴`、`已加载`、`0001 妙蛙种子`、`0025 皮卡丘`。
- 详情页: 点击 `0001 妙蛙种子` 后可见 `0001`、`妙蛙种子`、`草`、`毒`、`概述`、`能力`、`进化`。
- Android 返回键: 在图鉴打开状态发送 `input keyevent BACK` 后回到封面，可见 `点击打开图鉴`。
- SQLite 数据库文件: `databases/pokedex_zhSQLite.db` 已存在
- 抽取后的 SQLite 表: `app_meta`、`kv_store`、`favorite_pokemon`、`favorite_group`、`favorite_group_member`、`saved_team`、`battle_record`、`pokemon_battle_stat`、`api_cache`
- `app_meta`: `schema_version=1`、`local_storage_migrated=true`、`api_cache_local_storage_migrated=true`
- 收藏写入: 点击妙蛙种子详情页收藏按钮后，`favorite_pokemon` 中 `pokemon_id=1` 记录数从 `0` 变为 `1`。
- 重启持久化: `adb shell am force-stop com.pokedexzh.app` 后重新启动并抽取 SQLite，`favorite_pokemon` 中 `pokemon_id=1` 记录数仍为 `1`。
- API 缓存: `api_cache` 表当前已有 `117` 条记录。
- 最近 500 行 `logcat` 中未匹配到 `AndroidRuntime` / `Fatal Exception` / `SQLite` 相关错误。

## 关键证据

- APK: `android/app/build/outputs/apk/debug/app-debug.apk`
- APK 大小: 26 MB
- AAB: `android/app/build/outputs/bundle/release/app-release.aab`
- AAB 大小: 14 MB
- 包名: `com.pokedexzh.app`
- `sdkVersion`: `24`
- `targetSdkVersion`: `36`
- `adb devices`: 真机 `<device-id>` 在线
- 已安装 Android SDK 包: `platform-tools`、`build-tools;35.0.0`、`build-tools;36.0.0`、`platforms;android-36`、`emulator`、`system-images;android-36;google_apis;arm64-v8a`

## 代码层验证结果

- 本地图鉴索引: 1025 条，ID 连续
- 皮卡丘本地名称: `皮卡丘` / `Pikachu`
- SQLite 表结构: `app_meta`、`kv_store`、`favorite_pokemon`、`favorite_group`、`favorite_group_member`、`saved_team`、`battle_record`、`pokemon_battle_stat`、`api_cache`
- Android 备份规则: 已禁用备份并排除数据库
- 收藏导出: Android 上走 Filesystem + Share，Web 端保留下载兜底
- Release 签名支架: 已新增 `android/keystore.properties.example`，`android/app/build.gradle` 会在本地 `android/keystore.properties` 存在时启用 release signing。
- 发布准备清单: 已新增 `docs/android-release-readiness.md`，覆盖签名、人工验收、隐私与 IP/商标风险。
- 应用图标: 已使用仓库根目录 `logo.png` 生成 Android legacy、round 和 adaptive launcher 图标资源。

## 后续发布/人工验收项

- 真实 Android 测试机上的完整手工交互矩阵：分享面板、队伍/战斗写入、离线/弱网、导入旧 JSON，以及战斗/队伍/统计等深层返回链。
- 真实 release keystore、正式隐私政策发布页和商标/IP 授权评估。
