import React from "react";
import {useTranslation} from "react-i18next";
import s from './RollerText.module.scss'
import ButtonHireMe from "../button/button hire me/FloatText";
import {Link} from "react-router-dom";


function RollerText() {
    const {t} = useTranslation("common");
    return (
        <div className={s.rollerTextBlock}>
            <h3><Link to={'/contacts'}><ButtonHireMe/></Link>
                <div className={s.roller}>
                    <span className={s.rollText}>
                        HTML<br/>
                        CSS<br/>
                        Java Script<br/>
                    React<br/>
                    Typescript<br/>
                    <span className={s.spareTime}>{t("rollerCallout")}<br/></span>
                </span></div>
            </h3>
        </div>

    )
}
export default RollerText;