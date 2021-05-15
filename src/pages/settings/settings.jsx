import React from "react";
import "./settings.css"

import { Container, Row, Col, Card, Form } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function settingsPage (props) {
    return(
        <div className="settingsPageCSS">
            <Container fluid>
                <Row>
                    <Col xs={2} className="leftSideBar">
                        <center>
                            {
                                localStorage.getItem('token') !== null && localStorage.getItem('username') !== null ?

                                <>
                                    <div className="leftSideBarButton">
                                        <Link to="/settings"><Button variant="light" className="mr-sm-2"><i class="fas fa-user-circle"></i> {`${localStorage.getItem('username')}`}</Button></Link>
                                        <br></br>
                                        <Link to="/surveys"><Button variant="light" className="mr-sm-2"><i class="fas fa-globe"></i> All Surveys</Button></Link>
                                        <br></br>
                                        <Link to="/mysurveys"><Button variant="light" className="mr-sm-2"><i class="fas fa-user"></i> My Surveys</Button></Link>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="leftSideBarButton">
                                        <Link to="/login">Login</Link>
                                    </div>
                                </>
                            }
                        </center>
                    </Col>
                    <Col xs={7} className="content">
                        <center>
                            <h1>Settings Page</h1>
                        </center>
                    </Col>
                    <Col className="rightBar">
                        <Card>
                            <Card.Body>
                                <Card.Title><center>Most Answered Questions</center></Card.Title>
                                <Card.Text>
                                    <Link>Question 1</Link>
                                    <br></br>
                                    <Link>Question 1</Link>
                                    <br></br>
                                    <Link>Question 1</Link>
                                    <br></br>
                                    <Link>Question 1</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card>
                            <Card.Body>
                                <Card.Title><center>Ask Your Question</center></Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Are brownies or cookies delicious?"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" block>Submit</Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card>
                            <Card.Body>
                                <Card.Title><center>Help Us Improve</center></Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="There should be more pictures of cats, dogs, unicor..."/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" block>Submit</Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default settingsPage;