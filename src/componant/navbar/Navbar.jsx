import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from './navbar.module.css'
import stylish from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {

    let [padd,setPadd] = useState(true)

    const addPadding = ()=>{
        if(window.scrollY >= 60){
            setPadd(false)
        }
        else{
            setPadd(true)
        }
    }
    
    window.addEventListener('scroll', addPadding)


  return (
    <div>
      <nav className={padd ? `navbar navbar-expand-lg fixed-top py-4 ${style.color}`: `navbar navbar-expand-lg fixed-top ${style.color}`}>
        <div className="container">
          <Link className="navbar-brand text-white fw-bolder fs-2" to="">
          START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" to="about">
                  about
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" to="portfolio">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" to="contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
