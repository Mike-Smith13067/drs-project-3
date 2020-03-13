import React, { Component } from "react";
import Customer from '../../index.js';

class Customerpage extends Component {

  componentDidMount() {

  }
    render() {
      return (
        <table className="table">
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