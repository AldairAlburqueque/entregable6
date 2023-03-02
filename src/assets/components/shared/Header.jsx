import React from 'react'
import { Link } from 'react-router-dom'
import './style/header.css'

const Header = () => {
  return (
    <header className='navbar'>
      <h1>
        <Link className='header_title' to='/'>e-commerce</Link>
      </h1>
      <nav className='header_nav'>
        <ul className='header_ul'>
          <li className='header_li'>
            <Link to='/user/login'><i className='bx bx-user'></i></Link>
            </li>
          <li className='header_li'>
            <Link to='/purchases'><i className='bx bx-box'></i></Link>
          </li>
          <li className='header_li'>
            <Link to='/cart'><i className='bx bx-cart'></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header