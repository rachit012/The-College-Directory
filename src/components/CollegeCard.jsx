export default function CollegeCard({ college }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{college.name}</h2>
      <p className="text-sm text-gray-600">{college.city}</p>

      <div className="mt-2 flex justify-between text-sm">
        <div className="flex items-center gap-1">
          <img
            src="https://twemoji.maxcdn.com/v/latest/72x72/2b50.png"
            alt="star"
            className="w-4 h-4"
          />
          <span>{college.rating}</span>
        </div>
        <span className="font-medium">
          Fees: ₹{college.fees.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
