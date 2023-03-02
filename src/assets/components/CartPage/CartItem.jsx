import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../../store/slices/cart.slice'
import config from '../../../utils/getConfig'
import './style/cartItem.css'

export const CartItem = ({prodInfo}) => {

  const dispatch = useDispatch()

  const handleDelete = () =>{
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)
    .then(res=>{
      console.log(res.data)
      dispatch(getCartThunk())
    })
    .catch(err=>console.log(err.response))
  }

  return (
        <article className='cart'>
          <header className='cart_header'>
            <img className='cart_img' src={prodInfo.product.images[0].url} alt="" />
          </header>
          <div>
          <h4>{prodInfo.product.brand}</h4>
          <h4 className='cart_title'>{prodInfo.product.title}</h4>
          <ul className='cart_list'>
            <li>
              <span>Unit Price </span>
              <span>{prodInfo.product.price}</span>
            </li>
            <li>
              <span>Quantity </span>
              <span>{prodInfo.quantity}</span>
            </li>
          </ul>
        </div>
      <button onClick={handleDelete}>
        <i className='bx bx-trash'></i>
      </button>
    </article>
    
  )
}

export default CartItem