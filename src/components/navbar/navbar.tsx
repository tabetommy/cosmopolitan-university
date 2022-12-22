import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import  {
    Navbar,
    Nav,
    NavItem,
    Col,
    NavDropdown} from 'react-bootstrap';


const Navigation = () => {
    return( 
    //  <Row>
        <Col className="mt-4 px-0">
        <Navbar collapseOnSelect expand='md' bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <NavItem className="nav-item">
                        <Link to='/' className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/students' className="nav-link">
                            Students
                        </Link>
                    </NavItem>   
                    <NavItem>
                        <Link to='/programs' className="nav-link">
                            Programs
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/contact' className="nav-link">
                            Contact
                        </Link>
                    </NavItem>
                    <NavDropdown title="Research" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    //  </Row>
    );
}

export default Navigation