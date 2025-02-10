import React from 'react'
import './Offers.css';
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Siz uchun Takliflar</h1>
        <p>Faqat eng ko'p sotiladigan Ayollar mahsulotlari</p>
        <button onClick={()=>{window.location.href = 'womens'}}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
