import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Card from '../../Card/Card';
import Row from "../../Row";

const createwo = {
  title: "Create Work Order",
  image: null,
  text: "Create new work order here."
};
const customerview = {
  title: "View Customer",
  image: null,
  text: "View customer information here."
};
class Admin extends Component {
  componentDidMount() {}
    render() {
      return (
        <div>
        {/* <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Make</th>
        <th scope="col">Model</th>
        <th scope="col">Vin</th>
        <th scope="col">Service</th>
        <th scope="col">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
   
  </table> */}
  <Row>
  <Card text={createwo}>
    <Link to= "/WorkOrder">Create Work Order</Link>
    </Card>
    <Card text={customerview}>
    <Link to= "/WorkOrder">Create Work Order</Link>
    </Card>
  </Row>
  <Row>
  
  </Row>
    
    
  </div>
   
  
      ) 
      
    }
    
  
  }

  export default Admin;