import React from 'react'
import "./all_questions.css"

import { Card, Accordion } from "react-bootstrap"
import { Link } from "react-router-dom";
import data from "./data.json";


function all_questions() {
    const survey_data = data.map( (item) => {
        return (
            
            <Accordion>
                {
                    /*
                        should be dynamic in the future
                        red --> not completed surveys (stacked towards the top) - can take
                        green --> completed surveys (stacked towards the bottom) - can not take
                    */
                }
                <Card bg="danger" text="light">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="cardHeader">
                            <span className="surveyTitle">{item.survey_title}</span>
                            <Link to="/take/1/survey"><b><span className="surveyCompletion">LAUNCH SURVEY</span></b></Link>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <b>Prompt of the survey:</b> {item.prompt}
                            <br></br>
                            <b>Number of responses to the survey:</b> {item.number_of_answers}
                            <br></br>
                            <b>Date created:</b> {item.creation_time}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )

    })
    return survey_data;
}

export default all_questions
