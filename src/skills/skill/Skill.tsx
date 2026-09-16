import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import s from './Skill.module.scss'

const MOBILE_QUERY = "(max-width: 856px)";
// -webkit-line-clamp kept misplacing its ellipsis here (mid-word, with
// source text still rendering after it) in this flex + webkit-box +
// Swiper combination. Truncating the string itself in JS is less elegant
// but actually reliable. ~260 chars is roughly what the fixed 450px card
// has room for at this font-size once the icon and title are accounted
// for.
const MOBILE_DESCRIPTION_LIMIT = 260;

function useMatchMedia(query: string): boolean {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

function truncate(text: string, limit: number): string {
    if (text.length <= limit) return text;
    return text.slice(0, limit).replace(/\s+\S*$/, "") + "…";
}

function Skill(props: any) {
    const isMobile = useMatchMedia(MOBILE_QUERY);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const cardDescription = isMobile
        ? truncate(props.description, MOBILE_DESCRIPTION_LIMIT)
        : props.description;

    return (
        <>
            <div id={"lines"} className={s.skill} onClick={() => isMobile && setIsOpen(true)}>
                <div className={s.icon} style={props.style}/>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.description}>{cardDescription}</span>
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
