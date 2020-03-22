import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
class Navtabs extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div> {/* <Footer /> */}
                <Navbar dark expand="sm" className="col-nav">

                    <NavbarBrand href="/">DRS Automotive Services</NavbarBrand>
                    <a href="https://www.facebook.com/DRSAutomotiveSolutions/">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <NavbarToggler onClick={
                        this.toggle
                    }/>
                    <Collapse isOpen={
                            this.state.isOpen
                        }
                        navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="/About">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Customer">
                                    Customer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Authentication">
                                    Create Account
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">
                                    Contact
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/Inventory">
                                    Inventory
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/Admin">
                                    Admin
                                </NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Navtabs;
