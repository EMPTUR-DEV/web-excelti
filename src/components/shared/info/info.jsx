import styles from './info.module.scss';
import MagicComponent from '../magic-component/magic-component';
const Info = ({subtitle,paragraph}) =>{

    return(
        <div className={styles.container} >
            <MagicComponent>
                <h3>{subtitle}</h3>
                <p>{paragraph}</p>
            </MagicComponent>
        </div>
    )
}

export default Info; 