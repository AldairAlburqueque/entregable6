import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../assets/components/ProductsPage/ProductInfo'
import SimilarProducts from '../assets/components/ProductsPage/SimilarProducts'
import SliderImg from './SliderImg'
import './styles/productPage.css'

const ProductPage = () => {

  const { id } = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(url)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err))
  }, [id])
  
  return (
    <div>
      <div className='product_page-header'>
        <SliderImg product={product}/>
        <ProductInfo
          product={product}
        />
      </div>
      
      <SimilarProducts 
        category={product?.category}
        productId={product?.id}
      />
    </div>
  )
}

export default ProductPage