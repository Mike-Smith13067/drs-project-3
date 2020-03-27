import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            {this.state.isAdmin ? <NavItem>
                                <NavLink>
                                    <Link to="/Admin">Admin</Link>
                                </NavLink>
                            </NavItem> : <NavItem><NavLink><Link to="/">Home</Link></NavLink></NavItem>}
                            {this.state.isAuthenticated ? <NavItem>
                                <NavLink>
                                <Link to="/Customer">Customer</Link>
                                </NavLink>
                            </NavItem> : <div></div>}
                            <NavItem>
                                <NavLink>
                                    <Link to="/About">About</Link>
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink>
                                <Link to="/Login">Login</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/CreateCustom">Create Account</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/Contact">Contact</Link>
                                </NavLink>
                            </NavItem>

                            {this.state.isAdmin ? <NavItem>
                                <NavLink>
                                <Link to="/Inventory">Inventory</Link>
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
