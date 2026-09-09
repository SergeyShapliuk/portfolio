import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enMain from "./locales/en/main.json";
import enSkills from "./locales/en/skills.json";
import enMyWorks from "./locales/en/myWorks.json";
import enContacts from "./locales/en/contacts.json";
import enFooter from "./locales/en/footer.json";
import enNav from "./locales/en/nav.json";

import ruCommon from "./locales/ru/common.json";
import ruMain from "./locales/ru/main.json";
import ruSkills from "./locales/ru/skills.json";
import ruMyWorks from "./locales/ru/myWorks.json";
import ruContacts from "./locales/ru/contacts.json";
import ruFooter from "./locales/ru/footer.json";
import ruNav from "./locales/ru/nav.json";

export const defaultNS = "common";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
                main: enMain,
                skills: enSkills,
                myWorks: enMyWorks,
                contacts: enContacts,
                footer: enFooter,
                nav: enNav
            },
            ru: {
                common: ruCommon,
                main: ruMain,
                skills: ruSkills,
                myWorks: ruMyWorks,
                contacts: ruContacts,
                footer: ruFooter,
                nav: ruNav
            }
        },
        fallbackLng: "en",
        supportedLngs: ["en", "ru"],
        defaultNS,
        ns: ["common", "main", "skills", "myWorks", "contacts", "footer", "nav"],
        interpolation: {escapeValue: false},
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "portfolio_lang"
        }
    });

export default i18n;
