import Image from "next/image";
import Link from "next/link";

interface PokemonProps {
  pokemon: {
    name: string;
    type: string[];
    sprite: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md">
      <div className="flex justify-center mb-2">
        <Image
          src={pokemon.sprite}
          alt={pokemon.name}
          width={150}
          height={150}
        />
      </div>
      <h2 className="text-xl font-bold text-center">{pokemon.name}</h2>

      <Link href={`/pokemon/${pokemon.name}`} legacyBehavior>
        <a className="text-blue-500 text-center p-10 block">Details →</a>
      </Link>
    </div>
  );
}
