// app/search-results/page.tsx

import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Info,
  MapPin,
  Search,
  Star,
  ThumbsUp,
  BedDouble,
  Plane,
  Shield,
  Car,
  Bus,
  Briefcase,
  Package,
  Truck,
  PlaneTakeoff,
  CheckCircle2,
} from "lucide-react"

export const dynamic = "force-dynamic"

const allResults = [
  {
    id: 1,
    title: "Premium Visa Assistance",
    category: "Visa processing Assistance",
    image: "/tour-dubai.jpg",
    badge: "Fast Processing",
    rating: 8.8,
    reviews: 91,
    description:
      "Embassy-ready document review • Priority support • 3–7 days",
    location: "Cape Town",
    price: "From ZAR 3,644",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Luxury Dubai Holiday Package",
    category: "Vacation packages",
    image: "/tour-bali.jpg",
    badge: "Limited-time Deal",
    rating: 9.2,
    reviews: 144,
    description:
      "Flights + Hotel + Transfers • Family friendly • Flexible dates",
    location: "Dubai",
    price: "Custom Quote",
    icon: PlaneTakeoff,
  },
  {
    id: 3,
    title: "Airport VIP Transfer",
    category: "Airport transfers ( pick up/drop-off)",
    image: "/hero-london.jpg",
    badge: "Popular",
    rating: 9.0,
    reviews: 208,
    description:
      "Pickup / Drop-off • Luxury fleet • 24/7 availability",
    location: "Cape Town",
    price: "From ZAR 950",
    icon: Car,
  },
  {
    id: 4,
    title: "Business Flight Booking",
    category: "Flight bookings",
    image: "/tour-newyork.jpg",
    badge: "Best Seller",
    rating: 8.7,
    reviews: 320,
    description:
      "International and domestic flight bookings with flexible fares",
    location: "Johannesburg",
    price: "From ZAR 4,200",
    icon: Plane,
  },
  {
    id: 5,
    title: "Travel Insurance Premium",
    category: "Travel Insurance processing",
    image: "/service-insurance.jpg",
    badge: "Recommended",
    rating: 9.1,
    reviews: 98,
    description:
      "Worldwide travel coverage • Emergency assistance • Fast claims",
    location: "South Africa",
    price: "From ZAR 550",
    icon: Shield,
  },
  {
    id: 6,
    title: "5-Star Hotel Reservation",
    category: "Hotel Bookings",
    image: "/tour-bali.jpg",
    badge: "Top Rated",
    rating: 9.4,
    reviews: 487,
    description:
      "Luxury hotels • Breakfast included • Flexible cancellation",
    location: "Cape Town",
    price: "From ZAR 2,890",
    icon: BedDouble,
  },
  {
    id: 7,
    title: "Tour Booking Experience",
    category: "Tour Bookings",
    image: "/service-holiday.jpg",
    badge: "Adventure",
    rating: 8.9,
    reviews: 112,
    description:
      "Guided city tours • Safari packages • International destinations",
    location: "Nairobi",
    price: "From ZAR 7,500",
    icon: Bus,
  },
  {
    id: 8,
    title: "Express Package Delivery",
    category: "Package pickup and delivery",
    image: "/tour-dubai.jpg",
    badge: "Same Day",
    rating: 8.5,
    reviews: 64,
    description:
      "Fast package pickup and delivery across major cities",
    location: "Cape Town",
    price: "From ZAR 180",
    icon: Package,
  },
  {
    id: 9,
    title: "Freight Forwarding Solutions",
    category: "Freight Forward services",
    image: "/hero-london.jpg",
    badge: "Global Logistics",
    rating: 8.6,
    reviews: 77,
    description:
      "Air cargo • Sea freight • Customs clearance support",
    location: "Durban",
    price: "Request Quote",
    icon: Truck,
  },
]

type Props = {
  searchParams: Promise<{
    service?: string
    destination?: string
    adults?: string
    children?: string
    rooms?: string
    search?: string
  }>
}

