import React, { Component } from "react";
import Row from '../Row';

function Form(props) {

  return (
    <container className="form-container">
      <form className="create-customer">
        <span className="formtext">&#x3C;New Customer Registration /&#x3E;</span>
        <Row>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter a valid email"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter vehicle make"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter a vehicle model"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter the vehicles VIN#"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter the vehicle's current mileage"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter the date of last vehicle service"
            required
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter a password for this account"
            required
          />
        </Row>
        <Row>
          <button>Go!</button>
        </Row>
      </form>
    </container>

  );
}

export default Form;