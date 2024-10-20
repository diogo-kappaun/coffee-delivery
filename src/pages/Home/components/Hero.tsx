import HeroImage from '@/assets/hero-image.png'
import { HeroItem } from '@/pages/Home/components/HeroItem'
import {
  PiCoffeeFill,
  PiPackageFill,
  PiShoppingCartFill,
  PiTimerFill,
} from 'react-icons/pi'

export const Hero = () => {
  return (
    <div className="bg-[url('./src/assets/bg-hero.png')] bg-cover bg-center py-[92px]">
      <div className="w-page md mx-auto flex flex-col items-center justify-between gap-2 px-5 md:flex-row">
        <div className="space-y-4 md:w-[592px]">
          <h2 className="font-baloo text-4xl font-extrabold lg:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="text-lg lg:text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="flex flex-wrap gap-[20px_40px] pt-6 lg:pt-12">
            <HeroItem
              classname="bg-product-yellow-dark"
              icon={<PiShoppingCartFill />}
              text="Compra simples e segura"
            />
            <HeroItem
              classname="bg-product-purple-dark"
              icon={<PiPackageFill />}
              text="Embalagem mantém o café intacto"
            />
            <HeroItem
              classname="bg-product-yellow"
              icon={<PiTimerFill />}
              text="Entrega rápida e rastreada"
            />
            <HeroItem
              classname="bg-product-purple"
              icon={<PiCoffeeFill />}
              text="O café chega fresquinho até você"
            />
          </div>
        </div>
        <img
          src={HeroImage}
          alt="Copo de cafe com graos de cafe ao redor."
          className="w-img hidden object-scale-down md:block"
        />
      </div>
    </div>
  )
}
