import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-nav-box">Description</div>
        <div className="DescriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="DescriptionBox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam deserunt quibusdam aliquid, error modi non consequatur autem, dolorem illo eveniet hic explicabo voluptates debitis.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
