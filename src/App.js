import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux"
import * as actions from "./store/actions/auth"

// NavBar
import NavBar from "./components/navbar/navbar";

// router
import BaseRouter from "./routes"

toast.configure()

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return ( 
      <div style={{ backgroundColor: "#ECF0F5", width: "100vw", height: "100vh"}}>
        <Router>
            <NavBar {...this.props}>
              <BaseRouter/>
            </NavBar>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);