import styles from './banner.module.scss';

const Banner = ({src,title}) =>{

    return (<div className={styles.container}>
        <img className={styles.banner} alt='banner' src={src} loading="lazy"/>
        <div className={styles.cover}>
            {title}
        </div>
    </div>)
}

export default Banner;