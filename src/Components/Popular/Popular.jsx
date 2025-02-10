import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import './Popular.css';
import Item from '../Item/Item';
import LoadSkleton from '../LoadScleton/LoadSkleton';
import { BACKEND_API } from '../../config';

const Popular = () => {
  const [loading, setLoading] = useState(false);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(()=>{
    setLoading(true);
    fetch(`${BACKEND_API}/products/popularinwomen`)
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
    .then(()=>setLoading(false));
    
  },[])
  return (
    <>
      {loading ? (<LoadSkleton />) : (<div className='popular'>  
      <h1>Ayollar uchun</h1>
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



export default Popular
