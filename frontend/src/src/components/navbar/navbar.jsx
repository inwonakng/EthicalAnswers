import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function navBar() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">EthicalAnswers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link href="/auth">Sign Up</Nav.Link>
                <Nav.Link href="/auth">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default navBar