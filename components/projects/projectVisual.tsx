import Image, { type StaticImageData } from 'next/image'

type ProjectVisualProps = {
  image?: StaticImageData
  title: string
  metrics?: { value: string; label: string }[]
  priority?: boolean
  compact?: boolean
}

export function ProjectVisual({
  image,
  title,
  metrics = [],
  priority = false,
  compact = false,
}: ProjectVisualProps) {
  if (image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-64 flex-col justify-center gap-6 bg-[var(--surface-strong)] p-6 md:p-8">
      <p className="font-display text-2xl font-semibold">{title}</p>
      <dl className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-3'}`}>
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={
              compact
                ? 'grid grid-cols-[1fr_auto] items-center gap-4'
                : undefined
            }
          >
            <dt className="text-sm leading-6 text-[var(--muted-foreground)]">
              {metric.label}
            </dt>
            <dd
              className={`${compact ? 'whitespace-nowrap text-xl' : 'mt-2 break-words text-2xl'} font-display font-semibold text-[var(--foreground)]`}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
