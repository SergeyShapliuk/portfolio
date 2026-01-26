import React from "react";
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

    return (
        <Element name={"contacts"}>
            <section className={s.contactsBlock}>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title title={"Contacts"} titleBg={"contacts"}/>
                    <div className={s.discuss}>
                        <h2>Let's Discuss Your project</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} className={s.icon}/><span>+375293692937</span></li>
                            <li><FontAwesomeIcon icon={faEnvelope}
                                                 className={s.icon}/><span> sergeshapluk.gmail.com</span></li>
                            <li><FontAwesomeIcon icon={faGlobe} className={s.icon}/><span> Belarus,Minsk</span></li>
                        </ul>
                    </div>
                </div>
                <ContactsForm/>
            </section>
        </Element>
    );
}

export default Contacts;
