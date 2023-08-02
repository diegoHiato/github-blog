import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>
    </Container>
  )
}
