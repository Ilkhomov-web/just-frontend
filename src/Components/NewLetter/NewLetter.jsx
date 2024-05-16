import React from 'react'
import './NewLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p className='p'>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
