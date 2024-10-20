import Logo from '@/assets/logo.svg'
import { Location } from '@/components/Location'
import { Link } from 'react-router-dom'
import { ButtonCart } from './ButtonCart'

export const Header = () => {
  return (
    <div className="w-page mx-auto flex justify-between p-8">
      <Link to="/">
        <img src={Logo} alt="Logo da Coffee Delivery" />
      </Link>
      <div className="flex gap-3">
        <Location city="Maravilha" state="SC" />
        <ButtonCart amountCart={3} />
      </div>
    </div>
  )
}
