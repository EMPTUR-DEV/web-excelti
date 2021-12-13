import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import { useTranslation } from "react-i18next";
import Slideshow from './../../components/shared/slide-show/slide-show.jsx';

const Traduction = () => {
    const { t } = useTranslation();
    const listTraductions = [{key:1,name:'1',url:'traductions/dias-de-invierno.jpg'},
    {key:2,name:'2',url:'traductions/corta.jpg'},
    {key:3,name:'dsafgdgfsgdfsdgfdfgsgdfsgdsfgdfs',url:'traductions/cuando-la-comida-es-tu-enemiga.jpg'},
    {key:4,name:'dsafgdgfsgdfsdgfdfgsgdfsgdsfgdfs',url:'traductions/cueva-de-bandidos.jpg'},
    {key:5,name:'5',url:'traductions/la-conexion-bellarosa.jpg'},
    {key:6,name:'dsafgdgfsgdfsdgfdfgsgdfsgdsfgdfs',url:'traductions/mision-en-venecia.jpg'},
    {key:7,name:'7',url:'traductions/obras-espirituales-de-miser.jpg'},
    {key:8,name:'dsafgdgfsgdfsdgfdfgsgdfsgdsfgdfs',url:'traductions/tiempo-de-morir.jpg'},
    {key:9,name:'9',url:'traductions/una-plaza-en-moscu.jpg'},
    {key:10,name:'dsafgdgfsgdfsdgfdfgsgdfsgdsfgdfs',url:'traductions/viaje-al-infierno.jpg'}];
    
    const paragraph =()=>{
        return(
            <div className={styles.paragraphContainer}>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("tecnic")}</span>{t("tecnicParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("cientific")}</span>{t("cientificParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("comercial")}</span>{t("comercialParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("public")}</span>{t("publicParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("oral")}</span>{t("oralParagraph")}
                    </span>
                </div>
        )
    }
    
    return (
        <div className={styles.traductionContainer}>
            <Info
            title={t("traduction").toUpperCase()} 
            paragraph={paragraph()}
            />
            <Slideshow time={1} items={listTraductions} wide={160}/>
        </div>
    )
}

export default Traduction;
