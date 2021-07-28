import React from 'react'
import { useGlobalContext } from './context'
const product = ({ id, img, title, price, amount }) => {
  const { removeproducts, increaseproducts, decreaseproducts} = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
       
        <button className='remove-btn' onClick={() => removeproduct(id)}>
          Take away Item
        </button>
      </div>
      <div>
      <p className='amount'>{amount}</p>
       
      </div>
    </article>
  )
}

export default product
