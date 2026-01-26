import React, {useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

const Link = ScrollLink as unknown as React.FC<any>;

const ButtonScrollToTop = () => {
    const {scrollY} = useScroll();
    const [targetScroll, setTargetScroll] = useState<boolean>(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest, targetScroll);
        if (latest >= 1300) {
            setTargetScroll(true);
        } else if (latest < 1300) {
            setTargetScroll(false);
        }
    });

    return (
        <Link to="home"
              spy={true}
              smooth={true}
              offset={-200}
              spyThrottle={500}
              duration={1000}>
            <motion.div style={{
                position: "fixed",
                width: 35,
                height: 35,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffb400",
                right: 15,
                bottom: 18,
                borderRadius: 50,
                opacity: .5,
                cursor: "pointer",
                zIndex: 10
            }}
                        initial={{y: 120}}
                        animate={targetScroll ? {y: -25, rotate: [0, 0, 270, 270, 0]} : {
                            rotate: [0, -270, -270, 0, 0],
                            y: 120
                        }}
                        transition={{ease: "easeOut", duration: .7}}><FontAwesomeIcon icon={faChevronUp}
                                                                                      style={{color: "black"}}/>
            </motion.div>
        </Link>
    );
};

export default ButtonScrollToTop;
