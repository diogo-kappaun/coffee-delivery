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
  const data: DataProps[] = [
    {
      id: '1',
      url: 'image',
      tags: ['Tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: '2',
      url: 'image-1',
      tags: ['Tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: '3',
      url: 'image-2',
      tags: ['Tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: '4',
      url: 'image-3',
      tags: ['Tradicional', 'Gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: '5',
      url: 'image-4',
      tags: ['Tradicional', 'Com Leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: '6',
      url: 'image-5',
      tags: ['Tradicional', 'Com Leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: '7',
      url: 'image-6',
      tags: ['Tradicional', 'Com Leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: '8',
      url: 'image-7',
      tags: ['Tradicional', 'Com Leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: '9',
      url: 'image-8',
      tags: ['Tradicional', 'Com Leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: '10',
      url: 'image-9',
      tags: ['Especial', 'Com Leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: '11',
      url: 'image-10',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: '12',
      url: 'image-11',
      tags: ['Especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: '13',
      url: 'image-12',
      tags: ['Especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: '14',
      url: 'image-13',
      tags: ['Especial', 'Alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ]

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
