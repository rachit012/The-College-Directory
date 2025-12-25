import { colleges } from "./data/colleges";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          College Directory
        </h1>

        <pre>{JSON.stringify(colleges, null, 2)}</pre>
      </div>
    </div>
  );
}
