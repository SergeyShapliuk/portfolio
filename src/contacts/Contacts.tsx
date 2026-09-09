import React from "react";
import {useTranslation} from "react-i18next";
import s from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import ContactsForm from "./ContactsForm";
import {Element as ScrollElement} from "react-scroll";

const Element = ScrollElement as unknown as React.FC<any>;


function Contacts() {
    const {t} = useTranslation("contacts");

    return (
        <Element name={"contacts"}>
            <section className={s.contactsBlock}>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title title={t("title")} titleBg={"contacts"}/>
                    <div className={s.discuss}>
                        <h2>{t("discussHeading")}</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} className={s.icon}/><span>+375293692937</span></li>
                            <li><FontAwesomeIcon icon={faEnvelope}
                                                 className={s.icon}/><span> sergeshapluk.gmail.com</span></li>
                            <li><FontAwesomeIcon icon={faGlobe} className={s.icon}/><span>{t("location")}</span></li>
                        </ul>
                    </div>
                </div>
                <ContactsForm/>
            </section>
        </Element>
    );
}

export default Contacts;
