import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const tours = [
  {
    title: "Dubai Desert Adventure",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    image: "/tour-dubai.jpg",
  },
  {
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration: "7 Days / 6 Nights",
    price: "$1,899",
    image: "/tour-paris.jpg",
  },
  {
    title: "Bali Island Escape",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "$1,599",
    image: "/tour-bali.jpg",
  },
  {
    title: "New York City Break",
    location: "New York, USA",
    duration: "5 Days / 4 Nights",
    price: "$1,749",
    image: "/tour-newyork.jpg",
  },
]

export function FeaturedTours() {
  return (
    <section id="tours" className="bg-[#f6f9fb] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeader
          title="Featured Tours"
          subtitle="Hand-picked destinations curated by our expert travel consultants — from romantic city breaks to exotic island escapes."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <article
              key={t.title}
              className="group overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-primary px-3 py-1 text-xs font-semibold tracking-wider text-primary-foreground">
                  {t.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2a2a2a]">
                  {t.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{t.location}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{t.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
