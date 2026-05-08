import type { Metadata } from "next"
import { PageBanner } from "@/components/page-banner"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | FlourishingTravels",
  description:
    "Get in touch with FlourishingTravels. We're here to help you plan your next unforgettable journey.",
}

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and start planning your next journey today."
        image="/contact-office.jpg"
      />
      <ContactSection />
    </main>
  )
}
