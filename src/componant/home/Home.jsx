import React from "react";
import img from "../../assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import style from "./Home.module.css";
import Title from "../title/Title";

export default function Home() {
  return (
    <>
      <div className="bg-danger d-flex justify-content-center align-items-center text-white vh-100">
        <div className="text-center">
          <img src={img} alt="" className={`mb-3 ${style.homeImg}`} />
         
          <Title title='start framwork' color='white'></Title>

          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
