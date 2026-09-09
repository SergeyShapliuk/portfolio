import React from "react";
import {Trans, useTranslation} from "react-i18next";
import s from "./Experience.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import ButtonWithGradient from "../../common/feature/button/ButtonWithGradient";


function Experience() {
    const {t} = useTranslation("skills");

    return (
        <div id={"experience"} className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </div>
                    <h4>2021-2026</h4>
                    {/*<h2>Part Time</h2>*/}
                    <h3>{t("experience.role")}</h3>
                    <p>{t("experience.shortBio")}
                    </p>
                    <span>
                        <Trans i18nKey="experience.longBio" ns="skills" components={{strong: <strong/>}}/>
                    </span>

                </div>
                <ButtonWithGradient/>
            </div>

        </div>
    );
}

export default Experience;
