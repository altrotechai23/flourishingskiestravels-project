"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "TOURS", href: "/tours" },
  { label: "GALLERY", href: "/gallery" },
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  // close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="absolute left-0 right-0 top-1 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              aria-label="Flourishing Travels Home"
            >
              <div className="flex items-center rounded-xl shadow-lg">
                <Image
                  src="/log.jpg"
                  alt="Flourishing Travels"
                  width={170}
                  height={50}
                  priority
                  className="h-10 w-auto object-contain sm:h-12 rounded-xl"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                        active
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {item.label}

                      {active && (
                        <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-hover)] lg:inline-flex"
              >
                Book Now
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-lg border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-[#07131d] shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <span className="text-lg font-semibold text-white">
              Navigation
            </span>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col px-4 py-6">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-xl px-4 py-4 text-sm font-medium tracking-wide transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-white hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-5">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-xl bg-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-hover)]"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}