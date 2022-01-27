import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import useTraductions from '../../hooks/useTraductions';
import { useTranslation } from "react-i18next";
import Books from './../../components/books/books';
import Banner from '../../components/header/banner/banner';

const Traduction = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();

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
            <Banner src={'header/traduction-page.jpg'} title={t("traduction").toUpperCase()} />
            <Info
            subtitle={t("traduction")}
            paragraph={paragraph()}
            />
            <div className={styles.traductions}>
                {
                    // GetTraductions.map(x=>(
                    //     <TraductionSlider time={2.5} key={x.title} title={x.title} color={x.color} wide={160}>
                    //         <Slideshow time={2.5} key={x.title} items={x.list} wide={160}/>
                    //     </TraductionSlider>
                    //     )
                    // )
                    GetTraductions.map(x=>(
                        <Books title={x.title} list={x.list}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Traduction;