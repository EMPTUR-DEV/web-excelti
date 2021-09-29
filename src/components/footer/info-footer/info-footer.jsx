import React from 'react'
import styles from './info-footer.module.scss'

const InfoFooter = () => {
    
    return (
        <div className={`${styles.container}`}>
            <h3>CAPACITACIÓN</h3>
            <nav>
                <ul>
                    <li>E-learning</li>
                    <li>Interprete</li>
                    <li>Doblaje simultaneo</li>
                    <li>Nado sincronizado</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter
