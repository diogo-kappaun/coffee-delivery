import { NewItemProps } from '@/pages/Home/components/Card'
import { create } from 'zustand'

interface CartProps {
  items: NewItemProps[]
  addToCart: (newItem: NewItemProps) => void
  removeToCart: (itemID: string) => void
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
}))
