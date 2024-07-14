import React from 'react'

import { cartRemoveItem, decreaseItem,increaseItem } from '../store/slices/cartSlices'
import { useDispatch } from 'react-redux'


export default function CartItem({ productId,title, rating, price, imageUrl, quantity }) {
  const dispatch= useDispatch()
  
  
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
          <button onClick={()=>dispatch(cartRemoveItem({productId}))}>Remove</button>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=>dispatch(decreaseItem({productId}))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(increaseItem({productId}))}>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}