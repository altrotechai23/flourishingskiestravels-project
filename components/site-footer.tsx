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
} from "lucide-react"

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  "Holiday Packages",
  "Ticketing & Reservation",
  "Travel Insurance",
  "Visa Assistance",
  "Hotel Reservation",
  "Corporate Travel",
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0a2230] text-white/80">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-5 inline-flex h-14 items-center rounded-md bg-white px-3">
              <Image
                src="/logo.png"
                alt="FlourishingTravels"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              FlourishingTravels is a premium travel agency crafting
              unforgettable journeys across the globe. Your trusted partner for
              holidays, flights and more.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="/services"
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-white/70">
                  4th Floor, Shobo House, 5 Simpson Street, Lagos Island.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-white/70">+234 802 2235 119</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-white/70">
                  info@flourishingtravels.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} FlourishingTravels. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
