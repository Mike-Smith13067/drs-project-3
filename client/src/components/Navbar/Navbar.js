import React, {Component }from "react";
import { Redirect, Link } from 'react-router-dom'
import "./style.css";
import axios from 'axios';

class NavTabs extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark nabvar-expand-lg">
            <Link to="/" className="navbar-brand">DRS Automotive Services</Link>
            <div className="">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Admin" className="nav-link">Admin</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Inventory" className="nav-link">Inventory</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Customer" className="nav-link">Customer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
}

export default NavTabs;
