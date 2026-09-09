import React from "react";
import {useTranslation} from "react-i18next";
import s from "./Education.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";


function Education() {
    const {t} = useTranslation("skills");
    return (
        <div id={"educ"} className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faRocket}/>
                    </div>
                    <h4>2025-2026</h4>
                    <h2>IT-INCUBATOR</h2>
                    <h3>{t("education.backendRole")}{"\n"}
                        Nest JS,
                        Node JS,
                        PostgreSQL,
                        MongoDB</h3>

                    <span>{t("education.schoolLine")}</span>
                    <p>{t("education.studiedIntro")}
                    </p>
                    <ul className={s.skillsList}  style={{paddingBottom:50}}>
                        <li>NESTJS</li>
                        <li>EXPRESS</li>
                        <li>NODEJS</li>
                        <li>JEST</li>
                        <li>GRAPHQL</li>
                        <li>POSTGRESQL</li>
                        <li>SWAGGER</li>
                        <li>DOCKER</li>
                        <li>SOCKETIO</li>
                        <li>KUBERNETES</li>

                    </ul>

                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faRocket}/>
                    </div>
                    <h4>2021-2022</h4>
                    <h2>IT-INCUBATOR</h2>
                    <h3>{t("education.frontendRole")}{"\n"}React, React-native, Typescript</h3>

                    <span>{t("education.schoolLine")}</span>
                    <p>{t("education.studiedIntro")}
                    </p>
                    <ul className={s.skillsList}>
                        <li>REACT</li>
                        <li>REACT_NATIVE</li>
                        <li>REST_API</li>
                        <li>TYPESCRIPT</li>
                        <li>REDUX</li>
                        <li>REDUX_TOOLKIT</li>
                        <li>JEST</li>
                        <li>UNIT_TESTS</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>STORYBOOK</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;
