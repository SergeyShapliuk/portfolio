import React, {useState} from 'react';
import {useFormik} from "formik";
import {useTranslation} from "react-i18next";
import s from "./ContactsForm.module.scss"
import {Popups} from "../common/feature/popup/Popup";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moevagka";

type FormValuesType = {
    email?: string
    name?: string
    message?: string
}

type StatusType = "idle" | "sending" | "success" | "error";

const ContactsForm = () => {
    const {t} = useTranslation("contacts");
    const [status, setStatus] = useState<StatusType>("idle");

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        validate: (values: FormValuesType) => {
            const errors: FormValuesType = {}
            if (!values.email?.trim()) {
                errors.email = t('form.errors.required');
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = t('form.errors.invalidEmail');
            }
            if (!values.name?.trim()) {
                errors.name = t('form.errors.nameRequired');
            } else if (values.name.length < 2) {
                errors.name = t('form.errors.nameTooShort');
            }
            if (!values.message?.trim()) {
                errors.message = t('form.errors.messageRequired');
            } else if (values.message.length < 7) {
                errors.message = t('form.errors.messageTooShort');
            }
            return errors;
        },
        onSubmit: async (values: FormValuesType) => {
            setStatus("sending");
            try {
                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(values)
                });
                if (!res.ok) throw new Error("Formspree request failed");
                setStatus("success");
                formik.resetForm();
            } catch (e) {
                setStatus("error");
            }
        }
    })
    return (
        <div className={s.contactsForm}>
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ?
                    <div><Popups error={formik.errors.email}/></div> : null}
                <input type="email"
                       placeholder={t('form.emailPlaceholder')}
                       {...formik.getFieldProps("email")}/>


                {formik.touched.name && formik.errors.name ?
                    <div><Popups error={formik.errors.name}/></div> : null}
                <input type="text"
                       placeholder={t('form.namePlaceholder')}
                       {...formik.getFieldProps("name")}/>


                {formik.touched.message && formik.errors.message ?
                    <div><Popups error={formik.errors.message}/></div> : null}
                <textarea
                    placeholder={t('form.messagePlaceholder')}
                    {...formik.getFieldProps("message")}/>

                <button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? t('form.sending') : t('form.submit')}
                </button>

                <div className={s.statusMessage} aria-live="polite">
                    {status === "success" && <span className={s.success}>{t('form.success')}</span>}
                    {status === "error" && <span className={s.error}>{t('form.error')}</span>}
                </div>
            </form>

        </div>
    )
}
export default ContactsForm;
