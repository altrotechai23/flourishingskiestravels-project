"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TypewriterEffect } from "./TypewriterEffect"

type Slide = {
  eyebrow: string
  title: string
  subtitle: string
  cta: string
  image: string
}

const slides: Slide[] = [
  {
    eyebrow: "Experience The Best Tour",
    title: "Great Destinations You’d Love",
    subtitle:
      "Let us take you to the best destinations in the world at the cheapest rate. You can rely on our professional guide for the best tour ever.",
    cta: "CHECK OUT OUR GALLERY",
    image: "/hero-london.jpg",
  },
  {
    eyebrow: "Discover New Horizons",
    title: "Unforgettable Journeys Await",
    subtitle:
      "From golden beaches to vibrant cities, we craft memorable experiences with trusted local guides and premium comfort.",
    cta: "EXPLORE OUR TOURS",
    image: "/tour-dubai.jpg",
  },
  {
    eyebrow: "Your Dream Vacation",
    title: "Explore The World With Us",
    subtitle:
      "Tailor-made holiday packages, seamless flight ticketing and premium hotels — all in one place.",
    cta: "BOOK A TRIP NOW",
    image: "/tour-bali.jpg",
  },
]

export function Hero() {
  const [idx, setIdx] = useState(0)

  const next = () => {
    setIdx((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setIdx((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[idx]

  return (
    <section
      id="home"
      className="relative h-screen min-h-[620px] w-full overflow-hidden"
    >
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100 z-0" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ${
              i === idx ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div
          key={idx}
          className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700 text-center text-white"
        >
          <TypewriterEffect
            words={[slide.eyebrow]}
            typeSpeed={70}
            deleteSpeed={40}
            pauseDuration={3000}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary sm:text-base"
          />

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
            {slide.subtitle}
          </p>

          <div className="mt-10">
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[color:var(--primary-hover)]"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === idx
                ? "w-10 bg-primary"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}