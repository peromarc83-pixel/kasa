import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.scss'


function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/LOGO.png" alt="Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Accueil
        </NavLink>
        <NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : ''}>
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
