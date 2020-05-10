import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MenuBar.css';
import { useHistory } from 'react-router-dom';

export default function MenuBar(props) {
    const history = useHistory();
    function handleNavigation(route) {
        history.push(route);
    }
    return (
        <Navbar bg="dark-transparent" variant="dark" expand="lg" fixed="top" className="position-sticky" >
            <Navbar.Brand href="home">
                <img
                    src={process.env.PUBLIC_URL + '/images/logo-light.png'}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="yours truly theater logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-items-container" onSelect={handleNavigation}>
                    {
                        props.menuBarItems.filter(item => item.listInMenu).map((item, index) => {
                            if (item.type === "link") {
                                return <Nav.Link key={item.name} href="#" eventKey={item.path}>{item.name}</Nav.Link>
                            } else {
                                return <NavDropdown key={item.name} active={true} title={item.name} id={`basic-nav-dropdown-${index}`}>
                                    {
                                        item.dropdownItems.map((dropdownItem) => {
                                            return <NavDropdown.Item key={dropdownItem.name} href="#" eventKey={dropdownItem.path}>{dropdownItem.name}</NavDropdown.Item>
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