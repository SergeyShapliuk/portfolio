import React, {useEffect, useRef} from "react";
import s from "./Header.module.scss";
import Nav from "../nav/Nav";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "../common/utils/hooks/useDimesions";
import {MenuToggle} from "../nav/MenuToggle";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 1 + 0}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

function Header() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);

    const handleScroll = () => {
        if (isOpen) {
            console.log("scroll");
            toggleOpen();
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    return (
        <motion.nav className={s.navItem}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    style={{pointerEvents: "auto",zIndex:999}}
        >
            <motion.div className={s.background} variants={sidebar}/>
            <Nav style={{pointerEvents: isOpen ? "auto" : "none"}}/>
            <MenuToggle toggle={() => toggleOpen()}/>
        </motion.nav>

    );
}

export default Header;
