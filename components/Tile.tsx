import Image from "next/image";

export default function Tile({ src, title }: { src: string; title: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl shadow-card bg-white">
      <Image src={src} alt={title} width={1200} height={800} className="w-full h-64 object-cover" />
      <figcaption className="p-3 text-sm">{title}</figcaption>
    </figure>
  );
}
