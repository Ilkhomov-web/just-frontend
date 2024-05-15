import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import card_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Contex/ShopContext';
import navDropdownIcon from '../../assets/newDropDown.webp'

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCardItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open")
    
  }

  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Just Shop</p>
      </div>
      <img className='nav-dropdown' onClick={dropDown_toggle} src={navDropdownIcon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-card">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/card">
          <img src={card_icon} alt="" />
        </Link>
        <div className="nav-card-count">{getTotalCardItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
