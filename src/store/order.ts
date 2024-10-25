import { CartProductsProps } from '@/pages/Checkout'
import { create } from 'zustand'

interface DeliveryProps {
  zipCode: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
  method: 'credit' | 'debit' | 'money'
}

interface NewOrderProps {
  delivery: DeliveryProps
  items: CartProductsProps[]
}

interface OrderProps {
  order: NewOrderProps | null
  create: (newOrder: NewOrderProps) => void
}

export const useOrder = create<OrderProps>((set) => ({
  order: null,
  create: (newOrder) =>
    set(() => ({
      order: newOrder,
    })),
}))
