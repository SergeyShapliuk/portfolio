import React from "react";
import s from "./CVModal.module.scss";

type CVModalProps = {
    isOpen: boolean;
    onClose: () => void;
    cvLink: string;
};

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, cvLink }) => {
    if (!isOpen) return null;

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <h2>These are examples, but not actual projects.</h2>
                <p>You can download the latest CV to see all my work.</p>
                {/*<a href={cvLink} target="_blank" rel="noopener noreferrer">*/}
                {/*    <button className={s.downloadBtn}>Download CV</button>*/}
                {/*</a>*/}
                <button className={s.closeBtn} onClick={onClose}>✕</button>
            </div>
        </div>
    );
};

export default CVModal;
