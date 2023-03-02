import React from 'react'
import './styles/purchase.css'

const PurchaseCard = ({purchase}) => {
  console.log(purchase);
  return (
    <div className='card_purchase'>
      <article className='purchase'>
      <header className='purchase_header'>
        <img  className='purchase_img' src={purchase.product.images[0].url} alt="" />
      </header>
      <p className='purchase_title'>{purchase.product.title}</p>
      <div className='purchase_created'>{purchase.createdAt}</div>
      <div className='purchase_quantity'>{purchase.quantity}</div>
      <div className='purchase_price'>${purchase.product.price}</div>
    </article>
    </div>
    
  )
}

export default PurchaseCard