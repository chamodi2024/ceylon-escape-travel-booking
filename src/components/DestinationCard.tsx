
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight } from "lucide-react";
import type { Destination } from "../data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationCard({ destination }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-700">
            {destination.category}
          </span>
          <span className="flex items-center gap-1 font-semibold">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            {destination.rating}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {destination.name}
        </h3>

        <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={15} />
          {destination.location}
        </p>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-teal-700">
              ${destination.price}
            </span>
            <span className="text-sm text-slate-500"> / person</span>
          </div>

          <Link
            to={`/destination/${destination.id}`}
            className="flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900"
          >
            View Details <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
