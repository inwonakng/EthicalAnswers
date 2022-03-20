import React from "react"
import "./navbar.css"

import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import * as actions from "../../store/actions/auth"
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';

import dark_mode_logo from '../../components/logos/word_logo_white.png';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" className= "navbarCSS">

                <Link to="/">
                    <img src= {dark_mode_logo} alt= "SurveyAI_Logo" className= 'navbarHomeLogo'>
                    </img>
                </Link>
                    <Nav className="mr-auto">
                    <Divider light orientation="vertical" flexItem /> {/* this won't appear for some reason */}
                        {/* can put stuff here (next to EthicalAnswers) */}
                    </Nav>
                    <Form inline>
                    {
                        this.props.isAuthenticated ?

                        <>
                            <Link to="/create"><Button variant="light" className="mr-sm-2"><i className="fas fa-question-circle"></i> Create Survey</Button></Link>
                            <Link to="/surveys"><Button variant="light" className="mr-sm-2"><i className="fas fa-home"></i> Dashboard</Button></Link>
                            <Link to="/"><Button variant="danger" className="mr-sm-2" onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i> Logout</Button></Link>
                        </>

                        :

                        <>
                            <Link onClick={() => {window.location.href="/register"}}>
                                <Button variant= "light" className="mr-sm-2 signupButtonCSS">
                                    <i className="fas fa-user-plus"> </i>
                                        <span> Sign Up</span>
                                </Button>
                            </Link>
                            
                            <Link onClick={() => {window.location.href="/login"}}>
                                <Button variant= "light" className="mr-sm-2 loginButtonCSS">
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span> Login</span>
                                </Button>
                            </Link>
                        </>
                    }
                    </Form>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(NavBar)