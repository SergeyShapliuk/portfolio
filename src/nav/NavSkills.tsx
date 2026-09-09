import React from "react";
import {useTranslation} from "react-i18next";
import s from './NavSkills.module.scss'
import {NavLink} from "react-router-dom";


function NavSkills() {
    const {t} = useTranslation("nav");

    return (
        <div className={s.skillsBlock}>
            <div className={s.navSkillsBlock}>
                <div className={s.textExperience}>
                    <NavLink to={'/'} className={(navData) => navData.isActive ? s.active : ""}>{t("subnav.experience")}</NavLink>
                </div>
                <div className={s.textEducation}>
                    <NavLink to={'/educ'} className={(navData) => navData.isActive ? s.active : ""}>{t("subnav.education")}</NavLink>
                </div>
                <div className={s.textSkills}>
                    <NavLink to={'/lines'} className={(navData) => navData.isActive ? s.active : ""}>{t("subnav.skills")}</NavLink>
                </div>
            </div>

        </div>

    )
}

export default NavSkills;
