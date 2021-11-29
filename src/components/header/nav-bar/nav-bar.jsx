import styles from './nav-bar.module.scss';
import NavHeader from './nav-header/nav-header';
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [ items,setItems ] = useState([]);
    const [ menu,setMenu ] = useState(false);

    useEffect(()=>{
        setItems([{name: t("traduction"), link:'/traduction'},
                {name:t("training"), link:'/'},
                {name:'E-learning', link:'/'},
                {name:t("audiovisualServices"), link:'/'},
                {name:t("ourProfessionals"), link:'/'},
                {name:t("publications"), link:'/'},
            ]);
    },[i18n.language]);

   const renderMenu=(items)=>{
        return items.map(item => {
            return <NavHeader data={item}/>
        });
    }

    return (<div className={styles.container}>
        <img onClick={()=>setMenu(!menu)} className={styles.bars}
        alt= 'header-bars' src={menu ? 'header/cross.svg' : 'header/bars.svg'}/>
        
        <div className={menu ? `${styles.nodeContainer} ${styles.openNodeContainer}` : styles.nodeContainer}>
            {
                renderMenu(items)
            }
        </div>
    </div>);
};

export default NavBar;