import type { ReactNode } from 'react'

export function TiltVisual({ children }: { children: ReactNode }) {
  return (
    <div className="project-image-effect overflow-hidden">
      <div className="project-image-effect-inner">{children}</div>
    </div>
  )
}
