export default function Testimonial({
  quote,
  author
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="card">
      <p className="italic">“{quote}”</p>
      <div className="mt-3 text-sm text-gray-600">— {author}</div>
    </div>
  );
}
