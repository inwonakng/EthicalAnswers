import React from 'react'
import HomePage from "./pages/home/home"
import registerPage from "./pages/register/register";
import LoginPage from "./pages/login/login";

import Surveys from "./pages/surveys/surveys"
import mySurveys from "./pages/mysurveys/mysurveys"
import settingsPage from "./pages/settings/settings"
import { Route } from "react-router-dom";


const BaseRouter = () => (
    <div>
        <Route exact path="/" render={(props) => <HomePage {...props}/>}/>
        <Route exact path="/register" component={registerPage}/>
        <Route exact path="/login" component={LoginPage}/>

        <Route exact path="/surveys" render={(props) => <Surveys {...props}/>}/>
        <Route exact path="/mysurveys" component={mySurveys}/>
        <Route exact path="/settings" component={settingsPage}/>

    </div>
)

export default BaseRouter