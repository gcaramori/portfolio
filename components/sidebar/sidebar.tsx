import { SidebarControls } from './sidebarControls'

const CONTROLS = [
  {
    id: 'home',
    link: '#home',
  },
  {
    id: 'about',
    link: '#about',
  },
]

export function Sidebar() {
  return (
    <aside className="w-20 h-full z-10 p-2 flex flex-col justify-center items-center bg-gray-200">
      <div className="flex flex-col justify-center items-center gap-4">
        {CONTROLS.map((control) => (
          <SidebarControls
            key={control.id}
            id={control.id}
            link={control.link}
          />
        ))}
      </div>
    </aside>
  )
}
