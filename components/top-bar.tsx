import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-40 hidden lg:block">
      <div className="mx-auto max-w-[1280px] px-6 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-6 py-3 text-sm text-white/90 backdrop-blur-md">
          {/* Left */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin
                className="h-4 w-4 text-primary"
                strokeWidth={2.5}
              />
              <span>
                4th Floor, Shobo House, 5 Simpson Street, Lagos Island
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone
                className="h-4 w-4 text-primary"
                strokeWidth={2.5}
              />
              <span>+234 802 2235 119</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail
                className="h-4 w-4 text-primary"
                strokeWidth={2.5}
              />
              <span>info@flourishingtravels.com</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-5 py-2 font-medium text-white transition hover:bg-[color:var(--primary-hover)]"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  )
}