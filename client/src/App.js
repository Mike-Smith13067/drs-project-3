import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTabs from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import Customer from "./components/pages/Customer/Customer.js";
import Inventory from "./components/pages/Inventory/Inventory.js";
import About from "./components/pages/About/About.js";
import Contact from "./components/pages/Contact/Contact.js";
import Admin from "./components/pages/Admin/Admin.js";

class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <NavTabs />
          <div className="col-12">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About/>
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/Customer">
                <Customer />
              </Route>
              <Route exact path="/Inventory">
                <Inventory />
              </Route>
              <Route exact path="/Admin>">
                <Admin />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default HomePage;


  // state = {
  //   currentPage: "Home"
  // };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   if (this.state.currentPage === "Home") {
  //     return <Home />;
  //   } else if (this.state.currentPage === "Customer") {
  //     return <Customer />;
  //   } else if (this.state.currentPage === "Inventory") {
  //     return <Inventory />;
  //   } else if (this.state.currentPage === "About") {
  //     return <About />;
  //   } else {
  //     return <Contact />;
  //   }
  // };
