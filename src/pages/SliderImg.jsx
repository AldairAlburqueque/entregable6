import React, { useState } from 'react'
import './styles/sliderImg.css'

const SliderImg = ({product}) => {

  const [imgSelector, setImgSelector] = useState(0)

  const styleMovement = {
    transform: `translateX(calc(-${imgSelector} /3 * 100%))`,
    width:`$(product?.images.length * 100)%`
  }

  const handlePrevious = () =>{ 
    if(imgSelector - 1 < 0){ 
      setImgSelector(product.images.length - 1)
    }else{
      setImgSelector(imgSelector - 1)
    }
  }

  const handleNext = () =>{
    if(imgSelector + 1 > product.images.length - 1){
      setImgSelector(0)
    }else{
      setImgSelector(imgSelector + 1 )
    }
  }

  return (
    <div className='carrosel'>
      <div className='slider'>
      <button onClick={handlePrevious} className='slider_btn slider_btn-left'><i className='bx bx-chevron-left'></i></button>
      <div style={styleMovement} className='slider_movement'>
        {
          product?.images.map(image=>(
            <div className='slider_container-img' key={image.id}>
              <img className='slider_img' src={image.url} alt="" />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider_btn slider_btn-right'><i className='bx bx-chevron-right'></i></button>
    </div>
    <div className='carrousel_header'>
      {
        product?.images.map((image, index)=>(
          <div className={`carrousel_container-img ${index === imgSelector && 'active-img'}`}
          key={image.id}
          onClick={()=> setImgSelector(index)}
          >
            <img className='carrousel_img' src={image.url} alt="" />
          </div>
        ))
      }
    </div>
    </div>
    
  )
}

export default SliderImg