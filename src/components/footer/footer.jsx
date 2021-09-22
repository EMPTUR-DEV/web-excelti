import React from 'react'
import ContactForm from '../contact-form/contact-form'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className= {styles.container}>
            Footer
            <div className={styles.grid}>
                
                <div className={styles.form}>
                    Formulario
                    <ContactForm/>
                </div>
              
            </div>
            <div className= {styles.footer}>
                Copyright
            </div>
        </div>
    )
}

export default Footer
