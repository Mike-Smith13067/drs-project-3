import React, { Component } from "react";
import Form from '../../Form/Form';
import Column from '../../Column/Column';
import Row from '../../Row'


class CustomerCreate extends Component {
    // componentDidMount() { };
    render() {
        return (
            <div>
                <Row>
                <Column></Column>
                <Column></Column>            
                <Form />
                <Column></Column>
                <Column></Column>
                </Row>
                
            </div>
        );
    }
}
 export default CustomerCreate;
