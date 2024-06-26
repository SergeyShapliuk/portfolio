import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Education from "../skills/skill/Education";
import SkillItem from "../skills/skillsLinesItem/SkilIsLinesItem";
import Experience from "../skills/skill/Experience";



function RoutersSkills(){
    return(
        <div>
          <Routes>
              <Route path={'/'} element={<Experience/>}/>
              <Route path={'/educ'} element={<Education/>}/>
              <Route path={'/lines'} element={<SkillItem/>}/>

              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>


        </div>
    )
}
export default RoutersSkills;
