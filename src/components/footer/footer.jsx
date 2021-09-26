import React from 'react'
import ContactForm from '../contact-form/contact-form'
import styles from './footer.module.scss'
import InfoFooter from './info-footer/info-footer'

const Footer = () => {
    return (
        <div className= {styles.container}>
            
            <div className={styles.grid}>
                
                
                <div className={styles.info}>
                    <InfoFooter/>
                </div>
                <div className={styles.info}>
                    <InfoFooter/>
                </div>

                <div className={styles.form}>
                    
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
