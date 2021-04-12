import React from "react";
import "./register.css"

import { Container, Form, Button, Card } from "react-bootstrap"

import Navbar from "../../components/navbar/navbar"

const homePage = () => {
    return(
        <div className="registerPageCSS">
            <Navbar/>
            <Container fluid>
                <center>
                    <Card className="registerCard">
                        <center>
                            <Form className="registerCardFields">
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="John Doe"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="john@doe.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Retype Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>Submit</Button>
                            </Form>
                        </center>
                    </Card>
                </center>
            </Container>
        </div>
    );
}


export default homePage;