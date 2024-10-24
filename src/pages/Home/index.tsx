import { coffeesList } from '@/data/coffee'
import { Card } from '@/pages/Home/components/Card'
import { Hero } from '@/pages/Home/components/Hero'

export interface DataProps {
  id: string
  url: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const Home = () => {
  const data: DataProps[] = coffeesList

  return (
    <main>
      <Hero />

      <div className="mx-auto w-page px-5">
        <h2 className="font-baloo text-2xl font-extrabold lg:text-3xl">
          Nossos cafés
        </h2>
        <div className="grid grid-cols-1 justify-center gap-8 py-12 min-[584px]:grid-cols-2 min-[872px]:grid-cols-3 min-[1160px]:grid-cols-4">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
