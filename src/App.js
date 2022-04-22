import React, { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'
import './index.css'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
