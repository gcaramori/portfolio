'use client'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

type ProjectLinkCardProps = {
  href: string
  imageSrc: StaticImageData
  alt: string
  width?: number
  height?: number
  className?: string
}

export function ProjectLinkCard({
  href,
  imageSrc,
  alt,
  width = 300,
  height = 150,
  className = '',
}: ProjectLinkCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col justify-start items-start relative transition-transform hover:scale-105 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </Link>
  )
}
