import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import s from './Skill.module.scss'

const MOBILE_QUERY = "(max-width: 856px)";

function Skill(props: any) {
    const {t} = useTranslation("skills");
    // Only relevant on mobile: the card clamps the description there (see
    // Skill.module.scss), and tapping it opens the full text in a modal
    // instead of growing the card, which kept the grid's uniform height.
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const openIfMobile = () => {
        if (window.matchMedia(MOBILE_QUERY).matches) {
            setIsOpen(true);
        }
    };

    return (
        <>
            <div id={"lines"} className={s.skill} onClick={openIfMobile}>
                <div className={s.icon} style={props.style}/>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
                <span className={s.readMore}>{t("readMore")}</span>
            </div>

            {isOpen && (
                <div className={s.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={s.modalCard} onClick={e => e.stopPropagation()}>
                        <button type="button" className={s.closeButton} onClick={() => setIsOpen(false)}
                                aria-label="Close">×
                        </button>
                        <div className={s.icon} style={props.style}/>
                        <h3 className={s.skillTitle}>{props.title}</h3>
                        <span className={s.description}>{props.description}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Skill;
