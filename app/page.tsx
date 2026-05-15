
// import { BookingSearch } from "@/components/booking-search"
// import { Services } from "@/components/services"
// import { SpecialTour } from "@/components/special-tour"
// import { FeaturedTours } from "@/components/featured-tours"
// import { StudentTour } from "@/components/student-tour"
// import { About } from "@/components/about"
// import { Testimonials } from "@/components/testimonials"
// import { Newsletter } from "@/components/newsletter"
// import { Hero } from "@/components/hero"

// export default function HomePage() {
//   return (
//     <main className="relative">
//       <Hero />
//       <BookingSearch />
//       <Services />
//       <SpecialTour />
//       <FeaturedTours />
//       <StudentTour />
//       <About />
//       <Testimonials />
//       <Newsletter />
//     </main>
//   )
// }
// app/page.tsx

import { Hero } from "@/components/hero"
import { BookingSearch } from "@/components/booking-search"
import { Services } from "@/components/services"
// import { WhyChooseUs } from "@/components/why-choose-us"
// import { OffersSection } from "@/components/offers-section"
import { FeaturedTours } from "@/components/featured-tours"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#f5f7fa]">
      <Hero />

      <div className="relative z-40 -mt-28 sm:-mt-24 md:-mt-20">
        <BookingSearch />
      </div>

      {/* <WhyChooseUs /> */}

      {/* <OffersSection /> */}

      <Services />

      {/* <FeaturedTours /> */}

      <Testimonials />

      <Newsletter />
    </main>
  )
}
