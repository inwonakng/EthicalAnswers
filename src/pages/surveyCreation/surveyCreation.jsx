import React, { useState } from "react";
import "./surveyCreation.css"

import { Container, Card, Form } from "react-bootstrap"
import { Button } from "react-bootstrap";

const SurveyCreation = props => {
    
    const [surveyInfo, setSurveyInfo] = useState({});

    const handleInput = (field, e) => {
        setSurveyInfo({...surveyInfo,[field]: e.target.value})
    }

    const [fields, setFields] = useState([{ value: null }]);

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAddOption() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleAddQuestion() {
        
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    function packageSurvey(){
        var now = new Date();
        var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var timeStamp = date + ' ' + time;

        var optionsArr = [];
        for (var i = 0; i < fields.length; i++){
            var newOption = {};
            newOption["name"] = "Option " + (i + 1);
            newOption["text"] = fields[i];
            newOption["score"] = null;
            optionsArr.push(newOption);
        }
            
        return JSON.stringify({
            "prompt": surveyInfo.prompt,
            "survey_title": surveyInfo.title,
            "description": surveyInfo.description,
            "user": {
                // Instructed to leave this blank until future implementation... //
            },
            "number_of_answers": 0,
            "creation_time": timeStamp,
            "questions": [
                {
                    "question": "Assign scores to the options",
                    "options": optionsArr
                }
            ]
        });
    }

    function submitSurvey(){
        var newJSON = packageSurvey(); // This is the JSON made when the "Submit Survey" button is pressed
        console.log(newJSON);
        // Backend code should be added here in order to carry out survey storage //
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
                                        <Form.Control type="text" placeholder="Enter Survey Title" onChange={e => handleInput('title', e)} required />
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className="allForms" controlId="formBasicEmail">
                                <div className= "standardRow">
                                    <div className= "bigDescriptorColumn surveyDescDescriptor">
                                        Survey Description
                                    </div>
                                    <div className= "standardColumn surveyBigFields">
                                    <Form.Control as="textarea" rows={5} placeholder="This survey is meant to....." onChange={e => handleInput('description', e)} required/>
                                    </div>
                                </div>
                            </Form.Group>

                            {fields.map((field, questionID) => {
                                return (
                                    <Card className= "optionsCard">
                                        <div className= "standardRow">
                                            <div className= "smallDescriptorColumn questionPromptDiscriptor">
                                                Prompt
                                            </div>
                                            <div className= "standardColumn surveySmallFields">
                                                <Form.Control className= "smallFields" type="email" placeholder="Enter survey prompt" onChange={e => handleInput('prompt', e)} required />
                                            </div>
                                        </div>
        
                                        <div className= "optionsHeader">
                                            Options
                                        </div>
                                        
                                        {fields.map((field, optionID) => {
                                            return (
                                                    <div key={`${field}-${optionID}`} className= "optionsContainer">
                                                        <div className= "standardRow">
                                                            <div className= "standardColumn optionTextBox">
                                                                <Form.Control type="text" placeholder= {"Option " + (optionID + 1)} onChange={e => handleChange(optionID, e)} />
                                                            </div>
                                                            <div className= "optionDeleteButtonColumn">
                                                                <Button variant= "danger" className="mr-sm-2 removeOptionButton" onClick={() => handleRemove(optionID)}>
                                                                    <i className="fas fa-minus"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                            );
                                        })}
                                        <div>
                                            <Button variant= "success" className= "addOptionsButton" onClick= {() => handleAddOption()}>
                                                Add Another Option
                                            </Button>
                                        </div>
                                    </Card>
                                );
                            })}

                            

                            <div>
                                <Button variant= "info" className= "addQuestionsButton" onClick= {() => handleAddQuestion()}>
                                    Add Another Question
                                </Button>
                            </div>
                            <div>
                                <Button variant= "primary" className= "submitSurveyButton" onClick= {() => submitSurvey()}>
                                    Submit Survey
                                </Button>
                            </div>
                        </Form>
                    </Card>
                    <div className= "endOfPageSpacer" />
                </center>
            </Container>
        </div>
    )
}


export default SurveyCreation;