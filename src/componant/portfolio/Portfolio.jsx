import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './portfolio.module.css'
import Title from '../title/Title'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png' 
import img3 from '../../assets/port3.png' 

export default function Portfolio() {
  return (
    <>
    <div className='bg-white text-white pt-3' style={{marginTop: '92px', minHeight:'calc(-112px + 100vh)'}}>
    <Title title='portfolio component' color='rgb(44, 62, 80)'></Title>

      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img1} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img2} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img3} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img1} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img2} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img src={img3} alt="" className='w-100 rounded-3'/>
              <div className={`${style.layer__} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
              <FontAwesomeIcon icon={faPlus} className='text-white fa-6x'/>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </>
  )
}
