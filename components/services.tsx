import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const services = [
  {
    title: "Holiday Packages",
    description: "Highly interactive and fun-filled Tours",
    image: "/service-holiday.jpg",
    searchCategory: "Vacation Packages",
  },
  {
    title: "Ticketing and Reservation",
    description: "Tickets for Local and International Flights",
    image: "/service-ticket.jpg",
    searchCategory: "Flight Bookings",
  },
  {
    title: "Travel Insurance",
    description: "Insurance policy for effective protection",
    image: "/service-insurance.jpg",
    searchCategory: "Travel Insurance",
  },
  {
    title: "Visa Assistance",
    description: "Fast and reliable visa application support",
    image: "/tour-newyork.jpg",
    searchCategory: "Visa Assistance",
  },
  {
    title: "Hotel Reservation",
    description: "Book premium hotels at the best rates",
    image: "/tour-bali.jpg",
    searchCategory: "Hotel Bookings",
  },
  {
    title: "Corporate Travel",
    description: "Tailored business travel solutions for teams",
    image: "/tour-dubai.jpg",
    searchCategory: "Travel Consultancy",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,113,194,0.06),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeader
          title="Our Professional Services"
          subtitle="Based on our wide network of professional partners across the world, vast experience, highly trained staff with deep knowledge and high level of expertise in educational tourism, we organize premium travel solutions tailored to every need."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  description,
  image,
  searchCategory,
}: {
  title: string
  description: string
  image: string
  searchCategory: string
}) {
  const href = `/search-results?service=${encodeURIComponent(
    searchCategory,
  )}&destination=${encodeURIComponent(
    "Cape Town, South Africa",
  )}&adults=2&children=1&rooms=1`

  return (
    <Link
      href={href}
      aria-label={`View ${title}`}
      className="group block h-full"
    >
      <article className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        </div>

        {/* image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          {/* floating badge */}
          <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-primary shadow-lg backdrop-blur-md">
            Premium Service
          </div>
        </div>

        {/* content */}
        <div className="relative p-6">
          <h3 className="text-xl font-semibold text-[#1f2937] transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div
              className="flex items-center gap-0.5"
              aria-label="5 star rating"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#febb02] text-[#febb02]"
                />
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
              Explore
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}