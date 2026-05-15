import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const services = [
  {
    title: "Holiday Packages",
    description: "Highly interactive and fun-filled tours with everything included in one seamless package.",
    // Tropical beach overwater bungalows — Maldives / holiday feel
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    searchCategory: "Vacation Packages",
    badge: "Most Popular",
  },
  {
    title: "Flight Bookings",
    description: "Tickets for local and international flights — economy, business and first class.",
    // Airplane wing above clouds
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    searchCategory: "Flight Bookings",
    badge: "Premium Service",
  },
  {
    title: "Travel Insurance",
    description: "Comprehensive insurance policies for effective protection on every journey.",
    // Person with travel umbrella / protection concept
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    searchCategory: "Travel Insurance",
    badge: "Premium Service",
  },
  {
    title: "Visa Assistance",
    description: "Fast and reliable visa application support for tourist, business, student and work visas.",
    // Passport and travel documents on desk
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb9f?w=800&q=80",
    searchCategory: "Visa Assistance",
    badge: "Premium Service",
  },
  {
    title: "Hotel Bookings",
    description: "Book premium hotels, boutique lodges and resorts at the best rates worldwide.",
    // Luxury hotel lobby / pool
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    searchCategory: "Hotel Bookings",
    badge: "Premium Service",
  },
  {
    title: "Travel Consultancy",
    description: "Tailored business and leisure travel solutions crafted by experienced consultants.",
    // Travel agent / consultant at desk with maps
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    searchCategory: "Travel Consultancy",
    badge: "Premium Service",
  },
  {
    title: "Tour Bookings",
    description: "From city tours to safaris — curated experiences for every interest and budget.",
    // Safari / African wildlife tour
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    searchCategory: "Tour Bookings",
    badge: "Premium Service",
  },
  {
    title: "Flight Hire / Charter",
    description: "Exclusive private charter flights for groups, executives and cargo with flexible routing.",
    // Private jet on tarmac
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    searchCategory: "Flight Hire / Charter",
    badge: "VIP",
  },
  {
    title: "Airport Transfers",
    description: "Reliable, punctual transfers between airports, hotels, ports and any destination.",
    // Luxury black car / chauffeur at airport
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    searchCategory: "Airport Transfers",
    badge: "Premium Service",
  },
  {
    title: "Airport Assistance",
    description: "VIP meet & greet, fast-track, wheelchair and unaccompanied minor services.",
    // Airport terminal with people — assistance feel
    image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&q=80",
    searchCategory: "Airport Assistance",
    badge: "Premium Service",
  },
  {
    title: "Yellow Fever / Passport",
    description: "Yellow fever certificates, passport applications, renewals and emergency travel documents.",
    // Passport with stamps / travel documents
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    searchCategory: "Yellow Fever / Passport",
    badge: "Premium Service",
  },
  {
    title: "Freight Forwarding",
    description: "Air, sea and road freight forwarding with customs clearance for businesses and individuals.",
    // Cargo ship / shipping containers at port
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    searchCategory: "Freight Forwarding",
    badge: "Premium Service",
  },
  {
    title: "Logistics / Transportation",
    description: "End-to-end supply chain — warehousing, last-mile delivery, cold chain and bulk transport.",
    // Trucks on highway / logistics
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    searchCategory: "Logistics / Transportation",
    badge: "Premium Service",
  },
  {
    title: "Package Pickup & Delivery",
    description: "Fast, reliable same-day and scheduled parcel pickup and delivery for all needs.",
    // Delivery person handing over parcel
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    searchCategory: "Package Pickup & Delivery",
    badge: "Premium Service",
  },
  {
    title: "Riders Services",
    description: "On-demand executive cars, bike couriers and group minibus rides — book as you go.",
    // Motorcycle courier / rider in city
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
    searchCategory: "Riders Services",
    badge: "Premium Service",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Subtle background */}
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
  badge,
}: {
  title: string
  description: string
  image: string
  searchCategory: string
  badge: string
}) {
  const href = `/#booking-search?service=${encodeURIComponent(searchCategory)}`

  return (
    <Link
      href={href}
      aria-label={`Request ${title}`}
      className="group block h-full"
    >
      <article className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* Glow overlay on hover */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0071c2]/10 via-transparent to-[#0071c2]/5" />
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Floating badge */}
          <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#0071c2] shadow-lg backdrop-blur-md">
            {badge}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-xl font-semibold text-[#1f2937] transition-colors duration-300 group-hover:text-[#0071c2]">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-0.5" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#febb02] text-[#febb02]" />
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071c2] transition-all duration-300 group-hover:gap-3">
              Request Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}