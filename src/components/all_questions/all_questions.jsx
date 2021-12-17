import React from 'react'
import "./all_questions.css"

import { Card, Accordion } from "react-bootstrap"
import { Link } from "react-router-dom";

function all_questions() {
    return (
        <div>
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
                        <span className="surveyTitle">Why are brownies delicious?</span>
                        <Link to="/take/1/survey"><b><span className="surveyCompletion">LAUNCH SURVEY</span></b></Link>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <b>Prompt of the survey:</b> Why are brownies delicious?
                        <br></br>
                        <b>Number of responses to the survey:</b> 200
                        <br></br>
                        <b>Date created:</b> 02/17/2001
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion>
            <Card bg="success" text="light">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="cardHeader">
                        <span className="surveyTitle">Why are brownies delicious?</span>
                        <b><span className="surveyCompletion">COMPLETED SURVEY</span></b>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <b>Prompt of the survey:</b> Why are brownies delicious?
                        <br></br>
                        <b>Number of responses to the survey:</b> 200
                        <br></br>
                        <b>Date created:</b> 02/17/2001
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
    )
}

export default all_questions
