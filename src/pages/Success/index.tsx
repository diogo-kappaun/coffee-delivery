import motocycle from '@/assets/motocycle.svg'
import { useOrder } from '@/store/order'
import { PiMapPinFill } from 'react-icons/pi'

export const Success = () => {
  const { order } = useOrder()
  const { street, number, city, district, state, method } = order!.delivery

  const paymentMethod = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
  }

  return (
    <main className="mx-auto mt-20 w-page space-y-10 px-5 pb-12">
      <div className="space-y-1">
        <h2 className="font-baloo text-3xl font-extrabold text-product-yellow-dark">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className="flex flex-col gap-24 lg:flex-row">
        <div className="flex-1 rounded-[6px_36px] bg-gradient-to-r from-product-yellow via-product-purple-dark to-product-purple p-0.5">
          <div className="flex-1 space-y-8 rounded-[4px_34px] bg-background p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-product-purple p-2">
                <PiMapPinFill className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>
                  Entrega em{' '}
                  <strong>
                    Rua {street}, {number}
                  </strong>
                </span>
                <span>
                  {district} - {city}, {state}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-product-yellow p-2">
                <PiMapPinFill className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min </strong>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-product-yellow-dark p-2">
                <PiMapPinFill className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[method]}</strong>
              </div>
            </div>
          </div>
        </div>
        <img
          src={motocycle}
          alt=""
          className="w-full object-scale-down lg:w-img"
        />
      </div>
    </main>
  )
}
