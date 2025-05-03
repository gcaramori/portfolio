import { LoaderCircle } from 'lucide-react'

export function Spinner() {
  return (
    <div className="flex justify-center items-center p-6 relative">
      <div className="block relative animate-spin">
        <LoaderCircle />
      </div>
    </div>
  )
}
