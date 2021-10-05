import React from 'react'
import styles from './home-infograph.module.scss'
import './home-infograph.css'
import CardInfograph from './card-infograph/card-infograph'



const HomeInfograph = (props) => {
    return (
        <div className={styles.container}>
                <CardInfograph title='Capacitación'/>
                <CardInfograph title='Traducción'/>
                <CardInfograph title='Audiovisuales'/>
                <CardInfograph title='Docentes'/>
            
        </div>
    )
}

export default HomeInfograph
