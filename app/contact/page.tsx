// app/contact/page.tsx

import type { Metadata } from "next"
import { PageBanner } from "@/components/page-banner"
import { ContactSection } from "@/components/contact-section"
import { BookingSearch } from "@/components/booking-search"

export const metadata: Metadata = {
  title: "Contact Us | Flourishing Skies Travels",
  description:
    "Get in touch with Flourishing Skies Travels for travel consultancy, visa assistance, bookings, logistics, airport transfers and premium travel services.",
}

export default function ContactPage() {
  // return <div>Not working</div>
  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="Speak with our team for bookings, visas, airport transfers, logistics, delivery services and premium travel experiences. Cheap flight tickets both domestic and international"
        image="/contact-office.jpg"
      />
      <ContactSection />
      <div className="relative mt-28 sm:mt-24 md:mt-20">
        <BookingSearch />
      </div>
    </main>
  )
}