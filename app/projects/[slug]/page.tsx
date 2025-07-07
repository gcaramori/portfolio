import { ProjectDetails } from '@/components/projects/projectDetails'
import Languages from '@/lib/languages'
import jsbjjkylemore from '../../../public/projects/kylemore.png'
import criptobeer from '../../../public/projects/criptobeer.png'
import unit5 from '../../../public/projects/unit5.png'
import performapanel from '../../../public/projects/performa.png'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  function getProjectLink(slug: string) {
    switch (slug) {
      case 'criptobeer':
        return '/projects/criptobeer.png'
      case 'unit5':
        return '/projects/unit5.png'
      case 'performapanel':
        return '/projects/performapanel.png'
      default:
        return '/projects/kylemore.png'
    }
  }

  function getProjectImage(slug: string) {
    switch (slug) {
      case 'criptobeer':
        return criptobeer
      case 'unit5':
        return unit5
      case 'performapanel':
        return performapanel
      default:
        return jsbjjkylemore
    }
  }

  return (
    <ProjectDetails
      imageSrc={getProjectImage(slug)}
      alt={slug}
      link={getProjectLink(slug)}
      langKey={slug as keyof (typeof Languages)['jsbjjkylemore']}
    />
  )
}
