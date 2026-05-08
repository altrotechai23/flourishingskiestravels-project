// app/search-results/page.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Heart,
  Info,
  MapPin,
  Search,
  Star,
  ThumbsUp,
} from "lucide-react"

const results = [
  {
    title: "Premium Visa Assistance",
    category: "Visa Assistance",
    image: "/tour-dubai.jpg",
    badge: "Fast Processing",
    rating: 8.8,
    reviews: 91,
    description: "Embassy-ready document review • Priority support • 3–7 days",
    location: "Cape Town",
    price: "From ZAR 3,644",
  },
  {
    title: "Luxury Holiday Package",
    category: "Vacation Packages",
    image: "/tour-bali.jpg",
    badge: "Limited-time Deal",
    rating: 7.6,
    reviews: 144,
    description: "Flights + Hotel + Transfers • Family friendly • Flexible dates",
    location: "Dubai",
    price: "Custom Quote",
  },
  {
    title: "Airport VIP Transfer",
    category: "Airport Transfers",
    image: "/hero-london.jpg",
    badge: "Popular",
    rating: 9.2,
    reviews: 208,
    description: "Pickup / Drop-off • Luxury fleet • 24/7 availability",
    location: "Cape Town",
    price: "From ZAR 950",
  },
]

export default function SearchResultsPage() {
  const params = useSearchParams()

  const service = params.get("service") || "Hotel Bookings"
  const destination = params.get("destination") || "Cape Town, South Africa"
  const adults = params.get("adults") || "2"
  const children = params.get("children") || "1"
  const rooms = params.get("rooms") || "1"

  const filtered = results.filter(
    (item) =>
      item.category.toLowerCase().includes(service.toLowerCase()) ||
      service.toLowerCase().includes(item.category.toLowerCase()),
  )

  const data = filtered.length ? filtered : results

  return (
    <main className="min-h-screen bg-[#f5f7fa] pb-20">
      {/* booking blue top */}
      <section className="bg-primary pb-10 pt-30">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex text-3xl font-bold tracking-tight text-white"
          >
            FlourishingTravels
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border-[4px] border-[#febb02] bg-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
              <div className="flex h-[72px] items-center gap-4 border-b px-5 lg:border-r lg:border-b-0">
                <MapPin className="h-6 w-6 text-gray-500" />
                <span className="font-medium text-gray-900">{destination}</span>
              </div>

              <div className="flex h-[72px] items-center gap-4 border-b px-5 lg:border-r lg:border-b-0">
                <Search className="h-6 w-6 text-gray-500" />
                <span className="font-medium text-gray-900">{service}</span>
              </div>

              <div className="flex h-[72px] items-center gap-4 border-b px-5 lg:border-r lg:border-b-0">
                <span className="font-medium text-gray-900">
                  {adults} adults · {children} children · {rooms} rooms
                </span>
              </div>

              <button className="h-[72px] bg-[#0071c2] px-10 text-xl font-semibold text-white transition hover:bg-[#005999]">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* content */}
      <section className="mx-auto mt-8 max-w-[1280px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* sidebar */}
          <aside className="space-y-5">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="grid h-[240px] place-items-center rounded-2xl bg-gray-100">
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#0071c2] px-8 py-4 font-semibold text-white transition hover:scale-105">
                  <MapPin className="h-5 w-5" />
                  Show on map
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-gray-900">Filter by:</h3>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">
                  Your budget (per night)
                </h4>

                <div className="mt-5 h-28 rounded-2xl bg-gray-100" />
              </div>

              <div className="mt-8 space-y-4">
                {["Popular", "Premium", "Fast Processing", "Family Friendly"].map(
                  (item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" className="h-5 w-5 rounded" />
                      <span className="font-medium text-gray-700">{item}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </aside>

          {/* result list */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {destination}: {data.length} services found
            </h1>

            <div className="mt-5 flex items-center gap-3 rounded-2xl border bg-white px-5 py-4">
              <Info className="h-5 w-5" />
              <span className="font-medium text-gray-800">
                91% of matching services are currently available for your dates.
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {data.map((item) => (
                <article
                  key={item.title}
                  className="group grid overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl xl:grid-cols-[340px_1fr]"
                >
                  <div className="relative h-[260px] xl:h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <button className="absolute right-5 top-5 grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl">
                      <Heart className="h-7 w-7 text-gray-700" />
                    </button>
                  </div>

                  <div className="grid gap-6 p-6 lg:grid-cols-[1fr_220px]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-4xl font-bold text-[#006ce4]">
                          {item.title}
                        </h2>

                        <div className="flex">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 fill-[#febb02] text-[#febb02]"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 flex items-center gap-3 text-[#006ce4]">
                        <span>{item.location}</span>
                        <span>Show on map</span>
                      </div>

                      <span className="mt-5 inline-flex rounded-xl bg-green-700 px-4 py-2 font-semibold text-white">
                        {item.badge}
                      </span>

                      <p className="mt-6 text-lg text-gray-700">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-start justify-end gap-4">
                        <div>
                          <p className="text-2xl font-bold">Excellent</p>
                          <p className="text-gray-500">
                            {item.reviews} reviews
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#003b95] px-5 py-3 text-3xl font-bold text-white">
                          {item.rating}
                        </div>
                      </div>

                      <p className="mt-8 text-sm text-gray-500">
                        Includes taxes and fees
                      </p>

                      <p className="mt-2 text-5xl font-bold text-gray-900">
                        {item.price}
                      </p>

                      <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#0071c2] px-8 py-5 text-xl font-semibold text-white transition hover:bg-[#005999]">
                        <ThumbsUp className="h-5 w-5" />
                        See availability
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}