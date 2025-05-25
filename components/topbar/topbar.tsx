import { SectionControls } from './sectionControls'
import { Social } from './social'

const CONTROLS = [
  {
    id: 'index',
    link: '/',
  },
  {
    id: 'about',
    link: '/about',
  },
  {
    id: 'projects',
    link: '/projects',
  },
  {
    id: 'skills',
    link: '/skills',
  },
]

export function Topbar() {
  return (
    <nav className="w-full h-16 z-10 p-2 flex items-center bg-gray-200">
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          {CONTROLS.map((control) => (
            <SectionControls
              key={control.id}
              id={control.id}
              link={control.link}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <Social />
        </div>
      </div>
    </nav>
  )
}
