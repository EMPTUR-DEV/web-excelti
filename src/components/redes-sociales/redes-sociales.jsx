import React from 'react'
import styles from './redes-sociales.module.scss'
import {SocialIcon} from 'react-social-icons'

const RedesSociales = () => {

    return (
        <div className = {styles.container}>
            <SocialIcon className={styles.socialIcon} network='facebook'  fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} network="twitter" fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} network='instagram' fgColor="#fff"/>
            <SocialIcon className={styles.socialIcon} network='linkedin' fgColor="#fff"/>
        </div>
    )
}

export default RedesSociales
