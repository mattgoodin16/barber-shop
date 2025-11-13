import BookingButton from "@/components/BookingButton";

const rows = [
  { name: "Haircut", price: "$35", desc: "Classic cut tailored to you" },
  { name: "Fade / Taper", price: "$40", desc: "Clean low, mid, or high fades" },
  { name: "Beard Trim", price: "$25", desc: "Shape up and line up" },
  { name: "Kids Cut", price: "$25", desc: "Under 12" },
  { name: "Hot Towel Shave", price: "$45", desc: "Old school straight razor" }
];

export default function Services() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold">Services & Pricing</h1>
        <div className="mt-6 bg-white rounded-2xl shadow-card divide-y">
          {rows.map((r) => (
            <div key={r.name} className="p-5 flex items-center justify-between">
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-sm text-gray-600">{r.desc}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-semibold">{r.price}</div>
                <BookingButton />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-600">
          Walk-ins welcome. Appointments recommended on weekends.
        </p>
      </div>
    </section>
  );
}
