import { Button } from '@/components/ui/button'
import { PiShoppingCartFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

interface ButtonCartProps {
  amountCart: number
}

export const ButtonCart = ({ amountCart }: ButtonCartProps) => {
  return (
    <Link className="group relative" to="/cart">
      <div className="bg-product-yellow-dark group-hover:bg-product-yellow-dark/80 absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white">
        {amountCart}
      </div>
      <Button className="bg-product-yellow-light text-product-yellow-dark group-hover:bg-product-yellow-light/80 group-hover:text-product-yellow-dark/80 h-10 w-10 p-2">
        <PiShoppingCartFill size={22} />
      </Button>
    </Link>
  )
}
