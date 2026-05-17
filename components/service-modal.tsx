"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { getCountryDataList, getEmojiFlag } from "countries-list"
import {
  X,
  Send,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  Search,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceId =
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

export interface FieldDef {
  id: string
  label: string
  type: "text" | "email" | "tel" | "date" | "select" | "country" | "textarea" | "number"
  placeholder?: string
  options?: string[]
  required?: boolean
  icon?: React.ReactNode
}

// ─── All countries from library ───────────────────────────────────────────────

const ALL_COUNTRIES = getCountryDataList()
  .map((c) => ({
    name: c.name,
    code: c.iso2,
    emoji: getEmojiFlag(c.iso2 as any),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

// ─── Core client fields ───────────────────────────────────────────────────────

const clientFields: FieldDef[] = [
  { id: "name",  label: "Full Name",     type: "text",  placeholder: "John Doe",          required: true, icon: <User  className="h-4 w-4" /> },
  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com",  required: true, icon: <Mail  className="h-4 w-4" /> },
  { id: "phone", label: "Phone Number",  type: "tel",   placeholder: "+27 XX XXX XXXX",   required: true, icon: <Phone className="h-4 w-4" /> },
]

// ─── Field definitions per service ───────────────────────────────────────────

export const serviceFields: Record<ServiceId, FieldDef[]> = {
  "Travel Consultancy": [
    ...clientFields,
    { id: "destination", label: "Destination",           type: "country",                                                                                                    required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",  label: "Preferred Travel Date", type: "date",                                                                                                       required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "people",      label: "Number of People",      type: "number",  placeholder: "2",                                                                                  required: true },
    { id: "notes",       label: "How can we help you?",  type: "textarea", placeholder: "Tell us about your travel plans…" },
  ],
  "Visa Assistance": [
    ...clientFields,
    { id: "destination", label: "Destination Country",  type: "country",                                                                                                     required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "visaType",    label: "Visa Type",            type: "select",  options: ["Tourist", "Business", "Student", "Work", "Transit", "Medical"],                          required: true },
    { id: "travelDate",  label: "Planned Travel Date",  type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "people",      label: "Number of Applicants", type: "number",  placeholder: "1",                                                                                   required: true },
    { id: "notes",       label: "Additional Notes",     type: "textarea", placeholder: "Any special requirements?" },
  ],
  "Tour Bookings": [
    ...clientFields,
    { id: "destination", label: "Tour Destination",     type: "country",                                                                                                     required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "checkIn",     label: "Start Date",           type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "checkOut",    label: "End Date",             type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "people",      label: "Number of Travellers", type: "number",  placeholder: "2",                                                                                   required: true },
    { id: "tourType",    label: "Tour Type",            type: "select",  options: ["Cultural", "Adventure", "Safari", "City Tour", "Beach", "Historical", "Custom"],         required: true },
    { id: "notes",       label: "Special Requests",     type: "textarea", placeholder: "Dietary needs, accessibility, etc." },
  ],
  "Hotel Bookings": [
    ...clientFields,
    { id: "destination", label: "Destination",      type: "country",                                                                                                         required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "checkIn",     label: "Check-in Date",    type: "date",                                                                                                            required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "checkOut",    label: "Check-out Date",   type: "date",                                                                                                            required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "adults",      label: "Adults",           type: "number",  placeholder: "2",                                                                                       required: true },
    { id: "children",    label: "Children",         type: "number",  placeholder: "0" },
    { id: "rooms",       label: "Rooms Needed",     type: "number",  placeholder: "1",                                                                                       required: true },
    { id: "hotelClass",  label: "Hotel Class",      type: "select",  options: ["3 Star", "4 Star", "5 Star", "Budget", "Boutique", "Any"] },
    { id: "notes",       label: "Special Requests", type: "textarea", placeholder: "Late check-in, sea view, etc." },
  ],
  "Travel Insurance": [
    ...clientFields,
    { id: "destination", label: "Destination",          type: "country",                                                                                                     required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",  label: "Travel Date",          type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "returnDate",  label: "Return Date",          type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "people",      label: "Number of Travellers", type: "number",  placeholder: "1",                                                                                   required: true },
    { id: "coverType",   label: "Cover Type",           type: "select",  options: ["Single Trip", "Multi-Trip Annual", "Family", "Business", "Medical Only"],                required: true },
    { id: "notes",       label: "Pre-existing Conditions / Notes", type: "textarea", placeholder: "Any medical conditions we should know?" },
  ],
  "Flight Bookings": [
    ...clientFields,
    { id: "origin",      label: "Departure City / Airport",      type: "text",    placeholder: "Cape Town (CPT)",                                                            required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination", label: "Destination Country",           type: "country",                                                                                            required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "departDate",  label: "Departure Date",                type: "date",                                                                                               required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "returnDate",  label: "Return Date (blank = one-way)", type: "date",                                                                                                                icon: <Calendar className="h-4 w-4" /> },
    { id: "adults",      label: "Adults",                        type: "number",  placeholder: "1",                                                                          required: true },
    { id: "children",    label: "Children",                      type: "number",  placeholder: "0" },
    { id: "cabinClass",  label: "Cabin Class",                   type: "select",  options: ["Economy", "Premium Economy", "Business", "First Class"],                        required: true },
    { id: "notes",       label: "Special Requests",              type: "textarea", placeholder: "Meal preferences, seat preferences…" },
  ],
  "Flight Hire / Charter": [
    ...clientFields,
    { id: "origin",       label: "Departure Location",      type: "text",    placeholder: "Cape Town, South Africa",                                                         required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination",  label: "Destination Country",     type: "country",                                                                                                 required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "departDate",   label: "Departure Date",          type: "date",                                                                                                    required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "returnDate",   label: "Return Date",             type: "date",                                                                                                                     icon: <Calendar className="h-4 w-4" /> },
    { id: "people",       label: "Number of Passengers",    type: "number",  placeholder: "4",                                                                               required: true },
    { id: "aircraftType", label: "Aircraft Preference",     type: "select",  options: ["Light Jet", "Midsize Jet", "Heavy Jet", "Turboprop", "Helicopter", "No Preference"] },
    { id: "notes",        label: "Additional Requirements", type: "textarea", placeholder: "Catering, cargo, special requests…" },
  ],
  "Airport Transfers": [
    ...clientFields,
    { id: "airport",      label: "Airport",              type: "text",    placeholder: "Cape Town International Airport",                                                    required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "transferType", label: "Transfer Type",        type: "select",  options: ["Airport → Hotel", "Hotel → Airport", "Airport → Airport", "Port Transfer"],            required: true },
    { id: "destination",  label: "Country",              type: "country",                                                                                                    required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",   label: "Transfer Date",        type: "date",                                                                                                       required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "flightNumber", label: "Flight Number",        type: "text",    placeholder: "SA 401 (optional)" },
    { id: "people",       label: "Number of Passengers", type: "number",  placeholder: "2",                                                                                  required: true },
    { id: "vehicleType",  label: "Vehicle Type",         type: "select",  options: ["Sedan", "SUV / 4x4", "Minibus (up to 12)", "Coach", "Luxury"] },
    { id: "notes",        label: "Notes",                type: "textarea", placeholder: "Luggage details, accessibility needs…" },
  ],
  "Airport Assistance": [
    ...clientFields,
    { id: "airport",        label: "Airport",           type: "text",    placeholder: "Cape Town International Airport",                                                     required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination",    label: "Country",           type: "country",                                                                                                     required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",     label: "Date of Travel",    type: "date",                                                                                                        required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "assistanceType", label: "Assistance Type",   type: "select",  options: ["Meet & Greet", "Wheelchair / Mobility", "VIP Lounge", "Fast Track", "Unaccompanied Minor", "Elderly Assistance"], required: true },
    { id: "people",         label: "Number of People",  type: "number",  placeholder: "1",                                                                                   required: true },
    { id: "notes",          label: "Details",           type: "textarea", placeholder: "Flight details and any special needs…" },
  ],
  "Vacation Packages": [
    ...clientFields,
    { id: "destination", label: "Destination",         type: "country",                                                                                                      required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "checkIn",     label: "Travel From",         type: "date",                                                                                                         required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "checkOut",    label: "Travel To",           type: "date",                                                                                                         required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "adults",      label: "Adults",              type: "number",  placeholder: "2",                                                                                    required: true },
    { id: "children",    label: "Children",            type: "number",  placeholder: "0" },
    { id: "budget",      label: "Budget (per person)", type: "select",  options: ["Under R5,000", "R5,000–R10,000", "R10,000–R20,000", "R20,000–R40,000", "R40,000+", "Flexible"] },
    { id: "interests",   label: "Interests",           type: "select",  options: ["Beach & Relaxation", "Adventure & Sports", "Cultural & Historical", "Safari & Wildlife", "City Break", "Honeymoon", "Family Fun", "Mixed"] },
    { id: "notes",       label: "Dream Trip Details",  type: "textarea", placeholder: "Tell us about your dream vacation…" },
  ],
  "Yellow Fever / Passport": [
    ...clientFields,
    { id: "serviceType", label: "Service Required",       type: "select",  options: ["Yellow Fever Certificate", "Passport Application", "Passport Renewal", "Emergency Travel Document", "Both (Yellow Fever + Passport)"], required: true },
    { id: "destination", label: "Destination Country",    type: "country",                                                                                                   required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",  label: "Planned Travel Date",    type: "date",                                                                                                      required: true,  icon: <Calendar className="h-4 w-4" /> },
    { id: "people",      label: "Number of People",       type: "number",  placeholder: "1",                                                                                 required: true },
    { id: "notes",       label: "Additional Information", type: "textarea", placeholder: "Urgency, special circumstances…" },
  ],
  "Freight Forwarding": [
    ...clientFields,
    { id: "origin",      label: "Origin Location",       type: "text",    placeholder: "Cape Town, South Africa",                                                            required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination", label: "Destination Country",   type: "country",                                                                                                    required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "freightType", label: "Freight Type",          type: "select",  options: ["Air Freight", "Sea Freight", "Road Freight", "Express Courier"],                        required: true },
    { id: "cargoType",   label: "Cargo Description",     type: "text",    placeholder: "Electronics, clothing, machinery…",                                                  required: true },
    { id: "weight",      label: "Estimated Weight (kg)", type: "number",  placeholder: "100" },
    { id: "travelDate",  label: "Desired Dispatch Date", type: "date",                                                                                                                        icon: <Calendar className="h-4 w-4" /> },
    { id: "notes",       label: "Additional Details",    type: "textarea", placeholder: "Dimensions, fragile items, customs requirements…" },
  ],
  "Logistics / Transportation": [
    ...clientFields,
    { id: "origin",      label: "Origin Location",       type: "text",    placeholder: "Cape Town, South Africa",                                                            required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination", label: "Destination Country",   type: "country",                                                                                                    required: true,  icon: <MapPin   className="h-4 w-4" /> },
    { id: "serviceType", label: "Service Type",          type: "select",  options: ["Last Mile Delivery", "Warehousing", "Cross-Docking", "Supply Chain", "Cold Chain", "Bulk Transport"], required: true },
    { id: "travelDate",  label: "Required Date",         type: "date",                                                                                                                        icon: <Calendar className="h-4 w-4" /> },
    { id: "quantity",    label: "Estimated Qty / Units", type: "number",  placeholder: "1" },
    { id: "notes",       label: "Details",               type: "textarea", placeholder: "Describe your logistics needs…" },
  ],
  "Package Pickup & Delivery": [
    ...clientFields,
    { id: "pickupAddress",   label: "Pickup Address",     type: "text",    placeholder: "123 Main St, Cape Town",   required: true, icon: <MapPin   className="h-4 w-4" /> },
    { id: "deliveryAddress", label: "Delivery Address",   type: "text",    placeholder: "Recipient full address",    required: true, icon: <MapPin   className="h-4 w-4" /> },
    { id: "destination",     label: "Destination Country",type: "country",                                           required: true, icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate",      label: "Pickup Date",        type: "date",                                              required: true, icon: <Calendar className="h-4 w-4" /> },
    { id: "packageSize",     label: "Package Size",       type: "select",  options: ["Small (under 5 kg)", "Medium (5–20 kg)", "Large (20–50 kg)", "Extra Large (50 kg+)"], required: true },
    { id: "notes",           label: "Package Description",type: "textarea", placeholder: "Contents, fragility, value…" },
  ],
  "Riders Services": [
    ...clientFields,
    { id: "people",     label: "Number of People",  type: "number",  placeholder: "1",                                                                                       required: true },
    { id: "origin",     label: "Pickup Location",   type: "text",    placeholder: "Your address or area",                                                                    required: true, icon: <MapPin   className="h-4 w-4" /> },
    { id: "dropoff",    label: "Drop-off Location", type: "text",    placeholder: "Destination address",                                                                     required: true, icon: <MapPin   className="h-4 w-4" /> },
    { id: "travelDate", label: "Date Needed",       type: "date",                                                                                                            required: true, icon: <Calendar className="h-4 w-4" /> },
    { id: "riderType",  label: "Rider Type",        type: "select",  options: ["Standard", "Premium / Executive", "Bike Courier", "Minibus / Group"],                       required: true },
    { id: "notes",      label: "Notes",             type: "textarea", placeholder: "Any special instructions…" },
  ],
}

// ─── Accent colours ───────────────────────────────────────────────────────────

export const serviceColor: Record<ServiceId, string> = {
  "Travel Consultancy":        "#6366f1",
  "Visa Assistance":           "#0ea5e9",
  "Tour Bookings":             "#10b981",
  "Hotel Bookings":            "#f59e0b",
  "Travel Insurance":          "#8b5cf6",
  "Flight Bookings":           "#3b82f6",
  "Flight Hire / Charter":     "#ec4899",
  "Airport Transfers":         "#14b8a6",
  "Airport Assistance":        "#f97316",
  "Vacation Packages":         "#ef4444",
  "Yellow Fever / Passport":   "#eab308",
  "Freight Forwarding":        "#64748b",
  "Logistics / Transportation":"#475569",
  "Package Pickup & Delivery": "#7c3aed",
  "Riders Services":           "#0d9488",
}

// ─── Searchable Country Picker ────────────────────────────────────────────────

function CountryPicker({
  value,
  onChange,
  accentColor,
  required,
}: {
  value: string
  onChange: (v: string) => void
  accentColor: string
  required?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selected = ALL_COUNTRIES.find((c) => c.name === value)

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_COUNTRIES
    const q = query.toLowerCase()
    return ALL_COUNTRIES.filter((c) => c.name.toLowerCase().includes(q))
  }, [query])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery("")
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-[46px] w-full items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm transition-all hover:border-gray-300 focus:outline-none"
        style={open ? { borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}18`, background: "#fff" } : {}}
      >
        {selected ? (
          <>
            <span className="text-lg leading-none">{selected.emoji}</span>
            <span className="font-medium text-gray-800">{selected.name}</span>
          </>
        ) : (
          <>
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Search country…</span>
          </>
        )}
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-[9999] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search countries…"
              className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Country list */}
          <div className="max-h-[220px] overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-6 text-center text-sm text-gray-400">No countries found</p>
            ) : (
              filtered.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onChange(country.name)
                    setOpen(false)
                    setQuery("")
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-50 ${
                    value === country.name ? "bg-blue-50 font-semibold text-[#0071c2]" : "text-gray-700"
                  }`}
                >
                  <span className="w-6 text-center text-base leading-none">{country.emoji}</span>
                  <span>{country.name}</span>
                  {value === country.name && (
                    <span className="ml-auto text-[#0071c2]">✓</span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Generic Field Input ──────────────────────────────────────────────────────

function FieldInput({
  field,
  value,
  onChange,
  accentColor,
}: {
  field: FieldDef
  value: string
  onChange: (v: string) => void
  accentColor: string
}) {
  // Country field uses the custom picker
  if (field.type === "country") {
    return (
      <CountryPicker
        value={value}
        onChange={onChange}
        accentColor={accentColor}
        required={field.required}
      />
    )
  }

  const base =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 placeholder:text-gray-400"
  const style = { "--accent": accentColor } as React.CSSProperties

  if (field.type === "select") {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} appearance-none pr-10`}
          style={style}
        >
          <option value="">Select {field.label}</option>
          {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
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
        style={style}
      />
    )
  }

  // text / email / tel / date / number — with optional leading icon
  return (
    <div className="relative">
      {field.icon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {field.icon}
        </span>
      )}
      <input
        type={field.type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className={`${base} ${field.icon ? "pl-9" : ""}`}
        style={style}
      />
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────

interface ServiceModalProps {
  service: ServiceId | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

  const fields = service ? serviceFields[service] : []
  const color  = service ? serviceColor[service]  : "#003b95"

  useEffect(() => {
    setFormData({})
    setStatus("idle")
    setErrorMsg("")
  }, [service])

  useEffect(() => {
    document.body.style.overflow = service ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [service])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  if (!service) return null

  const setField = (id: string, v: string) => setFormData((p) => ({ ...p, [id]: v }))

  const handleSubmit = async () => {
    const missing = fields.filter((f) => f.required && !formData[f.id]?.trim())
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
      if (!res.ok) throw new Error()
      setStatus("success")
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again or contact us directly.")
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${service} request form`}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        style={{ animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Header */}
        <div
          className="shrink-0 px-7 py-6"
          style={{ background: `linear-gradient(135deg, ${color}ee 0%, ${color}bb 100%)` }}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">Service Request</p>
          <h2 className="mt-1 text-2xl font-extrabold text-white">{service}</h2>
          <p className="mt-1 text-sm text-white/80">Fill in the form and our team will get back to you within 24 hours.</p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-5 px-8 py-16 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full" style={{ background: `${color}18` }}>
                <CheckCircle2 className="h-12 w-12" style={{ color }} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">Your Request Has Been Sent!</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-gray-500">
                  Thank you for your <strong className="text-gray-700">{service}</strong> enquiry.
                  We&apos;ve received it and will get back to you soon. 🙌
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 rounded-xl px-10 py-3.5 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: color }}
              >
                Done
              </button>
            </div>
          ) : (
            <div className="grid gap-4 p-7 sm:grid-cols-2">
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={field.type === "textarea" ? "sm:col-span-2" : ""}
                >
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
                    {field.label}
                    {field.required && <span className="ml-1 text-red-400">*</span>}
                  </label>
                  <FieldInput
                    field={field}
                    value={formData[field.id] ?? ""}
                    onChange={(v) => setField(field.id, v)}
                    accentColor={color}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {status !== "success" && (
          <div className="shrink-0 border-t bg-gray-50 px-7 py-5">
            {errorMsg && (
              <p className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {errorMsg}
              </p>
            )}
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-gray-400">No payment required · We respond within 24 hrs</p>
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="flex min-w-[160px] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: color }}
              >
                {status === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Request</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}