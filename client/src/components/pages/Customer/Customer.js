import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

class Customerpage extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: [] };
  }
  componentDidMount() {
    axios.get('/customer')
      .then(response => {
        this.setState({ customer: response.data });
        console.log(this.state.customer);
      })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head" scope="col">Name</th>
              <th className="table-head" scope="col">Make</th>
              <th className="table-head" scope="col">Model</th>
              <th className="table-head" scope="col">Vin</th>
              <th className="table-head" scope="col">Service</th>
              <th className="table-head" scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.customer.map((customeritem) =>
              <tr className="table-body" key= {customeritem._id}>
                <td>{customeritem.name}</td>
                <td>{customeritem.make}</td>
                <td>{customeritem.model}</td>
                <td>{customeritem.vin}</td>
                <td>{customeritem.service}</td>
                <td>{customeritem.notes}</td>
              </tr>
              )}
          </tbody>
        </table>
        <button type="button" class="btn btn-primary">View Work History</button>
      </div>
    )
  }

}
export default Customerpage;