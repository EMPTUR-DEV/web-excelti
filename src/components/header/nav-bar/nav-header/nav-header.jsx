import styles from './nav-header.module.scss';
import NavItem from '../nav-item/nav-item';
import { useState } from 'react';

const NavHeader = ({data})=>{
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
            return <NavItem data={item}/>})
      }
      </div>
    </div>
  );
}

export default NavHeader;