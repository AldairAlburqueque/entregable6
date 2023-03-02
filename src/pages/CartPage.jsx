import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../assets/components/CartPage/CartItem'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utils/getConfig'
import './styles/cartPage.css'

const CartPage = () => {

  const {cart} = useSelector(state=>state)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const result = cart?.reduce((acc, cv)=>acc + cv.quantity * Number(cv.product.price),0)
    setTotalPrice(result)
  }, [cart])

  const dispatch = useDispatch()

  const handlePurchase = () =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {}, config)
    .then(res=>{
      console.log(res.data)
      dispatch(getCartThunk())
    })
    .catch(err=>console.log(err.response))
  }
  

  return (
    <div className='card_cart'>
      <div className='cart_body'>
        {
          cart?.map(prodInfo=>(
            <CartItem
              key={prodInfo.id}
              prodInfo={prodInfo}
            />
          ))
        }
      </div>
      <footer className='cart_footer'>
        <h2 className='footer_total'><span className=''>Total: </span><span className='price'>{totalPrice}</span></h2>
        <button className='footer_btn' onClick={handlePurchase}>Buy this cart</button>
      </footer>
    </div>
  )
}

export default CartPage