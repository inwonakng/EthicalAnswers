import React, { useState } from "react";
import "./take_survey.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import { Container, Form, Button, Card } from "react-bootstrap"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { toast } from 'react-toastify';
import { connect } from "react-redux"
import * as actions from "../../store/actions/auth"
import { Link } from "react-router-dom";

function valuetext(value) {
    return `${value}°C`;
}

export default function take_surveys (props) {
    return(
        <Box sx={{ width: 500 }}>
            <Slider
                aria-label="Option 1"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
            ></Slider>
            <Slider
                aria-label="Option 2"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
            ></Slider>
            <Slider
                aria-label="Option 3"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
            ></Slider>
            <Slider
                aria-label="Option 4"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
            ></Slider>
        </Box>
        
    );   
}

