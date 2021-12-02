import React, { useState } from "react";
import "./take_survey.css"
import light_mode_logo from '../../components/logos/word_logo_black.png';

import Slider from '@mui/material/Slider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function valuetext(value) {
    return `${value}°C`;
}

function createData(options, description) {
    return { options, description};
}

const rows = [
    createData('Option 1', "A young boy"),
    createData('Option 2', "A young boy"),
    createData('Option 3', "A young boy"),
    createData('Option 4', "A young boy"),
];

const ariaLabel = { 'aria-label': 'description' };

export default function take_surveys (props) {

    return(
        <div style={{width:'50%', justifyContent: 'center', alignItems:'center'}}>
            <Box sx={{ borderColor: 'text.primary', borderRadius: 16 }}>
                <h2>Mark the preferred options with higher values to rank the option</h2>
            </Box>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center" colSpan={2}>
                            Question: Who would you help first in an accident?
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="right">{row.options}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
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
                valueLabelDisplay="auto"npm
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
            <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                <Button variant="outlined">Prev</Button>
                <Button variant="outlined">Next</Button>
            </Stack>
        </div>
    );   
}

  