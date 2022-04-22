import React from 'react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { removeItem, increase, decrease } from '../features/cart/cartSlice.js'
import { useDispatch } from 'react-redux'

const CartItems = ({ id, price, title, img, amount }) => {
  const dispatch = useDispatch()

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id))
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increase(id))
          }}
        >
          <BiChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount <= 1) {
              dispatch(removeItem(id))
            } else dispatch(decrease(id))
          }}
        >
          <BiChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItems
