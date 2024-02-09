import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './componant/navbar/Navbar'
import Footer from './componant/footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
