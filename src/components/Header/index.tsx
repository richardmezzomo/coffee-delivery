import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Aside, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Florianópolis, SC</span>
        </div>

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
