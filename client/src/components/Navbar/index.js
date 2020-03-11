import React from "react";

import ReactDOM from "react-dom";
import "./style.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <button type="button" className="btn btn-primary">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-primary">
        <a
          href="#customer"
          onClick={() => props.handlePageChange("Customer")}
          className={props.currentPage === "Customer" ? "nav-link active" : "nav-link"}
        >
          Customer
        </a>
        </button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-primary">
        <a
          href="#Inventory"
          onClick={() => props.handlePageChange("Inventory")}
          className={props.currentPage === "Inventory" ? "nav-link active" : "nav-link"}
        >
          Inventory
        </a>
        </button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-primary">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
        </button>
      </li>
    </ul>
  );
}

export default NavTabs;
