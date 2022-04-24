import React, { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import './index.css'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>...Loading</h1>
      </div>
    )
  }
  return (
    <>
      {modalIsOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
