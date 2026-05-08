import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageBanner({
  title,
  subtitle,
  image = "/hero-london.jpg",
}: {
  title: string
  subtitle?: string
  image?: string
}) {
  return (
    <section className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[400px]">
      <Image
        src={image || "/placeholder.svg"}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a3a]/70 via-[#0e2a3a]/60 to-[#0e2a3a]/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-pretty text-sm text-white/85 sm:mt-4 md:text-base">
            {subtitle}
          </p>
        ) : null}
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center gap-2 text-xs font-medium text-white/80 sm:mt-6 sm:text-sm"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary">{title}</span>
        </nav>
      </div>
    </section>
  )
}
