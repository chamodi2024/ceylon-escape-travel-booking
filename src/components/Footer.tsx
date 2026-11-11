
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        {/* Website Information */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400">
            Ceylon Escape
          </h3>

          <p className="mt-4 text-slate-400">
            Discover extraordinary places and unforgettable adventures
            across Sri Lanka.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white">
            Quick Links
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <Link
              to="/"
              className="transition hover:text-teal-400"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="transition hover:text-teal-400"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold text-white">
            Contact Us
          </h4>

          <p className="mt-4 text-slate-400">
            Have questions about your next adventure?
          </p>

          <a
            href="tel:+94771239547"
            className="mt-4 flex items-center gap-3 text-slate-300 transition hover:text-teal-400"
          >
            <Phone size={20} className="text-teal-400" />
            +94 771239547
          </a>

          <p className="mt-3 text-slate-400">
            We're here to help you explore Sri Lanka.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
        © 2026 Ceylon Escape. All Rights Reserved.
      </div>
    </footer>
  );
}
