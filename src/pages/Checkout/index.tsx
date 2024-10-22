import { Button } from '@/components/ui/button'
import { CartItem } from '@/pages/Checkout/components/CartItem'
import { DeliveryForm } from '@/pages/Checkout/components/DeliveryForm'
import { OrderSummary } from '@/pages/Checkout/components/OrderSummary'
import { PaymentForm } from '@/pages/Checkout/components/PaymentForm'
import { PiCurrencyDollar, PiMapPinLine } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export interface CartProductsProps {
  id: string
  url: string
  name: string
  price: number
  amount: number
}

export const Checkout = () => {
  const cartProducts: CartProductsProps[] = [
    {
      id: '1',
      url: 'image',
      name: 'Expresso Tradicional',
      price: 9.9,
      amount: 1,
    },
    {
      id: '6',
      url: 'image-5',
      name: 'Latte',
      price: 9.9,
      amount: 2,
    },
  ]

  const deliveryPrice = 3.5

  const cartProductsPrice = cartProducts.map((item) => item.price * item.amount)

  const totalCartProducts = cartProductsPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  )

  return (
    <main className="mx-auto mt-10 flex w-page flex-col gap-8 px-5 pb-12 lg:flex-row">
      <div className="flex-1 space-y-4">
        <h2 className="font-baloo text-lg font-bold">Complete seu pedido</h2>
        <div className="rounded-md bg-card p-10">
          <div className="flex gap-2">
            <PiMapPinLine size={22} className="text-product-yellow-dark" />
            <div>
              <span>Endereço de Entrega</span>
              <p className="text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <DeliveryForm />
        </div>
        <div className="rounded-md bg-card p-10">
          <div className="flex gap-2">
            <PiCurrencyDollar size={22} className="text-product-yellow-dark" />
            <div>
              <span>Pagamento</span>
              <p className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar{' '}
              </p>
            </div>
          </div>
          <PaymentForm />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-baloo text-lg font-bold">Cafés selecionados</h2>
        <div className="space-y-6 rounded-[6px_36px] bg-card p-10">
          {cartProducts.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}

          <div className="flex flex-col gap-1">
            <OrderSummary text="Total de itens" value={totalCartProducts} />
            <OrderSummary text="Taxa de entrega" value={deliveryPrice} />
            <OrderSummary
              isBold
              text="Total do pedido"
              value={totalCartProducts + deliveryPrice}
            />
            <Link to="/success" className="mt-5 flex-1">
              <Button className="w-full bg-product-yellow py-5 hover:bg-product-yellow/80">
                CONFIRMAR PEDIDO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
