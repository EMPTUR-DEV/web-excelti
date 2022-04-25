import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './info-footer.module.scss'

const InfoFooter = () => {
    
 
    const history = useHistory()
  
    const handleLink = (linked) => {
      
      if(linked){
        history.push(linked)
        window.location.replace(linked);
      }
    }

    return (
        <div className={`${styles.container}`}>
            <h3 >CAPACITACIÓN</h3>
            <nav>
                <ul>
                
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>Curso de Interpretación (inglés - español)</li>
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>Coaching</li>
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>Modalidades</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter
