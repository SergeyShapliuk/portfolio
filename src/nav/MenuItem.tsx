import * as React from "react";
import {motion} from "framer-motion";
import s from "./Nav.module.scss";
import {Link as ScrollLink} from "react-scroll";

const Link = ScrollLink as unknown as React.FC<any>;

const variants = {
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

const colors = ["", "#fff1d0", "#ffe29c", "#efb323", "#b0820c"];

type MenuItemPropsType = {
    item: { id: number, icon: string, title: string, link: string }
}

export const MenuItem = ({item}: MenuItemPropsType) => {
    const style = {border: `2px solid ${colors[item.id]}`, backgroundColor: `${colors[item.id]}`};
    return (
        <Link
            to={item.link}
            spy={true}
            smooth={true}
            offset={-200}
            spyThrottle={500}
            duration={1000}>
            <motion.li className={s.itemNav}
                       variants={variants}
                       whileHover={{scale: 1.1}}
                       whileTap={{scale: 0.95}}
            >

                <div className={s.icon_placeholder} style={style}><img src={item.icon} className={s.navIcon}/></div>
                <div className={s.text_placeholder} style={style}>{item.title}</div>

            </motion.li>
        </Link>
    );
};
