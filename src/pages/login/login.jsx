import React from "react";
import "./login.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import { Container, Form, Button, Card, FormControl } from "react-bootstrap"
import { toast } from 'react-toastify';
import { connect } from "react-redux"
import * as actions from "../../store/actions/auth"
import { findDOMNode } from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

class loginPage extends React.Component {

    render() {
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (
                toast.error("⚠️ You should not be seeing this error (need to fix)", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})
            )
        }

        return(
            <div className="loginPageCSS">
                {errorMessage}
                <Container fluid>
                    <center>
                        <img src= {light_mode_logo} alt= "SurveyAI_Logo" className= 'loginPageLogo' />

                        <Card className="loginCard">
                            <center>
                                <Form className="loginCardFields">  
                                    <Form.Group controlId="login.userInput">
                                        <Form.Label>Username</Form.Label>
                                        <FormControl autoFocus type="text" placeholder="Your username" />
                                    </Form.Group>
                                    <Form.Group controlId="login.passwordInput">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="Password" placeholder="Your password" />
                                    </Form.Group> 
                                    {/* <Button variant="success" type="submit" block onClick={() => this.handleSubmit()}>Login</Button> */}
                                </Form>
                            </center>
                        </Card>
                        <Button variant="success" type="submit" className="loginButton" block onClick={this.handleSubmit()}>Login</Button>
                        <div className= 'loginPageForgotPasswordButton'>
                            <Link to="/login"> <span> Forgot Password? </span></Link>
                            { /* THE ABOVE SHOULD BE REDIRECTED TO A NEW PAGE THAT DOES NOT YET EXIST. */ }
                            { /* FOR NOW, IT JUST REDIRECTS TO ITSELF. */ }
                        </div>
                        <Card className= 'loginPageRegisterCard'>
                            <center>
                                <div className= 'loginPageRegisterCardText'>
                                    Don't have an account? <Link to="/register"> <span> Sign Up!</span> </Link>
                                </div>
                            </center>
                        </Card>
                    </center>
                </Container>
            </div>
        )
    }

    handleSubmit(event) {
        // this.props.onAuth("nishi7409", "Password")
        // this.props.history.push("/surveys")
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);