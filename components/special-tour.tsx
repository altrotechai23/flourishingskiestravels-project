"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

function calcRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function SpecialTour() {
  // Static initial values so SSR and first client render match exactly,
  // avoiding hydration mismatches. After mount we set a real target
  // and begin ticking every second.
  const [left, setLeft] = useState({
    days: 4,
    hours: 0,
    minutes: 38,
    seconds: 52,
  })

  useEffect(() => {
    const target =
      Date.now() +
      4 * 24 * 60 * 60 * 1000 +
      38 * 60 * 1000 +
      52 * 1000
    setLeft(calcRemaining(target))
    const t = setInterval(() => setLeft(calcRemaining(target)), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] w-full md:h-[560px]">
        <Image
          src="/special-tour.jpg"
          alt="Join our special tour this month"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Join our Special Tour this Month
            <br />
            Enjoy Amazing Discounts
          </h2>
          <p className="mt-4 text-sm text-white/90 md:text-base">
            It&apos;s limited seating! Hurry up
          </p>

          <div className="mt-10 grid grid-cols-4 gap-1 md:gap-2">
            <TimeBlock value={left.days} label="Days" />
            <TimeBlock value={left.hours} label="Hour" />
            <TimeBlock value={left.minutes} label="Min" />
            <TimeBlock value={left.seconds} label="Sec" />
          </div>

          <Link
            href="/tours"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-semibold tracking-wider text-primary-foreground shadow-lg transition-colors hover:bg-[color:var(--primary-hover)] sm:px-8 sm:py-4 sm:text-sm"
          >
            VIEW TOURS
          </Link>
        </div>
      </div>
    </section>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[72px] flex-col items-center justify-center bg-white/10 px-3 py-5 backdrop-blur-sm sm:min-w-[84px] sm:px-4 sm:py-6 md:min-w-[140px] md:px-8 md:py-8">
      <span className="text-3xl font-semibold leading-none sm:text-4xl md:text-6xl">
        {value}
      </span>
      <span className="mt-1.5 text-xs text-white/80 sm:text-sm md:mt-3 md:text-base">
        {label}
      </span>
    </div>
  )
}
