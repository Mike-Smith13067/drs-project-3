import React, { Component } from "react";
import Form from './Form';
import Column from '../Column/Column';
import Row from '../Row';
import axios from 'axios';
import { Button, Container } from 'reactstrap';

class WorkOrderUpdate extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({ [name]: value }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/add", this.state.email )

    }
    render() {
        return (

            <Container>
                <form className="create-customer">
                    <span className="text">Update Workorder</span>
                    <Row>
                        <input class="Workorder-email"
                            type="text"
                            placeholder="Enter the customer's email"
                            required
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </Row>
                    <hr />
                <Row>
                <Button color="primary" size="sm" onClick = {this.handleSubmit}>Update customer workorder.</Button>
                </Row>
                </form>
            </Container>

        )
    }
}
export default WorkOrderUpdate