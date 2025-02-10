import React, { useState, useEffect } from 'react'
import './RelatedProducts.css'
// import data_product from '../../assets/data'
import Item from '../Item/Item'
import LoadSkleton from '../LoadScleton/LoadSkleton'
import {BACKEND_API} from '../../config'

const RelatedProducts = () => {
  const [loading, setLoading] = useState(false)
  const [all_product, setAll_prooduct] = useState([])

  useEffect(()=>{
    setLoading(true);
    fetch(`${BACKEND_API}/products/`)
    .then((response)=>response.json())
    .then((data)=>setAll_prooduct(data))
    .then(()=>setLoading(false));
    
  },[])

  return (
    <div className='relatedProducts'>
      <h1>Tegishli mahsulotlar</h1>
      <hr />
      {loading ? (<LoadSkleton />) : (<div className="relatedProducts-item">
        {all_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>)}
    </div>
  )
}

export default RelatedProducts
