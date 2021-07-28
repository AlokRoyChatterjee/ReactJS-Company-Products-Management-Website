import React from 'react'
import product from './product'
import { useGlobalContext } from './context'

const Productcomponent = () => {
  const { products, total} = useGlobalContext()
  if (products.length === 0) {
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
      <header>
        <h2>Products</h2>
      </header>
      <div>
        {products.map((product) => {
          return <product key={product.id} {...product} />
        })}
      </div>
        <div>
          <h4>
            Overall amount <span>${total}</span>
          </h4>
        </div>
  )
}

export default Productcomponent
