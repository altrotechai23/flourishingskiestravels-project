"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
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
} from "lucide-react"

const services = [
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

export function BookingSearch() {
  const router = useRouter()

  const [service, setService] = useState("Hotel Bookings")
  const [destination, setDestination] = useState("Cape Town, South Africa")
  const [checkIn, setCheckIn] = useState("2026-05-12")
  const [checkOut, setCheckOut] = useState("2026-05-13")
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(2)

  const [openDestination, setOpenDestination] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const [openGuests, setOpenGuests] = useState(false)

  const filteredDestinations = useMemo(() => destinations, [])

  const guestLabel = `${adults} adult${adults > 1 ? "s" : ""} · ${children} child${children !== 1 ? "ren" : ""} · ${rooms} room${rooms > 1 ? "s" : ""}`

  const submit = () => {
    const params = new URLSearchParams({
      service,
      destination,
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
      rooms: String(rooms),
    })

    router.push(`/search-results?${params.toString()}`)
  }

  return (
    <section className="relative z-30 -mt-24 px-3 pb-14 sm:px-4 md:-mt-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Service tabs */}
        <div className="mb-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full gap-3 px-1">
            {services.map((item) => {
              const active = item === service

              return (
                <button
                  key={item}
                  onClick={() => setService(item)}
                  className={`group relative rounded-full border px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    active
                      ? "border-white bg-white text-[#003b95] shadow-xl"
                      : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                  }`}
                >
                  {item}

                  {active && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#febb02]" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Booking.com style bar */}
        <div className="overflow-visible rounded-2xl border-[4px] border-[#febb02] bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
            {/* destination */}
            <div className="relative border-b lg:border-r lg:border-b-0">
              <button
                onClick={() => {
                  setOpenDestination((v) => !v)
                  setOpenDate(false)
                  setOpenGuests(false)
                }}
                className="flex h-[72px] w-full items-center gap-4 px-5 text-left"
              >
                <MapPin className="h-6 w-6 shrink-0 text-gray-500" />
                <span className="font-medium text-gray-900">{destination}</span>

                <X className="ml-auto h-5 w-5 text-gray-500" />
              </button>

              {openDestination && (
                <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-full rounded-2xl border bg-white p-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {filteredDestinations.map((place) => (
                    <button
                      key={place}
                      onClick={() => {
                        setDestination(place)
                        setOpenDestination(false)
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left transition hover:bg-blue-50"
                    >
                      <MapPin className="h-5 w-5 text-[#003b95]" />
                      <span className="font-medium text-gray-900">{place}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* dates */}
            <div className="relative border-b lg:border-r lg:border-b-0">
              <button
                onClick={() => {
                  setOpenDate((v) => !v)
                  setOpenDestination(false)
                  setOpenGuests(false)
                }}
                className="flex h-[72px] w-full items-center gap-4 px-5 text-left"
              >
                <Calendar className="h-6 w-6 shrink-0 text-gray-500" />
                <span className="font-medium text-gray-900">
                  {new Date(checkIn).toDateString()} — {new Date(checkOut).toDateString()}
                </span>
              </button>

              {openDate && (
                <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-full rounded-2xl border bg-white p-5 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-gray-700">Check in</span>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#003b95]"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-gray-700">Check out</span>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#003b95]"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* guests */}
            <div className="relative border-b lg:border-r lg:border-b-0">
              <button
                onClick={() => {
                  setOpenGuests((v) => !v)
                  setOpenDate(false)
                  setOpenDestination(false)
                }}
                className="flex h-[72px] w-full items-center gap-4 px-5 text-left"
              >
                <UserRound className="h-6 w-6 shrink-0 text-gray-500" />
                <span className="font-medium text-gray-900">{guestLabel}</span>
                <ChevronDown className="ml-auto h-5 w-5 text-gray-500" />
              </button>

              {openGuests && (
                <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-full rounded-2xl border bg-white p-5 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <Counter label="Adults" value={adults} onChange={setAdults} min={1} />
                  <Counter label="Children" value={children} onChange={setChildren} min={0} />
                  <Counter label="Rooms" value={rooms} onChange={setRooms} min={1} />
                </div>
              )}
            </div>

            {/* submit */}
            <button
              onClick={submit}
              className="flex h-[72px] items-center justify-center gap-3 bg-[#0071c2] px-10 text-xl font-semibold text-white transition hover:bg-[#005999]"
            >
              <Search className="h-6 w-6" />
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-6 px-1 text-white">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-5 w-5 rounded" />
            <span>I’m looking for an entire home or apartment</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-5 w-5 rounded" />
            <span>Add flights to my search</span>
          </label>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <BriefcaseBusiness className="h-4 w-4" />
            <span className="text-sm">{service}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({
  label,
  value,
  onChange,
  min,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <span className="font-semibold text-gray-900">{label}</span>

      <div className="flex items-center gap-4">
        <button
          onClick={() => value > min && onChange(value - 1)}
          className="grid h-10 w-10 place-items-center rounded-full border text-[#003b95]"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="min-w-[24px] text-center font-semibold">{value}</span>

        <button
          onClick={() => onChange(value + 1)}
          className="grid h-10 w-10 place-items-center rounded-full border text-[#003b95]"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}