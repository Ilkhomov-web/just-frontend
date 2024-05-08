import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollactions from '../Components/NewCollactions/NewCollactions'
import NewsLetter from '../Components/NewLetter/NewLetter'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollactions />
      <NewsLetter />
    </div>
  )
}

export default Shop
