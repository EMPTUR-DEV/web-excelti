import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from './info-footer.module.scss'
import useTraductions from '../../../hooks/useTraductions';
import { useTranslation } from "react-i18next";

const InfoFooter2 = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();

 
    const history = useHistory()
  
    const handleLink = (linked) => {
      
      if(linked){
        history.push(linked)
        window.location.replace(linked);
      }
    }

    return (
        <div className={`${styles.container}`}>
            <h3 >{t('secciones').toUpperCase()}</h3>
            <nav>
                <ul>
                    <li onClick={()=>handleLink('/translation')}>{t("traduction")}</li>
                    <li onClick={()=>handleLink('/interpretation')}>{t("interpretation")}</li>
                    <li onClick={()=>handleLink('/training')}>{t("training")}</li>
                    <li onClick={()=>handleLink('/professionals')}>{t("ourProfessionals")}</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter2
