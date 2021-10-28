import styles from './info.module.scss';
const Info = ({title,subtitle,paragraph}) =>{

    return(
        <div className={styles.container} >
            <h2 className={styles.title}>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default Info; 