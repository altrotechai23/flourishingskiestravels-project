import type { Metadata } from "next"
import Image from "next/image"
import { Award, Globe2, Users, Heart } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { SectionHeader } from "@/components/section-header"
import { BookingSearch } from "@/components/booking-search"

export const metadata: Metadata = {
  title: "About Us | Flourishing Skies Travels",
  description:
    "Learn about Flourishing Skies Travels — our story, our mission and the passionate team behind every flourishing journey.",
}

const stats = [
  { value: "20+", label: "Years of Experience", Icon: Award },
  { value: "150+", label: "Countries Covered", Icon: Globe2 },
  { value: "25K+", label: "Happy Travelers", Icon: Users },
  { value: "98%", label: "Satisfaction Rate", Icon: Heart },
]

export default function AboutPage() {
  // return <div>Not working</div>
  return (
    <main>
      <PageBanner
        title="About Flourishing Skies Travels"
        subtitle="Two decades of crafting extraordinary journeys — and we're just getting started."
        image="/team.jpg"
      />

      <About />

      {/* Stats */}
      <section className="bg-[#0e2a3a] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center text-white"
              >
                <s.Icon className="h-8 w-8 text-primary md:h-10 md:w-10" />
                <div className="mt-3 text-3xl font-semibold md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-white/70 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            title="Our Mission & Vision"
            subtitle="We exist to make world-class travel accessible, memorable and meaningful for every traveler we serve."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/team.jpg"
                alt="Our team"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#2a2a2a] md:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                  To empower every traveler with expertly curated journeys,
                  trusted guidance and exceptional care — from the first
                  spark of inspiration to the final memory made.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#2a2a2a] md:text-3xl">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                  To be Africa's most loved travel brand — connecting people,
                  cultures and experiences across all six continents with
                  integrity and joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <div className="relative z-40 -mt-28 sm:-mt-24 md:-mt-20">
              <BookingSearch />
      </div>
    </main>
  )
}
