# Android 测试机本地发布与安装指南

本文档说明如何在本机普通终端完成 Android 测试包构建、安装到测试手机、启动和基础验证。这里的“发布到测试机”指安装 Debug APK 做真机测试，不等同于应用商店正式发布。

## 适用场景

- 将当前仓库构建为 Android APK。
- 覆盖安装到已连接的 Android 测试机。
- 保留同签名版本的 SQLite 私有数据。
- 做启动、图标、SQLite 和基础交互烟测。

注意：不要在受限沙箱或无法创建本地 socket 的终端里执行 `adb install`。ADB 需要连接本机 `127.0.0.1:5037` 的 ADB server；如果出现 `could not install *smartsocket* listener: Operation not permitted`，请改用 macOS Terminal、iTerm、Android Studio Terminal 等普通本地终端执行。

## 环境要求

- Bun 1.3+，使用仓库内 `bun.lockb` 安装依赖。
- Node.js `>=22.0.0` 仅在 Capacitor CLI 明确要求时需要，仓库 `.nvmrc` 已指定 `22`。
- JDK 21，推荐使用 Android Studio 自带 JBR 或本机安装的 JDK 21。
- Android SDK，至少包含 `platform-tools`、`build-tools` 和 `platforms;android-36`。
- 一台开启开发者选项和 USB 调试的 Android 测试机。

常见 macOS 环境变量：

```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$ANDROID_HOME/platform-tools:$PATH"
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
```

如果本机暂时使用之前验证时下载的临时 SDK，也可以这样指定：

```bash
export ANDROID_HOME="/private/tmp/pokedex-android-sdk"
export PATH="$ANDROID_HOME/platform-tools:$PATH"
```

## 设备准备

1. 在手机上开启开发者选项。
2. 开启 USB 调试。
3. 使用数据线连接电脑。
4. 手机弹出 RSA 授权提示时选择允许。
5. 确认设备在线：

```bash
adb kill-server
adb start-server
adb devices -l
```

正常结果应能看到类似：

```text
<device-id> device product:... model:...
```

如果显示 `unauthorized`，解锁手机并确认 USB 调试授权；如果没有设备，优先更换数据线、USB 口，并确认手机 USB 模式不是“仅充电”。

## 构建 Debug APK

在仓库根目录执行：

```bash
bun install
bun run lint
bun run build
bun run cap:sync
bun run android:debug:apk
```

如果不用 bun 脚本，也可以手动执行：

```bash
bun run cap:sync
cd android
./gradlew assembleDebug
cd ..
```

Debug APK 输出位置：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 安装到测试机

单设备连接时：

```bash
adb install --user 0 -r android/app/build/outputs/apk/debug/app-debug.apk
```

多设备连接时先获取序列号：

```bash
adb devices -l
```

然后指定设备安装：

```bash
adb -s <device-id> install --user 0 -r android/app/build/outputs/apk/debug/app-debug.apk
```

`-r` 表示覆盖安装。只要新旧 APK 使用同一个 debug keystore 签名，应用私有 SQLite 数据会保留。不要随意执行 `adb uninstall com.pokedexzh.app`，卸载会删除应用私有数据库。

如果只是安装当前已经生成的带新图标测试包，可使用：

```bash
adb install --user 0 -r android/app/build/outputs/apk/debug/app-debug-newicon.apk
```

## 启动与烟测

安装成功后启动应用：

```bash
adb shell monkey -p com.pokedexzh.app 1
```

确认前台 Activity：

```bash
adb shell dumpsys activity activities | grep -E "mResumedActivity|topResumedActivity"
```

检查进程：

```bash
adb shell pidof com.pokedexzh.app
```

基础检查项：

- 桌面应用图标显示为当前图标。
- 冷启动无长时间白屏。
- 首屏和图鉴打开流程正常。
- 点击宝可梦详情、收藏、返回键行为正常。
- 重启应用后收藏数据不丢失。

## SQLite 验证

确认数据库文件存在：

```bash
adb shell run-as com.pokedexzh.app ls databases
```

抽取数据库到本机：

```bash
adb shell run-as com.pokedexzh.app cp databases/pokedex_zhSQLite.db files/pokedex_zhSQLite.db
adb exec-out run-as com.pokedexzh.app cat files/pokedex_zhSQLite.db > /tmp/pokedex_zhSQLite.db
```

检查表结构：

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

## 日志排查

查看应用相关日志：

```bash
adb logcat | grep -iE "pokedex|capacitor|sqlite|AndroidRuntime|Fatal Exception"
```

只看最近日志：

```bash
adb logcat -d -t 500 | grep -iE "AndroidRuntime|Fatal Exception|sqlite|capacitor"
```

如果需要重启应用：

```bash
adb shell am force-stop com.pokedexzh.app
adb shell monkey -p com.pokedexzh.app 1
```

## 常见问题

### Capacitor 提示 Node 版本不足

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

### Gradle 或 Android Gradle Plugin 提示 Java 版本不足

确认 Java 版本：

```bash
java -version
```

使用 JDK 21：

```bash
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
cd android
./gradlew assembleDebug
```

### ADB 报 smartsocket 权限错误

现象：

```text
could not install *smartsocket* listener: Operation not permitted
```

原因：当前终端环境不允许创建或连接本机 socket，ADB client/server 无法通信。

处理：

- 换到普通本机终端执行，不要在受限沙箱内执行。
- 确认没有安全软件阻止 `127.0.0.1:5037`。
- 重启 ADB：

```bash
adb kill-server
adb start-server
adb devices -l
```

### INSTALL_FAILED_UPDATE_INCOMPATIBLE

原因通常是手机上已有同包名应用，但签名证书不同。

优先使用同一个 debug keystore 重新构建并安装。如果必须清理旧版本：

```bash
adb uninstall com.pokedexzh.app
adb install --user 0 -r android/app/build/outputs/apk/debug/app-debug.apk
```

注意：卸载会删除应用私有 SQLite 数据。

### 多设备导致安装目标不明确

使用 `-s` 指定测试机：

```bash
adb -s <device-id> install --user 0 -r android/app/build/outputs/apk/debug/app-debug.apk
```

## 完成记录模板

```text
日期:
Git commit:
APK:
APK SHA-256:
设备序列号:
设备型号:
Android 版本:
WebView 版本:
安装命令:
启动结果:
图标检查:
SQLite 检查:
返回键检查:
日志异常:
结论:
```

APK SHA-256 可用以下命令生成：

```bash
shasum -a 256 android/app/build/outputs/apk/debug/app-debug.apk
```

