import styles from './banner.module.scss';

const Banner = ({src}) =>{

    return (<img className={styles.banner} src={src}/>);
};

export default Banner;