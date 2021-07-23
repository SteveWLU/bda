import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { nav } from '../data/nav';
import stemma from '../assets/images/stemma.png'

var name;

const Navigation = () => {
    name = localStorage.getItem("name");
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand href="/" >
                <Container className="left">
                <img className="huon-logo-nav align-top" src={stemma} alt="logo" />
                </Container>
                <Container className="right">
                <h2 id="site-title">Benci Digital Library</h2>
                <p id="nav-subtitle">Merchant bibliophiles in fifteenth-century Florence</p>
                </Container>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav activeKey="/">
                    {nav.map((elem, index) => {
                        return (elem.dropdown ?
                            <NavDropdown key={index} title={elem.title} id="collasible-nav-dropdown">
                                {elem.dropdown.map((dropElem, ind) => <NavDropdown.Item key={ind} href={dropElem.url}>{dropElem.page}</NavDropdown.Item>)}
                            </NavDropdown>
                            : <Nav.Item key={index}>
                                <Nav.Link href={elem.url}>{elem.title}</Nav.Link>
                            </Nav.Item>)
                    })}
                    {name != null //This is the code that toggles wether it says sign in or shows your name
                    ? 
                        <NavDropdown title={name} id="collasible-nav-dropdown">
                            <Nav.Item>
                                <Nav.Link href={"/signoutbetween"}>Sign Out</Nav.Link>
                            </Nav.Item>     
                        </NavDropdown>
                    :
                        <Nav.Link href={"/signinbetween"}>Sign In</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation