import React, { useContext } from 'react'
import { ShopContext } from '../../Contex/ShopContext'
import './CardItems.css'
import remove_icon from '../../assets/cart_cross_icon.png'

const CardItems = () => {
  const {getTotalCardAmount, all_product, cardItems, removeFromCard} = useContext(ShopContext)
  return (
    <div className='cardItems'>
      <div className="cardItems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=> {
        if(cardItems[e.id] > 0){
          return <div key={e.id}>
          <div className="cardItems-format cardItems-format-main">
            <img src={e.image} alt="" className="cardicon-product-icon" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cardItems-quantity'>{cardItems[e.id]}</button>
            <p>${e.new_price * cardItems[e.id]}</p>
            <img className='cardItems-remove-icon' src={remove_icon} onClick={()=>{removeFromCard(e.id)}} alt="" />
          </div>
          <hr />
        </div>
        }
        return null;
      })}
      <div className="cardItems-down">
        <div className="cardItems-total">
          <h1>Card Total</h1>
          <div>
            <div className="cardItems-total-item">
              <p>Subtatal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="cardItems-total-item">
              <p>Shopping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cardItems-total-item">
              <h1>Total</h1>
              <h1>${getTotalCardAmount()}</h1>
            </div>
          </div>
          <button>Proceed To CheckOut</button>
        </div>
        <div className="cardItems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cardItems-promoBox">
            <input type="text" placeholder='Promo' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItems
