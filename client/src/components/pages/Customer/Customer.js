import React, { Component } from "react";
import Customer from '../../../index.js';
import "./style.css";

class Customerpage extends Component {

  componentDidMount() {

  }
    render() {
      return (
        <table className="table">
    <thead>
      <tr>
        <th class = "table-head" scope="col">Name</th>
        <th class = "table-head" scope="col">Make</th>
        <th class = "table-head" scope="col">Model</th>
        <th class = "table-head" scope="col">Vin</th>
        <th class = "table-head" scope="col">Service</th>
        <th class = "table-head" scope="col">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr class = "table-body">
        <td id = "name">Mark</td>
        <td id = "make" >Otto</td>
        <td id = "model" >Otto</td>
        <td id = "vin" >Otto</td>
        <td id = "serviceDate" >Otto</td>
        <td id = "notes" >Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
      ) 
      
    }
   
  
  }
export default Customerpage;