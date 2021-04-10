import React from "react";
import "./index.css"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"


const homePage = () => {
    return(
        <div className="home_page">
            <div className="top_page">
                <video src="../videos/homepage_video.mp4" autoPlay loop muted></video>
                <h1>EthicalAnswers</h1>
                <p>Get the most optimal solution to your problem</p>
                <Image className="rpi_logo" src="../images/rpi.png" rounded/>
                <Image className="ibm_logo" src="../images/ibm.png" rounded/>
            </div>
            <div className="middle_page">
                <center><h2>Trending Surveys</h2></center>
                <div className="survey_cards">
                    <Card body>There should be multiple cards representing individual survey-- should also be scrolling horizontally</Card>
                </div>
            </div>
            <div className="bottom_page">
                <center><h2>Some other content</h2></center>
                <Card body>Some other content</Card>
            </div>
            
            
            
            
            
            
            
            {/* <div className="hero-btns"></div>
            <h1>Top part!</h1>
            <ul>
                <li>Video in the background</li>
                <li>EthicalAnswers on the left side of the screen</li>
                <li>RPI & IBM logo</li>
            </ul>
            <h1>Middle part!</h1>
            <ul>
                <li>Nice background color</li>
                <li>Current trending survey cards</li>
                <li>Leaderboard?</li>
            </ul>
            <h1>Lead & Developers!</h1>
            <ul>
                <li>Lirong</li>
                <li>Inwon</li>
                <li>Farhad</li>
                <li>Nishant</li>
                <li>Megan</li>
                <li>Everyone else...</li>
            </ul> */}
        </div>
    );
}


export default homePage;