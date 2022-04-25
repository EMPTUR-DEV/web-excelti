import React from 'react'
import { useHistory } from 'react-router-dom'
/* import ContactForm from '../contact-form/contact-form' */
import styles from './footer.module.scss'
import InfoFooter from './info-footer/info-footer'
import RedesSociales from '../redes-sociales/redes-sociales'
import MagicComponentFlash from '../shared/magic-component-flash/magic-component-flash'
import InfoFooter2 from './info-footer/info-footer-2'

const Footer = () => {
    
    const currentYear  = new Date().getFullYear()
   

    return (
        <div id='footer' className= {styles.container}>
            
            <div className={styles.grid}>
                
                {/* <div className={styles.form}>
                    
                    <ContactForm/>
                </div> */}
            
                <div className={styles.subgridInfo}>
                    
                    <div className={styles.info}>
                        <InfoFooter2/>
                    </div>
                    <div className={styles.info}>
                        <InfoFooter/>
                    </div>

                    <div className={styles.socialNets}>
                        <MagicComponentFlash>
                            <RedesSociales/>
                        </MagicComponentFlash>
                    </div>
                </div>

            
            </div>
            
            <div className= {styles.footer}>
               <span> Copyright  <a href="mailto:tempweb.arg@gmail.com">© TempWeb </a>
               {`${currentYear}`}
               </span>
            </div>
            
        </div>
    )
}

export default Footer
