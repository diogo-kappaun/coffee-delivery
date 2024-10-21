import { PiMapPinFill } from 'react-icons/pi'

interface LocationProps {
  city: string
  state: string
}

export const Location = ({ city, state }: LocationProps) => {
  return (
    <span className="flex w-max items-center justify-center gap-0.5 rounded-md bg-product-purple-light p-2 text-sm text-product-purple-dark">
      <PiMapPinFill className="text-product-purple" size={22} />
      {city}, {state}
    </span>
  )
}
