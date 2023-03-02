import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../assets/components/Home/CardProducts';
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice';
import './styles/home.css'

const Home = () => {

    const {products} = useSelector(state=>state)

    const [category, setCategory] = useState()

    const [fromTo, setFromTo] = useState({
      from: 0,
      to: Infinity
    })

    const dispatch = useDispatch()

    const handleSubmit = e =>{
      e.preventDefault()
      const input =e.target.inputSearch.value.trim().toLowerCase()
      dispatch(getProductsByName(input, false))
    }

    useEffect(() => {
      const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
      axios.get(url)
      .then(res=>setCategory(res.data))
      .catch(err=>console.log(err.response))
    }, [])
    
    const handleClickCategory = (id) =>{
      dispatch(getProductsByName(id, true))
    }
    
    const handleSubmitPrice = e =>{
      e.preventDefault()
      const from = Number(e.target.from.value.trim())
      const to = Number(e.target.to.value.trim())
      if(from && to){
        setFromTo({from, to})
      }else if(from && !to){
        setFromTo({from, to:Infinity})
      }else if(!from && to){
        setFromTo({from: 0, to})
      }else{
        setFromTo({from:0, to: Infinity})
      }
    }

    const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to

  return (
    <div className='content'>
      <div className='search'>
        <form className='search_form' onSubmit={handleSubmit}>
          <input className='search_input' id='inputSearch' type="text" />
          <button >
            <i  className='bx bx-search-alt-2'></i>
        </button>
      </form>
      <div className='header'>
        <article className='category_price'>
        <header className='category_header'>
          <h3>Price</h3>
          <i className='bx bx-chevron-down option'></i>
        </header>
        <form className='form_price' onSubmit={handleSubmitPrice}>
          <div className='price_list'>
            <label htmlFor="from">From</label>
            <input className='list-btn' type="number" id='from' />
          </div>
          <div className='price_list'>
            <label htmlFor="to">To</label>
            <input className='list-btn' type="number" id='to' />
          </div>
          <button className='filter_price-btn'>Filter Price</button>
        </form>
      </article>
      <article className='category_search'>
        <header className='category_header'>
          <h3>Category</h3>
          <i className='bx bx-chevron-down option'></i>
        </header>
        <ul className='submenu'>
          <li onClick={()=>dispatch(getAllProductsThunk())} className='category_list'>All products</li>
          {
            category?.map(category=>(
              <li className='category_list' key={category.id} onClick={()=>handleClickCategory(category.id)}>{category.name}</li>
            ))
          }
        </ul>
      </article>
      </div>
      
      </div>
      
      <div className='card_home'>
      
        {
          products?.length === 0 || products === null ?
          <h1>❌❌this products is doesn't exist❌❌</h1>
          :
            products?.filter(filterProduct).map(product=>(
              <CardProducts 
                key={product.id}
                product={product}
              />
            ))
        }
    </div>
  
    </div>
    
  )
}

export default Home