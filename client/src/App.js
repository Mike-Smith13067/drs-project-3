import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTabs from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import Customer from "./components/pages/Customer/Customer.js";
import Inventory from "./components/pages/Inventory/Inventory.js";
import About from "./components/pages/About/About.js";
import Contact from "./components/pages/Contact/Contact.js";
import Admin from "./components/pages/Admin/Admin.js";
import Footer from "./components/Footer/Footer";
import CustomerCreate from "./components/pages/Authentication/CustomerCreate"
import Privacy from "./components/Footer/Privacy";
import Login from "./components/pages/Login";
import WorkOrder from "./components/pages/WorkOrder/WorkOrder"
import Row from "./components/Row/index.js";
import AdminLogin from "./components/pages/AdminLogin";
import CreateAdmin from "./components/CreateAdmin";
import WorkOrderCreate from "./components/pages/Admin/WorkOrderCreate";
import WorkOrderUpdate from "./components/Form/WorkOrderUpdate";
class HomePage extends Component {
  render() {
    return (
      // <div className='container'>
        <BrowserRouter>
          <NavTabs />          
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About/>
              </Route>
              <Route exact path="/Admin">
                <Admin />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/Customer">
                <Customer />
              </Route>
              <Route exact path="/CreateCustomer">
                <CustomerCreate />
              </Route>
              <Route exact path="/HZcqPZc52EPpjNrG3QeePWpzJavvCWJsN6b2UWGQa758dyafQN">
                <CreateAdmin />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Admin/Login">
                <AdminLogin />
              </Route>
              <Route exact path="/Inventory">
                <Inventory />
              </Route> 
              <Route exact path ="/WorkOrder">
              <WorkOrder />
              </Route>
              <Route exact path ="/Admin/WorkOrderCreate">
              <WorkOrderCreate />
              </Route>
              <Route exact path ="/Admin/WorkOrderUpdate">
              <WorkOrderUpdate />
              </Route>
              <Route exact path ="/Privacy">
              <Privacy />
              </Route> 
                          
              </Switch>
          </div>
          <Footer />

        </BrowserRouter>
    );
  }
}

export default HomePage;
