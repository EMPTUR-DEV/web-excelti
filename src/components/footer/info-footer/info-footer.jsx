import React from 'react'
import styles from './info-footer.module.scss'

const InfoFooter = () => {
    
    return (
        <div className={`${styles.container}`}>
            <h3>CAPACITACIÓN</h3>
            <nav>
                <ul>
                    <li>Aprendizaje en línea</li>
                    <li>Interpretación</li>
                    <li>Doblaje simultaneo</li>
                    <li>Traducción</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter
