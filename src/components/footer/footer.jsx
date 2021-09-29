import React from 'react'
import ContactForm from '../contact-form/contact-form'
import styles from './footer.module.scss'
import InfoFooter from './info-footer/info-footer'
import RedesSociales from '../redes-sociales/redes-sociales'

const Footer = () => {
    
    const currentYear  = new Date().getFullYear()
    
    return (
        <div className= {styles.container}>
            
            <div className={styles.grid}>
                
                <div className={styles.form}>
                    
                    <ContactForm/>
                </div>
            
                <div className={styles.subgridInfo}>

                
<div className={styles.info}>
    <InfoFooter/>
</div>
<div className={styles.info}>
    <InfoFooter/>
</div>

<div className={styles.socialNets}>
    <RedesSociales/>
</div>

</div>

            
            </div>
            <div className= {styles.footer}>
               <span> Copyright  <a href="www.tempweb.com.ar">© TempWeb </a>
               {`${currentYear}`}
               </span>
            </div>
        </div>
    )
}

export default Footer
