import { TiltVisual } from './tiltVisual'
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
      <TiltVisual><div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div></TiltVisual>
    )
  }

  return (
    <div className="flex min-h-64 flex-col justify-center gap-6 bg-[var(--surface-strong)] p-6 md:p-8">
      {!compact && (
        <p className="font-display text-2xl font-semibold">{title}</p>
      )}
      <dl className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-3'}`}>
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={
              compact
                ? 'grid min-w-0 grid-cols-[minmax(0,1fr)] gap-1 min-[480px]:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] min-[480px]:items-baseline min-[480px]:gap-4'
                : undefined
            }
          >
            <dt className={`text-sm leading-6 text-[var(--muted-foreground)] ${compact ? 'min-[480px]:col-start-2 min-[480px]:row-start-1' : ''}`}>
              {metric.label}
            </dt>
            <dd
              className={`${compact ? 'row-start-1 break-words text-xl min-[480px]:col-start-1' : 'mt-2 break-words text-2xl'} font-display font-semibold text-[var(--foreground)]`}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
