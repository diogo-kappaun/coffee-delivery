import { cn } from '@/lib/utils'

interface HeroItemProps {
  classname: string
  icon: React.ReactNode
  text: string
}

export const HeroItem = ({ icon, text, classname }: HeroItemProps) => {
  return (
    <div className="flex min-w-64 items-center gap-3">
      <div
        className={cn(
          'flex items-center rounded-full p-2 text-white',
          classname,
        )}
      >
        {icon}
      </div>
      <p>{text}</p>
    </div>
  )
}
