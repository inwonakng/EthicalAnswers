import React from "react";
import "./login.css"

import { Container, Form, Button, Card } from "react-bootstrap"
import { toast } from 'react-toastify';


import Navbar from "../../components/navbar/navbar"


const loginPage = () => {
    const notify = () => toast.error("⚠️ Failed to login", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})
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
                                    <Form.Control type="text" placeholder="johndoe" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                {/* <Button variant="success" type="submit" block>Login</Button> */}
                            </Form>
                            <Button variant="success" type="submit" block onClick={notify}>Login</Button>
                        </center>
                    </Card>
                </center>
            </Container>
        </div>
    );
}


export default loginPage;