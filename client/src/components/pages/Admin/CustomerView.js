import React, { Component } from "react";
import axios from 'axios';
import "./style.css";
import { Link } from 'react-router-dom';


class Customerpage extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: [] };
  }
  componentDidMount() {
    axios.get('/customer/all')
      .then(response => {
        this.setState({ customer: response.data });
      })

  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head" scope="col">Select</th>
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
                <tr className="table-body" key={customeritem._id}>
                  <button type="button" class="btn btn-primary"></button>
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
        <Link to="/WorkOrder">View Work Order</Link>


      </div>
    )
  }

}
export default Customerpage;