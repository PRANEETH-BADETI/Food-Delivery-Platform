import { NavLink } from 'react-router-dom'
import { FiMapPin, FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="mobile-menu" type="button" aria-label="Open navigation">
          <FiMenu />
        </button>
        <div>
          <NavLink to="/" className="brand-mark">
            Tomato.
          </NavLink>
          <p className="brand-subtext">Restaurant portal</p>
        </div>
        <div className="brand-location">
          <FiMapPin />
          <div>
            <span>Operating city</span>
            <strong>Bengaluru HQ</strong>
          </div>
        </div>
      </div>

      <nav className="navbar-menu">
        <NavLink to="/">Get started</NavLink>
        <NavLink to="/register">Onboarding</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <a href="#support">Support</a>
      </nav>

      <div className="navbar-right">
        <button className="icon-button" type="button" aria-label="Search">
          <FiSearch />
        </button>
        <button className="icon-button icon-button--bag" type="button" aria-label="Orders">
          <FiShoppingBag />
          <span />
        </button>
        <NavLink to="/dashboard" className="outline-button">
          Preview dashboard
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
