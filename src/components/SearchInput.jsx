export default function SearchInput({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search college by name..."
      value={search}
      onChange={e => onSearchChange(e.target.value)}
      className="border p-2 rounded w-full sm:w-1/2"
    />
  );
}
