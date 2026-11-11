
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShieldCheck, Heart, Headphones } from "lucide-react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/explore?search=${encodeURIComponent(search.trim())}`);
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[650px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,30,45,.60),rgba(0,30,45,.55)),url('https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1800')"
        }}
      >
        <div className="relative z-10 max-w-4xl">
          <span className="mb-5 inline-block rounded-full border border-white/40 bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Discover the Pearl of the Indian Ocean
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Your Next Adventure
            <span className="block text-amber-300">Starts Here.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Explore breathtaking destinations, unforgettable experiences
            and the hidden beauty of Sri Lanka.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="text-slate-400" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Where do you want to go?"
                aria-label="Search destinations"
                className="w-full py-3 text-slate-800 outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white transition hover:bg-teal-700"
            >
              Explore Now
            </button>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-teal-600">
              Top Destinations
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Popular Places to Explore
            </h2>
            <p className="mt-4 text-slate-500">
              Find your perfect getaway from our handpicked destinations.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Travel With Us?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Trusted Experiences",
                text: "Explore carefully selected travel experiences."
              },
              {
                icon: Heart,
                title: "Unforgettable Memories",
                text: "Create special moments at amazing destinations."
              },
              {
                icon: Headphones,
                title: "Friendly Support",
                text: "Enjoy a simple and convenient booking experience."
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl bg-teal-50 p-8">
                  <Icon size={42} className="mx-auto text-teal-600" />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
