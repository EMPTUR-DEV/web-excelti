import styles from './banner.module.scss';

const Banner = ({src}) =>{

    return (<div className={styles.container}>
        <img className={styles.banner} alt='banner' src={src}/>
        <div className={styles.cover}/>
    </div>)
}

export default Banner;