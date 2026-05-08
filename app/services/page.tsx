import type { Metadata } from "next"
import { PageBanner } from "@/components/page-banner"
import { Services } from "@/components/services"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "Our Services | FlourishingTravels",
  description:
    "Explore our full range of travel services — holiday packages, flight ticketing, hotel reservations, visa assistance, travel insurance and corporate travel.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        title="Our Services"
        subtitle="Everything you need for a perfect trip — handled by trusted travel experts."
        image="/service-ticket.jpg"
      />
      <Services />
      <Newsletter />
    </main>
  )
}
