import React from "react";
import "./login.css"

import { Container, Form, Button, Card } from "react-bootstrap"

import Navbar from "../../components/navbar/navbar"



const loginPage = () => {
    return(
        <div className="loginPageCSS">
            <Navbar/>
            <Container fluid>
                <center>
                    <Card className="loginCard">
                        <center>
                            <Form className="loginCardFields">
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="john@doe.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
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


export default loginPage;