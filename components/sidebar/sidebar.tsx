import { SidebarControls } from './sidebarControls'
import { SidebarMedias } from './sidebarMedias'

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
