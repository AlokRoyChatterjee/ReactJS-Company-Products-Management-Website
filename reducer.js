const reducer = (state, action) => {

 if (action.type === 'increaseproducts') {
    let shoppingproducts = state.products.map((product) => {
      if (product.id === action.productid) {
        return { ...product, amount: product.amount + 1 }
      }
      return product
    })
    return { ...state, products: shoppingproducts }
  }
   if (action.type === 'takeawayproducts') {
    return {
      ...state,products: state.products.filter((product) => product.id !== action.productid),
    }
  }
  if (action.type === 'decreaseproducts') {
    let shoppingproducts = state.products
      .map((product) => {
        if (product.id === action.productid) {
          return { ...shoppingproducts, amount: shoppingproducts.amount - 1 }
        }
        return product
      }).filter((product) => product.amount !== 0)
    return { ...state, products: shoppingproducts }
  }
  if (action.type === 'overallproductsamount') {
    let { total, amount } = state.products.reduce(
      (shoppingamount, product) => {
        const { price, amount } = product
        const overallamount = price * amount
        shoppingamount.amount += amount
        shoppingamount.total += overallamount
        return shoppingamount
      )}
    )
    return { ...state, total, amount }
  }
}

export default reducer
