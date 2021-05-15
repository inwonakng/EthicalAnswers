import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import * as actions from "../../store/actions/auth"
import { connect } from "react-redux";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">EthicalAnswers</Navbar.Brand>
                    <Nav className="mr-auto">
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
                            <Link to="/register"><Button variant="danger" className="mr-sm-2"><i className="fas fa-user-plus"></i> Register</Button></Link>
                            <Link to="/login"><Button variant="success" className="mr-sm-2"><i className="fas fa-sign-in-alt"></i> Login</Button></Link>
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