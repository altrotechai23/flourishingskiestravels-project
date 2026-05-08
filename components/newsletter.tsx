"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="products" className="bg-[#0e2a3a] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-3 text-pretty text-sm text-white/75 md:text-base">
            Get exclusive travel deals, insider tips and the latest destination
            guides delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSubmitted(true)
            }}
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-sm border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)]"
            >
              {submitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  SUBSCRIBED
                </>
              ) : (
                "SUBSCRIBE"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
