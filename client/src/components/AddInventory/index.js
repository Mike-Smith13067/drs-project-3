import React, { Component } from "react";
import Row from '../Row';
import axios from 'axios';

class Form extends Component {
  state = {
    partnumber : "",
    name : "",
    max : "",
    min: "",
    notes: ""
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value}= event.target
    this.setState({[name]: value}
      );
  }
  handleSubmit  = (event) => {
    event.preventDefault();
    // this.refreshInventory();
    axios.post("/inventory/add", {...this.state}) 

  }
render (){
  return (
    <container className="form-container">
      <form className="create-customer">
        <span className="text">New Inventory Item</span>
        <Row>
          <input class="input"
            type="text"
            placeholder="Enter part number"
            required
            name="partnumber"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter name"
            required
            name="name"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter maximum quantity"
            required
            name="max"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter a minimum quantity"
            required
            name="min"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Enter comments/notes"
            required
            name="notes"
            onChange={this.handleChange}
          />
        </Row>
        
        <Row>
          <button onClick = {this.handleSubmit}>Submit new inventory item.</button>
          {/* <button onClick = {this.handleSubmit}>Delete an inventory item.</button> */}
        </Row>
      </form>
    </container>

  );
}
}

export default Form;