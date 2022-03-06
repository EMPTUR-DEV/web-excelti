import React from 'react'
import styles from './info-footer.module.scss'

const InfoFooter = () => {
    
    return (
        <div className={`${styles.container}`}>
            <h3>CAPACITACIÓN</h3>
            <nav>
                <ul>
                    <li>Curso de Interpretación (inglés - español)</li>
                    <li>Coaching</li>
                    <li>Modalidades</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter
