import React from 'react'
import HomePage from "./pages/home/home"
import Surveys from "./pages/surveys/surveys"
import registerPage from "./pages/register/register"
import LoginPage from "./pages/login/login"
import mySurveysPage from "./pages/mysurveys/mysurveys"
import { Redirect, Route } from "react-router-dom";


const BaseRouter = () => (
    <div>
        <Route exact path="/" render={(props) => <HomePage {...props}/>}/>
        <Route exact path="/surveys" render={(props) => <Surveys {...props}/>}/>
        <Route exact path="/mysurveys" component={mySurveysPage}/>

        <Route exact path="/register" component={registerPage}/>
        <Route exact path="/login" component={LoginPage}/>
    </div>
)

export default BaseRouter