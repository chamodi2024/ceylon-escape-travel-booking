
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export default function Explore() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(300);

  const categories = ["All", "Nature", "Beach", "Culture"];

  const filteredDestinations = destinations.filter((destination) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      destination.name.toLowerCase().includes(searchText) ||
      destination.location.toLowerCase().includes(searchText) ||
      destination.description.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || destination.category === category;

    const matchesPrice = destination.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setMaxPrice(300);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-teal-900 px-6 py-20 text-center text-white">
        <p className="font-semibold uppercase tracking-widest text-teal-300">
          Discover Sri Lanka
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Explore Destinations
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-100">
          Find your next adventure among Sri Lanka's beautiful
          beaches, mountains and cultural landmarks.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Search and Filters */}
        <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="text-teal-600" />
            <h2 className="text-xl font-bold text-slate-900">
              Find Your Perfect Trip
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Search */}
            <div>
              <label
                htmlFor="destination-search"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Search Destination
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4">
                <Search size={19} className="text-slate-400" />
                <input
                  id="destination-search"
                  type="search"
                  placeholder="Search Ella, Mirissa..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-3 outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-500"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All Categories" : item}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Maximum Price: ${maxPrice}
              </label>

              <input
                id="price"
                type="range"
                min="50"
                max="300"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-4 w-full accent-teal-600"
              />

              <div className="mt-1 flex justify-between text-xs text-slate-500">
                <span>$50</span>
                <span>$300</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
            <p className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-bold text-teal-700">
                {filteredDestinations.length}
              </span>{" "}
              destinations
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
            >
              <X size={17} />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Destination Results */}
        {filteredDestinations.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
            <Search size={48} className="mx-auto text-slate-300" />

            <h3 className="mt-5 text-2xl font-bold text-slate-800">
              No Destinations Found
            </h3>

            <p className="mt-3 text-slate-500">
              Try another search or adjust your filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
