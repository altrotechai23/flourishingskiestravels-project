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
  Loader2,
} from "lucide-react"

const info = [
  {
    Icon: MapPin,
    title: "Our offices",
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

const offices = [
  {
    country: "Nigeria",
    address: "Ago Palace Way, Lagos",
    phones: ["+2347047412754", "+2349075721310"],
  },
  {
    country: "Benin Republic",
    address: "Cotonou - Akpakpa",
    phones: ["+2290197201883"],
  },
  {
    country: "South Africa",
    address: "Long Street, Cape Town",
    phones: ["+27706416874"],
  },
  {
    country: "Qatar",
    address: "Doha - Conference Centre Street, Zone 61",
    phones: ["+97455078611"],
  },
  {
    country: "Cameroon",
    address: "Douala - Rond Point Akwa",
    phones: ["+237651166153"],
  },
  {
    country: "Brazil",
    address: "Galeria Predio Ita Republica - Sao Paulo",
    phones: ["+5511968981824"],
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
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message)

      setSubmitted(true)

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error(error)
      alert("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] py-16 md:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Plane className="h-3.5 w-3.5" />
            Flourishing Skies Travels
          </span>

          <h2 className="mt-5 text-3xl font-semibold text-[#08131d] sm:text-4xl md:text-5xl">
            We’re ready to help you move, travel and explore
          </h2>
        </div>

        {/* INFO CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {info.map(({ Icon, title, lines }) => (
            <div
              key={title}
              className="group rounded-[28px] border border-white/60 bg-white/90 p-7 shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>

              <div className="mt-4 space-y-2">
                {lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🌍 GLOBAL OFFICES */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-[#08131d]">
            Our Global Offices
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, i) => (
              <div
                key={i}
                className="group rounded-[24px] border border-white/60 bg-white/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#08131d]">
                      {office.country} Office
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      {office.address}
                    </p>

                    <div className="mt-3 space-y-1">
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-sm text-slate-600 hover:text-primary"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM + SIDE */}
        <div className="mt-16 grid grid-cols-1 gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          {/* FORM stays unchanged */}
          <div>{/* keep your existing form here */}</div>

          <div>{/* keep your existing side section */}</div>
        </div>
      </div>
    </section>
  )
}

/* FormField stays unchanged */