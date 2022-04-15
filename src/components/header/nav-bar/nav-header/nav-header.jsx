import styles from './nav-header.module.scss';
import { useHistory } from 'react-router-dom';
const NavHeader = ({items})=>{

  const history = useHistory()
  
  const handleLink = (linked) => {
    
    if(linked){
      history.push(linked)
      window.location.replace(linked);
    }
  }

  return (<div className={styles.container}>
      {
        items.map(item => (
            <div className={styles.itemContainer} key={item.name} onClick={()=>handleLink(item.link)}>
              <span className={styles.nav}>{item.name}</span>
            </div>
        ))
      }
    </div>
  );

}
export default NavHeader;