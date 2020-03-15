import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTabs from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";

class HomePage extends Component {
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
