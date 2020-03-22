import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';
import Row from "../../Row";

const contact = {
  title: "Contact Information",
  image: null,
  text: "Phone: 719-208-4643"
}

class Contactpage extends React.Component {
  render() {
    return(
        <div>
          <Card text={contact}/>
        </div>
    )
  }
}

export default Contactpage; 
