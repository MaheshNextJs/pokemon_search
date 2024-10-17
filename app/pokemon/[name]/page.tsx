import Image from "next/image";
import { fetchPokemonDetails } from "@/app/lib/pokemon";
import Link from "next/link";

export default async function PokemonDetailPage({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await fetchPokemonDetails(params.name);
  console.log(pokemon);

  if (!pokemon) {
    return <div>Pokémon not found</div>;
  }

  const types = Array.isArray(pokemon.type) ? pokemon.type : [];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <Link
        href="/"
        className="absolute top-4 left-4 text-blue-500 p-5 hover:underline font-bold text-xl"
      >
        {"<"} Back to home
      </Link>

      <div className="bg-white shadow-lg rounded-lg max-w-md w-full  h-auto">
        <div className="flex justify-center bg-green-500 p-24 rounded-t-lg">
          <Image
            src={pokemon.sprite}
            alt={pokemon.name}
            width={150}
            height={150}
          />
        </div>

        <h1 className="text-3xl font-bold text-center p-4 bg-yellow-400">
          {pokemon.name}
        </h1>
        <p className="text-center text-gray-700 bg-yellow-400 p-2">
          Type: {types.join(", ")}
        </p>
        <p className="text-center text-gray-700 bg-yellow-400 p-2">
          Height: {pokemon.height}
        </p>
        <p className="text-center text-gray-700 bg-yellow-400  rounded-b-lg p-2 pb-8">
          Weight: {pokemon.weight}
        </p>
      </div>
    </div>
  );
}
