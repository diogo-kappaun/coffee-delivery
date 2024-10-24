import { useCart } from '@/cart'
import { AmountControl } from '@/components/AmountControl'
import { Button } from '@/components/ui/button'
import { RemoveAlert } from '@/pages/Checkout/components/RemoveAlert'
import { useState } from 'react'
import { PiTrash } from 'react-icons/pi'
import { CartProductsProps } from '..'

interface CartItemProps {
  data: CartProductsProps
}

export const CartItem = ({ data }: CartItemProps) => {
  const { itemDescrease, itemIncrease } = useCart()

  const [quantity, setQuantity] = useState(data.quantity)

  const { removeToCart } = useCart()

  const onIncrease = () => {
    if (quantity >= 15) {
      return
    }

    setQuantity((prevState) => prevState + 1)

    return itemIncrease(data.id)
  }

  const onDescrease = () => {
    if (quantity <= 1) {
      return
    }

    setQuantity((prevState) => prevState - 1)

    return itemDescrease(data.id)
  }

  return (
    <div className="flex gap-5 border-b border-accent pb-6">
      <img src={`./public/${data.url}.png`} alt="" className="h-16" />
      <div className="flex-1 space-y-2">
        <span>{data.name}</span>
        <div className="flex flex-col items-start gap-2 min-[500px]:flex-row min-[500px]:items-center">
          <AmountControl
            onDescrease={onDescrease}
            onIncrease={onIncrease}
            amount={quantity}
          />
          <RemoveAlert onConfirm={() => removeToCart(data.id)}>
            <Button variant="secondary" className="flex items-center">
              <PiTrash className="text-product-purple" size={16} />
              <span className="font-normal">Remover</span>
            </Button>
          </RemoveAlert>
        </div>
      </div>
      <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(data.price * quantity)}
      </strong>
    </div>
  )
}
