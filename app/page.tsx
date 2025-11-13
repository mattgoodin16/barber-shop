import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/components/BookingButton";
import Testimonial from "@/components/Testimonial";
import Tile from "@/components/Tile";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Sharp fades. Real conversation. <span className="text-neon">Concord’s classic cut.</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Ruben brings precision cuts and a timeless barbershop vibe to the Bay Area. Book online or walk in.
            </p>
            <div className="mt-8 flex gap-3">
              <BookingButton large />
              <Link href="/services" className="btn bg-navy text-white hover:brightness-110">
                View Services
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <Image src="/images/chair.jpg" alt="Barber chair" width={1400} height={900} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold">✂️ Precision Cuts</h3>
            <p className="mt-2 text-gray-600">Fades, tapers, shaves, and classic trims done right.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">💈 Classic Service</h3>
            <p className="mt-2 text-gray-600">Old school attention to detail with modern booking.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">📍 Concord Local</h3>
            <p className="mt-2 text-gray-600">Easy parking and a welcoming shop environment.</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Fresh cuts</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Tile src="/images/fade-1.jpg" title="Low fade" />
            <Tile src="/images/fade-2.jpg" title="Skin fade" />
            <Tile src="/images/inside.jpg" title="Inside the shop" />
          </div>
          <div className="mt-6">
            <Link href="/gallery" className="text-neon hover:underline">
              See full gallery →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">What customers say</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-6">
            <Testimonial quote="Best fade I’ve had in years. Ruben is meticulous." author="Carlos R." />
            <Testimonial quote="Walked in, left looking fresh. Booking online is super easy." author="Marcus L." />
            <Testimonial quote="Classic shop vibe with modern style. 10 out of 10." author="Sean D." />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div className="card">
            <h3 className="text-xl font-semibold">Visit us</h3>
            <p className="mt-1 text-gray-600">1234 Willow Pass Rd, Concord, CA</p>
            <p className="text-gray-600">Mon–Sat 9am–6pm</p>
            <div className="mt-4 flex gap-3">
              <BookingButton />
              <a
                className="btn bg-navy text-white"
                target="_blank"
                href="https://maps.google.com/?q=Concord+Barber+Shop"
              >
                Get Directions
              </a>
            </div>
          </div>
          <iframe
            className="w-full h-80 rounded-2xl border"
            src="https://maps.google.com/maps?q=Concord%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </>
  );
}
