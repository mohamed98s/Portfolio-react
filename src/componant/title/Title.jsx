import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Title(props) {

  return (
    <>
      <div className="text-center pt-4">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder" style={{ color: props.color }}>{props.title}</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line" style={{ backgroundColor: props.color }}></div>
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
          <div className="line" style={{ backgroundColor: props.color }}></div>
        </div>
      </div>
    </>
  );
}
