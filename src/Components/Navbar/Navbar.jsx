import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import card_icon from '../../assets/cart_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className="card-logo">
        <img src={logo} alt="" />
        <p>Just Shop</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-card">
        <button>Login</button>
        <img src={card_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
