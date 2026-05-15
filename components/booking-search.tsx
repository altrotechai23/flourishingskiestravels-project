"use client"

import { useMemo, useState } from "react"
import {
  BriefcaseBusiness,
  Calendar,
  ChevronDown,
  MapPin,
  Minus,
  Plus,
  Search,
  UserRound,
  X,
  Phone,
  Mail,
  FileText,
  Plane,
  Hotel,
  Shield,
  Package,
  Truck,
  Syringe,
  Car,
  HelpCircle,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

type ServiceId =
  | "Travel Consultancy"
  | "Visa Assistance"
  | "Tour Bookings"
  | "Hotel Bookings"
  | "Travel Insurance"
  | "Flight Bookings"
  | "Flight Hire / Charter"
  | "Airport Transfers"
  | "Airport Assistance"
  | "Vacation Packages"
  | "Yellow Fever / Passport"
  | "Freight Forwarding"
  | "Logistics / Transportation"
  | "Package Pickup & Delivery"
  | "Riders Services"

interface ServiceMeta {
  icon: React.ReactNode
  color: string
  fields: FieldDef[]
}

interface FieldDef {
  id: string
  label: string
  type: "text" | "email" | "tel" | "date" | "select" | "textarea" | "number" | "counter"
  placeholder?: string
  options?: string[]
  required?: boolean
}

// ─── Constants ────────────────────────────────────────────────────────────────

const destinations = [
  "South Africa",
  "Egypt",
  "Qatar",
  "Tanzania",
  "Thailand",
  "Dubai",
  "Nigeria",
  "Zimbabwe",
  "Turkey",
  "Dubai, UAE",
  "Uganda",
  "Ethiopia",
  "Oman",
]

const services: ServiceId[] = [
  "Travel Consultancy",
  "Visa Assistance",
  "Tour Bookings",
  "Hotel Bookings",
  "Travel Insurance",
  "Flight Bookings",
  "Flight Hire / Charter",
  "Airport Transfers",
  "Airport Assistance",
  "Vacation Packages",
  "Yellow Fever / Passport",
  "Freight Forwarding",
  "Logistics / Transportation",
  "Package Pickup & Delivery",
  "Riders Services",
]

// Core client fields reused across many services
const clientFields: FieldDef[] = [
  { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+27 XX XXX XXXX", required: true },
]

const serviceMap: Record<ServiceId, ServiceMeta> = {
  "Travel Consultancy": {
    icon: <HelpCircle className="h-4 w-4" />,
    color: "#6366f1",
    fields: [
      ...clientFields,
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Preferred Travel Date", type: "date", required: true },
      { id: "people", label: "Number of People", type: "number", placeholder: "2", required: true },
      { id: "notes", label: "What do you need help with?", type: "textarea", placeholder: "Tell us about your travel plans...", required: false },
    ],
  },
  "Visa Assistance": {
    icon: <FileText className="h-4 w-4" />,
    color: "#0ea5e9",
    fields: [
      ...clientFields,
      { id: "destination", label: "Destination Country", type: "select", options: destinations, required: true },
      { id: "visaType", label: "Visa Type", type: "select", options: ["Tourist", "Business", "Student", "Work", "Transit", "Medical"], required: true },
      { id: "travelDate", label: "Planned Travel Date", type: "date", required: true },
      { id: "people", label: "Number of Applicants", type: "number", placeholder: "1", required: true },
      { id: "notes", label: "Additional Notes", type: "textarea", placeholder: "Any special requirements?", required: false },
    ],
  },
  "Tour Bookings": {
    icon: <MapPin className="h-4 w-4" />,
    color: "#10b981",
    fields: [
      ...clientFields,
      { id: "destination", label: "Tour Destination", type: "select", options: destinations, required: true },
      { id: "checkIn", label: "Start Date", type: "date", required: true },
      { id: "checkOut", label: "End Date", type: "date", required: true },
      { id: "people", label: "Number of Travellers", type: "number", placeholder: "2", required: true },
      { id: "tourType", label: "Tour Type", type: "select", options: ["Cultural", "Adventure", "Safari", "City Tour", "Beach", "Historical", "Custom"], required: true },
      { id: "notes", label: "Special Requests", type: "textarea", placeholder: "Dietary needs, accessibility, etc.", required: false },
    ],
  },
  "Hotel Bookings": {
    icon: <Hotel className="h-4 w-4" />,
    color: "#f59e0b",
    fields: [
      ...clientFields,
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "checkIn", label: "Check-in Date", type: "date", required: true },
      { id: "checkOut", label: "Check-out Date", type: "date", required: true },
      { id: "adults", label: "Adults", type: "number", placeholder: "2", required: true },
      { id: "children", label: "Children", type: "number", placeholder: "0", required: false },
      { id: "rooms", label: "Rooms Needed", type: "number", placeholder: "1", required: true },
      { id: "hotelClass", label: "Hotel Class", type: "select", options: ["3 Star", "4 Star", "5 Star", "Budget", "Boutique", "Any"], required: false },
      { id: "notes", label: "Special Requests", type: "textarea", placeholder: "Late check-in, sea view, etc.", required: false },
    ],
  },
  "Travel Insurance": {
    icon: <Shield className="h-4 w-4" />,
    color: "#8b5cf6",
    fields: [
      ...clientFields,
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Travel Date", type: "date", required: true },
      { id: "returnDate", label: "Return Date", type: "date", required: true },
      { id: "people", label: "Number of Travellers", type: "number", placeholder: "1", required: true },
      { id: "coverType", label: "Cover Type", type: "select", options: ["Single Trip", "Multi-Trip Annual", "Family", "Business", "Medical Only"], required: true },
      { id: "notes", label: "Pre-existing Conditions / Notes", type: "textarea", placeholder: "Any medical conditions we should know about?", required: false },
    ],
  },
  "Flight Bookings": {
    icon: <Plane className="h-4 w-4" />,
    color: "#3b82f6",
    fields: [
      ...clientFields,
      { id: "origin", label: "Departure City / Airport", type: "text", placeholder: "Cape Town (CPT)", required: true },
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "departDate", label: "Departure Date", type: "date", required: true },
      { id: "returnDate", label: "Return Date (leave blank for one-way)", type: "date", required: false },
      { id: "adults", label: "Adults", type: "number", placeholder: "1", required: true },
      { id: "children", label: "Children", type: "number", placeholder: "0", required: false },
      { id: "cabinClass", label: "Cabin Class", type: "select", options: ["Economy", "Premium Economy", "Business", "First Class"], required: true },
      { id: "notes", label: "Special Requests", type: "textarea", placeholder: "Meal preferences, seat preferences, etc.", required: false },
    ],
  },
  "Flight Hire / Charter": {
    icon: <Plane className="h-4 w-4" />,
    color: "#ec4899",
    fields: [
      ...clientFields,
      { id: "origin", label: "Departure Location", type: "text", placeholder: "Cape Town, South Africa", required: true },
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "departDate", label: "Departure Date", type: "date", required: true },
      { id: "returnDate", label: "Return Date", type: "date", required: false },
      { id: "people", label: "Number of Passengers", type: "number", placeholder: "4", required: true },
      { id: "aircraftType", label: "Aircraft Preference", type: "select", options: ["Light Jet", "Midsize Jet", "Heavy Jet", "Turboprop", "Helicopter", "No Preference"], required: false },
      { id: "notes", label: "Additional Requirements", type: "textarea", placeholder: "Catering, cargo, special requests...", required: false },
    ],
  },
  "Airport Transfers": {
    icon: <Car className="h-4 w-4" />,
    color: "#14b8a6",
    fields: [
      ...clientFields,
      { id: "airport", label: "Airport", type: "text", placeholder: "Cape Town International Airport", required: true },
      { id: "transferType", label: "Transfer Type", type: "select", options: ["Airport → Hotel", "Hotel → Airport", "Airport → Airport", "Port Transfer"], required: true },
      { id: "destination", label: "Country", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Transfer Date", type: "date", required: true },
      { id: "flightNumber", label: "Flight Number (optional)", type: "text", placeholder: "SA 401", required: false },
      { id: "people", label: "Number of Passengers", type: "number", placeholder: "2", required: true },
      { id: "vehicleType", label: "Vehicle Type", type: "select", options: ["Sedan", "SUV / 4x4", "Minibus (up to 12)", "Coach", "Luxury"], required: false },
      { id: "notes", label: "Notes", type: "textarea", placeholder: "Luggage details, accessibility needs, etc.", required: false },
    ],
  },
  "Airport Assistance": {
    icon: <HelpCircle className="h-4 w-4" />,
    color: "#f97316",
    fields: [
      ...clientFields,
      { id: "airport", label: "Airport", type: "text", placeholder: "Cape Town International Airport", required: true },
      { id: "destination", label: "Country", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Date of Travel", type: "date", required: true },
      { id: "assistanceType", label: "Assistance Type", type: "select", options: ["Meet & Greet", "Wheelchair / Mobility", "VIP Lounge", "Fast Track", "Unaccompanied Minor", "Elderly Assistance"], required: true },
      { id: "people", label: "Number of People", type: "number", placeholder: "1", required: true },
      { id: "notes", label: "Details", type: "textarea", placeholder: "Flight details and any special needs...", required: false },
    ],
  },
  "Vacation Packages": {
    icon: <Package className="h-4 w-4" />,
    color: "#ef4444",
    fields: [
      ...clientFields,
      { id: "destination", label: "Destination", type: "select", options: destinations, required: true },
      { id: "checkIn", label: "Travel From", type: "date", required: true },
      { id: "checkOut", label: "Travel To", type: "date", required: true },
      { id: "adults", label: "Adults", type: "number", placeholder: "2", required: true },
      { id: "children", label: "Children", type: "number", placeholder: "0", required: false },
      { id: "budget", label: "Budget Range (per person)", type: "select", options: ["Under R5,000", "R5,000–R10,000", "R10,000–R20,000", "R20,000–R40,000", "R40,000+", "Flexible"], required: false },
      { id: "interests", label: "Interests", type: "select", options: ["Beach & Relaxation", "Adventure & Sports", "Cultural & Historical", "Safari & Wildlife", "City Break", "Honeymoon", "Family Fun", "Mixed"], required: false },
      { id: "notes", label: "Dream Trip Details", type: "textarea", placeholder: "Tell us about your dream vacation...", required: false },
    ],
  },
  "Yellow Fever / Passport": {
    icon: <Syringe className="h-4 w-4" />,
    color: "#eab308",
    fields: [
      ...clientFields,
      { id: "serviceType", label: "Service Required", type: "select", options: ["Yellow Fever Certificate", "Passport Application", "Passport Renewal", "Emergency Travel Document", "Both (Yellow Fever + Passport)"], required: true },
      { id: "destination", label: "Destination Country", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Planned Travel Date", type: "date", required: true },
      { id: "people", label: "Number of People", type: "number", placeholder: "1", required: true },
      { id: "notes", label: "Additional Information", type: "textarea", placeholder: "Urgency, special circumstances...", required: false },
    ],
  },
  "Freight Forwarding": {
    icon: <Truck className="h-4 w-4" />,
    color: "#64748b",
    fields: [
      ...clientFields,
      { id: "origin", label: "Pickup / Origin Location", type: "text", placeholder: "Cape Town, South Africa", required: true },
      { id: "destination", label: "Destination Country", type: "select", options: destinations, required: true },
      { id: "freightType", label: "Freight Type", type: "select", options: ["Air Freight", "Sea Freight", "Road Freight", "Express Courier"], required: true },
      { id: "cargoType", label: "Cargo Description", type: "text", placeholder: "Electronics, clothing, machinery...", required: true },
      { id: "weight", label: "Estimated Weight (kg)", type: "number", placeholder: "100", required: false },
      { id: "travelDate", label: "Desired Dispatch Date", type: "date", required: false },
      { id: "notes", label: "Additional Details", type: "textarea", placeholder: "Dimensions, fragile items, customs requirements...", required: false },
    ],
  },
  "Logistics / Transportation": {
    icon: <Truck className="h-4 w-4" />,
    color: "#475569",
    fields: [
      ...clientFields,
      { id: "origin", label: "Origin Location", type: "text", placeholder: "Cape Town, South Africa", required: true },
      { id: "destination", label: "Destination Country", type: "select", options: destinations, required: true },
      { id: "serviceType", label: "Service Type", type: "select", options: ["Last Mile Delivery", "Warehousing", "Cross-Docking", "Supply Chain", "Cold Chain", "Bulk Transport"], required: true },
      { id: "travelDate", label: "Required Date", type: "date", required: false },
      { id: "people", label: "Estimated Quantity / Units", type: "number", placeholder: "1", required: false },
      { id: "notes", label: "Details", type: "textarea", placeholder: "Describe your logistics needs...", required: false },
    ],
  },
  "Package Pickup & Delivery": {
    icon: <Package className="h-4 w-4" />,
    color: "#7c3aed",
    fields: [
      ...clientFields,
      { id: "pickupAddress", label: "Pickup Address", type: "text", placeholder: "123 Main St, Cape Town", required: true },
      { id: "deliveryAddress", label: "Delivery Address", type: "text", placeholder: "Recipient full address", required: true },
      { id: "destination", label: "Destination Country", type: "select", options: destinations, required: true },
      { id: "travelDate", label: "Pickup Date", type: "date", required: true },
      { id: "packageSize", label: "Package Size", type: "select", options: ["Small (under 5kg)", "Medium (5–20kg)", "Large (20–50kg)", "Extra Large (50kg+)"], required: true },
      { id: "notes", label: "Package Description", type: "textarea", placeholder: "Contents, fragility, value...", required: false },
    ],
  },
  "Riders Services": {
    icon: <Car className="h-4 w-4" />,
    color: "#0d9488",
    fields: [
      ...clientFields,
      { id: "people", label: "Number of People", type: "number", placeholder: "1", required: true },
      { id: "origin", label: "Pickup Location", type: "text", placeholder: "Your address or area", required: true },
      { id: "dropoff", label: "Drop-off Location", type: "text", placeholder: "Destination address", required: true },
      { id: "travelDate", label: "Date & Time Needed", type: "date", required: true },
      { id: "riderType", label: "Rider Type", type: "select", options: ["Standard", "Premium / Executive", "Bike Courier", "Minibus / Group"], required: true },
      { id: "notes", label: "Notes", type: "textarea", placeholder: "Any special instructions...", required: false },
    ],
  },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function FieldInput({ field, value, onChange }: { field: FieldDef; value: string; onChange: (v: string) => void }) {
  const base =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 outline-none transition-all focus:border-[#0071c2] focus:ring-2 focus:ring-[#0071c2]/10 placeholder:text-gray-400"

  if (field.type === "select") {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)} className={base}>
        <option value="">Select {field.label}</option>
        {field.options?.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    )
  }

  if (field.type === "textarea") {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={3}
        className={`${base} resize-none`}
      />
    )
  }

  return (
    <input
      type={field.type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholder}
      className={base}
    />
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function BookingSearch() {
  const [service, setService] = useState<ServiceId>("Hotel Bookings")
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const meta = serviceMap[service]

  const setField = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async () => {
    // Validate required fields
    const missing = meta.fields.filter((f) => f.required && !formData[f.id]?.trim())
    if (missing.length > 0) {
      setErrorMsg(`Please fill in: ${missing.map((f) => f.label).join(", ")}`)
      return
    }
    setErrorMsg("")
    setStatus("loading")

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, ...formData }),
      })

      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setFormData({})
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again or contact us directly.")
    }
  }

  return (
    <section id="booking" className="relative z-30 pt-24 px-3 pb-14 sm:px-4 md:pt-28 bg-secondary">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Service Tabs ── */}
        <div className="mb-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full gap-2.5 px-1">
            {services.map((item) => {
              const active = item === service
              const itemMeta = serviceMap[item]
              return (
                <button
                  key={item}
                  onClick={() => {
                    setService(item)
                    setFormData({})
                    setStatus("idle")
                    setErrorMsg("")
                  }}
                  className={`group relative flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? "border-white bg-white text-[#003b95] shadow-xl"
                      : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${active ? "bg-[#003b95] text-white" : "bg-white/20 text-white"}`}
                    style={active ? { backgroundColor: itemMeta.color } : {}}
                  >
                    {itemMeta.icon}
                  </span>
                  {item}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: "#febb02" }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Request Form Card ── */}
        <div className="overflow-visible rounded-2xl border-[4px] border-primary bg-white shadow-2xl">
          {status === "success" ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: `${meta.color}15` }}
              >
                <CheckCircle className="h-10 w-10" style={{ color: meta.color }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Request Sent!</h3>
              <p className="max-w-md text-gray-500">
                Thank you for your <strong>{service}</strong> enquiry. Our team will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-xl px-8 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: meta.color }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* Form state */
            <div>
              {/* Header bar */}
              <div
                className="flex items-center gap-3 rounded-t-xl px-6 py-4"
                style={{ backgroundColor: `${meta.color}12` }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: meta.color }}
                >
                  {meta.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Service Request</p>
                  <h2 className="text-lg font-bold text-gray-900">{service}</h2>
                </div>
                <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
                  {meta.fields.filter((f) => f.required).length} required fields
                </span>
              </div>

              {/* Grid of fields */}
              <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {meta.fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.type === "textarea" ? "sm:col-span-2 lg:col-span-3" : ""}
                  >
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      {field.label}
                      {field.required && <span className="ml-1 text-red-500">*</span>}
                    </label>
                    <FieldInput
                      field={field}
                      value={formData[field.id] ?? ""}
                      onChange={(v) => setField(field.id, v)}
                    />
                  </div>
                ))}
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="mx-6 mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errorMsg}
                </div>
              )}

              {/* Footer / submit */}
              <div className="flex flex-col items-center justify-between gap-4 border-t bg-gray-50/60 px-6 py-4 sm:flex-row rounded-b-xl">
                <p className="text-sm text-gray-500">
                  We&apos;ll respond within <strong>24 hours</strong>. No payment required to submit.
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="flex  items-center justify-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: meta.color }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Request
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}