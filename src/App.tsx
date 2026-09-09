import React from "react";
import "./App.scss";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HeaderSkills from "./header/HeaderSkills";
import {Fade} from "react-awesome-reveal";
import Header from "./header/Header";
import {motion, useScroll} from "framer-motion";
import ButtonScrollToTop from "./ui/ButtonScrollToTop";
import CursorBalls from "./ui/CursorBalls";
import MyWorksList from "./myWorks/MyWorks";
import LanguageSwitcher from "./nav/LanguageSwitcher";


function App() {
    const {scrollYProgress} = useScroll();

    // console.log(scrollYProgress)

    return (
        <div className="app">
            <motion.div style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                backgroundColor: "#ffb400",
                // paddingTop: 63,
                // transformOrigin: "0%",
                scaleX: scrollYProgress,
                zIndex: 1
            }}/>
            <CursorBalls/>
            <LanguageSwitcher/>
            <Header/>
            <Fade cascade damping={0.1}>
                <Main/>
                <Skills/>
                <HeaderSkills/>
                <MyWorksList/>
                <Contacts/>
                <Footer/>
            </Fade>
            <ButtonScrollToTop/>
        </div>

    );
}

export default App;
