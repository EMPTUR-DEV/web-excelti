import styles from './nav-mobile.module.scss';

const NavMobile = ({src,title}) =>{

    return (<div className={styles.container}>
        <img className={styles.banner} alt='banner' src={src} loading="lazy"/>
        <div className={styles.cover}>
            <h2>{title}</h2>
        </div>
    </div>)
}

export default NavMobile;