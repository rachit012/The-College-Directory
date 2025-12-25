export default function SortButton({ onSort }) {
  return (
    <button
      onClick={onSort}
      className="bg-orange-400 text-white px-4 py-2 rounded"
    >
      Sort by Fees (Low to High)
    </button>
  );
}
