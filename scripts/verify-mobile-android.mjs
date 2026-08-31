import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const requiredTables = [
  'app_meta',
  'kv_store',
  'favorite_pokemon',
  'favorite_group',
  'favorite_group_member',
  'saved_team',
  'battle_record',
  'pokemon_battle_stat',
  'api_cache',
];

const checks = [];

const pass = (name, detail = '') => {
  checks.push({ name, ok: true, detail });
};

const fail = (name, detail = '') => {
  checks.push({ name, ok: false, detail });
};

const readText = (relativePath) => readFile(path.join(repoRoot, relativePath), 'utf8');

const parseGeneratedIndex = async () => {
  const source = await readText('src/data/generated/pokemonIndex.ts');
  const match = source.match(/export const localPokemonIndex = ([\s\S]*?) as const satisfies/);
  if (!match) throw new Error('localPokemonIndex export was not found');
  return JSON.parse(match[1]);
};

const main = async () => {
  const packageJson = JSON.parse(await readText('package.json'));
  const nvmrc = await readText('.nvmrc');
  const readme = await readText('README.md');
  const releaseReadiness = await readText('docs/android-release-readiness.md');
  const capacitorConfig = await readText('capacitor.config.ts');
  const schema = await readText('src/lib/storage/schema.ts');
  const storageDatabase = await readText('src/lib/storage/database.ts');
  const userDataRepository = await readText('src/lib/storage/userDataRepository.ts');
  const apiCacheRepository = await readText('src/lib/storage/apiCacheRepository.ts');
  const favoritesHook = await readText('src/hooks/useFavorites.ts');
  const savedTeamsHook = await readText('src/hooks/useSavedTeams.ts');
  const battleStatsHook = await readText('src/hooks/useBattleStats.ts');
  const pokemonHook = await readText('src/hooks/usePokemon.ts');
  const pokedexDataPackageManager = await readText('src/lib/pokedexData/packageManager.ts');
  const pokedexDataRepository = await readText('src/lib/pokedexData/repository.ts');
  const pokedexDataUpdateHook = await readText('src/hooks/usePokedexDataUpdates.ts');
  const pokedexDataUpdater = await readText('src/components/PokedexDataUpdater.tsx');
  const buildPokedexDataDbScript = await readText('scripts/build-pokedex-data-db.mjs');
  const androidApp = await readText('src/lib/native/androidApp.ts');
  const androidShellHook = await readText('src/hooks/useAndroidShell.ts');
  const pokedexComponent = await readText('src/components/Pokedex.tsx');
  const manifest = await readText('android/app/src/main/AndroidManifest.xml');
  const appBuildGradle = await readText('android/app/build.gradle');
  const keystoreExample = await readText('android/keystore.properties.example');
  const dataExtractionRules = await readText('android/app/src/main/res/xml/data_extraction_rules.xml');
  const index = await parseGeneratedIndex();

  const requiredScripts = [
    'cap:sync',
    'android:debug:apk',
    'android:release:aab',
    'data:generate:pokemon-index',
    'data:build:pokedex-db',
    'mobile:verify',
  ];
  for (const script of requiredScripts) {
    packageJson.scripts?.[script] ? pass(`script:${script}`) : fail(`script:${script}`, 'missing package script');
  }

  packageJson.engines?.node === '>=22.0.0'
    ? pass('environment:node-engine')
    : fail('environment:node-engine', 'expected package.json engines.node >=22.0.0');
  nvmrc.trim() === '22'
    ? pass('environment:nvmrc')
    : fail('environment:nvmrc', 'expected .nvmrc to pin Node 22');
  readme.includes('Android mobile development') && readme.includes('npm run cap:sync')
    ? pass('docs:readme-android-entry')
    : fail('docs:readme-android-entry', 'README is missing Android development instructions');
  releaseReadiness.includes('Android 发布准备清单') &&
  releaseReadiness.includes('Release 签名') &&
  releaseReadiness.includes('IP 与商标风险')
    ? pass('docs:release-readiness')
    : fail('docs:release-readiness', 'release readiness document is incomplete');

  const requiredDeps = [
    '@capacitor/core',
    '@capacitor/android',
    '@capacitor-community/sqlite',
    '@capacitor/app',
    '@capacitor/filesystem',
    '@capacitor/haptics',
    '@capacitor/share',
    '@capacitor/status-bar',
    'jeep-sqlite',
  ];
  for (const dependency of requiredDeps) {
    packageJson.dependencies?.[dependency] || packageJson.devDependencies?.[dependency]
      ? pass(`dependency:${dependency}`)
      : fail(`dependency:${dependency}`, 'missing dependency');
  }

  capacitorConfig.includes("appId: 'com.pokedexzh.app'")
    ? pass('capacitor:appId')
    : fail('capacitor:appId', 'expected com.pokedexzh.app');
  capacitorConfig.includes("webDir: 'dist'")
    ? pass('capacitor:webDir')
    : fail('capacitor:webDir', 'expected dist');
  capacitorConfig.includes('CapacitorSQLite')
    ? pass('capacitor:sqlite-plugin-config')
    : fail('capacitor:sqlite-plugin-config', 'missing CapacitorSQLite config');

  storageDatabase.includes('new SQLiteConnection(CapacitorSQLite)') &&
  storageDatabase.includes('sqlite.initWebStore()') &&
  storageDatabase.includes('connection.execute(STORAGE_SCHEMA_SQL)')
    ? pass('storage:sqlite-connection')
    : fail('storage:sqlite-connection', 'SQLite connection/init/schema execution not detected');

  index.length === 1025 ? pass('pokemon-index:count', '1025') : fail('pokemon-index:count', String(index.length));
  index.every((pokemon, indexValue) => pokemon.id === indexValue + 1)
    ? pass('pokemon-index:ids-contiguous')
    : fail('pokemon-index:ids-contiguous');
  index[24]?.nameZh === '皮卡丘' && index[24]?.nameEn === 'Pikachu'
    ? pass('pokemon-index:localized-names')
    : fail('pokemon-index:localized-names', JSON.stringify(index[24]));
  index.every((pokemon) => Array.isArray(pokemon.types) && pokemon.types.length > 0)
    ? pass('pokemon-index:types')
    : fail('pokemon-index:types');

  for (const table of requiredTables) {
    schema.includes(`CREATE TABLE IF NOT EXISTS ${table}`)
      ? pass(`sqlite-table:${table}`)
      : fail(`sqlite-table:${table}`, 'missing table');
  }
  schema.includes('idx_api_cache_expires_at')
    ? pass('sqlite-index:api-cache-expiry')
    : fail('sqlite-index:api-cache-expiry');
  schema.includes('idx_battle_record_created_at')
    ? pass('sqlite-index:battle-record-created-at')
    : fail('sqlite-index:battle-record-created-at');

  manifest.includes('android:allowBackup="false"')
    ? pass('android-manifest:allowBackup=false')
    : fail('android-manifest:allowBackup=false');
  manifest.includes('android:dataExtractionRules="@xml/data_extraction_rules"')
    ? pass('android-manifest:dataExtractionRules')
    : fail('android-manifest:dataExtractionRules');
  manifest.includes('android.permission.INTERNET')
    ? pass('android-manifest:internet-permission')
    : fail('android-manifest:internet-permission');
  dataExtractionRules.includes('<exclude domain="database" />')
    ? pass('android-backup:database-excluded')
    : fail('android-backup:database-excluded');
  appBuildGradle.includes('keystore.properties') &&
  appBuildGradle.includes('signingConfigs') &&
  appBuildGradle.includes('signingConfig signingConfigs.release') &&
  keystoreExample.includes('storeFile=') &&
  keystoreExample.includes('keyAlias=')
    ? pass('android-release:signing-scaffold')
    : fail('android-release:signing-scaffold', 'release signing scaffold not detected');

  userDataRepository.includes('migrateLegacyLocalStorageIfNeeded') &&
  userDataRepository.includes('INSERT OR REPLACE INTO favorite_pokemon') &&
  userDataRepository.includes('INSERT OR REPLACE INTO saved_team') &&
  userDataRepository.includes('INSERT OR REPLACE INTO battle_record')
    ? pass('storage:user-data-repository')
    : fail('storage:user-data-repository', 'user data SQLite repository wiring not detected');
  apiCacheRepository.includes('api_cache_local_storage_migrated') &&
  apiCacheRepository.includes('INSERT OR REPLACE INTO api_cache') &&
  apiCacheRepository.includes('DELETE FROM api_cache WHERE expires_at <= ?')
    ? pass('storage:api-cache-repository')
    : fail('storage:api-cache-repository', 'API cache SQLite repository wiring not detected');
  favoritesHook.includes('loadFavoriteData') &&
  favoritesHook.includes('saveFavoriteData') &&
  favoritesHook.includes('shareAndroidJsonFile')
    ? pass('hook:favorites-sqlite-and-share')
    : fail('hook:favorites-sqlite-and-share', 'favorites hook is not wired to SQLite/share repository');
  savedTeamsHook.includes('loadSavedTeams') && savedTeamsHook.includes('saveSavedTeams')
    ? pass('hook:saved-teams-sqlite')
    : fail('hook:saved-teams-sqlite', 'saved teams hook is not wired to SQLite repository');
  battleStatsHook.includes('loadBattleStats') && battleStatsHook.includes('saveBattleStats')
    ? pass('hook:battle-stats-sqlite')
    : fail('hook:battle-stats-sqlite', 'battle stats hook is not wired to SQLite repository');
  pokemonHook.includes('localPokemonIndex') &&
  pokemonHook.includes('getCachedOrFetch') &&
  pokemonHook.includes('readPokemonDetailFromDataPackage') &&
  !pokemonHook.includes('fetch("https://pokeapi.co/api/v2/pokemon?')
    ? pass('hook:pokemon-local-index-and-cache')
    : fail('hook:pokemon-local-index-and-cache', 'pokemon list/detail cache wiring not detected');
  buildPokedexDataDbScript.includes('pokedex_zh_data.db') &&
  buildPokedexDataDbScript.includes('pokedex_zh_data.manifest.json') &&
  buildPokedexDataDbScript.includes('PRAGMA integrity_check') &&
  buildPokedexDataDbScript.includes('pokemon_detail') &&
  buildPokedexDataDbScript.includes('pokemon_evolution_chain')
    ? pass('pokedex-data:build-script')
    : fail('pokedex-data:build-script', 'Pokedex data DB generator is incomplete');
  pokedexDataPackageManager.includes('VITE_POKEDEX_DATA_MANIFEST_URL') &&
  pokedexDataPackageManager.includes('sha256Hex') &&
  pokedexDataPackageManager.includes('PRAGMA integrity_check') &&
  pokedexDataPackageManager.includes('active_data_db') &&
  pokedexDataPackageManager.includes('getFromHTTPRequest')
    ? pass('pokedex-data:update-manager')
    : fail('pokedex-data:update-manager', 'Pokedex data update manager is incomplete');
  pokedexDataRepository.includes('readPokemonDetailFromDataPackage') &&
  pokedexDataRepository.includes('readEvolutionChainFromDataPackage') &&
  pokedexDataRepository.includes('pokemon_list_item')
    ? pass('pokedex-data:repository')
    : fail('pokedex-data:repository', 'Pokedex data repository reads are incomplete');
  pokedexDataUpdater.includes('usePokedexDataUpdates') &&
  pokedexDataUpdateHook.includes('installPokedexDataPackage') &&
  pokedexDataUpdateHook.includes('installBundledPokedexDataPackage')
    ? pass('pokedex-data:app-updater')
    : fail('pokedex-data:app-updater', 'App update hook is not wired');
  androidApp.includes('@capacitor/app') &&
  androidApp.includes('@capacitor/status-bar') &&
  androidApp.includes('@capacitor/haptics') &&
  androidApp.includes('@capacitor/filesystem') &&
  androidApp.includes('@capacitor/share')
    ? pass('native:android-capacitor-plugins')
    : fail('native:android-capacitor-plugins', 'Android native plugin wrapper not detected');
  androidShellHook.includes("addListener('backButton'") &&
  pokedexComponent.includes('useAndroidShell(handleAndroidBackButton)') &&
  pokedexComponent.includes('impactAndroid') &&
  pokedexComponent.includes('notifyAndroid')
    ? pass('native:android-shell-wiring')
    : fail('native:android-shell-wiring', 'Android shell/back/haptics wiring not detected');

  try {
    const wasm = await stat(path.join(repoRoot, 'public/assets/sql-wasm.wasm'));
    wasm.size > 0 ? pass('web-sqlite:wasm-present', `${wasm.size} bytes`) : fail('web-sqlite:wasm-present');
  } catch {
    fail('web-sqlite:wasm-present', 'missing public/assets/sql-wasm.wasm');
  }

  try {
    const apk = await stat(path.join(repoRoot, 'android/app/build/outputs/apk/debug/app-debug.apk'));
    apk.size > 1_000_000 ? pass('android-apk:debug-built', `${apk.size} bytes`) : fail('android-apk:debug-built');
  } catch {
    fail('android-apk:debug-built', 'run npm run android:debug:apk first');
  }

  try {
    const aab = await stat(path.join(repoRoot, 'android/app/build/outputs/bundle/release/app-release.aab'));
    aab.size > 1_000_000 ? pass('android-aab:release-built', `${aab.size} bytes`) : fail('android-aab:release-built');
  } catch {
    fail('android-aab:release-built', 'run npm run android:release:aab first');
  }

  for (const check of checks) {
    console.log(`${check.ok ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
  }

  const failed = checks.filter((check) => !check.ok);
  if (failed.length) {
    console.error(`\n${failed.length} mobile verification check(s) failed.`);
    process.exit(1);
  }

  console.log(`\n${checks.length} mobile verification checks passed.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
