"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react"

const info = [
  {
    Icon: MapPin,
    title: "Our Office",
    lines: ["4th Floor, Shobo House,", "5 Simpson Street, Lagos Island."],
  },
  {
    Icon: Phone,
    title: "Call Us",
    lines: ["+234 802 2235 119", "+234 802 2235 120"],
  },
  {
    Icon: Mail,
    title: "Email Us",
    lines: ["info@flourishingtravels.com", "support@flourishingtravels.com"],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Fri: 8:00am - 6:00pm", "Saturday: 10:00am - 4:00pm"],
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Info cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(({ Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-sm border border-gray-100 bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#2a2a2a]">
                {title}
              </h3>
              {lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-gray-600">
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + map */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 md:mt-16">
          <div className="rounded-sm bg-[#f6f9fb] p-6 shadow-md sm:p-10">
            <h2 className="text-2xl font-semibold text-[#2a2a2a] md:text-3xl">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Have a question or ready to plan your trip? Fill out the form and
              we&apos;ll get back to you within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Full Name"
                  type="text"
                  placeholder="Your name"
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  placeholder="+234 ..."
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
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your trip..."
                  className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)] sm:w-auto"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    MESSAGE SENT
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="min-h-[420px] overflow-hidden rounded-sm shadow-md">
            <iframe
              title="FlourishingTravels office location"
              src="https://www.google.com/maps?q=Lagos%20Island,%20Lagos,%20Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
        className="mb-1.5 block text-xs font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
