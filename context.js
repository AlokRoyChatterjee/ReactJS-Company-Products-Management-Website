import React, { useState, useContext, useReducer, useEffect } from 'react'
import product from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  products: product,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const increaseproducts = (id) => {
    dispatch({ type: 'increaseproducts', productid: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const shoppingproduct = await response.json()
    dispatch({ type: 'showproducts', productid: shoppingproduct })
  }
   useEffect(() => {
    fetchData()
  }, [])
  const decreaseproducts = (id) => {
    dispatch({ type: 'decreaseproducts', productid: id })
  }
  const takeawayproduccts = (id) => {
    dispatch({ type: 'takeawayproducts', productid: id })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        takeawayproducts,
        increaseproducts,
        decreaseproducts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
