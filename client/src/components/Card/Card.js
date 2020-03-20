import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Row from "../Row";

function Card(props) {
  console.log(props.text);
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.text.title}</h2>
        <p className="card-text">{props.text.text}</p>
        <p className="card-image">{props.text.image}</p>
      </div>
    </div>
  );
}

export default Card;
