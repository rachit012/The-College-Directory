import { useState } from "react";
import { colleges } from "./data/colleges";
import CollegeCard from "./components/CollegeCard";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          College Directory
        </h1>

        <input
          type="text"
          placeholder="Search college by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-full mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
}
