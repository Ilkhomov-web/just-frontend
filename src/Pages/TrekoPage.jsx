import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import '../Components/Popular/Popular.css';
// import data_product from '../../assets/data';
import Item from '../Components/Item/Item';
import LoadSkleton from '../Components/LoadScleton/LoadSkleton';
import {BACKEND_API} from '../config'


const TrekoPage = () => {
  const [loading, setLoading] = useState(false);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(()=>{
    setLoading(true);
    fetch(`${BACKEND_API}/products/treko`)
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
    .then(()=>setLoading(false));
    
  },[])
  return (
    <>
      {loading ? (<LoadSkleton />) : (<div className='popular'>  
      <h1>Trekolar</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>)}
    </>
  )
}



export default TrekoPage;
