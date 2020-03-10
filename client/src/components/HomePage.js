import React, { Component } from "react";
import NavTabs from "./Navbar";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer";
import Inventory from "./pages/Inventory";
import Contact from "./pages/Contact";

class HomePage extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Customer") {
      return <Customer />;
    } else if (this.state.currentPage === "Inventory") {
      return <Inventory />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default HomePage;
