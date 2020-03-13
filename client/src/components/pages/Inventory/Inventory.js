import React, { Component } from "react";
// import Inventory from '../../../../../models/inventory';
import "./style.css";

class Inventorypage extends Component {
  componentDidMount() {}
    render() {
      return (
        <table className="table">
    <thead>
      <tr>
        <th class = "table-head" scope="col">Part Number#</th>
        <th class = "table-head" scope="col">Name</th>
        <th class = "table-head" scope="col">Current</th>
        <th class = "table-head" scope="col">Max</th>
        <th class = "table-head" scope="col">Min</th>
      </tr>
    </thead>
    <tbody>
      <tr  class = "table-body">
        
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
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
  </table>
      ) 
      
    }
   
  
  }


export default Inventorypage;