export default async function SearchResultsPage({
  searchParams,
}: Props) {
  const params = await searchParams

  const service = params.service || ""
  const destination = params.destination || ""
  const adults = params.adults || "2"
  const children = params.children || "0"
  const rooms = params.rooms || "1"
  const search = params.search || ""

  const normalizedSearch = search.toLowerCase().trim()
  const normalizedService = service.toLowerCase().trim()
  const normalizedDestination = destination.toLowerCase().trim()

  const filteredResults = allResults.filter((item) => {
    const matchesService =
      !normalizedService ||
      item.category.toLowerCase().includes(normalizedService) ||
      normalizedService.includes(item.category.toLowerCase())

    const matchesDestination =
      !normalizedDestination ||
      item.location.toLowerCase().includes(normalizedDestination)

    const matchesSearch =
      !normalizedSearch ||
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.category.toLowerCase().includes(normalizedSearch) ||
      item.location.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch)

    return matchesService && matchesDestination && matchesSearch
  })

  const hasResults = filteredResults.length > 0
  // return <div>Not working</div>
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      {/* top section */}
      <section className="bg-[#003b95] pb-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Flourishing Skies Travels
          </Link>

          {/* search bar */}
          <div className="mt-8 overflow-hidden rounded-2xl border-4 border-[#febb02] bg-white shadow-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr_auto]">
              {/* destination */}
              <div className="flex min-h-19 items-center gap-4 border-b border-gray-200 px-5 xl:border-b-0 xl:border-r">
                <MapPin className="h-6 w-6 shrink-0 text-gray-500" />

                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold text-gray-900">
                    {destination || "All destinations"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Destination / city
                  </p>
                </div>
              </div>

              {/* service */}
              <div className="flex min-h-19 items-center gap-4 border-b border-gray-200 px-5 xl:border-b-0 xl:border-r">
                <Search className="h-6 w-6 shrink-0 text-gray-500" />

                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold text-gray-900">
                    {service || "All services"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Service category
                  </p>
                </div>
              </div>

              {/* guests */}
              <div className="flex min-h-19 items-center gap-4 border-b border-gray-200 px-5 xl:border-b-0 xl:border-r">
                <BedDouble className="h-6 w-6 shrink-0 text-gray-500" />

                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {adults} adults · {children} children · {rooms} rooms
                  </p>

                  <p className="text-sm text-gray-500">
                    Guests and rooms
                  </p>
                </div>
              </div>

              {/* button */}
              <button className="min-h-19 bg-[#0071c2] px-10 text-xl font-bold text-white transition hover:bg-[#005999]">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
          {/* sidebar */}
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="grid h-65 place-items-center bg-gray-100">
                <button className="inline-flex items-center gap-3 rounded-2xl bg-[#0071c2] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#005999]">
                  <MapPin className="h-5 w-5" />
                  Show on map
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Filter by:
              </h3>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">
                  Popular Services
                </h4>

                <div className="mt-5 space-y-4">
                  {[
                    "Hotel Bookings",
                    "Flight bookings",
                    "Visa processing Assistance",
                    "Tour Bookings",
                    "Travel Insurance processing",
                    "Airport transfers",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="font-medium text-gray-700">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* main */}
          <div>
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {destination || "All destinations"}:{" "}
                  {filteredResults.length} services found
                </h1>

                <p className="mt-2 text-gray-500">
                  Search results for travel and tourism services
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                Available services updated live
              </div>
            </div>

            {/* info */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border bg-white px-5 py-4 shadow-sm">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gray-600" />

              <p className="font-medium text-gray-700">
                Showing matching results based on your destination,
                selected services and search filters.
              </p>
            </div>

            {/* no results */}
            {!hasResults && (
              <div className="mt-8 rounded-3xl bg-white p-12 text-center shadow-sm">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gray-100">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  No results found
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                  We could not find any matching services for your
                  search. Try changing your destination, service type
                  or filters.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#0071c2] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#005999]"
                >
                  Back to homepage
                </Link>
              </div>
            )}

            {/* results */}
            {hasResults && (
              <div className="mt-6 space-y-6">
                {filteredResults.map((item) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.id}
                      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="grid xl:grid-cols-[340px_1fr]">
                        {/* image */}
                        <div className="relative h- overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                          />

                          <button className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full bg-white/95 shadow-xl backdrop-blur">
                            <Heart className="h-6 w-6 text-gray-700" />
                          </button>
                        </div>

                        {/* content */}
                        <div className="grid gap-6 p-6 lg:grid-cols-[1fr_240px]">
                          {/* left */}
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f0ff]">
                                <Icon className="h-5 w-5 text-[#006ce4]" />
                              </div>

                              <h2 className="text-2xl font-bold text-[#006ce4] sm:text-3xl">
                                {item.title}
                              </h2>

                              <div className="flex items-center">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-5 w-5 fill-[#febb02] text-[#febb02]"
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-3 text-[#006ce4]">
                              <span>{item.location}</span>
                              <span className="h-1 w-1 rounded-full bg-[#006ce4]" />
                              <span>Show on map</span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                              <span className="inline-flex rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white">
                                {item.badge}
                              </span>

                              <span className="inline-flex rounded-xl bg-[#eef5ff] px-4 py-2 text-sm font-semibold text-[#006ce4]">
                                {item.category}
                              </span>
                            </div>

                            <p className="mt-6 text-lg leading-relaxed text-gray-700">
                              {item.description}
                            </p>
                          </div>

                          {/* right */}
                          <div className="flex flex-col justify-between">
                            <div className="flex items-start justify-between gap-4 lg:justify-end">
                              <div className="text-right">
                                <p className="text-xl font-bold text-gray-900">
                                  Excellent
                                </p>

                                <p className="text-gray-500">
                                  {item.reviews} reviews
                                </p>
                              </div>

                              <div className="rounded-2xl bg-[#003b95] px-5 py-3 text-2xl font-bold text-white">
                                {item.rating}
                              </div>
                            </div>

                            <div className="mt-8 lg:text-right">
                              <p className="text-sm text-gray-500">
                                Includes taxes and fees
                              </p>

                              <p className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                                {item.price}
                              </p>

                              <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0071c2] px-7 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#005999]">
                                <ThumbsUp className="h-5 w-5" />
                                See availability
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}