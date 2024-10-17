interface Props {
  types: string[];
  search: string;
  setSearch: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  handleSearch: () => void;
}

export default function SearchForm({
  types,
  search,
  setSearch,
  selectedType,
  setSelectedType,
  handleSearch,
}: Props) {
  return (
    <div className="flex space-x-4 mb-6">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
        className="border p-2 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
}
