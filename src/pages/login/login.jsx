import React from "react";
import "./login.css"

import { Container, Form, Button, Card } from "react-bootstrap"
import { toast } from 'react-toastify';
import { connect } from "react-redux"
import * as actions from "../../store/actions/auth"

class loginPage extends React.Component {
    handleSubmit = (e) => {
        // this works, it just does it on click of login, we need to work on that
        // this.props.onAuth("nishi7409", "")
        // this.props.history.push("/")
    }

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
                        <Card className="loginCard">
                            <center>
                                <Form className="loginCardFields"> {/*  onSubmit={handleSubmit} */}
                                    <Form.Group controlId="login.userInput">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="johndoe" />
                                    </Form.Group>
                                    <Form.Group controlId="login.passwordInput">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="********" />
                                    </Form.Group> 
                                    <Button variant="success" type="submit" block onClick={this.handleSubmit("nishi7409", "aaa")}>Login</Button>
                                </Form>
                                {/* <Button variant="success" type="submit" block onClick={handleSubmit("nishi7409", "aaa")}>Login</Button> */}
                            </center>
                        </Card>
                    </center>
                </Container>
            </div>
        )
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