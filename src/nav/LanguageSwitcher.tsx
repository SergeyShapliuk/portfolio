import React from "react";
import {useTranslation} from "react-i18next";
import s from "./LanguageSwitcher.module.scss";

const LANGS = [
    {code: "en", label: "EN"},
    {code: "ru", label: "RU"}
] as const;

function LanguageSwitcher() {
    const {i18n} = useTranslation();
    const current = i18n.resolvedLanguage ?? i18n.language;

    return (
        <div className={s.langSwitcher}>
            {LANGS.map(({code, label}) => (
                <button
                    key={code}
                    type="button"
                    className={`${s.langButton} ${current === code ? s.active : ""}`}
                    onClick={() => i18n.changeLanguage(code)}
                    aria-pressed={current === code}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default LanguageSwitcher;
