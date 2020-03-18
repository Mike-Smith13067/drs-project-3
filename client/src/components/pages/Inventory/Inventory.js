import React, { Component } from "react";
import axios from 'axios';
import "./style.css";


class Inventorypage extends Component {
  constructor(props) {
    super(props);

    this.state = { inventory: [] };

  }
  componentDidMount() {
    axios.get('/inventory')
      .then(response => {
        this.setState({ inventory: response.data });
        console.log(this.state.inventory);
      })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head" scope="col">Part Number#</th>
              <th className="table-head" scope="col">Name</th>
              <th className="table-head" scope="col">Current</th>
              <th className="table-head" scope="col">Max</th>
              <th className="table-head" scope="col">Min</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.inventory.map((inventoryitem) =>
              <tr className="table-body" key= {inventoryitem._id}>
                <td>{inventoryitem.partnumber}</td>
                <td>{inventoryitem.name}</td>
                <td>{inventoryitem.max}</td>
                <td>{inventoryitem.min}</td>
                <td>{inventoryitem.notes}</td>
              </tr>

            )}
            </tbody>
        </table>
      </div>
    )

  }
}
export default Inventorypage;