import React from "react";
import {useTranslation} from "react-i18next";
import s from "./ButtonWithGradient.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";


function ButtonWithGradient() {
    const {t, i18n} = useTranslation("common");
    const cvLink = i18n.language === "ru"
        ? require("../../../assets/cv/Sergey Shapliuk CV (RU).pdf")
        : require("../../../assets/cv/Sergey Shapliuk CV (EN).pdf");
    return (
        <div className={s.button}>
            <a id={"CV"} href={cvLink} download={"Sergey Shapliuk CV"}
               target={"_blank"} rel="noreferrer">
                <div><FontAwesomeIcon icon={faDownload} className={s.iconDownload}/></div>
                {t("downloadCvButton.download")}
                {" "}{t("downloadCvButton.cv")}</a>
        </div>
    );
}

export default ButtonWithGradient;
