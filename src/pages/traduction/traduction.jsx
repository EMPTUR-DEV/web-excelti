import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import { useTranslation } from "react-i18next";
import Books from '../../components/books/books'

const Traduction = () => {
    const { t } = useTranslation();
    const listTraductions = [{name:'invierno',url:'traductions/dias-de-invierno.jpg'},
    {name:'invierno',url:'traductions/corta.jpg'},
    {name:'invierno',url:'traductions/cuando-la-comida-es-tu-enemiga.jpg'},
    {name:'invierno',url:'traductions/cueva-de-bandidos.jpg'},
    {name:'invierno',url:'traductions/la-conexion-bellarosa.jpg'},
    {name:'invierno',url:'traductions/mision-en-venecia.jpg'},
    {name:'invierno',url:'traductions/obras-espirituales-de-miser.jpg'},
    {name:'invierno',url:'traductions/tiempo-de-morir.jpg'},
    {name:'invierno',url:'traductions/una-plaza-en-moscu.jpg'},
    {name:'invierno',url:'traductions/viaje-al-infierno.jpg'},
    {name:'invierno',url:'traductions/dias-de-invierno.jpg'}];
    
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
            <Books
            title={'Libros traducidos'}
            books={listTraductions}
            />
        </div>
    )
}

export default Traduction;
