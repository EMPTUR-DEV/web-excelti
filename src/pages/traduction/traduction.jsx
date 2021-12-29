import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import { useTranslation } from "react-i18next";
import Slideshow from './../../components/shared/slide-show/slide-show.jsx';
import TraductionSlider from '../../components/traduction-slider/traduction-sliders.jsx';

const Traduction = () => {
    const { t } = useTranslation();
    const listTraductions = {
        color:'violet',
        title:'Libros traducidos',
        list:[{key:1,name:'Días de invierno',url:'traductions/dias-de-invierno.jpg'},
            {key:2,name:'Corta madera y ve a buscar agua',url:'traductions/corta.jpg'},
            {key:3,name:'Cuando la comida es tu enemiga',url:'traductions/cuando-la-comida-es-tu-enemiga.jpg'},
            {key:4,name:'Cueva de bandidos',url:'traductions/cueva-de-bandidos.jpg'},
            {key:5,name:'La conexión Bellarosa',url:'traductions/la-conexion-bellarosa.jpg'},
            {key:6,name:'Misión en Venecia',url:'traductions/mision-en-venecia.jpg'},
            {key:7,name:'Las obras espirituales de misericordiam, Ediciones PAULINAS',url:'traductions/obras-espirituales-de-miser.jpg'},
            {key:8,name:'Tiempo de morir',url:'traductions/tiempo-de-morir.jpg'},
            {key:9,name:'Una Plaza en Moscú',url:'traductions/una-plaza-en-moscu.jpg'},
            {key:10,name:'Viaje al infierno, Editorial PLANETA, 1992',url:'traductions/viaje-al-infierno.jpg'}
        ]};
    
    const othersTraductions = {
        color:'ocean',
        title:'Otras traducciones publicadas',
        list:[{key:1,name:'Mealtime Memo Series',url:'traductions/mealtime-memo.jpg'},
            {key:2,name:'Justice of Justices',url:'traductions/justice-of-justices.jpg'},
            {key:3,name:'Líneas directrices de la OCDE para empresas multinacionales',url:'traductions/lineas-directrices.jpg'}
        ]};

    const projectTraductions = {
        color:'sunset',
        title:'Gestión de proyectos de traducción en equipo',
        list:[{key:1,name:'Diana, su verdadera historia',url:'traductions/diana-verdadera-historia.jpg'},
    {key:2,name:'Parques Nacionales de Sudamérica',url:'traductions/south-america.jpg'},
    {key:3,name:'50 cosas que Ud. puede hacer para salvar la Tierra',url:'traductions/50-cosas-para-salvar-la-tie.jpg'},
    {key:4,name:'Curación fatal',url:'traductions/curacion-fatal.jpg'},
    {key:5,name:'El mundo perdido de Jurassic Park',url:'traductions/mundo-perdido.jpg'},
    {key:6,name:'Cómo dejar de fumar',url:'traductions/dejar-de-fumar.jpg'},
    {key:7,name:'Ah...Todo lo que no se puede decir con palabrash',url:'traductions/ah.jpg'},
    {key:8,name:'El libro de los juguetes',url:'traductions/toy.jpg'},
    {key:9,name:'Los signos del zodíaco',url:'traductions/zoodiaco.jpg'},
    {key:10,name:'El libro de los jugos',url:'traductions/jugos.jpg'},
    {key:11,name:'Informe del INTAL',url:'traductions/intal.jpg'}]};

    const list = [ listTraductions,othersTraductions,projectTraductions ];

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
            <div className={styles.traductions}>
                {
                    list.map(x=>(
                        <TraductionSlider time={2.5} key={x.title} title={x.title} color={x.color} wide={160}>
                            <Slideshow time={2.5} key={x.title} items={x.list} wide={160}/>
                        </TraductionSlider>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Traduction;
