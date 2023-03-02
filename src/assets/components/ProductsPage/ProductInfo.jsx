import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../../store/slices/cart.slice'
import config from '../../../utils/getConfig'
import './styles/ProductInfo.css'

const ProductInfo = ({product}) => {

  const [counter, setCounter] = useState(1)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleMinus = () =>{
    if(counter - 1 >= 1){
      setCounter(counter - 1)
    } 
  }

  const dispatch = useDispatch()

  const handleAddCart = () =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    const data ={
      quantity: counter,
      productId: product.id
    }

    axios.post(url, data, config)
    .then(res=>{
      console.log(res.data)
      dispatch(getCartThunk())
      setCounter(1)
    })
    .catch(err=>console.log(err.response))
  }

  return (
    <article className='product_info'>
      <div className='info_list'>
        <h3 className='brand'>{product?.brand}</h3>
        <h2 className='title'>{product?.title}</h2>
        <p className='description'>{product?.description}</p>
        <footer className='info_footer'>
            <section className='info_section'>
              <div className='section_list'>
                <h4 className='info_price'>Price</h4>
                <span className='list_price'>{product?.price}</span>
              </div>
              <div className='section_list'>
                <h4 className='info_quantity'>Quantity</h4>
                <div className='list_quantity'>
                  <div className='quantity_btn' onClick={handleMinus}>-</div>
                  <div className='quantity_btn'>{counter}</div>
                  <div className='quantity_btn' onClick={handleAdd}>+</div>
              </div>
              </div>
            </section>
            <button onClick={handleAddCart} className='info_add-btn'>Add to card <i className='bx bx-cart'></i></button>
        </footer>
      </div>
        
    </article>
  )
}

export default ProductInfo