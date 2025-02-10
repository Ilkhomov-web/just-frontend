import React from 'react'
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import {Link} from '@mui/material'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Faqat yangi kelganlar</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Yangi</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>To'plamlar </p>
          <p>Hamma uchun</p>
        </div>
        <div className="hero-lates-btn">
          <div onClick={()=>{window.location.href = '/newcollactions'}}>Eng So'ngi To'plam</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero

