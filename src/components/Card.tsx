


import { ClassValue } from 'clsx'
import { cn } from '../utils'


type Props = {
  className?: ClassValue
  children: React.ReactNode
}

export default function Card({ className, children}: Props) {
  return (
    <div className={cn(
        'fnot-prose flex w-full items-center justify-center z-[15] relative border-2 mb-5 border-border bg-white  px-10 py-20 shadow-light dark:shadow-dark m750:px-5 m750:py-10',
        className
      )}
    >
      {children}
    </div>
  )
}