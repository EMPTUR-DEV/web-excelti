import styles from './nav-mobile-menu.module.scss';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BooksContext from "../../../../hooks/booksContext";

const NavMobileMenu = () =>{
    const { changeShowMobile,showMobileMenu } = useContext(BooksContext);
    const history = useHistory();
    const handleMenu=()=>{
        
        changeShowMobile(!showMobileMenu);
    }

    return (<div className={styles.container}>
                <img onClick={()=>handleMenu()} className={styles.bars}
                    alt= 'header-bars' src={showMobileMenu ? 'header/cross.svg' : 'header/bars.svg'}/>
            </div>
    )
}

export default NavMobileMenu;