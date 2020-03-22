import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

class WorkOrderpage extends Component {
  constructor(props) {
    super(props);
    this.state = { workorder: [] };
  }
  
  componentDidMount() {
    axios.get('/workorder')
      .then(response => {
        this.setState({ workorder: response.data });
        console.log(this.state.workorder);
      })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head" scope="col">Type</th>
              <th className="table-head" scope="col">Description</th>
              <th className="table-head" scope="col">Part #</th>
              <th className="table-head" scope="col">Qty</th>
              <th className="table-head" scope="col">Price</th>
              <th className="table-head" scope="col">Hrs</th>
              <th className="table-head" scope="col">Rate</th>
              <th className="table-head" scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.workorder.map((workorderitem) =>
              <tr className="table-body" key= {workorderitem._id}>
                <td>{workorderitem.type}</td>
                <td>{workorderitem.description}</td>
                <td>{workorderitem.partnumber}</td>
                <td>{workorderitem.qty}</td>
                <td>{workorderitem.price}</td>
                <td>{workorderitem.hrs}</td>                
                <td>{workorderitem.rate}</td>
                <td>{workorderitem.qty*workorderitem.price+workorderitem.hrs*workorderitem.rate}</td>
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