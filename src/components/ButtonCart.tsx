import { Button } from '@/components/ui/button'
import { PiShoppingCartFill } from 'react-icons/pi'
import { tv } from 'tailwind-variants'

interface ButtonCartProps {
  amountCart?: number
  withAmount?: boolean
  variant?: 'header' | 'card'
}

export const ButtonCart = ({
  amountCart,
  withAmount = false,
  variant = 'card',
}: ButtonCartProps) => {
  const buttonCart = tv({
    base: 'h-10 w-10 p-2',
    variants: {
      variant: {
        header:
          'bg-product-yellow-light text-product-yellow-dark group-hover:bg-product-yellow-light/80 group-hover:text-product-yellow-dark/80',
        card: 'bg-product-purple-dark text-background group-hover:bg-product-purple-dark/80 ',
      },
    },
  })

  return (
    <div className="group relative">
      {withAmount && (
        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-product-yellow-dark text-xs font-bold text-white group-hover:bg-product-yellow-dark/80">
          {amountCart}
        </div>
      )}
      <Button className={buttonCart({ variant })}>
        <PiShoppingCartFill size={22} />
      </Button>
    </div>
  )
}
