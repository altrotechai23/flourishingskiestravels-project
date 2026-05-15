import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Users } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "Tours | FlourishingTravels",
  description:
    "Browse our curated tour packages to stunning destinations around the world.",
}

const tours = [
  {
    title: "Dubai Desert Adventure",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    group: "2-12 People",
    price: "$1,299",
    image: "/tour-dubai.jpg",
    category: "Adventure",
  },
  {
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration: "7 Days / 6 Nights",
    group: "2 People",
    price: "$1,899",
    image: "/tour-paris.jpg",
    category: "Romance",
  },
  {
    title: "Bali Island Escape",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    group: "2-8 People",
    price: "$1,599",
    image: "/tour-bali.jpg",
    category: "Beach",
  },
  {
    title: "Qatar",
    location: "Doha",
    duration: "5 Days / 4 Nights",
    group: "2-10 People",
    price: "$1,749",
    image: "/tour-newyork.jpg",
    category: "City",
  },
  {
    title: "South Africa",
    location: "Cape Town",
    duration: "6 Days / 5 Nights",
    group: "2-6 People",
    price: "$2,099",
    image: "/gallery-santorini.jpg",
    category: "Romance",
  },
  {
    title: "Maldives Luxury Retreat",
    location: "Maldives",
    duration: "7 Days / 6 Nights",
    group: "2 People",
    price: "$2,899",
    image: "/gallery-maldives.jpg",
    category: "Luxury",
  },
  {
    title: "Tanzania Zanzibar",
    location: "Zanzibar",
    duration: "8 Days / 7 Nights",
    group: "2-10 People",
    price: "$2,299",
    image: "/gallery-kyoto.jpg",
    category: "Cultural",
  },
  {
    title: "Kenya Safari Expedition",
    location: "Nairobi, Kenya",
    duration: "6 Days / 5 Nights",
    group: "2-8 People",
    price: "$1,999",
    image: "/gallery-safari.jpg",
    category: "Adventure",
  },
]

export default function ToursPage() {
  return (
    <main>
      <PageBanner
        title="Our Tours"
        subtitle="Unforgettable adventures to the world's most beautiful destinations."
        image="/tour-dubai.jpg"
      />

      <section className="bg-[#f6f9fb] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <SectionHeader
            title="Explore Our Tour Packages"
            subtitle="Hand-picked destinations and fully curated experiences — all at the best prices, guaranteed."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 xl:grid-cols-4">
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
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-sm bg-[#0e2a3a]/80 px-3 py-1 text-xs font-medium tracking-wider text-white backdrop-blur-sm">
                    {t.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#2a2a2a]">
                    {t.title}
                  </h3>
                  <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{t.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{t.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{t.group}</span>
                    </div>
                  </div>
                  <Link
                    href="#booking"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-sm bg-primary px-4 py-2.5 text-xs font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)]"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
