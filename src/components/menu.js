"use strict"

import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem eventKey={1}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contacts">
                            <NavItem eventKey={2}>Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/admin">
                            <NavItem eventKey={1}>Admin</NavItem>
                        </LinkContainer>   
                        <LinkContainer to="/cart">
                            <NavItem eventKey={2}>Your Cart
                                { (this.props.cartItemsNumber > 0) ? (<Badge className="badge">{this.props.cartItemsNumber}</Badge>) :('')}   
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;