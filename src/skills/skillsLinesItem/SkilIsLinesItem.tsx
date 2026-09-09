import React from "react";
import {useTranslation} from "react-i18next";
import s from './SkillsLinesItem.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";

function SkillItem() {
    const {t} = useTranslation("skills");

    return (
        <div className={s.skillItemsBlock}>
            <div className={`${styleContainer.container} ${s.skillsLinesContainer}`}>
                <div className={s.skillItems}>
                    <li>
                        <h3>{t("bars.typescript")} - 67%</h3><span className={s.bar}><span className={s.typescript}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.javascript")} - 60%</h3><span className={s.bar}><span className={s.javaScript}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.react")} - 70%</h3><span className={s.bar}><span className={s.react}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.reactNative")} - 80%</h3><span className={s.bar}><span className={s.axios}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.redux")} - 75%</h3><span className={s.bar}><span className={s.redux}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.nodejs")} - 65%</h3><span className={s.bar}><span className={s.node}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.nestjs")} - 63%</h3><span className={s.bar}><span className={s.nest}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.git")} - 63%</h3><span className={s.bar}><span className={s.git}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.html5")} - 50%</h3><span className={s.bar}><span className={s.html}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.css")} - 74%</h3><span className={s.bar}><span className={s.css}></span></span>
                    </li>
                    <li>
                        <h3>{t("bars.graphql")} - 65%</h3><span className={s.bar}><span className={s.graphql}></span></span>
                    </li>
                </div>
            </div>
        </div>

    )
}

export default SkillItem;
