import React from "react";
import {useTranslation} from "react-i18next";
import s from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import ReactTypingEffectDemo from "../common/feature/type writer/typedLibrary/ReactTypingEffectDemo";
import photo from "../assets/image/photo.jpg";
import {Element as ScrollElement} from "react-scroll";

const Element = ScrollElement as unknown as React.FC<any>;


function Main() {
    const {t} = useTranslation("main");
    let bg: any = document.querySelectorAll("#photo");
    for (let i = 0; i < bg.length; i++) {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            bg[i].style.transform = "translate(+" + x * 20 + "px, -" + y * 20 + "px)";
        });
    }
    return (
        <Element name={"home"}>
            <section className={s.mainBlock}>
                <div className={`${styleContainer.container} ${s.mainContainer}`}>
                    <div className={s.text}>
                        <span>{t("greeting")}</span>
                        {/*<h2>-I'm Sergey Shapliuk.</h2>*/}
                        <h2>{t("heroName")}</h2>
                        <ReactTypingEffectDemo/>
                        <p>
                            {t("bio")}
                        </p>
                    </div>
                    <div id={"photo"} className={s.photo}>
                        <img src={photo} id={"photo"} alt=""/>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Main;
