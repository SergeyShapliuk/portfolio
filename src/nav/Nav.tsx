import React, {CSSProperties} from "react";
import {useTranslation} from "react-i18next";
import s from "./Nav.module.scss";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import {Images} from "../assets/Images";


type NavPropsType = {
    style?: CSSProperties
}

function Nav({style}: NavPropsType) {
    const {t} = useTranslation("nav");
    const variants = {
        open: {
            transition: {staggerChildren: 0.07, delayChildren: 0.2}
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1}
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: {stiffness: 1000, velocity: -100}
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: {stiffness: 1000}
            }
        }
    };

    const itemIds = [
        {id: 1, icon: Images.home_icon, title: t("items.home"), link: "home"},
        {id: 2, icon: Images.about_icon, title: t("items.about"), link: "about"},
        {id: 3, icon: Images.portfolio_icon, title: t("items.portfolio"), link: "my_works"},
        {
            id: 4,
            icon: Images.contacts_icon,
            title: t("items.contacts"),
            link: "contacts"
        }] as { id: number, icon: string, title: string, link: string, download?: boolean }[];

    const itemStyle = {border: `2px solid "#b0820c"`, backgroundColor: "#b0820c"};

    return (
        // <div className={s.navBlock}>
        //     <div className={s.container}>
        <motion.ul className={s.nav} variants={variants} style={style}>
            {itemIds.map(i => (
                <MenuItem item={i} key={i.id}/>
            ))}

            <motion.li
                className={s.itemNav}
                style={{marginTop: 50}}
                variants={itemVariants}         // <-- тот же variants, что у остальных
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <div className={s.icon_placeholder} style={itemStyle}>
                    <img src={Images.download_icon} className={s.navIcon}/>
                </div>
                <a
                    href={require("../assets/cv/sergey shaplyuk.pdf")}
                    download="Sergey Shapliuk CV"
                    target="_blank"
                    rel="noreferrer"
                    className={s.text_placeholder} style={itemStyle}
                >
                    {t("cvLinkText")}
                </a>
            </motion.li>

            {/*<div className={s.text}>*/}

            {/*    <Link activeClass={s.active}*/}
            {/*          to="home"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-200}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>Home</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="about"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>About</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="my_works"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>Portfolio</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="contacts"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>contacts</Link>*/}

            {/*</div>*/}
        </motion.ul>
        //     {/*</div>*/}
        // // </div>

    )
        ;
}

export default Nav;
