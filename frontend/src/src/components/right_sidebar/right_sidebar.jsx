import React from 'react'
import { Card, Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./right_sidebar.css"

function right_sidebar() {
    return (
        <div class = "side_col">
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title><center>Most Viewed Questions</center></Card.Title>
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
        </div>
    )
}

export default right_sidebar
