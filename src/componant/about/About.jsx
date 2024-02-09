import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Title from '../title/Title'


export default function About() {
  return (
    <>
      <div className='text-white d-flex justify-content-center align-items-center flex-column vh-100' style={{backgroundColor: '#1abc9c', minHeight:'calc(-112px + 100vh)'}}>
      <Title title='about component' color='white'></Title>

        <div className='container text-start'>
          <div className='row px-5'>
            <div className='col-md-6 ps-md-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              
              </div>
            <div className='col-md-6 pe-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
