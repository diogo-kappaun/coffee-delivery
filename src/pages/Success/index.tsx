import motocycle from '@/assets/motocycle.svg'
import { PiMapPinFill } from 'react-icons/pi'

export const Success = () => {
  return (
    <main className="mx-auto mt-20 w-page space-y-10">
      <div className="space-y-1">
        <h2 className="font-baloo text-3xl font-extrabold text-product-yellow-dark">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className="flex gap-24">
        <div className="flex-1 space-y-8 rounded-[6px_36px] border border-product-yellow p-10">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-product-purple p-2">
              <PiMapPinFill className="text-white" />
            </div>
            <div className="flex flex-col">
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
        <img src={motocycle} alt="" />
      </div>
    </main>
  )
}
