import styles from './nav-bar.module.scss';
import NavHeader from './nav-header/nav-header';
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";
import NavMobileMenu from './nav-mobile-menu/nav-mobile-menu';
import useMediaQuery from '../../../hooks/useScreenSize'

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [ items,setItems ] = useState([]);
    useEffect(()=>{
        setItems([{name: t("traduction"), link:'/traduction',image:'header/traduction-page.jpg'},
                {name:'Interpretación', link:'/interpretation',image:'header/traduction-page.jpg'}, 
                {name:t("training"), link:'/training',image:'header/traduction-page.jpg'},
                {name:'Contacto', link:'#footer',image:'header/traduction-page.jpg'},
                /* {name:t("ourProfessionals"), link:'/professionals',image:'header/traduction-page.jpg'},
                {name:t("publications"), link:'/',image:'header/traduction-page.jpg'}, */
            ]);
    },[i18n.language]);



    return (
        <div className={styles.container}>
            {
                isDesktop ? 
                <NavHeader items={items}/> :
                <NavMobileMenu />
            }
        </div>
    );
};

export default NavBar;