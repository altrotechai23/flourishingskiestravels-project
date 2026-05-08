// components/contact-section.tsx

"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  ArrowRight,
  Plane,
} from "lucide-react"

const info = [
  {
    Icon: MapPin,
    title: "Head Office",
    lines: [
      "92 Ago Palace Way",
      "Grandmate Bus Stop",
      "Ago, Okota",
      "Lagos",
    ],
  },
  {
    Icon: Phone,
    title: "Call Us",
    lines: [
      "+234 9075721310",
      "+234 8137175997",
      "+234 8106426962",
      "+234 7047412754",
    ],
  },
  {
    Icon: Mail,
    title: "General Inquiries",
    lines: ["Info@flourishingskiestravels.com"],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Fri: 8:00am - 6:00pm", "Saturday: 10:00am - 4:00pm"],
  },
]

const departments = [
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

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] py-16 md:py-24">
      {/* premium glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Plane className="h-3.5 w-3.5" />
            Flourishing Skies Travels
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#08131d] sm:text-4xl md:text-5xl">
            We’re ready to help you move, travel and explore
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Reach out for premium travel bookings, visa processing, airport
            transfers, package delivery, freight forwarding and tailored travel
            consultancy services.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {info.map(({ Icon, title, lines }) => (
            <div
              key={title}
              className="group rounded-[28px] border border-white/60 bg-white/90 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#08131d]">
                {title}
              </h3>

              <div className="mt-4 space-y-2">
                {lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-7 text-slate-600 break-words"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* content */}
        <div className="mt-12 grid grid-cols-1 gap-8 xl:grid-cols-[1.15fr_0.85fr] md:mt-16">
          {/* form */}
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                Send message
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-[#08131d] sm:text-3xl">
              Tell us what you need
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Need flight tickets, visa processing, tour packages, airport
              pickup, logistics or delivery services? Send us a message and our
              team will contact you promptly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="mt-8 space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Full Name"
                  type="text"
                  placeholder="Your full name"
                />

                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+234..."
                />

                <FormField
                  id="subject"
                  label="Subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  required
                  placeholder="Tell us about your request..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[color:var(--primary-hover)] sm:w-auto"
              >
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* side panel */}
          <div className="space-y-8">
            {/* department emails */}
            <div className="rounded-[32px] border border-white/70 bg-white/90 p-7 shadow-2xl backdrop-blur-xl sm:p-8">
              <h3 className="text-xl font-semibold text-[#08131d]">
                Department Emails
              </h3>

              <div className="mt-6 space-y-6">
                {departments.map((item) => (
                  <div
                    key={item.email}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {item.title}
                    </p>

                    <a
                      href={`mailto:${item.email}`}
                      className="mt-2 block break-all text-sm text-slate-700 transition-colors hover:text-primary"
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* map */}
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <iframe
                title="Flourishing Skies Travels Office"
                src="https://www.google.com/maps?q=Ago%20Palace%20Way%2C%20Lagos%2C%20Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  )
}