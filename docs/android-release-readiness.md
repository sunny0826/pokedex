# Android 发布准备清单

## 范围

当前仓库已经具备 Android Debug APK 和 unsigned/local-signed Release AAB 的构建能力。本清单用于从测试包推进到正式发布，不覆盖 iOS。

## Release 签名

真实签名文件和密码不得提交到仓库。

1. 生成 keystore：

```bash
keytool -genkeypair \
  -v \
  -storetype JKS \
  -keystore android/release-keystore.jks \
  -alias pokedex-zh \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

2. 复制示例配置：

```bash
cp android/keystore.properties.example android/keystore.properties
```

3. 修改 `android/keystore.properties`，填入真实路径和密码。

4. 构建：

```bash
bun run cap:sync
cd android
./gradlew bundleRelease
```

产物：

```text
android/app/build/outputs/bundle/release/app-release.aab
```

## PokeAPI 资料库更新发布

发布离线资料库时先在 CI 或本机生成数据包：

```bash
bun run data:build:pokedex-db -- \
  --dataset-version 2026.05.14 \
  --remote-base-url https://cdn.example.com/pokedex
```

上传以下文件到同一个静态目录：

```text
pokedex_zh_data_<datasetVersion>.db.zip
pokedex_zh_data.manifest.json
```

App 侧通过 `VITE_POKEDEX_DATA_MANIFEST_URL` 指向远端 manifest。发布前必须确认：

| 项目 | 结果 |
| --- | --- |
| manifest `latestDatasetVersion` 正确递增 |  |
| manifest `schemaVersion` 与 App 支持版本一致 |  |
| manifest `sha256` 匹配 `.zip` |  |
| manifest `databaseName` 对应 `.zip` 内的数据库文件名 |  |
| manifest `databaseSha256` 匹配新库文件 |  |
| manifest `dataContentSha256` 匹配新库 `data_meta.content_sha256` |  |
| `.zip` 内只包含目标 `.db` |  |
| 新库 `PRAGMA integrity_check` 为 `ok` |  |
| 新库 `data_meta.dataset_version` 与 manifest 一致 |  |
| 旧用户数据不随资料库更新清空 |  |

## Android 测试机人工验收

每个候选测试包至少记录一轮：

| 项目 | 结果 |
| --- | --- |
| APK 安装 |  |
| 冷启动 |  |
| 打开图鉴 |  |
| 列表滚动 |  |
| 中文搜索 |  |
| 英文搜索 |  |
| 编号搜索 |  |
| 属性筛选 |  |
| 世代筛选 |  |
| 特殊形态筛选 |  |
| 详情页 |  |
| 收藏写入 |  |
| 强停后收藏保留 |  |
| 收藏导出分享面板 |  |
| 导入旧 JSON |  |
| 队伍保存/加载/删除 |  |
| 自动战斗记录 |  |
| 手动战斗记录 |  |
| 战斗统计清空 |  |
| Android 返回键深层链路 |  |
| 飞行模式列表/搜索/筛选 |  |
| 已缓存详情离线打开 |  |
| 未缓存详情离线提示 |  |
| 弱网重试 |  |

## 隐私与权限

当前 Android manifest 仅声明：

- `android.permission.INTERNET`

应用数据存储：

- 用户收藏、分组、队伍、战斗统计：应用私有 SQLite。
- PokeAPI 响应缓存：应用私有 SQLite。
- 导出收藏：写入应用缓存目录后调用系统分享面板。
- Android 备份：`allowBackup=false`，数据库已在 `data_extraction_rules.xml` 中排除。

隐私政策至少需要说明：

- 应用不提供账号系统。
- 应用不主动收集真实身份信息。
- 应用会请求网络访问 PokeAPI 和远程图片/音频资源。
- 用户主动导出的 JSON 会交给 Android 系统分享面板和用户选择的目标应用。
- 卸载应用会删除应用私有 SQLite 数据。

## IP 与商标风险

公开上架前必须单独评估：

- Pokémon、Pokédex、宝可梦名称的商标使用风险。
- 宝可梦图片、叫声、文本数据的授权风险。
- 应用名、当前图标、截图、商店描述是否暗示官方授权。
- 是否需要改为非公开测试包、个人学习项目或内部演示包。

在未完成授权评估前，不建议公开上架 Google Play 或国内应用商店。
