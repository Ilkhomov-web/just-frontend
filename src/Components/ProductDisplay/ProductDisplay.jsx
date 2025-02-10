import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dullIcon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Contex/ShopContext';
import BasicModal from '../Modal/Modal';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCard } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCard = () => {
    if (selectedSize) {
      addToCard(product.id, selectedSize);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
            {product.old_price} so'm
          </div>
          <div className="product-new-price">
            {product.new_price} so'm
          </div>
        </div>
        <div className="displayProduct-description">
          {product.description}
        </div>
        <div className="productDisplay-right-size">
          <h1>O'lchamni Tanlang</h1>
          <div className="productDisplay-right-sizes">
            {product.size.map((size, index) => (
              <button
                key={index}
                className={`selectSize ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCard}>Savatga qo'shing</button>
        <BasicModal 
          open={modalOpen} 
          handleClose={handleCloseModal} 
          title="Siz O'lcham Tanlamadingiz !!!" 
          description="Iltimos O'lcham Tanlang " 
        />
        <p className='productDisplay-right-category'><span>Turkum: </span>{product.category}</p>
        <p className='productDisplay-right-category'><span>Teglar: </span>Zamonaviy, eng yangi</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
