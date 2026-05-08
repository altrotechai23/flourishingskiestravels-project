"use client"

import { useState } from "react"
import {
  Plane,
  Building2,
  Car,
  BedDouble,
  CalendarDays,
  Users,
} from "lucide-react"

const tabs = [
  { id: "flights", label: "Flights", Icon: Plane },
  { id: "hotels", label: "Hotels", Icon: Building2 },
  { id: "vehicles", label: "Vehicles", Icon: Car },
] as const

type TabId = (typeof tabs)[number]["id"]

export function BookingSearch() {
  const [active, setActive] = useState<TabId>("flights")

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  return (
    <section className="relative z-30 -mt-16 px-3 pb-10 sm:-mt-20 sm:px-4 md:-mt-24 md:pb-14">
      <div className="mx-auto max-w-[1280px]">
        {/* Tabs */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-14">
          {tabs.map(({ id, label, Icon }) => {
            const isActive = active === id

            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className="group flex flex-col items-center"
              >
                <div
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors sm:text-base md:text-lg ${
                    isActive ? "text-primary" : "text-white"
                  }`}
                >
                  <span>{label}</span>

                  <Icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      isActive ? "text-primary" : "text-white"
                    }`}
                    strokeWidth={1.8}
                  />
                </div>

                <div
                  className={`mt-2 h-[3px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-16 sm:w-20 bg-primary"
                      : "w-0 bg-transparent group-hover:w-10 sm:group-hover:w-14"
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Form */}
        <div className="overflow-hidden rounded-2xl border-[3px] border-[#febb02] bg-white shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1.2fr_1.2fr_1.5fr_auto]">
            {/* Destination */}
            <div className="flex items-center gap-3 border-b border-gray-200 bg-[#f5f5f5] px-4 py-4 md:border-r xl:border-b-0">
              <BedDouble className="h-5 w-5 shrink-0 text-gray-500" />

              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full bg-transparent text-sm font-medium text-gray-800 placeholder:text-gray-600 focus:outline-none sm:text-[15px]"
              />
            </div>

            {/* Check-in */}
            <div className="relative flex items-center gap-3 border-b border-gray-200 bg-[#f5f5f5] px-4 py-4 md:border-r">
              <CalendarDays className="h-5 w-5 shrink-0 text-gray-500" />

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none sm:text-[15px]"
              />
            </div>

            {/* Check-out */}
            <div className="relative flex items-center gap-3 border-b border-gray-200 bg-[#f5f5f5] px-4 py-4 md:border-r xl:border-b-0">
              <CalendarDays className="h-5 w-5 shrink-0 text-gray-500" />

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none sm:text-[15px]"
              />
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 border-b border-gray-200 bg-[#f5f5f5] px-4 py-4 md:border-r xl:border-b-0">
              <Users className="h-5 w-5 shrink-0 text-gray-500" />

              <select className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none sm:text-[15px]">
                <option>2 adults · 0 children · 1 room</option>
                <option>1 adult · 0 children · 1 room</option>
                <option>2 adults · 1 child · 1 room</option>
                <option>4 adults · 2 children · 2 rooms</option>
              </select>
            </div>

            {/* Search */}
            <button
              type="submit"
              className="min-h-[64px] bg-[#0071c2] px-8 text-lg font-semibold text-white transition hover:bg-[#005999] md:text-xl"
            >
              Search
            </button>
          </form>
        </div>

        {/* Checkbox */}
        <div className="mt-4 flex items-center gap-3 px-1">
          <input
            type="checkbox"
            id="work"
            className="h-5 w-5 rounded border-gray-300"
          />

          <label
            htmlFor="work"
            className="text-sm text-white sm:text-base"
          >
            I&apos;m travelling for work
          </label>
        </div>
      </div>
    </section>
  )
}