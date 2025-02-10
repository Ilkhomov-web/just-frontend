import React from 'react'
import './NewLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Elektron pochtangizga takliflarni oling</h1>
      <p className='p'>Bizning yangi xatimizga obuna bo'ling va yangilanib turing</p>
      <div>
        <input type="email" placeholder='Sizning Email yoki Id' />
        <a href="https://www.instagram.com/justshop_jizzax/">
          <button>Subscribe</button>
        </a>
      </div>
    </div>
  )
}

export default NewsLetter
