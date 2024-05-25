import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/homePage/Home'
import Cart from './pages/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
