import React from 'react'
import "./rank_layout.css"

import { Card, Form } from "react-bootstrap"

function rank_layout() {
    return (
        <Card className="rankLayout">
            <Form>
                <Card.Title>RANK BY:</Card.Title>
                <div className="shadow-sm mb-3">
                    <Form.Check inline label="Trending" type="radio" id="inline-radio-1"/>
                    <Form.Check inline label="Latest" type="radio" id="inline-radio-1"/>
                </div>
                <Card.Title>LAYOUT:</Card.Title>
                <div className="mb-3">
                    <Form.Check inline label="Cards" type="radio" id="inline-radio-1"/>
                </div>
            </Form>
        </Card>
    )
}

export default rank_layout
