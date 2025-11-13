"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Ruben's Barber Shop" width={32} height={32} />
          <span className="font-semibold">Ruben’s Barber Shop</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/services" className="hover:text-neon">Services</Link>
          <Link href="/gallery" className="hover:text-neon">Gallery</Link>
          <Link href="/about" className="hover:text-neon">About</Link>
          <Link href="/contact" className="btn btn-primary">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}
