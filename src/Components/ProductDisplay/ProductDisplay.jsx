import React from 'react'
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png'
import star_dullIcon from '../../assets/star_dull_icon.png'

const ProductDisplay = (props) => {

  const {product} = props;

  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="product-old-price">
            ${product.old_price}
          </div>
          <div className="product-new-price">
            ${product.new_price}
          </div>
        </div>
          <div className="displayProduct-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quos obcaecati nesciunt fugiat beatae aspernatur inventore maxime incidunt eos illo.
          </div>
          <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>Xl</div>
              <div>XXl</div>
            </div>
          </div>
          <button>Add to Card</button>
          <p className='productDisplay-right-category'><span>Category: </span>Women , T-Shirt, Crop, Top</p>
          <p className='productDisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
      </div>
  )
}

export default ProductDisplay
