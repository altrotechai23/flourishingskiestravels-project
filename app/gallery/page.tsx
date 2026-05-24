import type { Metadata } from "next"
import Image from "next/image"
import { PageBanner } from "@/components/page-banner"
import { SectionHeader } from "@/components/section-header"
import { BookingSearch } from "@/components/booking-search"

export const metadata: Metadata = {
  title: "Gallery | FlourishingTravels",
  description:
    "Photos from our tours and destinations around the world — a glimpse of the unforgettable memories we help our travelers create.",
}

const photos = [
  { src: "/hero-london.jpg", alt: "London at night", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/gallery-santorini.jpg", alt: "Santorini sunset" },
  { src: "/gallery-maldives.jpg", alt: "Maldives overwater villa" },
  { src: "/tour-paris.jpg", alt: "Eiffel Tower at dusk" },
  { src: "/gallery-kyoto.jpg", alt: "Kyoto torii gates", span: "lg:col-span-2" },
  { src: "/tour-dubai.jpg", alt: "Dubai skyline" },
  { src: "/gallery-safari.jpg", alt: "African safari" },
  { src: "/tour-bali.jpg", alt: "Bali beach resort" },
  { src: "/tour-newyork.jpg", alt: "New York skyline" },
  { src: "/student-tour.jpg", alt: "Tower Bridge at night" },
  { src: "/special-tour.jpg", alt: "Special tour travelers" },
]

export default function GalleryPage() {
  // return <div>Not working</div>
  return (
    <main>
      <PageBanner
        title="Photo Gallery"
        subtitle="A glimpse of the unforgettable experiences we've curated for travelers around the world."
        image="/gallery-santorini.jpg"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <SectionHeader
            title="Moments From Our Travelers"
            subtitle="Every photo is a story — every story is a journey worth taking."
          />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:auto-rows-[180px]">
            {photos.map((p) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-sm shadow-md aspect-[4/3] lg:aspect-auto lg:h-full ${
                  p.span ?? ""
                }`}
              >
                <Image
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a3a]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="relative  mt-28 sm:mt-24 md:mt-20">
                <BookingSearch />
              </div>
      </section>
    </main>
  )
}
