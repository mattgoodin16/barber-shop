import Image from "next/image";
import BookingButton from "@/components/BookingButton";

export default function About() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <Image
            src="/images/inside.jpg"
            alt="Inside the shop"
            width={1400}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">About Ruben</h1>
          <p className="mt-4 text-gray-700">
            Ruben has been cutting in the Bay for years. He blends classic barbershop tradition with modern styles
            and a relaxed vibe. From crisp fades to hot towel shaves, the goal is simple — make you look sharp
            and feel confident.
          </p>
          <div className="mt-6">
            <BookingButton />
          </div>
        </div>
      </div>
    </section>
  );
}
