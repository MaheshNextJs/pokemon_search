import { Pokemon } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchAllPokemonTypes(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/type`);
  const data = await res.json();
  return data.results.map((type: { name: string }) => type.name);
}

export async function fetchPokemonList(limit = 150): Promise<Pokemon[]> {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await res.json();

  const pokemon: Pokemon[] = await Promise.all(
    data.results.map(async (p: { url: string }) => {
      const pokeData = await fetch(p.url).then((res) => res.json());
      return {
        name: pokeData.name,
        type: pokeData.types.map(
          (t: { type: { name: string } }) => t.type.name
        ),
        sprite: pokeData.sprites.front_default,
        height: pokeData.height,
        weight: pokeData.weight,
      };
    })
  );

  return pokemon;
}

export async function fetchPokemonDetails(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    console.error(`Failed to fetch: ${res.status}`);
    return null;
  }

  const data = await res.json();
  return {
    name: data.name,
    type: data.types.map((t: { type: { name: string } }) => t.type.name),
    sprite: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
  };
}
