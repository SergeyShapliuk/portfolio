import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import FloatText from "../common/feature/button/button hire me/FloatText";
import iconCodeWars from "../assets/image/icon-codewars.png";
import iconGitHub from "../assets/image/icon-github.png";
import iconLinkedin from "../assets/image/iconLinkedin.png";
import iconTelegram from "../assets/image/icon-telegram.png";
import Item from "./Item";
import {Bounce} from "react-awesome-reveal";


function Footer() {
    const codeWars = {
        backgroundColor: 'red',
        backgroundImage: `url(${iconCodeWars})`,
    };
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
                    <Item style={codeWars} hrefSocial={"https://www.codewars.com/users/sergeyshapliuk"}/>
                    <Item style={gitHub} hrefSocial={"https://github.com/SergeyShapliuk"}/>
                    <Item style={linkedin} hrefSocial={"https://www.linkedin.com/in/siarhei-shapliuk-frontend-dev/"}/>
                    <Item style={telegram} hrefSocial={"https://t.me/SergeShapliuk"}/>
                </div>
                <span><b>Copyright &copy; {new Date().getFullYear()}. All right reserved.</b></span>
            </div>

        </div>
    )
}

export default Footer;
