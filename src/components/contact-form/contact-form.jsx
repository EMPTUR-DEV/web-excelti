import React from 'react'
import styles from  './contact-form.module.scss'
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <h3>{t("contact")}</h3>
                <div className={ ` ${styles.inputContainer} `}>
                    <input type="text" placeholder='Nombre' className={` ${styles.text}  `}/>
                </div>
                <div className={`  ${styles.inputContainer}`}>
                    <input type="text" placeholder='Email' className={`${styles.text}`}/>
                </div>
                <div className={`  ${styles.inputContainer}`}>
                    <textarea 
                            name="textbox" 
                            id="" 
                            placeholder='Ingrese su comentario' 
                            cols="20" 
                            rows="10" 
                            className={`${styles.textBox}`}
                    />
                    
                </div>
                <div className={`  ${styles.buttonContainer}`}>
                    <button name='submit' value='Envio'><span> Enviar </span></button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;