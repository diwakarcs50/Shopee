import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, fetchProductsError, setLoading } from '../store/slices/productsSlices'
import { productlist } from '../store/slices/productslist'
import { fetchCartItems, handleCartError, loadCartItems } from '../store/slices/cartSlices'
import { fetchData } from '../middlewares/api'


function Header() {

  const dispatch=useDispatch()
  useEffect(()=>{

    dispatch({
      type:'api/makeCall',
      payload:{
        url:'products',
        onSuccess:addProducts.type,
        onStart:setLoading.type,
        onError:fetchProductsError.type
      }
  })

  dispatch(fetchData({
    
      url:'carts/5',
      onSuccess:loadCartItems.type,
      onStart:fetchCartItems.type,
      onError:handleCartError.type
    
  }))
    // dispatch(setLoading())
    // fetch('https://fakestoreapi.com/products')
    // .then((res)=>res.json())
    // .then((data)=>dispatch(addProducts(data)))
    // .catch(()=>{
    //   dispatch(fetchProductsError())
    // })
    
    // dispatch(fetchCartItems())
    // fetch('https://fakestoreapi.com/carts/5')
    // .then((res)=>res.json())
    // .then((data)=>{
    //   dispatch(loadCartItems(data))
    // }).catch((err)=>{
    //   dispatch(handleCartError(err))
    // })

  },[])
  const cartItem=useSelector((state)=>state.cartItems.list)

  const cartLength=cartItem.reduce((acc,item)=>acc+item.quantity,0)
    return (
        <header>
            <div className='header-contents'>
                <h1>
                  <Link to='/'>Shopee</Link>
                </h1>
                <Link className="cart-icon" to="/cart">
                  <img src={CartIcon} alt="cart-icon" />
                  <div className="cart-items-count">{cartLength}</div>
                </Link>

            </div>
        </header>
    )
}

export default Header
