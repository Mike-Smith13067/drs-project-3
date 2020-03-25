import React, { Component } from "react";
import Row from '../Row';
import axios from 'axios';
import { Button, Container } from 'reactstrap';


class Form extends Component {
  state = {
    name : "",
    email : "",
    make : "",
    model: "",
    vin: "",
    mileage: "",
    lastServiceDate: "",
    password: ""
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value}= event.target
    this.setState({[name]: value}
      );
  }
  handleSubmit  = (event) => {
    event.preventDefault();
    axios.post("/customer/create", {...this.state}) 

  }
render (){
  return (
    <Container>
      <form className="create-customer">
        <span className="text">Create New Customer Account</span>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter your full name"
            required
            name="name"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter a valid email"
            required
            name="email"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter vehicle make"
            required
            name="make"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter a vehicle model"
            required
            name="model"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter the vehicles VIN#"
            required
            name="vin"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter the vehicle's current mileage"
            required
            name="mileage"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter the date of last vehicle service"
            required
            name="lastServiceDate"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input class="input-name"
            type="text"
            placeholder="Enter a password for this account"
            required
            name="password"
            onChange={this.handleChange}
          />
        </Row>
        <hr />
        <Row>
          <Button color="primary" size="sm" onClick = {this.handleSubmit}>Submit new account</Button>
        </Row>
      </form>
    </Container>

  );
}
}

export default Form;