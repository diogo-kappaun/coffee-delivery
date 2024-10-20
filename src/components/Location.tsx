import { PiMapPinFill } from 'react-icons/pi'

interface LocationProps {
  city: string
  state: string
}

export const Location = ({ city, state }: LocationProps) => {
  return (
    <span className="bg-product-purple-light text-product-purple-dark flex w-max items-center justify-center gap-0.5 rounded-md p-2 text-sm">
      <PiMapPinFill className="text-product-purple" size={22} />
      {city}, {state}
    </span>
  )
}
