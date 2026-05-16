import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingBag } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { SectionHeader } from "@/components/section-header"
import { BookingSearch } from "@/components/booking-search"

export const metadata: Metadata = {
  title: "Products | FlourishingTravels",
  description:
    "Premium travel gear and accessories — everything you need for a flourishing journey.",
}

const products = [
  {
    title: "Premium Travel Suitcase",
    description: "Hard-shell luggage with 360° spinner wheels and TSA lock.",
    price: "$249",
    image: "/product-luggage.jpg",
  },
  {
    title: "Explorer Travel Backpack",
    description: "Lightweight, water-resistant pack with laptop compartment.",
    price: "$129",
    image: "/product-backpack.jpg",
  },
  {
    title: "Memory Foam Neck Pillow",
    description: "Ergonomic support for long-haul flights and road trips.",
    price: "$39",
    image: "/product-pillow.jpg",
  },
  {
    title: "Universal Travel Adapter",
    description: "Works in 150+ countries with 4 USB & 1 USB-C ports.",
    price: "$49",
    image: "/product-adapter.jpg",
  },
]

export default function ProductsPage() {
  // return <div>Not working</div>
  return (
    <main>
      <PageBanner
        title="Our Products"
        subtitle="Premium travel gear and accessories — curated for the modern traveler."
        image="/product-luggage.jpg"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <SectionHeader
            title="Travel Essentials"
            subtitle="From carry-ons to accessories, shop travel gear tested and loved by our team of globetrotters."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#f6f9fb]">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label="5 star rating"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#f8c400] text-[#f8c400]"
                      />
                    ))}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-[#2a2a2a]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-600">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {p.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-2 text-xs font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)]"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      BUY
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="relative z-40 -mt-28 sm:-mt-24 md:-mt-20">
                <BookingSearch />
              </div>
      </section>
    </main>
  )
}
