import { useState, useEffect } from 'react'
import './NewCollactions.css';
// import new_collactions from '../../assets/new_collections'
import Item from '../Item/Item';
import LoadSkleton from '../LoadScleton/LoadSkleton';
import {BACKEND_API} from '../../config'


const NewCollactions = () => {

  const [loading, setLoading] = useState(false)

  const [new_collactions, setNew_collactions] = useState([])

  useEffect(()=>{
    setLoading(true)
    fetch(`${BACKEND_API}/products/newcollactions`)
    .then((response)=>response.json())
    .then((data)=> setNew_collactions(data))
    .then(()=> setLoading(false))
  }, [])

  return (
    <div className='new-collactions'>
      <h1>Yangi to'plamlar</h1>
      <hr />
      {loading ? (<LoadSkleton />) : (<div className="collactions">
        {new_collactions.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>)}
    </div>
  )
}

export default NewCollactions
