import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap"


function navBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">EthicalAnswers</Navbar.Brand>
            <Nav className="mr-auto">
                {/* can put stuff here (next to EthicalAnswers) */}
            </Nav>
            <Form inline>
                <Link to="/create"><Button variant="light" className="mr-sm-2">Create</Button></Link>
                <Link to="/register"><Button variant="danger" className="mr-sm-2">Register</Button></Link>
                <Link to="/login"><Button variant="success" text="light" className="mr-sm-2">Login</Button></Link>
            </Form>
        </Navbar>
    )
}

export default navBar