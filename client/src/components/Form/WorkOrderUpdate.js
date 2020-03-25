import React, { Component } from "react";
import Form from './Form';
import Column from '../Column/Column';
import Row from '../Row';
import axios from 'axios';

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

            <container className="form-container">
                <form className="create-customer">
                    <span className="text">Update Workorder</span>
                    <Row>
                        <input class="input"
                            type="text"
                            placeholder="Enter the customer's email"
                            required
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </Row>
                </form>
                <button onClick = {this.handleSubmit}>Update customer workorder.</button>
            </container>

        )
    }
}
export default WorkOrderUpdate