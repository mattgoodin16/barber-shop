import Tile from "@/components/Tile";

const pics = [
  { src: "/images/fade-1.jpg", title: "Low fade" },
  { src: "/images/fade-2.jpg", title: "Skin fade" },
  { src: "/images/inside.jpg", title: "Shop interior" },
  { src: "/images/chair.jpg", title: "Classic chair" }
];

export default function Gallery() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-gray-600">A few recent looks from the chair.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pics.map((p) => (
            <Tile key={p.src} src={p.src} title={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
