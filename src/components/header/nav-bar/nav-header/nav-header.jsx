import styles from './nav-header.module.scss';
import NavMobile from '../nav-mobile/nav-mobile';
const NavHeader = ({data})=>{
  const { name,link,image } = data;

  const handleLink = (linked) => {
    if(linked) window.location.replace(linked);
  }

  const linkedItem = (name,linked) =>{
    return (<div className={styles.container} onClick={()=>handleLink(linked)}>
        <span className={styles.nav}>{name}</span>
          <NavMobile src={image} title={name}/>
      </div>
    )
  }

  return (
    <div className={styles.childList}>
      {linkedItem(name,link)}
    </div>
  );
}

export default NavHeader;