import styles from './nav-item.module.scss';
import NavHeader from '../nav-header/nav-header';
import { useState } from 'react';

const NavItem = ({data})=>{
  const [ childsStatus,setChildsStatus ] = useState(styles.childsContainerHidden);
  const { name,link,childrens } = data;

  const handleLink = () => {
    if(link) window.location.replace(link);
  }

  return (
    <div onMouseEnter={()=>setChildsStatus(styles.childsContainerShow)}
         onMouseLeave={()=>setChildsStatus(styles.childsContainerHidden)}>
      <div className={styles.container} onClick={()=>handleLink()} >
          {name}
      </div>
      <div className={childsStatus}>
      {
         childrens?.map(item => {
            return <NavHeader data={item}/>})
      }
      </div>
    </div>
  );
}

export default NavItem;