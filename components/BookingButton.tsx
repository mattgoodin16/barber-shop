export default function BookingButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="https://booksy.com"
      target="_blank"
      className={`btn btn-primary ${large ? "text-lg px-7 py-4" : ""}`}
    >
      Book a Cut
    </a>
  );
}
