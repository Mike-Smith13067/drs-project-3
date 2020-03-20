import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  console.log(props.text);
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title">{props.text.title}</p>
        <p className="card-text">{props.text.text}</p>
        <p className="card-image">{props.text.image}</p>
      </div>
    </div>
  );
}

export default Card;
