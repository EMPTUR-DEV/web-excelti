import styles from './nav-bar.module.scss';
import NavHeader from './nav-header/nav-header';
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [ items,setItems ] = useState([]);
    const [ menu,setMenu ] = useState(false);

    useEffect(()=>{
        setItems([{name: t("traduction"), link:'/traduction',image:'header/traduction-page.jpg'},
                {name:'Interpretación', link:'/',image:'header/traduction-page.jpg'}, 
                {name:t("training"), link:'/training',image:'header/traduction-page.jpg'},
                {name:t("audiovisualServices"), link:'/',image:'header/traduction-page.jpg'},
                /* {name:t("ourProfessionals"), link:'/professionals',image:'header/traduction-page.jpg'},
                {name:t("publications"), link:'/',image:'header/traduction-page.jpg'}, */
            ]);
    },[i18n.language]);

   const renderMenu=(items)=>{
        return items.map(item => {
            return <NavHeader data={item} key={item.name}/>
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