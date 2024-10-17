"use client";

import { useState, useEffect } from "react";
import { fetchAllPokemonTypes, fetchPokemonList } from "./lib/pokemon";
import SearchForm from "./components/SearchForm";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "./types/pokemon";

export default function HomePage() {
  const [types, setTypes] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const typesData = await fetchAllPokemonTypes();
      setTypes(typesData);
      const pokemonData = await fetchPokemonList();
      setPokemon(pokemonData);
      setFilteredPokemon(pokemonData);
    }

    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", search, "with type:", selectedType);

    const filtered = pokemon.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType ? p.type.includes(selectedType) : true;
      return matchesName && matchesType;
    });

    setFilteredPokemon(filtered);
  };

  return (
    <div className="p-10 px-80 mx-auto bg-gray-200">
      <h1 className="text-3xl font-bold mb-5">Pokemon Search</h1>
      <SearchForm
        types={types}
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}

// Below code automatic serach functinality

// "use client";

// import { useState, useEffect } from "react";
// import { fetchAllPokemonTypes, fetchPokemonList } from "./lib/pokemon";
// import SearchForm from "./components/SearchForm";
// import PokemonCard from "./components/PokemonCard";
// import { Pokemon } from "./types/pokemon";

// export default function HomePage() {
//   const [types, setTypes] = useState<string[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [selectedType, setSelectedType] = useState<string>("");
//   const [pokemon, setPokemon] = useState<Pokemon[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const typesData = await fetchAllPokemonTypes();
//       setTypes(typesData);
//       const pokemonData = await fetchPokemonList();
//       setPokemon(pokemonData);
//     }

//     fetchData();
//   }, []);

//   const handleSearch = () => {
//     // Implement your search logic here
//     console.log("Searching for:", search, "with type:", selectedType);
//     // Add filtering logic here, e.g., filter Pokémon based on `search` and `selectedType`
//   };

//   const filteredPokemon = pokemon.filter((p) => {
//     return (
//       p.name.includes(search.toLowerCase()) &&
//       (selectedType ? p.type.includes(selectedType) : true)
//     );
//   });

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-5">Pokemon Search</h1>
//       <SearchForm
//         types={types}
//         search={search}
//         handleSearch={handleSearch}
//         setSearch={setSearch}
//         selectedType={selectedType}
//         setSelectedType={setSelectedType}
//       />
//       <div className="grid grid-cols-3 gap-4">
//         {filteredPokemon.map((p) => (
//           <PokemonCard key={p.name} pokemon={p} />
//         ))}
//       </div>
//     </div>
//   );
// }
