export default function Contact() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">Book or Contact</h1>
        <p className="mt-2 text-gray-600">Use our booking link or reach out directly.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Book online</h3>
            <p className="text-gray-600 mt-1">Fastest way to reserve your spot.</p>
            <a href="https://booksy.com" target="_blank" className="btn btn-primary mt-4">
              Open Booking
            </a>
          </div>

          <div className="card">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-1">
              <a className="text-neon hover:underline" href="tel:+19255550123">
                +1 (925) 555-0123
              </a>
            </p>
            <p className="mt-1">
              <a className="text-neon hover:underline" href="mailto:booking@rubensbarber.com">
                booking@rubensbarber.com
              </a>
            </p>
            <p className="mt-3 text-gray-600">1234 Willow Pass Rd, Concord, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
