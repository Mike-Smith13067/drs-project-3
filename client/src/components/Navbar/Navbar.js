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
import axios from 'axios';
class Navtabs extends Component {
    state = {
        isOpen: false,
        isAdmin: false
    }

    componentDidMount(){
        axios.get('/auth/isadmin')
            .then(res => {
                if(res.status === 200){
                    this.setState({isAdmin: true})
                }
            });
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
                        <i className="fab fa-facebook fa-2x"></i>
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
                            {this.state.isAdmin ? <NavItem>
                                <NavLink href="/Admin">
                                    Admin
                                </NavLink>
                            </NavItem> : <NavItem><NavLink href="/">Home</NavLink></NavItem>}
                            {this.state.isAuthenticated ? <NavItem>
                                <NavLink href="/Customer">
                                    Customer
                                </NavLink>
                            </NavItem> : <div></div>}
                            <NavItem>
                                <NavLink href="/About">
                                    About
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/Login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/CreateCustomer">
                                    Create Account
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">
                                    Contact
                                </NavLink>
                            </NavItem>

                            {this.state.isAdmin ? <NavItem>
                                <NavLink href="/Inventory">
                                    Inventory
                                </NavLink>
                            </NavItem> : <div></div>}

                            


                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Navtabs;
