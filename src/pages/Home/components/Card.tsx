import { AmountControl } from '@/components/AmountControl'

import { ButtonCart } from '@/components/ButtonCart'
import {
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DataProps } from '..'

interface CardProps {
  data: DataProps
}

export const Card = ({ data }: CardProps) => {
  return (
    <CardContainer className="relative flex h-[310px] w-64 flex-col items-center rounded-[6px_36px]">
      <img
        className="absolute -top-5 w-[120px]"
        src={`./public/${data.url}.png`}
        alt=""
      />
      <CardHeader className="relative flex w-full flex-row justify-center gap-1 space-y-0 pb-4 pt-28">
        {data.tags.map((item) => (
          <span
            className="w-max rounded-full bg-product-yellow-light px-2 py-1 text-[10px] font-bold text-product-yellow-dark"
            key={item}
          >
            {item.toUpperCase()}
          </span>
        ))}
      </CardHeader>
      <CardContent className="h-full space-y-2 p-0 px-5 text-center">
        <CardTitle className="font-baloo text-xl font-bold">
          {data.name}
        </CardTitle>
        <CardDescription className="">{data.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex w-full justify-between px-6 pb-5">
        <div className="flex items-baseline gap-1">
          <span className="text-sm">R$</span>
          <span className="font-baloo text-2xl font-extrabold">
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(data.price)}
          </span>
        </div>
        <div className="flex gap-2">
          <AmountControl amount={1} />
          <ButtonCart />
        </div>
      </CardFooter>
    </CardContainer>
  )
}