import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const features = [
  "20+ years of professional travel experience",
  "Network of partners across all six continents",
  "Dedicated 24/7 customer support team",
  "Best price guarantee on all packages",
]

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-xl">
          <Image
            src="/tour-paris.jpg"
            alt="About Flourishing Skies Travels"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
            About Us
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-[#2a2a2a] sm:text-3xl md:text-5xl">
            Your Trusted Travel Partner for Life
          </h2>
          <p className="mt-5 text-pretty text-sm leading-relaxed text-gray-600 md:mt-6 md:text-base">
            At Flourishing Skies Travels, we believe travel should be effortless,
            enriching and unforgettable. With over two decades of experience,{" "}
            {"we craft personalized itineraries that turn dreams into memories — whether it's a family holiday, a corporate trip or an educational tour."}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-gray-700">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)] md:mt-10 md:px-8 md:text-sm"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
