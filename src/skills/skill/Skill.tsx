import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import s from './Skill.module.scss'

const MOBILE_QUERY = "(max-width: 856px)";

function Skill(props: any) {
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
            </div>

            {isOpen && createPortal(
                // Swiper puts a transform on its slides for the coverflow
                // effect, which turns them into the containing block for any
                // position: fixed descendant — the modal was being sized and
                // clipped against the slide's own box instead of the real
                // viewport. Rendering it into document.body sidesteps that.
                <div className={s.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={s.modalCard} onClick={e => e.stopPropagation()}>
                        <button type="button" className={s.closeButton} onClick={() => setIsOpen(false)}
                                aria-label="Close">×
                        </button>
                        <div className={s.icon} style={props.style}/>
                        <h3 className={s.skillTitle}>{props.title}</h3>
                        <span className={s.description}>{props.description}</span>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export default Skill;
