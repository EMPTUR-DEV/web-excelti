import React,{ useState,useContext } from "react";
import useMediaQuery from '../../../hooks/useScreenSize';
import BooksContext from "../../../hooks/booksContext";
import styles from "./nav-bar-mobile.module.scss";
import { useTranslation } from "react-i18next";
import World from "../../shared/world/world";

const NavBarMobile = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const { t, i18n } = useTranslation();
    const { showMobileMenu,changeShowMobile } = useContext(BooksContext);
    const [ items,setItems ] = useState([{name: t("traduction"), link:'/traduction',image:'header/traduction-page.jpg'},
    {name:'Interpretación', link:'/interpretation',image:'header/traduction-page.jpg'}, 
    {name:t("training"), link:'/training',image:'header/traduction-page.jpg'},
    {name:'Contacto', link:'#footer',image:'header/traduction-page.jpg'}
    ]);

    const handleLink = (linked) => {
        if(linked) {
            window.location.replace(linked)
        };
        changeShowMobile(!showMobileMenu);
      }
  

    return (
        !isDesktop&showMobileMenu ?
        <div className={styles.itemsContainer}>
            <div className={styles.scrollableContainer}>
                {
                    items.map(item => (
                        (<div key={item.name} className={styles.itemContainer} onClick={()=>handleLink(item.link)}>
                            <h2>{item.name}</h2>
                    </div>))
                    )
                }
                <World/>
            </div>
        </div> 
        :
        <></>
    );
}


export default NavBarMobile;