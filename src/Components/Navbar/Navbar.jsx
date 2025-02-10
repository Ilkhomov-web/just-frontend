import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import card_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Contex/ShopContext';
import navDropdownIcon from '../../assets/newDropDown.webp';
import AccountPopover from '../AccountPopover/AccaountPopover';



const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCardItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open")
  }

  const logOut = () =>{
    localStorage.removeItem('auth-token'); 
    localStorage.removeItem('lastSpin');
    localStorage.removeItem('winner');
    window.location.replace('/');
  }


  return (
    <div className='zindexNavbar'>
      <div className='navbar'> 
      <Link to='/'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Just Shop</p>
        </div>
      </Link>
      <img className='nav-dropdown' onClick={dropDown_toggle} src={navDropdownIcon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'black'}} to="/">Do'kon</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'black'}} to="/mens">Erkaklar</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'black'}} to="/womens">Ayollar</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none', color: 'black'}} to="/kids">Bolalar</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-card">
        {localStorage.getItem('auth-token') 
          ? <button onClick={()=>{logOut()}} className='logout'>Chiqish</button> 
          : <Link to="/login">
            <button className='login'>Kirish</button>
            </Link>}
        
        <Link to="/card">
          <img src={card_icon} alt="" />
        </Link>
        <div className="nav-card-count">{getTotalCardItems()}</div>
        {localStorage.getItem('auth-token') ? (<AccountPopover />) : (<></>)}
      </div>
    </div>
    </div>
  )
}

export default Navbar
