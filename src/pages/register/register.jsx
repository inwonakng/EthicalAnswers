import React, { useState } from "react";
import "./register.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import { Container, Form, Button, Card } from "react-bootstrap"
import { toast } from 'react-toastify';
import { connect } from "react-redux"
import * as actions from "../../store/actions/auth"
import { Link } from "react-router-dom";

const RegisterPage = props => {
    const [userInfo,setUserInfo] = useState({})
    const handleInput = (field,e) => {
        setUserInfo({...userInfo,[field]:e.target.value})
        console.log(userInfo)
    }

    const fieldnames = {
        username:'username',
        email: 'email',
        password1:'password',
        password2:'confirm password'
    }

    // not sure when this should be displayed?? 
    const notify = () => toast.error("⚠️ Failed to register account", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})

    const handleSubmit = event => {
        console.log(userInfo.username,userInfo.email,userInfo.password1,userInfo.password2)
        props.onRegister(   userInfo.username,
                            userInfo.email,
                            userInfo.password1,
                            userInfo.password2)

        if (props.error) {
            let message = "⚠️ You should not be seeing this error (need to fix)"
            if(props.error.response){
                for(let field in props.error.response.data){
                    toast.error(`⚠️ ${fieldnames[field]}: ${props.error.response.data[field]}`, {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})
                }
            }else{
                toast.error('⚠️ You should not be seeing this error (need to fix)', {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})
            }
        }else props.history.push("/surveys")
    }
    return(
        <div className="RegisterPageCSS">
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
                                            <Form.Control type="text" placeholder="Your username" onChange={e => handleInput('username',e)} required/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Your email" onChange={e => handleInput('email',e)}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Your password" onChange={e => handleInput('password1',e)} required/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm your password" onChange={e => handleInput('password2',e)} required/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="I have read and agree to the Terms and Conditions" />
                                        </Form.Group>
                                    </Form>
                                        <Button variant="success" type="submit" className="registerButton" block onClick={handleSubmit}>Register</Button>

                                </center>
                            </Card>

                            <Card className= 'RegisterPageLoginCard'>
                                <center>
                                    <div className= 'RegisterPageLoginCardText'>
                                        Already have an account? <Link to="/login"> <span> Log In!</span> </Link>
                                    </div>
                                </center>
                            </Card>
                        </div>
                    </div>
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
        onRegister: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);