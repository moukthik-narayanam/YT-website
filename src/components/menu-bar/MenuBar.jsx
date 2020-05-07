import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ManuBarItems } from './MenuItems';
import './MenuBar.css';

export default function MenuBar() {
    return (
        <Navbar bg="dark-transparent" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src={process.env.PUBLIC_URL + '/images/logo-light.png'}
                    width="200"
                    height="100"
                    className="d-inline-block align-top"
                    alt="yours truly theater logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-items-container">
                    {
                        ManuBarItems.map((item, index) => {
                            if (item.type === "link") {
                                return <Nav.Link href={`#${item.href}`}>{item.name}</Nav.Link>
                            } else {
                                return <NavDropdown active={true} title={item.name} id={`basic-nav-dropdown-${index}`}>
                                    {
                                        item.dropdownItems.map((dropdownItem) => {
                                            return <NavDropdown.Item href={`#${dropdownItem.href}`}>{dropdownItem.name}</NavDropdown.Item>
                                        })
                                    }
                                </NavDropdown>
                            }
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}