import React, { Component } from "react";
import WorkOrderUpdate from '../../Form/WorkOrderUpdate';
import Column from '../../Column/Column';
import Row from '../../Row'


class WorkOrderUpdate extends Component {
    // componentDidMount() { };
    render() {
        return (
            <div>
                <Row>
                <Column>A</Column>
                <Column>A</Column>            
                <WorkOrderUpdate/>
                <Column></Column>
                <Column></Column>
                </Row>

                
                
            </div>
        );
    }
}



 export default WorkOrderUpdate;