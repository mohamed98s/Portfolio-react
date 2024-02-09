import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className="card-group m-4">
          <div
            className="card"
            style={{
              color: "white",
              backgroundColor: "inherit",
              border: "none",
            }}
          >
            <div className="card-body text-center">
              <h3 className="text-uppercase">location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div
            className="card"
            style={{
              color: "white",
              backgroundColor: "inherit",
              border: "none",
            }}
          >
            <div className="card-body text-center">
              <h3 className="text-uppercase">around the web</h3>
              <div className="icons">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={`text-white mx-1 ${style.icon}`}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={`text-white mx-1 ${style.icon}`}
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={`text-white mx-1 ${style.icon}`}
                />
                <FontAwesomeIcon
                  icon={faGlobe}
                  className={`text-white mx-1 ${style.icon}`}
                />
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              color: "white",
              backgroundColor: "inherit",
              border: "none",
            }}
          >
            <div className="card-body text-center">
              <h3 className="text-uppercase">about freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`p-2 ${style.p}`}>
        <p className={`${style.foot} p`}>Copyright © Your Website 2021</p>
      </div>{" "}
    </>
  );
}
