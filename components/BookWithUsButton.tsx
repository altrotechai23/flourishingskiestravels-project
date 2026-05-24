"use client"

import { ArrowRight } from "lucide-react"

export default function BookWithUsButton() {
  return (
    <button
        onClick={() => {
        document
            .getElementById("booking")
            ?.scrollIntoView({ behavior: "smooth" })
        }}
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-primary-hover"

    >
        Book With Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  )
}
