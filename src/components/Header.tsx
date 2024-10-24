import Logo from '@/assets/logo.svg'
import { useCart } from '@/cart'
import { ButtonCart } from '@/components/ButtonCart'
import { Location } from '@/components/Header/Location'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { items } = useCart()

  const itemsQuantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  )

  return (
    <div className="mx-auto flex w-page items-center justify-between gap-2 px-5 py-8">
      <Link to="/">
        <img src={Logo} alt="Logo da Coffee Delivery" />
      </Link>
      <div className="flex gap-3">
        <Location city="Maravilha" state="SC" />
        <Link
          className={items.length === 0 ? 'pointer-events-none opacity-80' : ''}
          to="/checkout"
        >
          <ButtonCart variant="header" withAmount amountCart={itemsQuantity} />
        </Link>
      </div>
    </div>
  )
}
