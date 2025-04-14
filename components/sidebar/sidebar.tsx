import { SidebarControls } from './sidebarControls'
import { SidebarMedias } from './sidebarMedias'

const CONTROLS = [
  {
    id: 'home',
    link: '?session=home',
  },
  {
    id: 'about',
    link: '?session=about',
  },
  {
    id: 'projects',
    link: '?session=projects',
  },
  {
    id: 'skills',
    link: '?session=skills',
  },
]

export function Sidebar() {
  return (
    <aside className="w-20 h-full z-10 p-2 flex flex-col gap-10 2xl:gap-20 justify-center items-center bg-gray-200">
      <div className="flex flex-col justify-center items-center gap-4">
        {CONTROLS.map((control) => (
          <SidebarControls
            key={control.id}
            id={control.id}
            link={control.link}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <SidebarMedias />
      </div>
    </aside>
  )
}
