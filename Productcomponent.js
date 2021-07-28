import React from 'react'
import product from './product'
import { useGlobalContext } from './context'

const Productcomponent = () => {
  const { cart, total} = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section>
        <header>
          <h2>Products</h2>
          <h4>Does not have any items in this shopping cart</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>Products</h2>
      </header>
      <div>
        {cart.map((product) => {
          return <product key={product.id} {...product} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Overall amount <span>${total}</span>
          </h4>
        </div>
      </footer>
    </section>
  )
}

export default Productcomponent
