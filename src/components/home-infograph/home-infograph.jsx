import { useState,useEffect, React}  from 'react'
import styles from './home-infograph.module.scss'
/*import CardInfograph from './card-infograph/card-infograph'*/
import InfoGraph from './infograph-2/infograph'
import { useTranslation } from "react-i18next";


/* CardInfograph title='Capacitación'/>
<CardInfograph title='Traducción'/>
<CardInfograph title='Audiovisuales'/>
<CardInfograph title='Docentes'/>
*/

const HomeInfograph = (props) => {

    
    const { t, i18n } = useTranslation();
    const [ items,setItems ] = useState(
        [{name:'t'},
        {name:'tr'},
        {name:'e'},
        {name:'a'},
        {name:'o'},
        {name:'p'}

        
        ]);

    useEffect(()=>{
        setItems([{name: t("traduction"), link:'/translation',key:0},
                {name:t("training"), link:'/training', key:1},
                {name:'E-learning', link:'/elearning', key:2},
                {name:t("interpretation"), link:'/interpretation', key:3},
                {name:t("ourProfessionals"), link:'/professionals', key:4},
                {name:t("publications"), link:'/publications', key:5},
            ]);
    },[i18n.language]);

    
    return (
        <div className={styles.container}>
                <InfoGraph items={items}/>
        </div>
    )
}

export default HomeInfograph
