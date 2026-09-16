import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import s from './Skill.module.scss'


function Skill(props: any) {
    const {t} = useTranslation("skills");
    // Only affects the mobile layout: the card clamps the description to a
    // few lines there (see Skill.module.scss), and tapping it toggles the
    // full text instead of letting it overflow the card.
    const [expanded, setExpanded] = useState(false);

    return (
        <div id={"lines"} className={s.skill} onClick={() => setExpanded(prev => !prev)}>
            <div className={s.icon} style={props.style}>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={`${s.description} ${expanded ? s.expanded : ""}`}>{props.description}</span>
            <span className={s.readMore}>{t(expanded ? "readLess" : "readMore")}</span>
        </div>
    )
}

export default Skill;