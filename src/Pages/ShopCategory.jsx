import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Contex/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import LoadSkleton from '../Components/LoadScleton/LoadSkleton'

const ShopCategory = (props) => {
  const context = useContext(ShopContext)
  const productMatching = context.all_product.filter(item => item.category === props.category).length


  return(
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Barcha</span> {productMatching} Mahsulotlar
        </p>
        <div className="shopCategory-sort">
          Saralash turi <img src={dropdown_icon} alt="" />
        </div>
      </div>
      {context.loading ? (<LoadSkleton />) : (<div className="shopCategory-products">
        {context.all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>)}
      <div className="shopcategory-loadmore">
        Ko'proq ko'ring
      </div>
    </div>
  )
}

export default ShopCategory
