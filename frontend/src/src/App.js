import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// pages
import homePage from "./pages/index/index"
import authPage from "./pages/auth/authentication"
import notFound from "./pages/errorPages/404"

// components
import Navbar from "./components/navbar/navbar"

class App extends Component {
  render() {
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={homePage}/>
          <Route exact path="/auth" component={authPage}/>
          <Route exact path="/404" component={notFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    )
  }
}

export default App;