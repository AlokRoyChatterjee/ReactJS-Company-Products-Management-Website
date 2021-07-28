import React from 'react'
import { useGlobalContext } from './context'
import Productcomponent from './Productcomponent'

function App() {
  return (
    <main>
      <div>
        <h1>Products Store</h1>
      </div>
      <Productcomponent />
    </main>
  )
}

export default App
