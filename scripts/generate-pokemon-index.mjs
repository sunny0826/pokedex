import { mkdir, readFile, writeFile } from 'node:fs/promises';
import https from 'node:https';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_POKEMON_ID = 1025;
const ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta';
const QUERY = `
query PokemonIndex($limit: Int!) {
  pokemon_v2_pokemon(where: {id: {_lte: $limit}}, order_by: {id: asc}) {
    id
    name
    pokemon_v2_pokemontypes(order_by: {slot: asc}) {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonspecy {
      generation_id
      pokemon_v2_pokemonspeciesnames(where: {language_id: {_in: [9, 12]}}) {
        language_id
        name
      }
    }
  }
}
`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const defaultOutputPath = path.join(repoRoot, 'src/data/generated/pokemonIndex.ts');

const parseArgs = () => {
  const args = process.argv.slice(2);
  const options = {
    inputPath: null,
    outputPath: defaultOutputPath,
    maxPokemonId: MAX_POKEMON_ID,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--input') {
      options.inputPath = args[index + 1];
      index += 1;
    } else if (arg === '--output') {
      options.outputPath = path.resolve(args[index + 1]);
      index += 1;
    } else if (arg === '--max-id') {
      options.maxPokemonId = Number(args[index + 1]);
      index += 1;
    }
  }

  return options;
};

const fetchGraphql = (maxPokemonId) => {
  const body = JSON.stringify({
    query: QUERY,
    variables: { limit: maxPokemonId },
  });

  return new Promise((resolve, reject) => {
    const request = https.request(
      ENDPOINT,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'content-length': Buffer.byteLength(body),
        },
      },
      (response) => {
        let raw = '';
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          raw += chunk;
        });
        response.on('end', () => {
          if (!response.statusCode || response.statusCode >= 400) {
            reject(new Error(`PokeAPI GraphQL returned ${response.statusCode}: ${raw}`));
            return;
          }

          try {
            resolve(JSON.parse(raw));
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    request.on('error', reject);
    request.write(body);
    request.end();
  });
};

const formatEnglishPokemonName = (name) => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const toArtworkUrl = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

const toSpriteUrl = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const toIndexItem = (pokemon) => {
  const names = pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames ?? [];
  const nameEn = names.find((entry) => entry.language_id === 9)?.name ?? formatEnglishPokemonName(pokemon.name);
  const nameZh = names.find((entry) => entry.language_id === 12)?.name ?? nameEn;

  return {
    id: pokemon.id,
    name: nameZh,
    nameZh,
    nameEn,
    types: pokemon.pokemon_v2_pokemontypes.map((entry) => entry.pokemon_v2_type.name),
    generation: pokemon.pokemon_v2_pokemonspecy?.generation_id ?? 0,
    spriteUrl: toSpriteUrl(pokemon.id),
    artworkUrl: toArtworkUrl(pokemon.id),
  };
};

const buildSource = (items) => {
  const generatedAt = new Date().toISOString();

  return `import type { PokemonType } from '@/data/pokemon';
import type { PokeApiLanguage } from '@/lib/i18n';

export interface LocalPokemonIndexItem {
  readonly id: number;
  readonly name: string;
  readonly nameZh: string;
  readonly nameEn: string;
  readonly types: readonly PokemonType[];
  readonly generation: number;
  readonly spriteUrl: string;
  readonly artworkUrl: string;
}

export const LOCAL_POKEMON_INDEX_GENERATED_AT = '${generatedAt}';
export const LOCAL_POKEMON_MAX_ID = ${items.at(-1)?.id ?? MAX_POKEMON_ID};

export const localPokemonIndex = ${JSON.stringify(items, null, 2)} as const satisfies readonly LocalPokemonIndexItem[];

export const getLocalPokemonDisplayName = (
  pokemon: LocalPokemonIndexItem,
  language: PokeApiLanguage
): string => {
  return language === 'zh-hans' ? pokemon.nameZh : pokemon.nameEn;
};
`;
};

const main = async () => {
  const options = parseArgs();
  const response = options.inputPath
    ? JSON.parse(await readFile(options.inputPath, 'utf8'))
    : await fetchGraphql(options.maxPokemonId);

  if (response.errors?.length) {
    throw new Error(JSON.stringify(response.errors, null, 2));
  }

  const pokemons = response.data?.pokemon_v2_pokemon;
  if (!Array.isArray(pokemons)) {
    throw new Error('PokeAPI response did not include data.pokemon_v2_pokemon');
  }

  const items = pokemons.map(toIndexItem);
  if (items.length !== options.maxPokemonId) {
    throw new Error(`Expected ${options.maxPokemonId} Pokemon, got ${items.length}`);
  }

  const ids = new Set(items.map((item) => item.id));
  for (let id = 1; id <= options.maxPokemonId; id += 1) {
    if (!ids.has(id)) {
      throw new Error(`Missing Pokemon id ${id}`);
    }
  }

  await mkdir(path.dirname(options.outputPath), { recursive: true });
  await writeFile(options.outputPath, buildSource(items), 'utf8');
  console.log(`Generated ${items.length} Pokemon index entries at ${path.relative(repoRoot, options.outputPath)}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
