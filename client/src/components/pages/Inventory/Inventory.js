import React, { Component } from "react";
import axios from 'axios';
import "./style.css";
import { response } from "express";

const Inventorypage = props =>(
  <tr>
  <th class="table-head" scope="col">Part Number#</th>
  <th class="table-head" scope="col">Name</th>
  <th class="table-head" scope="col">Current</th>
  <th class="table-head" scope="col">Max</th>
  <th class="table-head" scope="col">Min</th>
</tr>
)

class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = { inventory: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/inventory')
      .then(response => {
        this.setstate({ inventory: response.data })
          .catch((error) => {
            console.log(error);
          })
          inventoryList() {
            return this.state.inventory.map(inventory)
          }
        }
      }
  
    render() {
        return(
        <table className = "table" >
            <thead>
             
            </thead>
            <tbody>
              <tr class="table-body">

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