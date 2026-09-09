import React from "react";
import {useTranslation} from "react-i18next";
import s from "./CVModal.module.scss";

type CVModalProps = {
    isOpen: boolean;
    onClose: () => void;
    cvLink: string;
};

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, cvLink }) => {
    const {t} = useTranslation("common");
    if (!isOpen) return null;

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <h2>{t("cvModal.body")}</h2>
                <a href={cvLink} download="Sergey Shapliuk CV" target="_blank" rel="noopener noreferrer">
                    <button className={s.downloadBtn} onClick={onClose}>{t("cvModal.downloadButton")}</button>
                </a>
                <button className={s.closeBtn} onClick={onClose}>✕</button>
            </div>
        </div>
    );
};

export default CVModal;
