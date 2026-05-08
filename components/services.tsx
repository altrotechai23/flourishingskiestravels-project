import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const services = [
  {
    title: "Holiday Packages",
    description: "Highly interactive and fun-filled Tours",
    image: "/service-holiday.jpg",
  },
  {
    title: "Ticketing and Reservation",
    description: "Tickets for Local and International Flights",
    image: "/service-ticket.jpg",
  },
  {
    title: "Travel Insurance",
    description: "Insurance policy for effective protection",
    image: "/service-insurance.jpg",
  },
  {
    title: "Visa Assistance",
    description: "Fast and reliable visa application support",
    image: "/tour-newyork.jpg",
  },
  {
    title: "Hotel Reservation",
    description: "Book premium hotels at the best rates",
    image: "/tour-bali.jpg",
  },
  {
    title: "Corporate Travel",
    description: "Tailored business travel solutions for teams",
    image: "/tour-dubai.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeader
          title="Our Professional Services"
          subtitle="Based on our wide network of professional partners across the world, vast experience, highly trained staff with deep knowledge and high level of expertise in educational tourism, we organize interesting tour package for different global destinations in all the six continents."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
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
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <article className="group overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-[#2a2a2a]">{title}</h3>
        <p className="mt-3 text-sm font-semibold text-primary">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-xs font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)]"
          >
            LEARN MORE
          </Link>
          <div className="flex items-center gap-0.5" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#f8c400] text-[#f8c400]"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
