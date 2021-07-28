const reducer = (state, action) => {
  if (action.type === 'takeawayproduct') {
    return {
      ...state,cart: state.cart.filter((cartItem) => cartItem.id !== action.productid),
    }
  }
  if (action.type === 'increaseproducts') {
    let shoppingproducts = state.cart.map((product) => {
      if (product.id === action.productid) {
        return { ...product, amount: product.amount + 1 }
      }
      return product
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'decreaseproducts') {
    let shoppingproducts = state.cart
      .map((product) => {
        if (product.id === action.productid) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return product
      }).filter((product) => product.amount !== 0)
    return { ...state, cart: shoppingproducts }
  }
  if (action.type === 'overallproductsamount') {
    let { total, amount } = state.cart.reduce(
      (shoppingamount, product) => {
        const { price, amount } = product
        const itemTotal = price * amount
        shoppingamount.total += itemTotal
        shoppingamount.amount += amount
        return shoppingamount
      },
      {
        total: 0,
        amount: 0,
      }
    )
    return { ...state, total, amount }
  }
}

export default reducer
