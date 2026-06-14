import type { Metadata } from "next"
import { PageBanner } from "@/components/page-banner"
import { Services } from "@/components/services"
import { Newsletter } from "@/components/newsletter"
import { BookingSearch } from "@/components/booking-search"

export const metadata: Metadata = {
  title: "Our Services | FlourishingTravels",
  description:
    "Explore our full range of travel services — holiday packages, flight ticketing, hotel reservations, visa assistance, travel insurance and corporate travel.",
}

export default function ServicesPage() {
  // return <div>Not working</div>
  return (
    <main>
      <PageBanner
        title="Our Services"
        subtitle="Everything you need for a perfect trip — handled by trusted travel experts."
        image="/service-ticket.jpg"
      />
      <Services />
      <Newsletter />
      <div className="relative z-40 -mt-28 sm:-mt-24 md:-mt-20">
        <BookingSearch />
      </div>
    </main>
  )
}
