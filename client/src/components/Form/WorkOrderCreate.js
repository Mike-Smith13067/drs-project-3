import React, { Component } from "react";
import Row from '../Row';
import axios from 'axios';

class Workorder extends Component {
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
    axios.post("/add", {...this.state}) 

  }
render (){
  return (
    <container className="form-container">
      <form className="create-customer">
        <span className="text">New Workorder</span>
        <Row>
          <input class="input"
            type="text"
            placeholder="Enter item type (Part/Time)"
            required
            name="type"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter part description"
            required
            name="description"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter a partnumber"
            required
            name="partnumber"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter quantity"
            required
            name="qty"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter price"
            required
            name="vin"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter hour(s)"
            required
            name="hrs"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter hourly rate"
            required
            name="rate"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter any comments, observations or notes"
            required
            name="notes"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <button onClick = {this.handleSubmit}>Submit new workorder.</button>
        </Row>
      </form>
    </container>

  );
}
}

export default Workorder;