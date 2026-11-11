
import { useState, type FormEvent } from "react";
import { CalendarDays, Users, CheckCircle2 } from "lucide-react";

type BookingFormProps = {
  destinationName: string;
  price: number;
};

type BookingDetails = {
  name: string;
  email: string;
  date: string;
  guests: number;
};

export default function BookingForm({
  destinationName,
  price
}: BookingFormProps) {
  const [form, setForm] = useState<BookingDetails>({
    name: "",
    email: "",
    date: "",
    guests: 1
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  const totalPrice = price * form.guests;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.date) {
      newErrors.date = "Please select a travel date.";
    } else if (form.date < localToday) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!Number.isInteger(form.guests) || form.guests < 1 || form.guests > 20) {
      newErrors.guests = "Guests must be between 1 and 20.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setConfirmed(true);
    }
  }

  function updateField<K extends keyof BookingDetails>(
    field: K,
    value: BookingDetails[K]
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
  }

  if (confirmed) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <CheckCircle2
          size={58}
          className="mx-auto text-teal-600"
        />

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Booking Request Successful!
        </h2>

        <p className="mt-3 text-slate-600">
          Thank you, {form.name.trim()}!
        </p>

        <p className="mt-2 text-slate-600">
          Your demo booking for {destinationName} has been recorded
          for this session.
        </p>

        <div className="mt-6 rounded-xl bg-teal-50 p-5 text-left text-sm">
          <p><strong>Destination:</strong> {destinationName}</p>
          <p className="mt-2"><strong>Travel Date:</strong> {form.date}</p>
          <p className="mt-2"><strong>Guests:</strong> {form.guests}</p>
          <p className="mt-2"><strong>Total:</strong> ${totalPrice}</p>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Demo only. No payment or real reservation has been made.
        </p>

        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            setForm({ name: "", email: "", date: "", guests: 1 });
            setErrors({});
          }}
          className="mt-6 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <div className="border-b pb-5">
        <p className="text-sm text-slate-500">Starting from</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-4xl font-bold text-teal-700">
            ${price}
          </span>
          <span className="text-slate-500">/ person</span>
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        Book Your Adventure
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Complete the form to preview your booking.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div>
          <label htmlFor="fullName" className="mb-2 block font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Enter your full name"
            aria-invalid={Boolean(errors.name)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="example@email.com"
            aria-invalid={Boolean(errors.email)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="travelDate" className="mb-2 flex items-center gap-2 font-medium">
            <CalendarDays size={18} /> Travel Date
          </label>
          <input
            id="travelDate"
            type="date"
            min={localToday}
            value={form.date}
            onChange={(e) => updateField("date", e.target.value)}
            aria-invalid={Boolean(errors.date)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className="mb-2 flex items-center gap-2 font-medium">
            <Users size={18} /> Number of Guests
          </label>
          <input
            id="guests"
            type="number"
            min="1"
            max="20"
            value={form.guests}
            onChange={(e) => updateField("guests", Number(e.target.value))}
            aria-invalid={Boolean(errors.guests)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-600"
          />
          {errors.guests && (
            <p className="mt-1 text-sm text-red-600">{errors.guests}</p>
          )}
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex justify-between text-slate-600">
            <span>${price} × {form.guests} guests</span>
            <span>${totalPrice}</span>
          </div>
          <div className="mt-3 flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total Price</span>
            <span className="text-teal-700">${totalPrice}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 py-4 font-bold text-white transition hover:bg-teal-700"
        >
          Confirm Booking
        </button>

        <p className="text-center text-xs text-slate-500">
          Demo booking only. No payment is required.
        </p>
      </form>
    </div>
  );
}
