import React, { useState } from "react";
import "./login.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import { Container, Form, Button, Card, FormControl } from "react-bootstrap"
import { toast } from 'react-toastify';
import { connect } from "react-redux"
import * as actions from "../../store/actions/auth"
import { Link } from "react-router-dom";

const LoginPage = props => {
    const [loginDetail,setLoginDetail] = useState({})

    const handleSubmit = () => {
        props.onAuth(loginDetail.username, loginDetail.password)
        if (props.error) {
            toast.error("⚠️ You should not be seeing this error (need to fix)", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})
        }else props.history.push("/surveys")
    }

    const onInput = (field,e) => {
        setLoginDetail({...loginDetail,[field]:e.target.value})
    }

    return(
        <div className="LoginPageCSS">
            <Container fluid>
                <center>
                    <img src= {light_mode_logo} alt= "SurveyAI_Logo" className= 'LoginPageLogo' />

                    <Card className="loginCard">
                        <center>
                            <Form className="loginCardFields">  
                                <Form.Group controlId="login.userInput">
                                    <Form.Label>Username</Form.Label>
                                    <FormControl autoFocus type="text" placeholder="Your username" onChange={e=>onInput('username',e)}/>
                                </Form.Group>
                                <Form.Group controlId="login.passwordInput">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="Password" placeholder="Your password" onChange={e=>onInput('password',e)}/>
                                </Form.Group> 
                                {/* <Button variant="success" type="submit" className="loginButton" block onClick={handleSubmit}>Login</Button> */}
                            </Form>
                        </center>
                    </Card>
                    <Button variant="success" type="submit" className="loginButton" block onClick={handleSubmit}>Login</Button>
                    <div className= 'LoginPageForgotPasswordButton'>
                        <Link to="/login"> <span> Forgot Password? </span></Link>
                        { /* THE ABOVE SHOULD BE REDIRECTED TO A NEW PAGE THAT DOES NOT YET EXIST. */ }
                        { /* FOR NOW, IT JUST REDIRECTS TO ITSELF. */ }
                    </div>
                    <Card className= 'LoginPageRegisterCard'>
                        <center>
                            <div className= 'LoginPageRegisterCardText'>
                                Don't have an account? <Link to="/register"> <span> Sign Up!</span> </Link>
                            </div>
                        </center>
                    </Card>
                </center>
            </Container>
        </div>
    )
}


const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);