import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './info-footer.module.scss'
import { useTranslation } from 'react-i18next'

const InfoFooter = () => {
    
    const { t } = useTranslation();
    const history = useHistory()
  
    const handleLink = (linked) => {
      
      if(linked){
        history.push(linked)
        window.location.replace(linked);
      }
    }

    return (
        <div className={`${styles.container}`}>
            <h3>{t('training').toUpperCase()}</h3>
            <nav>
                <ul>
                
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>{t('cursoInterpretacion')} {t('cursoSecondTitle')}</li>
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>{t('coaching')}</li>
                    <li onClick={()=>handleLink('/training/#ingographTraining')}>{t('modalidad')}</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter
