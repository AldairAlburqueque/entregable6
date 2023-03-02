import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../../store/slices/cart.slice'
import config from '../../../utils/getConfig'
import './style/cardProducts.css'

const CardProducts = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick=()=>{
    navigate(`/product/${product.id}`)
  }
  const handleBtnClick = e =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    const data ={
      quantity: 1,
      productId: product.id
    }
    axios.post(url, data, config)
    .then(res=>{
      console.log(res.data) 
      dispatch(getCartThunk())
    })
    .catch(err=>console.log(err.response))
    e.stopPropagation()
  }

  return (
      <article className='card_product-art' onClick={handleClick}>
      <header className='products_header'>
        <img className='products_img' src={product.images[0].url} alt="" />
      </header>
      <section className='products_section'>
        <header className='products_head'>
          <h4 className='products_brand'>{product.brand}</h4>
          <h3 className='products_title'>{product.title}</h3>
          <div className='price_name'>Price</div>
          <div className='price'>{product.price}</div>
        </header>
        <button className='products_btn' onClick={handleBtnClick}>
        <i className='bx bx-cart bx_cart'></i>
      </button>
      </section>
      
    </article>
  )
}

export default CardProducts