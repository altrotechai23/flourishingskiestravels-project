import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  "Travel Consultancy",
  "Visa Processing Assistance",
  "Tour Bookings",
  "Hotel Bookings",
  "Travel Insurance",
  "Flight Bookings",
  "Airport Transfers",
  "Logistics & Delivery",
]

const contactNumbers = [
  "+234 9075721310",
  "+234 8137175997",
  "+234 8106426962",
  "+234 7047412754",
]

const departments = [
  {
    title: "General Inquiries",
    email: "Info@flourishingskiestravels.com",
  },
  {
    title: "Complaints & Feedback",
    email: "Ceo@flourishingskiestravels.com",
  },
  {
    title: "Flight Tickets & Bookings",
    email: "flighttickets@flourishingskiestravels.com",
  },
  {
    title: "Visas & Tour Packages",
    email: "visasandtours@flourishingskiestravels.com",
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#06141f] text-white">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 md:py-20">
        {/* top CTA */}
        <div className="mb-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Flourishing Skies Travels
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Premium Travel • Visa • Logistics • Delivery
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                Your trusted one-stop partner for travel bookings, visa
                processing, airport assistance, freight forwarding, logistics,
                package pickup & premium rider services.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[color:var(--primary-hover)]"
            >
              Book With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          {/* brand */}
          <div>
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-2xl">
              <Image
                src="/log.jpg"
                alt="Flourishing Skies Travels"
                width={170}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="mt-6 text-sm leading-7 text-white/65">
              Flourishing Skies Travels delivers premium travel experiences,
              business travel solutions, visa support, airport services,
              logistics and concierge-level customer service built for modern
              travellers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                    aria-label="Social"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70 transition-transform group-hover:scale-150" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="group inline-flex items-start gap-2 text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 transition-transform group-hover:scale-150" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="mt-6 space-y-6">
              {/* address */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>

                <div className="text-sm leading-7 text-white/65">
                  92 Ago Palace Way
                  <br />
                  Grandmate Bus Stop
                  <br />
                  Ago, Okota
                  <br />
                  Lagos
                </div>
              </div>

              {/* phones */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>

                <div className="space-y-2 text-sm text-white/65">
                  {contactNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* emails */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="space-y-4">
                  {departments.map((item) => (
                    <div key={item.email}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/45">
                        {item.title}
                      </p>

                      <a
                        href={`mailto:${item.email}`}
                        className="mt-1 block text-sm text-white/65 transition-colors hover:text-primary break-all"
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-center text-xs text-white/40 md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} Flourishing Skies Travels. All rights
              reserved.
            </p>

            <p>Designed for premium travel experiences worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}