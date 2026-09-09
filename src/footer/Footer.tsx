import React from "react";
import {useTranslation} from "react-i18next";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import FloatText from "../common/feature/button/button hire me/FloatText";
import iconGitHub from "../assets/image/icon-github.png";
import iconLinkedin from "../assets/image/iconLinkedin.png";
import iconTelegram from "../assets/image/icon-telegram.png";
import Item from "./Item";
import {Bounce} from "react-awesome-reveal";


function Footer() {
    const {t} = useTranslation("footer");
    const gitHub = {
        backgroundImage: `url(${iconGitHub})`,
    };
    const linkedin = {
        backgroundColor: 'white',
        color: 'blue',
        backgroundImage: `url(${iconLinkedin})`,
    };
    const telegram = {
        color: 'red',
        backgroundImage: `url(${iconTelegram})`,
    };
    return (
        <div className={s.footerBlock}>
            <Bounce triggerOnce delay={500}>
                <FloatText/>
            </Bounce>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.items}>
                    <Item style={gitHub} hrefSocial={"https://github.com/SergeyShapliuk"}/>
                    <Item style={linkedin} hrefSocial={"https://www.linkedin.com/in/siarhei-shapliuk-frontend-dev/"}/>
                    <Item style={telegram} hrefSocial={"https://t.me/SergeShapliuk"}/>
                </div>
                <span><b>{t("copyright", {year: new Date().getFullYear()})}</b></span>
            </div>

        </div>
    )
}

export default Footer;
