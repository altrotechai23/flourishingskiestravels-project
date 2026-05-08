import Image from "next/image"
import Link from "next/link"

export function StudentTour() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[520px] w-full md:min-h-[560px]">
        <Image
          src="/student-tour.jpg"
          alt="Student Educational Tour at Tower Bridge"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="max-w-xl text-center text-white md:text-left">
              <p className="text-base font-light md:text-xl">
                Your Kids Deserve
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight md:text-5xl">
                Student Educational Tour
              </h2>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-white/90 md:text-base">
                Let your kids join several other children for the best Student
                Educational Tour within and outside. Your kids will enjoy
                unforgettable experiences of extra-curriculum learning,
                relaxation, and great fun.
              </p>
              <Link
                href="/tours"
                className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-semibold tracking-wider text-primary-foreground shadow-lg transition-colors hover:bg-[color:var(--primary-hover)] sm:px-8 sm:py-4 sm:text-sm"
              >
                VIEW AMAZING TOURS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
