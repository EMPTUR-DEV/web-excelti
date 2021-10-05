import React from 'react'
import styles from './redes-sociales.module.scss'
import {SocialIcon} from 'react-social-icons'

const RedesSociales = () => {

    return (
        <div className = {styles.container}>
            <SocialIcon className={styles.socialIcon} url="https://facebook.com/" network='facebook'  fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} url="https://twitter.com/" network="twitter" fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} url="https://instagram.com/" network='instagram' fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} url="https://linkedin.com/" network='linkedin' fgColor="#fff"/>
        </div>
    )
}

export default RedesSociales
