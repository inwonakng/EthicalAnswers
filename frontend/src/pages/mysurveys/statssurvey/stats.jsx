import React from "react";
import "./stats.css";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function mysurveys() {
return (
<div className="mySurveysCSS">
    <Container fluid>
    <Row>
        <Col xs={2} className="leftSideBar">
        <center>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("username") !== null ? (
            <>
                <div className="leftSideBarButton">
                <Link to="/settings">
                    <Button variant="light" className="mr-sm-2">
                    <i class="fas fa-user-circle"></i>{" "}
                    {`${localStorage.getItem("username")}`}
                    </Button>
                </Link>
                <br></br>
                <Link to="/surveys">
                    <Button variant="light" className="mr-sm-2">
                    <i class="fas fa-globe"></i> All Surveys
                    </Button>
                </Link>
                <br></br>
                <Link to="/mysurveys">
                    <Button variant="light" className="mr-sm-2">
                    <i class="fas fa-user"></i> My Surveys
                    </Button>
                </Link>
                </div>
            </>
            ) : (
            <>
                <div className="leftSideBarButton">
                <Link to="/login">Login</Link>
                </div>
            </>
            )}
        </center>
        </Col>
        <Col xs={7} className="content">
            <Card>
                <h1>Survey Name</h1>
                <br></br>
                <b>Prompt:</b>
                <br></br>
                <b>Number of responses:</b>
                <br></br>
                <b>Date created:</b>
                <br></br>
                Chart.js
                <br></br>
                <b>Download Data</b>
                <br></br>
            </Card>
        <br></br>
        </Col>
        <Col className="rightBar">
        <Card>
            <Card.Body>
            <Card.Title>
                <center>Most Answered Questions</center>
            </Card.Title>
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
            <Card.Title>
                <center>Ask Your Question</center>
            </Card.Title>
            <Card.Text>
                <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                    type="text"
                    placeholder="Are brownies or cookies delicious?"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
                </Form>
            </Card.Text>
            </Card.Body>
        </Card>
        <br></br>
        <Card>
            <Card.Body>
            <Card.Title>
                <center>Help Us Improve</center>
            </Card.Title>
            <Card.Text>
                <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                    type="text"
                    placeholder="There should be more pictures of cats, dogs, unicor..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
                </Form>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </Container>
</div>
);
}

export default mysurveys;
