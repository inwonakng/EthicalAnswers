import React from 'react'
import HomePage from "./pages/home/home"
import RegisterPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import take_survey from "./pages/take surveys/take_survey";

import Surveys from "./pages/surveys/surveys"
import mySurveys from "./pages/mysurveys/mysurveys"
import mySurveysStats from "./pages/mysurveys/statssurvey/stats";
import mySurveysEdit from "./pages/mysurveys/editsurvey/edit";
import settingsPage from "./pages/settings/settings"
import { Route } from "react-router-dom";


const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <HomePage {...props} />} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/login" component={LoginPage} />

    <Route exact path="/surveys" render={(props) => <Surveys {...props} />} />

    <Route exact path="/mysurveys" component={mySurveys} />
    <Route exact path="/mysurveys/:surveyID/stats" component={mySurveysStats} />
    <Route exact path="/mysurveys/:surveyID/edit" component={mySurveysEdit} />
    
    <Route exact path="/take_survey" component={take_survey} />

    <Route exact path="/settings" component={settingsPage} />
  </div>
);

export default BaseRouter