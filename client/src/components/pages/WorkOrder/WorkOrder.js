import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

class WorkOrderpage extends Component {
  constructor(props) {
    super(props);
    this.state = { workorder: [] };
  }
  componentDidMount() {
    axios.get('/customer')
      .then(response => {
        this.setState({ workorder: response.data });
        console.log(this.state.customer);
      })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head" scope="col">Part</th>
              <th className="table-head" scope="col">Description</th>
              <th className="table-head" scope="col">Part #</th>
              <th className="table-head" scope="col">Qty/Hrs</th>
              <th className="table-head" scope="col">Price/Rate</th>
              <th className="table-head" scope="col">Extended</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.customer.map((workorderitem) =>
              <tr className="table-body" key= {workorderitem._id}>
                <td>{workorderitem.part}</td>
                <td>{workorderitem.description}</td>
                <td>{workorderitem.partnumber}</td>
                <td>{workorderitem.qty}</td>
                <td>{workorderitem.hours}</td>
                <td>{workorderitem.price}</td>
                <td>{workorderitem.rate}</td>
                <td>{workorderitem.extended}</td>
              </tr>
              )}
          </tbody>
        </table>
        {/* <button type="button" class="btn btn-primary">View Work History</button> */}
      </div>
    )
  }

}
export default WorkOrderpage;