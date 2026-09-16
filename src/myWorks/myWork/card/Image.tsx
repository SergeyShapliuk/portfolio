import * as React from "react";
import {motion, useDeprecatedInvertedScale} from "framer-motion";
import {closeSpring} from "./animations";
import s from "../MyWork.module.scss";

export const Image = ({
                          id,
                          isSelected,
                          pointOfInterest = 0,

                          image
                      }: any) => {
    const inverted = useDeprecatedInvertedScale();

    return (
        <motion.div
            className={s.card_image_container}
            style={{...inverted, originX: 0, originY: 0}}
        >
            <motion.img
                className={s.card_image}
                src={image}
                alt=""
                initial={false}
                animate={
                    isSelected ? {x: 0, y: 0} : {x: -pointOfInterest, y: 0}
                }
                layout
                transition={closeSpring}
            />
        </motion.div>
    );
};
