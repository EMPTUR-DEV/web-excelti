import styles from './nav-mobile.module.scss';
import {useState} from 'react';
const NavMobile = ({items}) =>{
    const [ menu, setMenu ] = useState(false);
    const handleLink = (linked) => {
        if(linked) {
            window.location.replace(linked)
            setMenu(!menu);
        };
      }
  
    return (<div className={styles.container}>
        <img onClick={()=>setMenu(!menu)} className={styles.bars}
             alt= 'header-bars' src={menu ? 'header/cross.svg' : 'header/bars.svg'}/>
            <div className={menu ? styles.itemsContainer : styles.hideItemsContainer}>
                {
                    items.map(item => (
                        (<div className={styles.itemContainer} onClick={()=>handleLink(item.link)}>
                            <h2>{item.name}</h2>
                    </div>))
                    )
                }
            </div>
        </div>
    )
}

export default NavMobile;