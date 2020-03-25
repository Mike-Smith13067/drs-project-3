import React, { Component } from "react";
import WorkOrderCreate from '../../Form/WorkOrderCreate';
import Column from '../../Column/Column';
import Row from '../../Row'


class WOrkOrderCreate extends Component {
    // componentDidMount() { };
    render() {
        return (
            <div>
                <Row>
                <Column></Column>
                <Column></Column>            
                <WorkOrderCreate/>
                <Column></Column>
                <Column></Column>
                
                </Row>
                
            </div>
        );
    }
}
 export default WorkOrderCreate;