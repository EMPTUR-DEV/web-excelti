import styles from './info.module.scss';
import MagicComponent from '../magic-component/magic-component';
const Info = ({title,subtitle,paragraph}) =>{

    return(
        <div className={styles.container} >
            <h2 className={styles.title}>{title}</h2>
            <MagicComponent>
                <h3>{subtitle}</h3>
                <p>{paragraph}</p>
            </MagicComponent>
        </div>
    )
}

export default Info; 