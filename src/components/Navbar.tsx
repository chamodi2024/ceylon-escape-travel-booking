
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-700">
          <Plane size={28} />
          Ceylon Escape
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className="font-medium hover:text-teal-600">
            Home
          </NavLink>
          <NavLink to="/explore" className="font-medium hover:text-teal-600">
            Explore
          </NavLink>
          <Link
            to="/explore"
            className="rounded-full bg-teal-600 px-6 py-2 text-white hover:bg-teal-700"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t bg-white px-6 py-5 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/explore" onClick={() => setOpen(false)}>Explore</Link>
          <Link to="/explore" onClick={() => setOpen(false)}>Book Now</Link>
        </div>
      )}
    </nav>
  );
}
