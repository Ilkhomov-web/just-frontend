import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png';
import telegram_icon from '../../assets/telegramIcon.png'
import phone_icon from '../../assets/phoneIcon.png';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Just Shop</p>
      </div>
      <ul className="footer-links">
        <li>
          <Link style={{color: 'black'}} to='/about' >Company</Link>
        </li>
        <li>
          <Link style={{color: 'black'}} to='/about' >Product</Link>
        </li>
        <li>
          <Link style={{color: 'black'}} to='/about' >Offices</Link>
        </li>
        <li>
          <Link style={{color: 'black'}} to='/about' >About</Link>
        </li>
        <li>
          <Link style={{color: 'black'}} to='/about' >Contact</Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://www.instagram.com/justshop_jizzax/" target='_blank'>
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://t.me/Just_shopstore" target='_blank'>
            <img src={telegram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="tel:+998903112211">
            <img src={phone_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
