import { NewItemProps } from '@/pages/Home/components/Card'
import { create } from 'zustand'

interface CartProps {
  items: NewItemProps[]
  addToCart: (newItem: NewItemProps) => void
  removeToCart: (itemID: string) => void
  changeQuantity: (itemID: string, quantity: number) => void
  itemIncrease: (itemID: string) => void
  itemDescrease: (itemID: string) => void
}

export const useCart = create<CartProps>((set) => ({
  items: [],
  addToCart: (newItem) =>
    set((state) => ({
      items: [...state.items, newItem],
    })),
  removeToCart: (itemID) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemID),
    })),
  changeQuantity: (itemID, quantity) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemID) {
          item.quantity += quantity
          return item
        }
        return item
      }),
    })),
  itemIncrease: (itemID) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemID) {
          item.quantity += 1
          return item
        }
        return item
      }),
    })),
  itemDescrease: (itemID) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemID) {
          item.quantity -= 1
          return item
        }
        return item
      }),
    })),
}))
