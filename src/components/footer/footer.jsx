import React from 'react'
import ContactForm from '../contact-form/contact-form'
import styles from './footer.module.scss'
import InfoFooter from './info-footer/info-footer'

const Footer = () => {
    
    const currentYear  = new Date().getFullYear()
    
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
               <span> Copyright  <a href="www.tempweb.com.ar">TempWeb </a>
               {`${currentYear}`}
               </span>
            </div>
        </div>
    )
}

export default Footer
