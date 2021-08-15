import React from "react";
import "./register.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import { Container, Form, Button, Card } from "react-bootstrap"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const registerPage = () => {
    const notify = () => toast.error("⚠️ Failed to register account", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})

    return(
        <div className="registerPageCSS">
            <Container fluid>
                <center>
                    <div className='standardRow'>
                        <div className='standardColumn'>
                            <div className= "registerDescriptionSection">
                                <img src= {light_mode_logo} alt= "SurveyAI_Logo" className= 'registerDescriptionLogo' />
                                <div className= "registerDescriptionHeader">
                                    What is Survey <span className= "registerDescriptionHeaderAI">AI </span> ?
                                </div>
                                <div className= 'registerDescriptionText'>

                                </div>
                                SurveyAI is a platform where -----------------------------------------------
                                { /* This description is to be filled in. */ }
                            </div>
                        </div>
                        <div class='standardColumn'>

                            <Card className="registerCard">
                                <center>
                                <div className = "registerCardHeader">
                                    Register
                                </div>
                                    <Form className="registerCardFields">
                                        <Form.Group>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Your username"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="We won't judge if it's AOL" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Your password" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm your password" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="I have read and agree to the Terms and Conditions" />
                                        </Form.Group>
                                        {/* <Button variant="success" type="submit" block onClick={notify}>Register</Button> */}
                                    </Form>
                                        <Button variant="success" type="submit" className="registerButton" block onClick={notify}>Register</Button>

                                </center>
                            </Card>

                            <Card className= 'registerPageLoginCard'>
                                <center>
                                    <div className= 'registerPageLoginCardText'>
                                        Already have an account? <Link to="/login"> <span> Log In!</span> </Link>
                                    </div>
                                </center>
                            </Card>
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    );
}


export default registerPage;