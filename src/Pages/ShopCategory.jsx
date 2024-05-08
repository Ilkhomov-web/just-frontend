import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Contex/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const context = useContext(ShopContext)

  return(
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {context.all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
