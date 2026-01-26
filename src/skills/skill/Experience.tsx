import React from "react";
import s from "./Experience.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import ButtonWithGradient from "../../common/feature/button/ButtonWithGradient";


function Experience() {

    return (
        <div id={"experience"} className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </div>
                    <h4>2021-2026</h4>
                    {/*<h2>Part Time</h2>*/}
                    <h3>Frontend Developer - (React, React-native, TypeScript, Node.js, NestJS)</h3>
                    <p>I`m a freelance creative designer with a love for minimal design,
                        clean typography and well-written code.
                    </p>
                    <span>
I am a Fullstack developer with experience in **React** and **React Native** for building modern web and mobile applications.
On the frontend, I use **Redux / Redux Toolkit / RTK Query / React-Redux / React Router DOM / Redux Thunk**, **Formik**, **Axios**, **Material UI**, and **Ant Design**.
On the backend, I work with **Node.js / Express / NestJS**, **REST APIs / GraphQL**, **PostgreSQL / MongoDB**, and authentication with **JWT / Passport.js**.
I ensure code quality with **TypeScript**, **unit testing**, and document components using **Storybook**.
I am passionate about learning new technologies and expanding my skills in fullstack development, including **Angular**, **GraphQL**, and advanced **React Native** projects.
</span>

                </div>
                <ButtonWithGradient/>
            </div>

        </div>
    );
}

export default Experience;
