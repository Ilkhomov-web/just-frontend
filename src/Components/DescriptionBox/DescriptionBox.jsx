import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = ({product}) => {
  return (
    <div className='descriptionBox'>
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-nav-box">Tavsif</div>
        <div className="DescriptionBox-nav-box fade">Sharhlar (122)</div>
      </div>
      <div className="DescriptionBox-description">
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default DescriptionBox
