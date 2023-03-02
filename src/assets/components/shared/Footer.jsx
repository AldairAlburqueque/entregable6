import React from 'react'
import './style/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Academlo 2023</h2>
      <div className='card_footer'>
          <div>
            <a href="https://www.instagram.com/ald4ir21/" target='_blank'><i class='bx bxl-instagram'></i></a>
          </div>
          <div>
            <a href=""><i class='bx bxl-github'></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aldair-alburqueque-20046725b/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
          </div>
      </div>
    </div>
  )
}

export default Footer