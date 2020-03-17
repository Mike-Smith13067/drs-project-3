import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

const Inventory = props => (
<thead>
      <tr>
        <th class = "table-head" scope="col">Part Number#</th>
        <th class = "table-head" scope="col">Name</th>
        <th class = "table-head" scope="col">Current</th>
        <th class = "table-head" scope="col">Max</th>
        <th class = "table-head" scope="col">Min</th>
      </tr>
    </thead>
)

class Inventorypage extends Component {
  constructor(props) {
    super(props);
    this.state = {inventory: []};
  }
  componentDidMount() {}
    render() {
      return (
        <table className="table">
    
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