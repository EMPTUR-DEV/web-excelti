import styles from './nav-bar.module.scss';
import NavHeader from './nav-header/nav-header';
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";
import NavMobile from './nav-mobile/nav-mobile';
import useMediaQuery from '../../../hooks/useScreenSize'

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [ items,setItems ] = useState([]);
    console.log('(screenSize',isDesktop);
    useEffect(()=>{
        setItems([{name: t("traduction"), link:'/traduction',image:'header/traduction-page.jpg'},
                {name:'Interpretación', link:'/',image:'header/traduction-page.jpg'}, 
<<<<<<< HEAD
                {name:t("training"), link:'/training',image:'header/traduction-page.jpg'},
                {name:t("audiovisualServices"), link:'/',image:'header/traduction-page.jpg'},
=======
                {name:'Contacto', link:'#footer',image:'header/traduction-page.jpg'},
>>>>>>> 1fdb0d1b083552e627d144a026004538ece460ee
                /* {name:t("ourProfessionals"), link:'/professionals',image:'header/traduction-page.jpg'},
                {name:t("publications"), link:'/',image:'header/traduction-page.jpg'}, */
            ]);
    },[i18n.language]);



    return (
        <div className={styles.container}>
            {
                isDesktop ? 
                <NavHeader items={items}/> :
                <NavMobile items={items}/>
            }
        </div>
    );
};

export default NavBar;