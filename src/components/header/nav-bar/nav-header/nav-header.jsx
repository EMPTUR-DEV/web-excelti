import styles from './nav-header.module.scss';

const NavHeader = ({data})=>{
  const { name,link } = data;

  const handleLink = (linked) => {
    if(linked) window.location.replace(linked);
  }

  const linkedItem = (name,linked) =>{
    return (<div className={styles.container} onClick={()=>handleLink(linked)}>
        {name}
      </div>
    )
  }

  return (
    <div>
      {linkedItem(name,link)}
    </div>
  );
}

export default NavHeader;