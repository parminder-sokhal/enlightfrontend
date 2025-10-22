import { Search } from "lucide-react";
import { useState } from "react";

const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "sale" | "rent">(
    "projects"
  );

  return (
    <div
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/banner.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-16">
          Find your favorite homes at Enlight Property
        </h1>

        {/* Tabs: Projects / Sale / Rent */}
        <div className="flex justify-start bg-white rounded-t-lg overflow-hidden w-fit">
          {["projects", "sale", "rent"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "projects" | "sale" | "rent")}
              className={`px-6 py-3 font-medium capitalize transition flex ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-6 flex flex-col md:flex-row gap-4 mt-0">
          <input
            type="text"
            placeholder="Enter keyword..."
            className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          <input
            type="text"
            placeholder="City, State"
            className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition">
            <Search size={20} className="mr-2" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
