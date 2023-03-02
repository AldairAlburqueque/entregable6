import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../assets/components/PurchsesPage/PurchaseCard'
import config from '../utils/getConfig'

const PurchasesPage = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.get(url, config)
    .then(res=>setPurchases(res.data))
    .catch(err=>console.log(err.response))
  }, [])
  

  return (
    <div>
      <div>
        {
          purchases?.map(purchase=>(
            <PurchaseCard 
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PurchasesPage