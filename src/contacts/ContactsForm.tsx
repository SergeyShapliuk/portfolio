import React from 'react';
import {FormikErrors, useFormik} from "formik";
import axios from "axios";
import {useTranslation} from "react-i18next";
import s from "./ContactsForm.module.scss"
import {Popups} from "../common/feature/popup/Popup";

type FormValuesType = {
    email?: string
    name?: string
    message?: string
}
const ContactsForm = () => {
    const {t} = useTranslation("contacts");
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
            formik.resetForm()
            await axios.post("https://server-smtp-node-js.herokuapp.com/sendMessage", values
            ).then(res => alert(t('form.successAlert')))
                .catch(err => alert(t('form.errorAlert')))
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

                <button type="submit">
                    {t('form.submit')}
                </button>
            </form>

        </div>
    )
}
export default ContactsForm;
