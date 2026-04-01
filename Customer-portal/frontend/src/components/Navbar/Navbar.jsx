import React, { useState, useContext } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import LocationDrawer from '../LocationDrawer/LocationDrawer'; // Added this import
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  
  const [isLocationDrawerOpen, setIsLocationDrawerOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Select Location"); // Added location state
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
    <div className='navbar'>
      
      {/* Wrapped Logo and Location in a left container */}
      <div className="navbar-left">
        <Link to='/'><img src={assets.logo} alt="" className='logo'></img></Link>
        
        {/* Location Selector Button */}
        <div 
          className="navbar-location" 
          onClick={() => setIsLocationDrawerOpen(true)}
        >
          <div className="location-icon">📍</div>
          <div className="location-text">
            <span className="deliver-to">Deliver to</span>
            <span className="current-loc">
              {currentLocation} <span className="arrow">▼</span>
            </span>
          </div>
        </div>
      </div>

      <ul className='navbar-menu'>
        <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
        <Link to='/restaurants'><li onClick={() => setMenu("Restuarants")} className={menu === "Restuarants" ? "active" : ""}>Restuarants</li></Link>
        <Link to='/mobile-app'><li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li></Link>
        <Link to='/contactus'><li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li></Link>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""></img>
        <div className='navbar-search-icon'>
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token? <button onClick={() => setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
            </ul>
          </div>}
        
      </div>

      {/* The Location Drawer Component */}
      <LocationDrawer 
        isOpen={isLocationDrawerOpen} 
        onClose={() => setIsLocationDrawerOpen(false)}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    </div>
  )
}

export default Navbar;