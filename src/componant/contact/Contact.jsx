import React, { useState } from 'react'
import style from './Contact.module.css'
import Title from '../title/Title'

export default function Contact() {


  const [userActive, setUserActive] = useState(false)
  const [ageActive, setAgeActive] = useState(false)
  const [mailActive, setMailActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  
  let x=false
  function userTop (e){
    if(e.target.value.length )
    { 
    setUserActive(true)
    console.log('ut')
    }
    else{
    setUserActive(false)
    console.log('uf')
    }
  }
  function ageTop (e){
    if(e.target.value.length )
    { 
    setAgeActive(true)
    console.log('ut')
    }
    else{
    setAgeActive(false)
    console.log('uf')
    }
  }
  function mailTop (e){
    if(e.target.value.length )
    { 
    setMailActive(true)
    console.log('ut')
    }
    else{
    setMailActive(false)
    console.log('uf')
    }
  }
  function passTop (e){
    if(e.target.value.length )
    { 
    setPassActive(true)
    console.log('ut')
    }
    else{
    setPassActive(false)
    console.log('uf')
    }
  }


  return (
    <>
      <div className='mb-4 pt-3' style={{marginTop: '92px', minHeight:'calc(-112px + 100vh)'}}>
        <Title title='Contact section' color='rgb(44, 62, 80)'></Title>
        <form className='w-50 p-3 mx-auto mt-5 '>
          <label htmlFor="userName" className={userActive?`position-relative top-0`:`position-relative ${style.__top}`}>User Name:</label>  
          <input type="text" id='userName' placeholder='User Name' className='form-control border-0 border-bottom py-3 position-relative' onChange={(e)=>{userTop(e)}} />
          <label htmlFor="userAge" className={ageActive?`position-relative top-0`:`position-relative ${style.__top}`}>User Age:</label>  
          <input type="text" id='userAge' placeholder='User Age' className='form-control border-0 border-bottom py-3 position-relative' onChange={(e)=>{ageTop(e)}} />
          <label htmlFor="userMail" className={mailActive?`position-relative top-0`:`position-relative ${style.__top}`}>User Email:</label>  
          <input type="text" id='userMail' placeholder='User Email' className='form-control border-0 border-bottom py-3 position-relative' onChange={(e)=>{mailTop(e)}} />
          <label htmlFor="userPass" className={passActive?`position-relative top-0`:`position-relative ${style.__top}`}>User Password:</label>  
          <input type="text" id='userPass' placeholder='User Password' className='form-control border-0 border-bottom py-3 position-relative' onChange={(e)=>{passTop(e)}} />
      
          <button className='btn mt-4 text-white bg-info' type='button'>Send Message</button>
        </form>
      
      </div>
    </>
  )
}
