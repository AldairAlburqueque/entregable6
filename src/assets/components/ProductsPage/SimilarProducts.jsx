import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CardProducts from '../Home/CardProducts';
import './styles/SimilarProduct.css'


const SimilarProducts = ({ category, productId  }) => {

  const [filterProducts, setFilterProducts] = useState ()
  
  const { products } = useSelector(state => state)

  useEffect(()=>{
    if(products && category){
      setFilterProducts(products?.filter(product => product.category.id === category.id))
    }
  },[category, products])

  return (
    <div className='card_similar'>
      <h2 className='similar_title'>Discover similar items</h2>
      <div className='similar_list'>
        {
          filterProducts?.map(prod=>{
            if(prod.id !== productId){
              return <CardProducts 
              key={prod.id}
              product={prod}
            />
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts