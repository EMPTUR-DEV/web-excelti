import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import useTraductions from '../../hooks/useTraductions';
import { useTranslation } from "react-i18next";
import Books from './../../components/books/books';
/* import TeamList from '../../components/shared/team-list/team-list'; */
import Title from '../../components/shared/title/title';
import useProfessionals from '../../hooks/useProfessionals';
import ProfessionalSlider from '../../components/professional-slider/professional-slider';

const Traduction = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();

    
    const {getAllProfessionals} =  useProfessionals()
    const topic = t("traductora")
    const professionals = getAllProfessionals().filter((prof)=>prof.profession.includes(topic))

    const paragraph =()=>{
        return(
            <div className={styles.paragraphContainer}>
                <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("asesoria")}</span>{` ${t("asesoriaParagraph")}`}
                    </span>
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
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("correction")}</span>{t("correctionParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("transcAudio")}</span>{t("transcAudioParagraph")}
                    </span>
                    <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("tradAudio")}</span>{t("tradAudioParagraph")}
                    </span>
                    {/* <span className={styles.paragraph} >
                        <span className={styles.topic}>{t("subVideo")}</span>{t("subVideoParagraph")}
                    </span> */}
                </div>
        )
    }
    
    return (
        <div className={styles.traductionContainer}>
            <Title title={t("traduction")} color={'blue'} />
            <Info
            paragraph={paragraph()}
            />
            <div className={styles.traductions}>
                {
                    GetTraductions.map(x=>(
                        <Books title={x.title} list={x.list}/>
                        )
                    )
                }
            </div>
            {/* <TeamList teamTitle={'traductores'} teamList={professionals}/> */}
            <ProfessionalSlider professionals={professionals}/>
        </div>
    )
}

export default Traduction;
