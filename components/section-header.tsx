export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-balance text-3xl font-medium text-[#3a3a3a] md:text-5xl">
        {title}
      </h2>
      <div className="section-divider mt-4" aria-hidden>
        <span className="dash" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dash" />
      </div>
      {subtitle ? (
        <p className="mt-6 text-pretty text-sm leading-relaxed text-gray-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
