import React, { Component } from "react";
import Row from '../Row';
import axios from 'axios';
import { Button, Container } from 'reactstrap';



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
    <Container>
      <form className="create-customer">
        <span className="newWorkorder">New Workorder</span>
        <Row>
          <input class="newWorkorder-email"
            type="text"
            placeholder="Enter customer email"
            required
            name="email"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-item"
            type="text"
            placeholder="Enter item type (Part/Time)"
            required
            name="type"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-part-desc"
            type="text"
            placeholder="newWorkorder-part-desc"
            required
            name="description"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-part-num"
            type="text"
            placeholder="Enter a partnumber"
            required
            name="partnumber"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-part-qty"
            type="text"
            placeholder="Enter quantity"
            required
            name="qty"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-price"
            type="text"
            placeholder="Enter price"
            required
            name="vin"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-hours"
            type="text"
            placeholder="Enter hour(s)"
            required
            name="hrs"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-hour-rate"
            type="text"
            placeholder="Enter hourly rate"
            required
            name="rate"
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <input className="newWorkorder-comments"
            type="text"
            placeholder="Enter any comments, observations or notes"
            required
            name="notes"
            onChange={this.handleChange}
          />
        </Row>
        <hr />
        <Row>
        <Button color="primary" size="sm" onClick = {this.handleSubmit}>Submit new workorder.</Button>
        </Row>
      </form>
    </Container>

  );
}
}

export default Workorder;