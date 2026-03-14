import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Restaurants from './pages/Restaurants/Restaurants';
import ContactUs from './pages/Contact/Contact';
import MobileApp from './pages/Mobile-app/mobile-app';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/mobile-app' element={<MobileApp />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App