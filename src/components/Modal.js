import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/Modal/modalSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
