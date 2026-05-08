"use client"

import { useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Frequent Traveler, Lagos",
    quote:
      "FlourishingTravels made my family vacation to Dubai absolutely seamless. From visa assistance to hotel pickup, everything was perfectly handled. Highly recommend!",
  },
  {
    name: "James Okonkwo",
    role: "Business Executive",
    quote:
      "Their corporate travel desk saved me hours of planning. Flight changes were handled instantly and the team was always reachable. Truly professional.",
  },
  {
    name: "Funke Adebayo",
    role: "Honeymoon Traveler",
    quote:
      "Our Bali honeymoon was beyond magical — curated experiences, private transfers and beautiful resorts. Thank you FlourishingTravels for an unforgettable trip!",
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHeader
          title="What Our Travelers Say"
          subtitle="Real stories from happy travelers who explored the world with FlourishingTravels."
        />

        <div className="relative mx-auto mt-10 max-w-3xl md:mt-14">
          <div className="rounded-sm bg-[#f6f9fb] p-6 shadow-md sm:p-8 md:p-12">
            <Quote className="h-8 w-8 text-primary md:h-10 md:w-10" />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-gray-700 md:mt-6 md:text-lg">
              {t.quote}
            </p>
            <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center md:mt-6">
              <div>
                <p className="text-base font-semibold text-[#2a2a2a]">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
              <div className="flex items-center gap-0.5" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#f8c400] text-[#f8c400]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-[color:var(--primary-hover)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-6 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-[color:var(--primary-hover)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
