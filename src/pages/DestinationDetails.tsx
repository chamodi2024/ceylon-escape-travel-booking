
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  ArrowLeft,
  CheckCircle2,
  ImageOff
} from "lucide-react";

import { destinations } from "../data/destinations";
import BookingForm from "../components/BookingForm";

export default function DestinationDetails() {
  const { id } = useParams<{ id: string }>();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  if (!destination) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Destination Not Found
        </h1>
        <p className="mt-4 text-slate-500">
          Sorry, the destination you are looking for does not exist.
        </p>
        <Link
          to="/explore"
          className="mt-6 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white"
        >
          Back to Explore
        </Link>
      </main>
    );
  }

  const gallery = destination.images.length
    ? destination.images
    : [destination.image];

  const selectedImage = gallery[activeImage] || gallery[0];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link
          to="/explore"
          className="mb-8 inline-flex items-center gap-2 font-medium text-teal-700 hover:text-teal-900"
        >
          <ArrowLeft size={19} />
          Back to Destinations
        </Link>

        {/* Destination Heading */}
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              {destination.category}
            </span>

            <span className="flex items-center gap-1 font-semibold">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              {destination.rating}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            {destination.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-slate-500">
            <MapPin size={19} />
            {destination.location}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-slate-200 lg:col-span-2">
            {failedImages.includes(selectedImage) ? (
              <div className="flex h-80 items-center justify-center gap-2 text-slate-500 md:h-[430px]">
                <ImageOff />
                Image unavailable
              </div>
            ) : (
              <img
                src={selectedImage}
                alt={`${destination.name} gallery`}
                onError={() =>
                  setFailedImages((prev) => [...prev, selectedImage])
                }
                className="h-80 w-full object-cover md:h-[430px]"
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {gallery.slice(1, 3).map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index + 1)}
                className="overflow-hidden rounded-2xl bg-slate-200"
                aria-label={`View image ${index + 2}`}
              >
                {failedImages.includes(image) ? (
                  <div className="flex h-36 items-center justify-center text-slate-500 lg:h-[207px]">
                    <ImageOff />
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={`${destination.name} view ${index + 2}`}
                    onError={() =>
                      setFailedImages((prev) => [...prev, image])
                    }
                    className="h-36 w-full object-cover transition hover:scale-105 lg:h-[207px]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Information and Booking */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <section className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                About This Destination
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {destination.description}
              </p>
            </section>

            <section className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Activities & Experiences
              </h2>

              <p className="mt-3 text-slate-500">
                Discover the exciting experiences available during your trip.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {destination.activities.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-center gap-3 rounded-xl bg-teal-50 p-4"
                  >
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-teal-600"
                    />
                    <span className="font-medium text-slate-800">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-teal-900 p-8 text-white">
              <h2 className="text-2xl font-bold">
                Ready for Your Next Adventure?
              </h2>
              <p className="mt-3 text-teal-100">
                Choose your travel date and create your demo booking
                using the form.
              </p>
            </section>
          </div>

          <div className="lg:sticky lg:top-28">
            <BookingForm
              key={destination.id}
              destinationName={destination.name}
              price={destination.price}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
