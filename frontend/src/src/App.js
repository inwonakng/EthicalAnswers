import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import * as actions from "./store/actions/auth"

// pages
import homePage from "./pages/home/home"
import registerPage from "./pages/register/register"
import loginPage from "./pages/login/login"
import mySurveysPage from "./pages/mysurveys/mysurveys"
import notFound from "./pages/errorPages/404"
import Navbar from "./components/navbar/navbar"


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return(
      <Router>
        <Switch {...this.props}>
          // all questions
          <Route exact path="/" component={homePage}/>
          
          // result analysis

          // my surveys
          <Route exact path="/mysurveys" component={mySurveysPage}/>

          // register
          <Route exact path="/register" component={registerPage}/>
          
          // login
          <Route exact path="/login" component={loginPage}/>

          // 404 error
          <Route exact path="/404" component={notFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
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