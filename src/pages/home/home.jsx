import React from "react";
import "./home.css"
// import light_mode_logo from '../../components/logos/word_logo_black.png';
import Cards from '../../components/Cards';
// import HeroSection from '../../components/HeroSection';
// import Footer from '../../components/Footer';

function homePage (props) {
    return(
        <>
          <HeroSection />
          <Cards />
        </>
    );
}

export default homePage;