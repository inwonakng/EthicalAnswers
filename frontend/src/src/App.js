import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// pages
import homePage from "./pages/home/home"
import registerPage from "./pages/register/register"
import notFound from "./pages/errorPages/404"


class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          // all questions
          <Route exact path="/" component={homePage}/>
          
          // register
          <Route exact path="/register" component={registerPage}/>

          <Route exact path="/404" component={notFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    )
  }
}

export default App;