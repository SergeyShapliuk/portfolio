import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import SkillItem from "./skills/skillsLinesItem/SkilIsLinesItem";


function App() {
    return (
        <div className="app">

            <Header/>
            <Main/>
            <Skills/>
            <SkillItem/>
            <MyWorks/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;