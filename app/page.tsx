
import { BookingSearch } from "@/components/booking-search"
import { Services } from "@/components/services"
import { SpecialTour } from "@/components/special-tour"
import { FeaturedTours } from "@/components/featured-tours"
import { StudentTour } from "@/components/student-tour"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <BookingSearch />
      <Services />
      <SpecialTour />
      <FeaturedTours />
      <StudentTour />
      <About />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
