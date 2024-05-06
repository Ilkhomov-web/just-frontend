import React from 'react'
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collactions</p>
          <p>for everyone</p>
        </div>
        <div className="hero-lates-btn">
          <div>Latest Collaction</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">

      </div>
    </div>
  )
}

export default Hero
