import { useTranslation } from "react-i18next";


const GetTraductions = () =>
{
    const { t } = useTranslation();
    const listTraduction = {
        color:'violet',
        title:t("translatedBooks"),
        list:[{key:1,name:'Días de invierno',url:'traductions/dias-de-invierno.jpg',urlTraduction:'traductions/dias-de-invierno-2.jpg'},
            {key:2,name:'Corta madera y ve a buscar agua',url:'traductions/corta.jpg',urlTraduction:'traductions/corta-2.jpg'},
            {key:3,name:'Cuando la comida es tu enemiga',url:'traductions/cuando-la-comida-es-tu-enemiga.jpg',urlTraduction:'traductions/cuando-la-comida-es-tu-enemiga-2.jpg'},
            {key:4,name:'Cueva de bandidos',url:'traductions/cueva-de-bandidos.jpg',urlTraduction:'traductions/cueva-de-bandidos-2.jpg'},
            {key:5,name:'La conexión Bellarosa',url:'traductions/la-conexion-bellarosa.jpg',urlTraduction:'traductions/la-conexion-bellarosa-2.jpg'},
            {key:6,name:'Misión en Venecia',url:'traductions/mision-en-venecia.jpg',urlTraduction:'traductions/mision-en-venecia-2.jpg'},
            {key:7,name:'Las obras espirituales de misericordiam, Ediciones PAULINAS',url:'traductions/obras-espirituales-de-miser.jpg',urlTraduction:'traductions/obras-espirituales-de-miser.jpg'},
            {key:8,name:'Tiempo de morir',url:'traductions/tiempo-de-morir.jpg',urlTraduction:'traductions/tiempo-de-morir-2.jpg'},
            {key:9,name:'Una Plaza en Moscú',url:'traductions/una-plaza-en-moscu.jpg',urlTraduction:'traductions/una-plaza-en-moscu-2.jpg'},
            {key:10,name:'Viaje al infierno, Editorial PLANETA, 1992',url:'traductions/viaje-al-infierno.jpg',urlTraduction:'traductions/viaje-al-infierno-2.jpg'}
            ]
        };

    
    const projectTraductions = {
        color:'sunset',
        title:t("teamTranslates"),
        list:[{key:11,name:'Diana, su verdadera historia',url:'traductions/diana-verdadera-historia.jpg',urlTraduction:'traductions/diana-verdadera-historia-2.jpg'},
        {key:12,name:'Parques Nacionales de Sudamérica',url:'traductions/south-america.jpg',urlTraduction:'traductions/south-america-2.jpg'},
        {key:13,name:'50 cosas que Ud. puede hacer para salvar la Tierra',url:'traductions/50-cosas-para-salvar-la-tie.jpg',urlTraduction:'traductions/50-cosas-para-salvar-la-tie-2.jpg'},
        {key:14,name:'Curación fatal',url:'traductions/curacion-fatal.jpg',urlTraduction:'traductions/curacion-fatal-2.jpg'},
        {key:15,name:'El mundo perdido de Jurassic Park',url:'traductions/mundo-perdido.jpg',urlTraduction:'traductions/mundo-perdido-2.jpg'},
        {key:16,name:'Cómo dejar de fumar',url:'traductions/dejar-de-fumar.jpg',urlTraduction:'traductions/dejar-de-fumar-2.jpg'},
        {key:17,name:'Ah...Todo lo que no se puede decir con palabrash',url:'traductions/ah.jpg',urlTraduction:'traductions/ah-2.jpg'},
        {key:18,name:'El libro de los juguetes',url:'traductions/toy.jpg',urlTraduction:'traductions/toy-2.jpg'},
        {key:19,name:'Los signos del zodíaco',url:'traductions/zoodiaco.jpg',urlTraduction:'traductions/zoodiaco-2.jpg'},
        {key:20,name:'El libro de los jugos',url:'traductions/jugos.jpg',urlTraduction:'traductions/jugos-2.jpg'},
        {key:21,name:'Informe del INTAL',url:'traductions/intal.jpg',urlTraduction:'traductions/intal-2.jpg'}]
    };
        
        const othersTraductions ={
            color:'ocean',
            title:t("otherPublishedTranslates"),
            list:[{key:22,name:'Mealtime Memo Series',url:'traductions/mealtime-memo.jpg',urlTraduction:'traductions/mealtime-memo.jpg'},
                {key:23,name:'Justice of Justices',url:'traductions/justice-of-justices.jpg',urlTraduction:'traductions/justice-of-justices.jpg'},
                {key:24,name:'Líneas directrices de la OCDE para empresas multinacionales',url:'traductions/lineas-directrices.jpg',urlTraduction:'traductions/lineas-directrices.jpg'}
            ]
        };
  
            return [ listTraduction,projectTraductions,othersTraductions ];
    }

export default GetTraductions;