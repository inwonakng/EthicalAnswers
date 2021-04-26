import React from 'react'
import "./mysurveys.css"

import { Container, Row, Col } from "react-bootstrap"

import LeftSideBar from "../../components/left_sidebar/left_sidebar"
import RightSideBar from "../../components/right_sidebar/right_sidebar"
import RankLayout from "../../components/rank_layout/rank_layout"
import MyQuestions from "../../components/my_surveys/my_surveys"

function mysurveys() {
    return (
        <div className="mySurveysCSS">
            <Container fluid>
                <Row>
                    <Col xs={2} className="leftSideBar">
                        <center>
                            <LeftSideBar/>
                        </center>
                    </Col>
                    <Col xs={7} className="content">
                        <RankLayout/>
                        <br></br>
                        <MyQuestions/>
                    </Col>
                    <Col className="rightBar">
                        <RightSideBar/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default mysurveys
