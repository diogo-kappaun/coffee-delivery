import Logo from '@/assets/logo.svg'
import { ButtonCart } from '@/components/ButtonCart'
import { Location } from '@/components/Header/Location'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="mx-auto flex w-page items-center justify-between gap-2 px-5 py-8">
      <Link to="/">
        <img src={Logo} alt="Logo da Coffee Delivery" />
      </Link>
      <div className="flex gap-3">
        <Location city="Maravilha" state="SC" />
        <Link to="/checkout">
          <ButtonCart variant="header" withAmount amountCart={3} />
        </Link>
      </div>
    </div>
  )
}
