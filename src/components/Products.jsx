import React,{useState} from 'react'
import {data} from '../data.js'
import { useNavigate } from 'react-router-dom'

export const Products=()=> {
    const [items,setItems]=useState(data)
    const navigate=useNavigate()

  return (
    <div>
        <h1>Products</h1>
        <ul className='list-group'>
            {items.map(obj=>
            <li className='list-group-item btn btn-primary'
             key={obj.id}
             onClick={()=>navigate('/products/'+obj.id)}
             >
            {obj.name}</li>
            )}
        </ul>
        
    </div>
  )
}