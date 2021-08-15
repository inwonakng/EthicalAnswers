import React from "react";
import "./surveyCreation.css"

import { Container, Row, Col, Card, Form } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function surveyCreation (props) {
    var surveyOptions = ["This option is a test.", "", ""];

    var optionCount = 1;

    function addOption(){
        optionCount++;
        surveyOptions.push(" ");
    }

    return(
        <div className="surveysCreationPageCSS">
            <Container fluid>
                <center>
                    <div className= "bigHeader">
                        Create a Survey
                    </div>
                    <Card className= "cardContainer">
                        <Form>
                            <Form.Group className="allForms" controlId="formBasicEmail">
                                <div className= "standardRow">
                                    <div className= "bigDescriptorColumn surveyTitleDescriptor">
                                        Survey Title
                                    </div>
                                    <div className= "standardColumn surveyBigFields">
                                        <Form.Control type="email" placeholder="Enter Survey Title" />
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className="allForms" controlId="formBasicEmail">
                                <div className= "standardRow">
                                    <div className= "bigDescriptorColumn surveyDescDescriptor">
                                        Survey Description
                                    </div>
                                    <div className= "standardColumn surveyBigFields">
                                    <Form.Control as="textarea" rows={5} placeholder="This survey is meant to....." />
                                    </div>
                                </div>
                            </Form.Group>

                            <Card className= "optionsCard">
                                <div className= "standardRow">
                                    <div className= "smallDescriptorColumn questionPromptDiscriptor">
                                        Prompt
                                    </div>
                                    <div className= "standardColumn surveySmallFields">
                                        <Form.Control className= "smallFields" type="email" placeholder="Enter survey prompt" />
                                    </div>
                                </div>

                                <div className= "optionsHeader">
                                    Options
                                </div>

                                {
                                surveyOptions.map((value, index) => {
                                    return (
                                        <div className= "optionsContainer">
                                            <div className= " optionField">
                                                <Form.Control type="email" placeholder= {"Option " + (index + 1)} />
                                            </div>
                                        </div>
                                    )
                                })}

                                <div>
                                    <Button variant= "success" className= "addOptionsButton" onClick= {addOption()}>
                                        Add Another Option
                                    </Button>
                                </div>
                            </Card>

                            <Button variant= "primary" className= "submitSurveyButton">
                                Submit Survey
                            </Button>
                        </Form>
                    </Card>
                    <div className= "endOfPageSpacer" />
                </center>
            </Container>
        </div>
    )
}


export default surveyCreation;