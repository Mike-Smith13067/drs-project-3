import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function AdminSearchForm(props) {
  return (
    <form className="customerSearch">
      <div className="form-group">
        <label htmlFor="customerSearch">Customer Records:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a customer's name to begin"
          id="customer"
        />
        <datalist id="customer">
          {props.customers.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AdminSearchForm;
