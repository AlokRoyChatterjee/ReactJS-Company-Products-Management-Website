import React from 'react'
import { useGlobalContext } from './context'
const product = ({ id, img, title, price, amount }) => {
  const { takeawayproducts, increaseproducts, decreaseproducts} = useGlobalContext()
  return (
    <div style="color:blue; background-color:aqua;text-align:center;">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 >${price}</h4>
        <button onClick={() => takeawayproducts(id)}>
          take away product
        </button>
      </div>
      <div>
        <button onClick={() => decreasproducts(id)}>
          decrease product amount
        </button>
      </div>
      <div>
        <h4>{title}</h4>
        <h4 >${price}</h4>
        <button onClick={() => increaseproducts(id)}>
          increase product amount
        </button>
      </div>
     <p>{amount}</p>
    </div>
  )
}

export default product
