export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row justify-between gap-4 text-sm">
        <div>
          <div className="font-semibold">Ruben’s Barber Shop</div>
          <div>Concord, CA · Mon–Sat 9am–6pm</div>
        </div>
        <div>
          <div>Phone: <a href="tel:+19255550123" className="hover:underline">+1 (925) 555-0123</a></div>
          <div>Email: <a href="mailto:booking@rubensbarber.com" className="hover:underline">booking@rubensbarber.com</a></div>
        </div>
      </div>
      <div className="text-center text-xs py-3 border-t bg-white">
        © {new Date().getFullYear()} Ruben’s Barber Shop. All rights reserved.
      </div>
    </footer>
  );
}
