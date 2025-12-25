import { useState } from "react";
import { colleges } from "./data/colleges";
import CollegeCard from "./components/CollegeCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [sortByFees, setSortByFees] = useState(false);

  const displayedColleges = colleges
    .filter(college =>
      college.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortByFees ? a.fees - b.fees : 0));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          College Directory
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search college by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border p-2 rounded w-full sm:w-1/2"
          />

          <button
            onClick={() => setSortByFees(true)}
            className="bg-orange-400 text-white px-4 py-2 rounded"
          >
            Sort by Fees (Low to High)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
}
