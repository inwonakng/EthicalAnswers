import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// pages
import homePage from "./pages/home/home"
import registerPage from "./pages/register/register"
import loginPage from "./pages/login/login"
import mySurveysPage from "./pages/mysurveys/mysurveys"
import notFound from "./pages/errorPages/404"


class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
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

export default App;