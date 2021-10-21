import styles from './nav-header.module.scss';
import { useState } from 'react';

const NavHeader = ({data})=>{
  const [ childsStatus,setChildsStatus ] = useState(styles.childsContainerHidden);
  const { name,link,childrens } = data;

  const handleLink = (linked) => {
    if(linked) window.location.replace(linked);
  }

  const linkedItem = (name,linked,style) =>{
    return (<div onMouseEnter={()=>setChildsStatus(styles.childsContainerShow)}
            onMouseLeave={()=>setChildsStatus(styles.childsContainerHidden)} className={style}>
      <div className={styles.container} onClick={()=>handleLink(linked)} >
          {name}
      </div>
    </div>)
  }

  return (
    <div>
      {linkedItem(name,link,'')}
      <div className={`${childsStatus} ${styles.childMobile}`} >
      {
         childrens?.map(item => {
          const { name,link } = item;
            return linkedItem(name,link,styles.childsMobile)})
      }
      </div>
    </div>
  );
}

export default NavHeader;