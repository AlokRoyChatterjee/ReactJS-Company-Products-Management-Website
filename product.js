import React from 'react'
import { useGlobalContext } from './context'
const product = ({ id, img, title, price, amount }) => {
  const { takeawayproducts, increaseproducts, decreaseproducts} = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 >${price}</h4>
        <button onClick={() => takeawayproducts(id)}>
          take away product
        </button>
      </div>
      <div>
      <p>{amount}</p>
       
      </div>
    </article>
  )
}

export default product
