import * as React from "react";
import s from "../MyWork.module.scss";
import {motion, useDeprecatedInvertedScale} from "framer-motion";
import {Images} from "../../../assets/Images";

type ContentPlaceholderPropsType = {
    icon: string | undefined,
    title: string,
    description: string,
    tech?: string[],
    androidLink?: string,
    iosLink?: string
    demo?: string,
    github?: string
}
export const ContentPlaceholder = React.memo(({
                                                  icon,
                                                  title,
                                                  description,
                                                  tech,
                                                  androidLink,
                                                  iosLink,
                                                  demo,
                                                  github
                                              }: ContentPlaceholderPropsType) => {
    const inverted = useDeprecatedInvertedScale();
    return (
        <motion.div
            className={s.content_container}
            style={{...inverted, originY: 0, originX: 0}}
        >
            <div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}><img
                src={icon}
                className={s.card_icon}/>
                <h2 style={{paddingLeft: 20}}>{title}</h2>


            </div>
            {description && <p>{description}</p>}
            {tech && tech.length > 0 && (
                <ul className={s.tech_list}>
                    {tech.map(item => <li key={item} className={s.tech_chip}>{item}</li>)}
                </ul>
            )}
            <div className={s.content_store}>
                {androidLink && <a href={androidLink} target={"_blank"} rel="noreferrer">
                    <motion.img whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                src={require("../../../assets/image/googleplay.png")}
                                style={{width: 120, cursor: "pointer"}}/>
                </a>}
                {iosLink && <a href={iosLink} target={"_blank"} rel="noreferrer">
                    <motion.img whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                src={require("../../../assets/image/appstore.png")} style={{
                        width: 120, marginLeft: 20, cursor: "pointer"
                    }}/>
                </a>}
                {github && <a href={github} target={"_blank"} rel="noreferrer">
                    <motion.img whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                src={Images.github_icon} style={{
                        width: 120, height:32, marginLeft: 20,objectFit:'cover' ,borderRadius:8,borderWidth:1,borderStyle:'solid', borderColor:'white',cursor: "pointer"
                    }}/>
                </a>}
                {demo && <a href={demo} target={"_blank"} rel="noreferrer">
                    <motion.img whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                src={Images.demo_icon} style={{
                        width: 120,height:30, marginLeft: 20,objectFit:'cover',borderRadius:8, borderWidth:1,borderStyle:'solid', borderColor:'white', cursor: "pointer"
                    }}/>
                </a>}
            </div>
        </motion.div>
    );
});
